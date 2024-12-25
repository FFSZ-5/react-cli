import { Button, Form, Input, Modal, message } from "antd";
import { EmailPass, PasswordPass } from "../../utils/validate";
import { GetUserInfo, Login, Logout, Register } from "../../services";
import { useDispatch, useSelector } from "react-redux";

import { encrypt } from "../../utils/encrypt";
import { setVisible } from "../../store/action/modal";
import { useState } from "react";

const LoginModal = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const { loginModal } = useSelector((state: any) => state.modal);
  const { pubKey } = useSelector((state: any) => state.userInfo);
  const dispatch = useDispatch();
  //重置弹窗
  const clearModal = () => {
    form.resetFields();
    setIsLogin(true);
  };
  //关闭弹窗
  const closeHandle = () => {
    clearModal();
    dispatch(setVisible({ type: "loginModal", value: false }));
  };
  //登录点击事件
  const clickHandle = () => {
    if (!isLogin) {
      setIsLogin(true);
      form.resetFields();
      return;
    }
    form.validateFields().then(async (res) => {
      const { email, password } = res;
      const data = await encrypt(password, pubKey);
      const result = await Login({ email, password: data });
      if (result?.data?.token) {
        localStorage.token = result?.data?.token;
      }
    });
  };
  const checkPassword = (_: any, val: number) => {
    const { password } = form.getFieldsValue();
    if (password == val) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("两个密码不一致"));
  };
  const registerHandle = () => {
    if (isLogin) {
      setIsLogin(false);
      form.resetFields();

      return;
    }
    form.validateFields().then(async (res) => {
      const { email, password } = res;
      const data = await encrypt(password, pubKey);
      const result = await Register({ email, password: data });
      if (result.success) {
        messageApi.open({
          type: "success",
          content: "This is a prompt message with custom className and style",
          className: "custom-class",
          style: {
            marginTop: "20vh",
          },
        });
      }
    });
  };
  const getInfoHandle = async () => {
    const data = await GetUserInfo();
    console.log("lfsz", data);
  };
  const logoutHandle = async () => {
    Logout();
  };
  return (
    <Modal
      title={isLogin ? "登录" : "注册"}
      open={loginModal.isShow}
      onCancel={closeHandle}
      footer={null}
    >
      {contextHolder}
      <Form form={form} name={isLogin ? "login" : "register"}>
        <Form.Item
          name='email'
          validateTrigger='onBlur'
          rules={[{ validator: EmailPass }]}
        >
          <Input placeholder='邮箱' allowClear />
        </Form.Item>
        <Form.Item
          name='password'
          validateTrigger='onBlur'
          rules={[{ validator: PasswordPass }]}
        >
          <Input.Password placeholder='密码' allowClear />
        </Form.Item>
        {!isLogin && (
          <Form.Item
            name='checkPassword'
            validateTrigger='onBlur'
            rules={[{ validator: checkPassword }]}
          >
            <Input.Password placeholder='再次输入密码' allowClear />
          </Form.Item>
        )}
      </Form>
      <Button onClick={clickHandle}>{isLogin ? "登录" : "账密登录"}</Button>
      <Button onClick={registerHandle}>{isLogin ? "前往注册" : "注册"}</Button>
      <Button onClick={getInfoHandle}>获取</Button>
      <Button onClick={logoutHandle}>登出</Button>
    </Modal>
  );
};
export default LoginModal;

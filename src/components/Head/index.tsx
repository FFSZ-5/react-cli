import "./index.scss";

import { Avatar, Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";

import SignOutIcon from "@/assets/svg/SignOut.svg?react";
import { UserOutlined } from "@ant-design/icons";
import { setVisible } from "@/store/action/modal";
import { useState } from "react";

const Head = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const userInfo = useSelector((state: any) => state.userInfo);
  const dispatch = useDispatch();
  const avatarClickHandle = () => {
    if (localStorage.token) {
      setShowDrawer(true);
    } else {
      dispatch(setVisible({ type: "loginModal", value: true }));
    }
  };
  const closeHandle = () => {
    setShowDrawer(false);
  };
  const renderList = () => {
    const list = [
      {
        label: "Sign out",
        click: () => {},
        icon: <SignOutIcon />,
      },
    ];
    return list.map((item) => (
      <div className='drawer-list' onClick={item.click}>
        {item.icon}
        {item.label}
      </div>
    ));
  };
  return (
    <div className='blog-head'>
      <div className='left'></div>
      <div className='right'>
        <Avatar
          icon={<UserOutlined />}
          src={userInfo.avatar}
          onClick={avatarClickHandle}
        />
      </div>
      <Drawer
        closable={false}
        open={showDrawer}
        onClose={closeHandle}
        className='avatar-drawer'
      >
        {renderList()}
      </Drawer>
    </div>
  );
};

export default Head;

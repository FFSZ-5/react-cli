import { setVisible } from "../store/action/modal";
import { useDispatch } from "react-redux";

export interface AddCategoryModalProps {}
const Demo = () => {
  const dispatch = useDispatch();
  const clickHandle = async () => {
    dispatch(setVisible({ type: "loginModal", value: true }));
  };
  return (
    <>
      <div onClick={clickHandle}>登录</div>
    </>
  );
};

export default Demo;

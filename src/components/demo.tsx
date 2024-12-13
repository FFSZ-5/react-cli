import { useDispatch, useSelector } from "react-redux";

import { login } from "../services";
import { update } from "../store/action/userInfo";
import { useEffect } from "react";

export interface AddCategoryModalProps {}
const Demo = () => {
  const userInfo = useSelector((state: any) => state.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(update({ name: 444 }));
    console.log("lfsz", 444444);
  }, []);
  console.log("lfsz", 2223);
  const clickHandle = async () => {
    const data = await login.post({ a: 1, b: 2 });
    console.log("lfsz", data);
  };
  return <div onClick={clickHandle}>{userInfo?.name}</div>;
};

export default Demo;

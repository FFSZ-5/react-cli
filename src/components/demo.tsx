import { useDispatch, useSelector } from "react-redux";

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

  return <div>{userInfo?.name}</div>;
};

export default Demo;

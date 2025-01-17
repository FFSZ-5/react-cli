import "./index.scss";

import { GetPublicKey } from "@/services";
import Head from "@/components/Head";
import LoginModal from "@/components/Modals/LoginModal";
import { update } from "@/store/action/userInfo";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const init = async () => {
    const { data } = await GetPublicKey();
    dispatch(update({ pubKey: data.pub_key }));
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <Head />
      <LoginModal />
    </>
  );
}

export default App;

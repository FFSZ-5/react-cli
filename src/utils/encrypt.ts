import JSEncrypt from "jsencrypt";

export const encrypt = async (val: any, pubKey: string) => {
  const encryptInstance = new JSEncrypt();
  encryptInstance.setPublicKey(pubKey);
  return encryptInstance.encrypt(JSON.stringify(val));
};

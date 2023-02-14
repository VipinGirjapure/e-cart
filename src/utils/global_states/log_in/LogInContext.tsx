/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createContext, useState } from "react";

export const LogInContextProvider = createContext({});
const LogInContext = ({ children }: any) => {
  const [userName, setName] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [alertNote, setAlertNote] = useState("");
  const [resp, setResp] = useState();
  const handleApi = async () => {
    try {
      const body = JSON.stringify({
        username: userName,
        password: password,
      });
      await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.token !== undefined) {
            setResp(res);
          } else {
            setAlertNote(res.message);
          }
        });
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <LogInContextProvider.Provider
      value={{
        alertNote,
        handleApi,
        userName,
        password,
        setName,
        setPassword,
        resp,
      }}
    >
      {children}
    </LogInContextProvider.Provider>
  );
};
export default LogInContext;

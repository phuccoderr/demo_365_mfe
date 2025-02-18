import React, { useEffect, useState } from "react";
import Header from "./components/Header.tsx";

const App = () => {
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      setToken(event.data.user);
    };
    window.addEventListener("message", handleMessage);
  }, []);
  return (
    <>
      <div>Hello world</div>
      <div>
        Đây là props Token iframe <span>{token}</span>
      </div>
      <Header />
      <component-card user="John Doe"></component-card>
    </>
  );
};

export default App;

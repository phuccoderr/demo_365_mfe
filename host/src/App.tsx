import React, { lazy, Suspense, useState } from "react";
import useAuthenStore from "Store/useAuthenStore";

const Footer = lazy(() => import("Components/Footer"));
const Header = lazy(() => import("Components/Header"));

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const { token, setToken } = useAuthenStore();
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      App
      <Suspense fallback={<div>Loading...</div>}>
        <Footer title="Footer" count={count} onCount={setCount} />
      </Suspense>
      <div>
        <span>Đây là Zustand Store {token}</span>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => setToken(text)}>Nhập</button>
      </div>
    </div>
  );
};

export default App;

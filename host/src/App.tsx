import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import useAuthenStore from "Store/useAuthenStore";

const Footer = lazy(() => import("Components/Footer"));
const Header = lazy(() => import("Components/Header"));

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const { token, setToken } = useAuthenStore();

  const iframeRef = useRef<HTMLIFrameElement>(null);

  // IFRAME
  useEffect(() => {
    const sendProps = () => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow?.postMessage(
          { user: "John Doe" }, // Props cần truyền
          "http://localhost:3001"
        );
      }
    };
    setTimeout(sendProps, 1000);

    // props => webcomponents
    const card = document.querySelector("component-card");
    card?.setAttribute("user", "Jonh Due");
  }, []);

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
      {/* IFRAME */}
      <iframe
        ref={iframeRef}
        src="http://localhost:3001"
        width="100%"
        height="150"
      />
      {/* WEB COMPONENTS */}
      <component-card></component-card>
    </div>
  );
};

export default App;

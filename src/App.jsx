import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <section>
      <h1>hanzala tanveer</h1>

      <h4>I am a doctor who loves to code.</h4>
      <p>
        currently i am learing fronend part.in a couple of months, i will start
        learning backend (mern stack )
      </p>
      <p>Mostly after learning mern stack, i will be learning react native</p>
      <button onClick={toggleTheme} className="btn">
        toggle
      </button>
    </section>
  );
}

export default App;

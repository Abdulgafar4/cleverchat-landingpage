import "./App.css";
import { AiFillYoutube } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";
import Logo from "./img/cleverLogo .png";

function App() {
  // const setThemePreference = () => {
  let d = new Date();

  let currentHour = d.getHours();

  // if (currentHour >= 19 || currentHour <= 6) {
  //   document.body.setAttribute("data-theme", "dark_theme");
  // } else {
  //   document.body.setAttribute("data-theme", "light_theme");
  // }
  // };

  // window.onload = setThemePreference;

  return (
    <div
      className={
        currentHour >= 19 || currentHour <= 6
          ? ("data-theme", "dark_theme")
          : ("data-theme", "light_theme")
      }
    >
      <img src={Logo} alt="logo" />
      <div className="wrapper">
        <h1>
          Coming soon<span className="dot">.</span>
        </h1>
        <p>Our website is under construction.</p>
        <div className="icons">
          <a href="./">
            <BsTwitter />
          </a>
          <a href="./">
            <AiFillYoutube />
          </a>
          <a href="./">
            <IoMdPaperPlane />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

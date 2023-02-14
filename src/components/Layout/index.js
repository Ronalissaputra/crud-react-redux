import Navigasi from "../Navigasi";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <div className={`${mode ? "" : "bg-slate-800 text-white"}`}>
      <Navigasi />
      {props.children}
    </div>
  );
};

export default Layout;

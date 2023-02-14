import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleDarkMode } from "../../features/darkSlice";
import { RiSunFoggyFill, RiMoonFoggyLine } from "react-icons/ri";

const Navigasi = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  return (
    <div
      className={`flex justify-between px-20 py-10 text-slate-400 text-lg ${
        mode ? "" : "bg-slate-800"
      }`}
    >
      <div>
        <Link to="/">Home</Link> / <Link to="/add">Create</Link>
      </div>
      <div>
        <button
          onClick={() => dispatch(toggleDarkMode())}
          type="button"
          className="text-3xl"
        >
          {mode ? (
            <RiSunFoggyFill className="text-yellow-600" />
          ) : (
            <RiMoonFoggyLine className="text-slate-100" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navigasi;

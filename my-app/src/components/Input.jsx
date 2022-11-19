import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInput, showSearch } from "../redux/action";
export const Input = () => {
  const Input = useSelector((store) => store.input);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const inputSet = () => {
    dispatch(setInput(text));
    dispatch(showSearch(true));
  };

  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button style={{ cursor: "pointer" }} onClick={inputSet}>
        Search
      </button>
    </div>
  );
};

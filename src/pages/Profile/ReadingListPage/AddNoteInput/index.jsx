import { useRef, useState } from "react";
import Button from "../../../../components/common/Button";

const AddNoteInput = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("bir not ekleyin...");
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setIsFocus(!isFocus);
    setPlaceholderText("Kısa bir açıklama yazın");
    setShow(true);
  };
  const closeButtons = () => {
    setShow(false);
    setPlaceholderText("bir not ekleyin...");
    if (inputValue === "") {
      setInputValue("");
    }
  };
  const submitValue = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      setPlaceholderText(inputValue);
    }
  };
  return (
    <form
      id="add-note-form"
      className="add-note-form"
      style={{ borderColor: `${show || inputValue ? "#242424" : "#f2f2f2"}` }}
      onSubmit={submitValue}
    >
      <textarea
        rows={1}
        type="text"
        className="add-note-input fs-14 primary-text"
        placeholder={placeholderText}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={handleFocus}
        style={{ fontWeight: `${inputValue ? "bold" : "normal"}` }}
      />

      <div className={`buttons ${show && "show"}`}>
        <Button
          title="Cancel"
          handleClick={closeButtons}
          className="ghost border-none sm"
        />
        <Button
          title="Done"
          className="ghost border-none sm done-btn"
          handleClick={() => setShow(false)}
        />
      </div>
    </form>
  );
};

export default AddNoteInput;

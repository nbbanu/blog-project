import { useState } from "react";
import Button from "../../../../components/common/Button";

const AddNoteInput = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [placeholderText, setPlaceholderText] = useState("bir not ekleyin...");
    const [show, setShow] = useState(false);

    const handleFocus = () => {
        setIsFocus(!isFocus);
        setPlaceholderText("Kısa bir açıklama yazın");
        setShow(true);
    }
    const closeButtons= () => {
        setShow(false);
        setPlaceholderText("bir not ekleyin...")
    }
    return ( 
        <div className="add-note-container" style={{borderColor: `${show ? "#242424" : "#f2f2f2"}`}}>
            <textarea rows={1} type="text" className="add-note-input fs-14 primary-text" placeholder={placeholderText} onFocus={handleFocus}/>

            <div className={`buttons ${show && "show"}` }>
                <Button title="Cancel" handleClick={closeButtons} className="ghost border-none sm" />
                <Button title="Done" className="ghost border-none sm done-btn" />
            </div>
        </div>
    )
}

export default AddNoteInput;
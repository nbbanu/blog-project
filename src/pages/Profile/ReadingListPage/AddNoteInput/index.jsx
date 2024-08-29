import Button from "../../../../components/common/Button";

const AddNoteInput = () => {
    return (
        <div className="input-container">
            <textarea rows={1} type="text" className="add-note-input fs-14 primary-text" placeholder="bir not ekleyin..." />
            <div className="buttons flex">
                <Button title="Cancel" className="ghost border-none sm"/>
                <Button title="Done" className="ghost border-none sm done-btn"/>
            </div>
        </div>
    )
}

export default AddNoteInput;
import { createContext, useContext, useState } from "react";

const CreateBlogContext = createContext();

export const useCreateBlog = () => useContext(CreateBlogContext);

const CreateBlogProvider = (props) => {
    const [topicIds,setTopicIds] = useState([]);
    const [files,setFiles] = useState([]);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("description");
    const [text,setText] = useState("");
    const [slug,setSlug] = useState("");
    
    const blogItems = {
        topicIds,files,title,description,text,slug
    }

    const value = {
        topicIds,setTopicIds,files,setFiles,title,setTitle,description,setDescription,text,setText,slug,setSlug, blogItems
    }
    return (
    <CreateBlogContext.Provider value={value}>{props.children}</CreateBlogContext.Provider>
    )
}

export default CreateBlogProvider;
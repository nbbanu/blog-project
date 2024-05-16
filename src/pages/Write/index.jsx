import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { generateSlug } from "../../utils/generateSlug";
import Button from "../../components/common/Button";
import BlogViewModal from "../../components/Blog/BlogViewModal";

const WritePage = ({ openBlogViewModal }) => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [value, setValue] = useState("");
  //const [description, setDescription] = useState("");

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["link", "image"],
    [{ header: 1 }, { header: 2 }, { header: 3 }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
  ];
  const modules = {
    toolbar: toolbarOptions,
  };
  const handleTitle = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    const autoSlug = generateSlug(newTitle);
    setSlug(autoSlug);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      slug,
      //   description,
      value,
    };
  };

  return (
    <div className="editor container flex flex-center-center">
      <form onSubmit={handleSubmit}>
        <div className="form-inputs flex flex-column">
          {/* Başlık */}
          <div>
            <label htmlFor="title" className="light-text fs-18">
              Blog Başlığı
            </label>
            <div>
              <input
                className=""
                onChange={handleTitle}
                type="text"
                value={title}
                name="title"
                id="title"
              />
            </div>
          </div>
          {/* Slug */}
          <div>
            <label htmlFor="slug" className="light-text fs-18">
              Blog Slug
            </label>
            <div className="">
              <input
                className=""
                onChange={(e) => setSlug(e.target.value)}
                type="text"
                value={slug}
                name="slug"
                id="slug"
              />
            </div>
          </div>
          <>
            {/* Description */}
            {/* <div className="">
            <label htmlFor="description" className="">
              Blog Description
            </label>
            <textarea
              className=""
              id="description"
              rows="4"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="Write your thoughts here..."
            ></textarea>
          </div> */}
          </>

          {/* İçerik */}
          <div>
            <label className="light-text fs-18" htmlFor="content">
              Blog İçeriği
            </label>
            <ReactQuill
              className="quill-editor"
              modules={modules}
              theme="snow"
              value={value}
              onChange={setValue}
              placeholder="Hikayeni Anlat"
            />
          </div>
        </div>
        <BlogViewModal
          clickItem={
            <Button
              title="Yayınla"
              className={"success md"}
              handleClick={openBlogViewModal}
            />
          }
        />
      </form>
    </div>
  );
};

export default WritePage;

import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { generateSlug } from "../../utils/generateSlug";
import Button from "../../components/common/Button";
import BlogViewModal from "../../components/Blog/BlogViewModal";

const WritePage = ({ openBlogViewModal }) => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [value, setValue] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  },[]);

  const quill = useRef();
  const inputRef = useRef(null);

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
      url,
      value,
    };
  };

  const imageHandler = useCallback(() => {
    // Create an input element of type 'file'
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    // When a file is selected
    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();

      // Read the selected file as a data URL
      reader.onload = () => {
        const imageUrl = reader.result;
        const quillEditor = quill.current.getEditor();

        // Get the current selection range and insert the image at that index
        const range = quillEditor.getSelection(true);
        quillEditor.insertEmbed(range.index, "image", imageUrl, "user");
      };

      reader.readAsDataURL(file);
    };
  }, []);

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
    toolbar: {
      container: toolbarOptions,
      handlers: {
        image: imageHandler,
      },
    },
  };
  function getImg(e) {
    const file = e.target.files[0];
    setUrl(window.URL.createObjectURL(file));
  }

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
                className="blog-title-input"
                onChange={handleTitle}
                type="text"
                value={title}
                name="title"
                id="title"
                ref={inputRef}
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

          {/* Blog Kapak Fotoğrafı */}
          <div className="blog-cover-photo-box flex flex-center-between">
            <div>
              <label htmlFor="blogCoverPhoto" className="blog-cover-photo-text">
                Blog Kapak Fotoğrafı
              </label>
              <input
                type="file"
                className="blog-cover-photo-input"
                id="blog-cover-photo-input"
                onChange={getImg}
                accept="image/png, image/jpeg"
              />
            </div>
            <div
              className="flex flex-center-center"
              style={{ width: 400, height: 200, backgroundColor: "#fafafa" }}
            >
              {url ? (
                <img src={url} alt="blog-cover-photo" className="img-cover" />
              ) : (
                <div className="fs-14 blog-cover-photo">
                  Hikayenizi okuyuculara daha çekici kılmak için yüksek kaliteli
                  bir resim ekleyin.
                </div>
              )}
            </div>
          </div>

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
              placeholder="Bloğunu Yazmaya Başla..."
              ref={(el) => (quill.current = el)}
            />
          </div>
        </div>
        <BlogViewModal
          newBlog={{ title, value, url }}
          clickItem={
            <Button
              title="Yayınla"
              className={"success md"}
              handleClick={openBlogViewModal}
              disabled={title && value ? false : true}
            />
          }
        />
      </form>
    </div>
  );
};

export default WritePage;

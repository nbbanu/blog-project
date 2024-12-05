import { useState } from "react";
import CustomSelect from "../../common/MultipleSelect";
import Button from "../../common/Button";
import { useCreateBlog } from "../../../contexts/CreateBlogContext";
import { createBlog } from "../../../service";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const BlogViewModal = ({ clickItem, newBlog }) => {
  const [showBlogModal, setShowBlogModal] = useState(false);
  const { blogItems, topicIds, setText, setTitle, setSlug, setFiles } =
    useCreateBlog();
  const navigate = useNavigate();
  const { user } = useAuth();
  const email = user?.email;
  const userEmail = "@" + email?.split("@")[0];

  const openBlogViewModal = () => {
    setShowBlogModal(!showBlogModal);
  };
  const closeBlogModal = () => {
    setShowBlogModal(false);
  };

  const createBlogItems = async () => {
    const header = {
      "Content-Type": "multipart/form-data",
    };
    const formData = new FormData();

    formData.append("title", blogItems.title);
    formData.append("text", blogItems.text);
    formData.append("description", blogItems.description);
    formData.append("slug", blogItems.slug);
    formData.append("files", blogItems.files);

    blogItems.topicIds.forEach((topicId) => {
      formData.append("topics[]", topicId);
    });

    createBlog(formData, header)
      .then((res) => {
        Swal.fire({
          title: "Bloğunuz Başarıyla Yayınlandı",
          color: "#242424",
          icon: "success",
          iconColor: "#ffc016",
        });
        navigate(`/${userEmail}/${user.id}/main`);
      })
      .catch((err) => {
        if (err.statusCode == 401) {
          Swal.fire({
            title: "Lütfen Tekrar Giriş Yapınız",
            color: "#242424",
            icon: "error",
            iconColor: "#ffc016",
          });
          localStorage.removeItem("token");
          navigate("/");
        } else if (err.statusCode == 400) {
          Swal.fire({
            title: "Oluşturmak istediğiniz blog sistemde zaten mevcut!",
            color: "#242424",
            icon: "error",
            iconColor: "#ffc016",
          });
        }
      })
      .finally(() => {
        setText("");
        setTitle("");
        setSlug("");
        setFiles([]);
      });
  };
  return (
    <div>
      <div className="clickable-place" onClick={openBlogViewModal}>
        {clickItem}
      </div>
      {showBlogModal && (
        <div className="blog-view-modal-container flex flex-center-center">
          <div className="blog-view-modal">
            <div className="close light-text fs-18" onClick={closeBlogModal}>
              X
            </div>
            <div className="blog-view-modal-bottom">
              <div className="blog-view-modal-bottom-left flex flex-column">
                <p className="fs-18 blog-title">Blog Ön izlemesi</p>
                <div className="blog-view-modal-bottom-left-img">
                  {newBlog.url ? (
                    <img
                      src={newBlog.url}
                      alt="blog-cover-photo"
                      className="img-cover"
                    />
                  ) : (
                    <div className="blog-preview-img flex flex-center-center">
                      <span className="text-center light-text fs-14">
                        Hikayenizi okuyuculara daha çekici kılmak için yüksek
                        kaliteli bir resim ekleyin.
                      </span>
                    </div>
                  )}
                </div>
                <span
                  className="blog-preview-title"
                  placeholder="Ön izleme başlığı giriniz"
                >
                  {newBlog.title}
                </span>
                <span
                  className="blog-preview-subtitle line-clamp"
                  placeholder="Ön izleme alt başlığı giriniz..."
                >
                  <div dangerouslySetInnerHTML={{ __html: newBlog.text }}></div>
                </span>
                <div className="note fs-14">
                  <strong>Not:</strong> Buradaki değişiklikler, hikayenin
                  içeriğini değil, hikayenizin Medium'un ana sayfası ve
                  abonelerin gelen kutuları gibi halka açık yerlerde nasıl
                  görüneceğini etkileyecektir.
                </div>
              </div>
              <div className="blog-view-modal-bottom-right flex flex-column">
                <p className="fs-18 publishing-title">
                  Yayınlandığı Yer: <span>Banubkrli</span>
                </p>
                <span className="add-topic-text fs-14">
                  Okuyucuların bloğunuzun neyle ilgili olduğunu bilmesi için
                  konuları (en fazla 5 adet) ekleyin veya değiştirin
                </span>
                <CustomSelect />
                <div className="learn-more fs-14">
                  <span
                    style={{
                      textDecorationLine: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Yayınladığınızda
                  </span>{" "}
                  yazınıza ne olacağı hakkında daha fazla bilgi edinin.
                </div>
                <div className="publish-area">
                  <Button
                    title={"Şimdi Yayınla"}
                    className={"success"}
                    handleClick={createBlogItems}
                    disabled={!topicIds.length > 0}
                  />
                  <Button
                    title={"Sonrası için planla"}
                    className={"ghost border-none schedule-btn"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogViewModal;

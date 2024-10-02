import { Link } from "react-router-dom";
import Button from "../../../../components/common/Button";
const ProfilePageAbout = () => {
  return (
    <div className="about-page">
      <div className="flex flex-column flex-center more-about">
        <h2 className="fs-16 primary-text more-about-header">Kendinizden Bahsedin</h2>
        <p className="text-center more-about-text fs-13 primary-text">
          İşte kendiniz hakkında daha fazla bilgi paylaşabileceğiniz yer:
          geçmişiniz, iş deneyiminiz, başarılarınız, ilgi alanlarınız,
          hayalleriniz ve daha fazlası. Hatta biyografinizi kişiselleştirmek
          için görseller ekleyebilir ve zengin metin kullanabilirsiniz.
        </p>

        <Button title="Başlayın" className="ghost" />
      </div>
    </div>
  );
};

export default ProfilePageAbout;

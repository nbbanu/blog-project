import { useState } from "react";
import Button from "../../../../components/common/Button";
import { followAUser } from "../../../../service";
import { Flip,toast } from "react-toastify";

const FollowButton = ({isFollowing,setIsFollowing, setFollowerCount,userDetail}) => {
    const [followLoading, setFollowLoading] = useState(false);
    const handleFollowClick = () => {
        const body = {
          userId: userDetail?.id,
          isFollowing: !userDetail?.isFollowingByUser,
        };
    
        setFollowLoading(true);
    
        followAUser(body)
          .then((res) => {
            setIsFollowing(!isFollowing);
            setFollowerCount((count) => (!isFollowing ? count + 1 : count - 1));
    
            !isFollowing
              ? toast.success("Kullanıcı Takip Edildi", {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  transition: Flip,
                })
              : "";
          })
          .catch((err) => console.error(err))
          .finally(() => {
            setFollowLoading(false);
          });
      };
    return(
        <Button
        disabled={followLoading}
        title={`${isFollowing ? "Takip Ediliyor" : "Takip Et"}`}
        className={`${isFollowing ? "green-ghost" : "success"} follow-button`}
        size="md"
        handleClick={handleFollowClick}
      />
    )
}

export default FollowButton;
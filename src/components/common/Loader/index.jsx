import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader-container flex flex-center-center">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="20"
        visible={true}
      />
    </div>
  );
};
export default Loader;

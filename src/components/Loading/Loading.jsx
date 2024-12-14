import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="pink"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;

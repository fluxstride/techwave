import { Link } from "react-router";

const Home = () => {
  return (
    <div className="p-3">
      <h1 className="text-3xl sm:text-5xl text-center font-semibold mt-20">
        Tech Wave'<span className=" text-[#0A80ED] font-bold">25</span>
      </h1>

      <p className="mt-2 sm:mt-4 text-lg sm:text-2xl text-center">
        Thanks for making the event a success
        <div className="mt-4 sm:mt-6">
          <span className="animate-bounce inline-block">😊</span>
          <span className="animate-bounce inline-block delay-300">🚀</span>
        </div>
      </p>

      <div className="flex flex-col mx-auto sm:flex-row mt-10 gap-3 w-fit">
        <Link
          className="bg-[#0A80ED] text-white p-2 px-4 rounded-sm mx-auto min-w-44 text-center"
          to="/feedback"
        >
          Give Feedback
        </Link>
        <Link
          className="w-44 text-center p-2 px-4 rounded-sm mx-auto border-2 text-[#0A80ED] border-[#0A80ED]"
          to="https://drive.google.com/drive/u/0/folders/1sQCCTKM5Y3KvSe3S760eydF7eNfbTIZ-?pli=1&sort=13&direction=a"
          target="_blank"
        >
          View event photos
        </Link>
      </div>
    </div>
  );
};

export default Home;

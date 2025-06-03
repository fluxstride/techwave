import { Link } from "react-router";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <h1 className="text-2xl sm:text-6xl text-center font-semibold">
          Tech Wave'<span className=" text-[#0A80ED] font-bold">25</span>
        </h1>

        <Link
          className="block bg-[#0A80ED] w-fit text-white p-2 px-4 rounded-md mx-auto mt-10"
          to="/register"
        >
          Click to Register
        </Link>
      </div>
    </div>
  );
};

export default Home;

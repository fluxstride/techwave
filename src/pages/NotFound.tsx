import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="p-3">
      <h1 className="text-3xl sm:text-5xl text-center font-semibold mt-20">
        Page Not Found
      </h1>
      <Link
        className="bg-[#0A80ED] text-white p-2 px-4 rounded-sm mx-auto block w-fit mt-10"
        to="/"
      >
        Visit home page
      </Link>
    </div>
  );
};

export default NotFound;

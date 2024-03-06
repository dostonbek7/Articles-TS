import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import parse from "html-react-parser";
import { FaArrowLeftLong } from "react-icons/fa6";

function SingleNews() {
  const { id } = useParams();
  const {
    data: news,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/news/${id}`);

  if (isPending) {
    return (
      <div className="spinner">
        <span className="loader-two"></span>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 h-full w-full">
        <img src="/assets/404.jpg" alt="" />
        <Link
          to="/"
          className="px-3 py-1 md:px-4 md:py-2 bg-blue-700 hover:bg-blue-400 text-white rounded-lg"
        >
          Home
        </Link>
      </div>
    );
  }

  return (
    <div className="py-5">
      <Link className="flex items-center gap-2 mb-4" to={"/"}>
        <span>
          <FaArrowLeftLong />
        </span>
        <span>Home</span>
      </Link>
      {news && (
        <div className="shadow-lg rounded-lg p-5">
          <h1 className="text-lg font-medium mb-2">{news.title}</h1>
          <p>{parse(news.description)}</p>
        </div>
      )}
    </div>
  );
}

export default SingleNews;

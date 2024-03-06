import useFetch from "../hooks/useFetch";
import { newsInfo } from "../feature/newsFeature";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/news");

  if (isPending) {
    return (
      <div className="spinner">
        <span className="loader"></span>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 h-full w-full">
        <img src="/assets/404.jpg" alt="" />
      </div>
    );
  }
  const deleteItem = (id: string) => {
    fetch(`http://localhost:3000/news/${id}`, {
      method: "DELETE",
    });
  };
  return (
    <div className="py-5">
      {data && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((news: newsInfo) => {
            return (
              <li key={news.id} className="shadow-lg p-5 flex flex-col gap-4">
                <img
                  className="object-cover rounded-lg"
                  src={news.image}
                  alt={news.title}
                />
                <h1 className="text-lg font-medium text-left">{news.title}</h1>
                <div className="flex items-center justify-between">
                  <Link
                    className="px-4 py-2 bg-blue-500 text-lg rounded-lg"
                    to={`/singlenews/${news.id}`}
                  >
                    Davomi...
                  </Link>
                  <button
                    className="px-4 py-4 rounded-lg bg-red-400"
                    onClick={() => deleteItem(news.id)}
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Home;

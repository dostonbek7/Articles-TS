import useFetch from "../hooks/useFetch";
import { newsInfo } from "../feature/newsFeature";
import { Link } from "react-router-dom";

function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/news");

  if(isPending){
    return <div className="spinner">
      <span className="loader"></span>
    </div>
  }
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 h-full w-full">
        <img src="/assets/404.jpg" alt="" />
      </div>
    );
  }
  return (
    <div className="py-5">
      {data && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((news: newsInfo) => {
            return (
              <li
                key={news.id}
                className="shadow-lg p-5 flex flex-col items-start gap-4"
              >
                <img
                  className="object-cover rounded-lg"
                  src={news.image}
                  alt={news.title}
                />
                <h1 className="text-lg font-medium">{news.title}</h1>
                <Link
                  className="px-4 py-2 bg-blue-500 text-lg rounded-lg"
                  to={`/singlenews/${news.id}`}
                >
                  Davomi...
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Home;

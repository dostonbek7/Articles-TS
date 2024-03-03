import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useFetch from "../hooks/useFetch";

function Create() {
  const form = useRef<HTMLFormElement>(null)
  const [value, setValue] = useState("");
  const { data, addNewPost } = useFetch("http://localhost:3000/news", "POST");
  console.log(data);


  const [title, setTitle] = useState("");
  const [posted, setPosted] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [url, setUrl] = useState("");

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["link", "image", "video"],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ];

  const module = {
    toolbar: toolbarOptions,
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newArticle = {
      id: uuidv4(),
      description: value,
      title: title,
      posted: posted,
      newsUrl: url,
      image: imgUrl,
    };
    addNewPost(newArticle);

    setImgUrl('')
    setPosted('')
    setTitle('')
    setUrl('')
    setValue('')
  };

  return (
    <section className="pt-5">
      <h1 className="text-center text-2xl font-semibold mb-5">
        Create articles
      </h1>
      <form
      ref={form}
        autoComplete="off"
        onSubmit={handleSubmit}
        className="max-w-[500px] md:max-w-[800px] p-5 border rounded-lg shadow-lg mx-auto"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-5">
          <label htmlFor="title" className="w-full">
            <span className="block mb-2">Title</span>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border-[1px] rounded-lg border-solid border-black "
              id="title"
              type="text"
            />
          </label>
          <label htmlFor="post" className="w-full">
            <span className="block mb-2">Posted</span>
            <input
              required
              value={posted}
              onChange={(e) => setPosted(e.target.value)}
              className="w-full px-4 py-2 border-[1px] rounded-lg border-solid border-black"
              id="post"
              type="date"
            />
          </label>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-5">
          <label htmlFor="news" className="w-full">
            <span className="block mb-2">News Url</span>
            <input
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-2 border-[1px] rounded-lg border-solid border-black "
              id="news"
              type="url"
            />
          </label>
          <label htmlFor="image" className="w-full">
            <span className="block mb-2">Image</span>
            <input
              required
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
              className="w-full px-4 py-2 border-[1px] rounded-lg border-solid border-black"
              id="image"
              type="url"
            />
          </label>
        </div>
        <div className="mb-4">
          <span className="block mb-2">Description</span>
          <ReactQuill
            modules={module}
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
        <button className="hoverEl px-5 py-2 border rounded-lg text-lg">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Create;

import { useEffect, useState } from "react";
type ObjOrNull = [] | null;
type BolOrStr = boolean | string;
type StrOrNull = string | null;

function useFetch(url: string, method: string = "GET") {
  const [data, setData] = useState<ObjOrNull>(null);
  const [error, setError] = useState<StrOrNull>(null);
  const [isPending, setIsPending] = useState<BolOrStr>(false);

  const [newPost, setNewPost] = useState({});

  const addNewPost = (post: object) => {
    setNewPost({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  };

  useEffect(() => {
    const fetchData = async (newPost?: object) => {
      setIsPending(true);
      try {
        const req = await fetch(url, {
          ...newPost,
        });
        if (!req.status) {
          throw new Error("Something went wrong");
        }
        const data = await req.json();
        setData(data);
        setError(null);
        setIsPending(false);
      } catch (error: any) {
        setError(error.message);
        setIsPending(false);
      }
    };
    if (newPost && method == "POST") {
      fetchData(newPost);
    }
    if (method == "GET") {
      fetchData();
    }
  }, [url, method, newPost]);
  return { data, error, isPending, addNewPost };
}

export default useFetch;

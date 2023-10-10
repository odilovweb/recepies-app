import { useEffect, useState } from "react";

function useFetch(url, method = "GET") {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState(null);
  const newData = (newRecipe) => {
    setPostData({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });
  };
  useEffect(() => {
    const fetchData = async (dataRecipe) => {
      setIsPending(true);
      try {
        let req = await fetch(url, { ...dataRecipe });
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        let data = await req.json();
        setData(data);
        setIsPending(false);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    };
    if (method === "GET") {
      fetchData();
    } else if (method === "POST" && postData) {
      fetchData(postData);
    }
  }, [url, method, postData]);
  return { data, isPending, error, newData };
}

export default useFetch;

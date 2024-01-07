import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  const data = useLoaderData();
  return (
    <div>
      <h1>Github Followers: {data.followers} </h1>
      <img src={data.avatar_url} alt="git picture" />
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/mohdUsman-6508");
  return response.json();
};

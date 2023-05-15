import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

const FriendsContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:9000/api/friends")
      .then((res) => setData(res.data))
      .catch((Err) => console.error(err));
  }, []);

  return (
    <div>
      {data.map((data) => {
        return (
          <div>
            <div>{data.name}</div>
            <div>{data.age}</div>
            <div>{data.email}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsContent;

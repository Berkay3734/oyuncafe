import React from "react";
import axios from "axios";

function MyComponent() {
  const handlePostRequest = () => {
    let data = JSON.stringify({
      LIMIT: "30",
      currentPage: "3",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://oyuncafeapi.kemalcelikturk.com/Api/test",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={handlePostRequest}>Post İsteği Gönder</button>
    </div>
  );
}

export default MyComponent;

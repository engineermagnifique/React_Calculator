// Write a generic function identity that returns the value it receives without changing the type.

// Build a component that fetches data from a public API (e.g., https://jsonplaceholder.typicode.com/posts).

//     Use useEffect to fetch the data.

// Display a loading indicator while fetching.Show the list of posts.Implement a “Refresh” button that re-fetches the posts.

import React from "react";
import useFetch2 from "../hooks/useFetch2";

const Challenges2 = () => {
  const { data, loading, error, refetch } = useFetch2(
  "https://jsonplaceholder.typicode.com/posts"
);

  return (
    <div>
      <button onClick={refetch}>Refresh</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {data?.map((item) => (
        <div
          key={item.id}
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px",
            margin: "4px",
          }}
        >
          <p>{item.title}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Challenges2;
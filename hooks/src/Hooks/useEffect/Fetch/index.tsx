import { Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";

export interface FetchProps {}

const Fetch: React.SFC<FetchProps> = () => {
  const [state, setItems] = useState({ items: [] });
  const [page, setPage] = useState(1);

  const fetchItems = async () => {
    const endpoint = `http://5e3f3b0364c3f6001455102a.mockapi.io/v0/comments${page}`;

    const res = await fetch(endpoint);
    const data = await res.json();

    setItems({ items: data });
  };

  useEffect(() => {
    void fetchItems();
  }, [page]); // this will run on first load, and whenever the page changes

  return (
    <section>
      <Box component="header" mb={4}>
        <h1>Fetcher</h1>
        <p>The following effects are used in this example:</p>
      </Box>

      <Box mb={6}>
        <ul>
          <li>
            useEffect - to handle an async call side-effect when component
            mounts, or when page changes.
          </li>
          <li>
            useState - this handles the state for the items return from the
            fetch, and the paging.
          </li>
        </ul>
      </Box>

      <div>
        {state.items.map((i: any) => (
          <li key={i.id}>{i.name}</li>
        ))}
        <button disabled={page === 1} onClick={() => setPage(1)}>
          1
        </button>
        <button disabled={page === 2} onClick={() => setPage(2)}>
          2
        </button>
      </div>
    </section>
  );
};

export default Fetch;

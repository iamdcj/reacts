import React, { useState, useEffect } from "react";

export interface FetchProps {}

const Fetch: React.SFC<FetchProps> = () => {
  const [state, setItems] = useState({ items: [] });
  const [page, setPage] = useState(1);

  const fetchItems = (p: number) => {
    fetch(`http://5e3f3b0364c3f6001455102a.mockapi.io/v0/comments${p}`)
      .then(response => response.json())
      .then(todos => {
        setItems({ items: todos });
      });
  };

  useEffect(() => {
    fetchItems(page);
  }, [page]);

  console.log(state);

  return (
    <section>
      <header>
        <h1>Fetcher</h1>
        <p>The following effects are used in this example:</p>
      </header>
      <ul>
        <li>
          useEffect hook to handle an async call side-effect when component
          mounts, or when page changes.
        </li>
        <li>
          useState - this handles the state for the items return from the fetch,
          and the paging.
        </li>
      </ul>

      <div>
        {state.items.map((i: any) => (
          <li>{i.name}</li>
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

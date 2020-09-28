import React, { useContext, useState } from "react";
import axios from "axios";

import UserContext from "../context/UserContext";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import { BASE_URL } from "../constants";

const Home = () => {
  const { user } = useContext(UserContext);
  //user imported from user context
  const [books, setBooks] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //useState sets up state variables.
  //remember the argument is the initial state!

  const btnControls = [
    {
      text: "View",
      className: "btn btn-primary mx-1",
    },
    {
      text: "Save",
      onClick: async ({ target }) => {
        const URL = `${BASE_URL}/api/save`;
        const payload = books[target.id];
        await axios.post(URL, payload, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
      },
      className: "btn btn-success mx-1",
    },
  ];

  const onSubmit = async (event) => {
    try {
      event.preventDefault();

      const URL = `${BASE_URL}/api/books`;

      const payload = {
        searchTerm,
      };

      setLoading(true);
      setBooks();

      const { data } = await axios.post(URL, payload, {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      setLoading(false);
      setBooks(data.results);
    } catch (err) {
      setLoading(false);
      setBooks();
      setError(err.message);
    }
  };

  const onChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  const renderBooks = () => {
    if (!loading && !error && !books) {
      return null;
    }
    if (!loading && !error && !books.length) {
      return <div>Sorry no results found :(</div>;
    } else if (!loading && !error && books.length) {
      return (
        <BookList title="Results" books={books} btnControls={btnControls} />
      );
    }
  };

  return (
    <div>
      <SearchBar
        onSubmit={onSubmit}
        searchTerm={searchTerm}
        onChange={onChange}
      />
      {loading ? <div>Loading...</div> : null}
      {error ? <div className="text-danger">{error}</div> : null}
      {renderBooks()}
    </div>
  );
};

export default Home;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import UserContext from "../context/UserContext";
import BookList from "../components/BookList";
import { BASE_URL } from "../constants";

const MyBooks = () => {
  const { user } = useContext(UserContext);
  const [savedBooks, setSavedBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const btnControls = [
    {
      text: "View",
      className: "btn btn-primary mx-1",
    },
    {
      text: "Delete",
      onClick: async ({ target }) => {
        const { _id } = savedBooks[target.id];
        const URL = `${BASE_URL}/api/books/${_id}`;
        const { data } = await axios.delete(URL, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setSavedBooks(data.results);
      },
      className: "btn btn-danger mx-1",
    },
  ];

  useEffect(() => {
    const fetch = async () => {
      try {
        const URL = `${BASE_URL}/api/save`;
        setLoading(true);
        setSavedBooks([]);

        const { data } = await axios.get(URL, {
          headers: { Authorization: `Bearer ${user.token}` },
        });

        setLoading(false);
        setSavedBooks(data.results);
      } catch (err) {
        setLoading(false);
        setSavedBooks([]);
        setError(err.message);
      }
    };

    fetch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loading && error) {
    return <div className="text-danger">{error}</div>;
  }

  if (!loading && !error && savedBooks.length) {
    return (
      <BookList
        title="Saved Books"
        books={savedBooks}
        btnControls={btnControls}
      />
    );
  }

  return <div>You have no saved books</div>;
};

export default MyBooks;

import React, { useState } from "react";
import { useStore } from "../../hooks";
import { useParams, Link, useHistory } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { ROUTES } from "../../consts";

// import style from "../../style/pageheader.module.css";

const ProjectDetail = () => {
  const [edit, setEdit] = useState(false);
  const { portfolioStore } = useStore();
  const { id } = useParams();
  const history = useHistory();


  return useObserver(() => {
    const book = portfolioStore.resolveBook(id);
    console.log(book);
    if (!book) return <p>Loading...</p>;



    // const handleSubmit = e => {
    //   e.preventDefault();
    //   book.update();
    //   setEdit(false);
    // };

    // const handleAuthorChange = e => {
    //   const authorId = e.target.value;
    //   const author = authorStore.resolveAuthor(authorId);
    //   book.setAuthor(author);
    // };

    // const handleRemove = async () => {
    //   if (window.confirm("Zeker?")) {
    //     await book.delete();
    //     history.push(ROUTES.home);
    //   }
    // };

    return (
      <article>
        {book.text}
      </article>
    );
  });
};

export default ProjectDetail;

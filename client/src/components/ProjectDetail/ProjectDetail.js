import React, { useState } from "react";
import { useStore } from "../../hooks";
import { useParams, Link, useHistory } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './projectdetail.module.css';

// import style from "../../style/pageheader.module.css";

const ProjectDetail = () => {
  const [edit, setEdit] = useState(false);
  const { portfolioStore } = useStore();
  const { id } = useParams();
  const history = useHistory();


  return useObserver(() => {
    const project = portfolioStore.resolveBook(id);
    console.log(project);
    if (!project) return <p>Loading...</p>;



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
      <main>
        <p className={styles.detailtitle}>Project</p>
        <h2 className={styles.title}>{project.name}</h2>

        <div className={styles.wrappercarousel}>
          {/* <div className={styles.FacebookButton}>
            <FacebookButton showFaces share url="https://www.facebook.com/OvertoneDesigns" />
          </div> */}
          <h4 className={styles.detailtitle} >Over dit project</h4>
          <p className={styles.detailtext}>{project.text}</p>

          <Carousel showStatus={false} dynamicHeight stopOnHover swipeable infiniteLoop useKeyboardArrows showArrows={false} className={styles.carousel}>
            {project.images.map(image => (
              <div >
                <img  src={image} alt={project.id} className={styles.objectFit} />
              </div>
            ))}
          </Carousel>
        </div>
      </main >
    );
  });
};

export default ProjectDetail;

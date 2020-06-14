import React from 'react';
import { useStore } from "../../hooks";
import { ROUTES } from "../../consts";
import { Link } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import styles from './home.module.css';
import LazyLoad from 'react-lazyload';


const Home = () => {
  const { portfolioStore } = useStore();

  return useObserver(() => (
    <section >
      <ul className={styles.portfolioGrid}>
        {portfolioStore.projecten.map(project => (
          <LazyLoad key={project.id} height={200}>
            < Link to={ROUTES.projectDetail.to + project.id} >
              <li className={styles.portfolioItem} >
                <div className={styles.overlay}>
                  <p className={styles.hoveritem} >{project.name}</p>
                </div>

                <img src={project.images[0]} alt="Overtone Logo" className={styles.portfolioGridPics}></img>

              </li>


            </Link>
          </LazyLoad>
        ))}
      </ul>
    </section >
  ));
};

// PageHeader.defaultProps = {
//     items: `Reisduif titel`
// };

Home.propTypes = {
  // items: PropTypes.string.isRequired
};

export default Home;

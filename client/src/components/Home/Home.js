import React from 'react';
import { useStore } from "../../hooks";
import { ROUTES } from "../../consts";
import { Link } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import styles from '../../styles/pageheader.module.css';
import pica from '../../assets/overtone.jpg';
import ReactWOW from 'react-wow'

const Home = () => {
  const { portfolioStore } = useStore();

  return useObserver(() => (
    <section >
      <ul className={styles.portfolioGrid}>
        {portfolioStore.projecten.map(project => (
          console.log(project),
          < Link to={ROUTES.projectDetail.to + project.id} >
            <li className={styles.portfolioItem} key={project.id}>
              {/* <Link to={ROUTES.projectDetail.to + project.id}>{project.name}</Link> */}
              <img src={project.image} alt="Overtone Logo" className={styles.portfolioGridPics}></img>
            </li>


          </Link>
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

import React from "react";
import { useStore } from "../../hooks";
import { ROUTES } from "../../consts";
import { Link } from "react-router-dom";
import { useObserver } from "mobx-react-lite";



const Portfolio = ({ items }) => {
  const { portfolioStore } = useStore();

  return useObserver(() => (
    <section >
      <ul>
        {portfolioStore.projecten.map(project => (
          <li key={project.id}>
            <Link to={ROUTES.projectDetail.to + project.id}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  ));
};

// PageHeader.defaultProps = {
//     items: `Reisduif titel`
// };

// Portfolio.propTypes = {
//     items: PropTypes.number.isRequired
// };

export default Portfolio;

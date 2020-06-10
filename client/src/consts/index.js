const ROUTES = {
  home: "/",
  about: "/about",
  portfolio: "/portfolio",
  contact: "/contact",
  addAuthor: "/authors/add",
  authorProject: { path: "/authors/:id", to: "/authors/" },
  addProject: "/portfolio/add",
  projectDetail: { path: "/project/:id", to: "/project/" }
};

export { ROUTES };

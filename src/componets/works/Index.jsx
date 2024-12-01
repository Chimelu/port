import React, { useRef } from 'react';
import projects from '../project data/projectdata';
import './Index.scss';
import ProjectComponent from '../projectcomp/Index';
import Loader from 'react-loaders';

function Portfolio() {
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300; // Scroll right
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 300; // Scroll left
    }
  };

  return (
    <div className="portfolio d-flex flex-column container">
      <h1 className="page-title fw-bold text-center text-light"><i>My Projects</i></h1>
      <div className="scroll-container mt-5" ref={scrollContainerRef}>
        {projects.map((project, index) => (
          <ProjectComponent key={index} {...project} />
        ))}
      </div>
      <div className="scroll-buttons">
        <button className="btn btn-primary m-2" onClick={scrollLeft}>&lt;</button>
        <button className="btn btn-primary m-2" onClick={scrollRight}>&gt;</button>
      </div>
      <Loader type="pacman" />
    </div>
  );
}

export default Portfolio;

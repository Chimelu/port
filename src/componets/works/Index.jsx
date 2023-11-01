import React,{useRef} from 'react';
import projects from '../project data/projectdata';
import './Index.scss'; // Import your SCSS file
import ProjectComponent from '../projectcomp/Index';
import Loader from 'react-loaders';

function Portfolio() {
  const scrollContainerRef = useRef(null)
 

  const scrollRight = ()=>{
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300; // Adjust the scroll distance as needed
    
  }
 }
 const scrollLeft = () => {
  if (scrollContainerRef.current) {
    scrollContainerRef.current.scrollLeft -= 300; // Adjust the scroll distance as needed
  }
 };



  return (
    <div className="portfolio d-flex flex-column container  ">
      <h1 className="page-title fw-bold text-center text-light"><i>My Projects</i></h1>
      <div className="scroll-container gap-1 mt-5" ref={scrollContainerRef}>
        {projects.map((project, index) => (
          <ProjectComponent  key={index} {...project}  />
        ))}
      </div>
      <div className="scroll-buttons text-center gap-5  h-50">
        <button className='m-5' onClick={scrollLeft}>&lt;</button>
        <button onClick={scrollRight}>&gt;</button>
      </div>
      <Loader type='pacman'/>

    </div>
  );
}

export default Portfolio;

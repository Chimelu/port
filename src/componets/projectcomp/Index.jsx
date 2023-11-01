// ProjectComponent.js
import React from 'react';
import './Index.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function ProjectComponent(props) {
    const { name, description, technologies,image, projectLink, githubLink,id } = props;
    
  return (
    
    <div className="project-card  " >
        <Card style={{ width: '18rem', }} key={id} >
      <Card.Img variant="top" src={image}  alt= 'readme' className='image' />
      <Card.Body className='fs-5 '>
        <Card.Title className='fs-5'>{name}</Card.Title>
        <Card.Text className='text-dark'>
        {technologies.join(', ')}
        </Card.Text>
        <Button className='btn btn-sm mx-3' href={projectLink} target="_blank" variant="primary">Review Work</Button>
        <Button className='btn btn-sm'  href={githubLink} target="_blank" variant="dark"> Git hub</Button>
      </Card.Body>
    </Card>
      {/* <h2>{name}</h2>
      <img className='w-100' src={image} alt="" />
      <p>{description}</p>
      <div className="technologies">
        <strong>Technologies:</strong> {technologies.join(', ')}
      </div>

      <div className="project-links">
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <button className="view-button">View Project</button>
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button className="github-button">GitHub Repo</button>
        </a> */}
      {/* </div> */}
    </div>
  );
   
}

export default ProjectComponent;

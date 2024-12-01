import React from 'react';
import './Index.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectComponent(props) {
  const { name, description, technologies, image, projectLink, githubLink, id } = props;

  return (
    <div className="project-card" key={id}>
      <Card>
        <Card.Img variant="top" src={image} alt="Project preview" className="image" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="text-secondary mb-2">
            <strong>Technologies:</strong> {technologies.join(', ')}
          </Card.Text>
          <Card.Text className="text-muted">{description}</Card.Text>
          <div className="d-flex justify-content-between mt-3">
            <Button href={projectLink} target="_blank" variant="primary" size="sm">
              Review Work
            </Button>
            <Button href={githubLink} target="_blank" variant="dark" size="sm">
              GitHub
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectComponent;

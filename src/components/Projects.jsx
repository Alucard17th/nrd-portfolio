import { useState } from 'react';
import CardProjects from './CardProjects';
import ThreeDProjects from './ThreeDProjects';

const Projects = () => {
  const [showCards, setShowCards] = useState(true);

  const toggleView = () => {
    setShowCards(!showCards);
  };

  return (
    <div className="projects-container">
      <div className="toggle-container mb-4">
        <button 
          onClick={toggleView}
          className="toggle-btn"
        >
          {showCards ? 'Show 3D Projects' : 'Show Card View'}
        </button>
      </div>
      
      <div style={{ display: showCards ? 'block' : 'none' }}>
        <CardProjects />
      </div>
      <div style={{ display: !showCards ? 'block' : 'none' }}>
        <ThreeDProjects />
      </div>
    </div>
  );
};

export default Projects;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/EfremGhebre/repos');
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="container">
    <div style={{paddingLeft:"20px"}}>
      <h1 style={{color:"orangered", paddingBottom:"20px", fontSize:"1.8em"}}>Nedan finner ni GitHub länkar till mina projekt</h1>
      {loading ? (
        <p>Hämtar data...</p>
      ) : (
        <ul>
          {projects.map(project => (
            <li key={project.id} style={{ fontSize:"1.3em"}}>
              <h3 style={{paddingTop:"20px"}}> <a href={project.html_url}>
                  {project.name} 
                </a></h3>
                <p style={{fontSize:"1.1em", fontStyle:"italic"}}>- {project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
    </section>
  );
}

export default Portfolio;

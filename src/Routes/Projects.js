import React from 'react';
import Project from '../Components/Project/Project';
import Context from '../Context';
import { AnimateOnChange } from 'react-animation';

class Projects extends React.Component {

  state = {
    index: 0,
    slideLeft: 'slideInFromLeft 1s ease-in 0s 1;',
    slideRight: 'slideInFromRight 1s ease-in 0s 1;'
  }

  static contextType = Context;

  slideRight = () => {
    const { index } = this.state;
    const { projects } = this.context;
    if (index < projects.length - 1) {
      this.setState({ index: index + 1 });
      
    } else {
      
      this.setState({ index: 0 });
    }
    
  }

  slideLeft = () => {
    const { index } = this.state;
    const { projects } = this.context;
    if (index <= 0) {
      this.setState({ index: projects.length - 1 })
    } else {
      this.setState({ index: index - 1 });
    } 
  }
  
  render() {
    const { projects } = this.context;
    const { index } = this.state;
    const { pathname } = this.props.location || this.props;
    const project = projects[index];
    return (
      <div className='section-container'>
        
        <div className='container'>
          {(pathname === '/')
          ? <h3>Projects</h3>
          : <h2>Projects</h2>
        }
          <AnimateOnChange animationIn="bounceIn" animationOut="bounceOut">
            {<Project pathname={pathname} key={index} img={project.img} title={project.title} alt={project.alt} host={project.host} clientRepo={project.clientRepo} serverRepo={project.serverRepo} description={project.description} stack={project.stack} />}
          </AnimateOnChange>
          <div className='another-container'>
            <div className='button-container'>
              <button className='slider' onClick={this.slideLeft}>{'<'}</button>
              <button className='slider' onClick={this.slideRight}>{'>'}</button> 
            </div>
          </div>
          <div className="project-container">
            {/*  T0DO 
                Add arduino projects section
                Update projects list in app component to include arduino
                Upload arduino sketches to github through platformIO
                 */}
          </div>
        </div>
        <br />
        
      </div>
      )
  }
}

// Will add support for gitHub API - get projects from there instead
// Make the page more interactive for those visiting

export default Projects;
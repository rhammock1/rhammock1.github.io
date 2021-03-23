import React from 'react';
import './Project.css';

const Project = function(props) {
  const {
    img,
    alt,
    host,
    title,
    clientRepo,
    serverRepo,
    description,
    stack,
    pathname,
    } = props;
  return (
    <div id='project-slider' className="detail-container project-container">
      <h3>Web based</h3>
      <img src={img} alt={alt} className="projectImg" />
      {(pathname === '/projects')
        ? <h3><a className='heading' rel='noreferrer' target='_blank' href={host}>{title}</a></h3>
        : <h4><a className='heading' rel='noreferrer' target='_blank' href={host}>{title}</a></h4>
      }
      <div className='repo-container'>
        <a rel='noreferrer' target='_blank' href={clientRepo}>Client Repo</a>
        {(serverRepo)
          ? <a rel='noreferrer' target='_blank' href={serverRepo}>Server Repo</a>
          : null }
      </div>
      <p>{description} </p>
      <p><strong>Stack: </strong>{stack}</p>
    </div>
  )
}

export default Project;
import React from 'react';

class ArduinoProject extends React.Component {
    render() {
        const {
            pathname,
            image,
            alt,
            title,
            description,
            repo,
            libraries,
        } = this.props;

        return (
            <div className="detail-container project-container">
            {/*  T0DO 
                Add arduino projects section
                Update projects list in app component to include arduino
                Upload arduino sketches to github through platformIO
                 */}
                 <h3>Arduino</h3>
                 <img src={image} alt={alt} className="projectImg" />
                {(pathname === '/projects')
                    ? <h3>{title}</h3>
                    : <h4>{title}</h4>
                }
                <div className='repo-container'>
                    <a rel='noreferrer' target='_blank' href={repo}>Public Repo</a>
                    
                </div>
                <p>{description} </p>
                <p><strong>Libraries: </strong>{libraries}</p>
            </div>

        )
    }
}

export default ArduinoProject;
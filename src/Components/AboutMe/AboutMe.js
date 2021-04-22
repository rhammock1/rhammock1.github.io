import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';

const AboutMe = function(props) {
  const { pathname } = props || {};
  return (
    <div className='section-container'>
      {(pathname === '/about')
        ? <h2>About Me</h2>
        : <h3>About Me</h3>
      }
      <div id="about" className ="detail-container">

        <p className='indent'>I am from Jacksonville, Florida originally. I was a Boy Scout growing up, and I earned the rank of <span className='emphasize'>Eagle Scout</span>. 
        I graduated college from Johnson & Wales University in 2019. I completed associates degrees in Culinary Arts
        and Baking and Pastry. I also received a <span className='emphasize'>bachelor's in Entrepreneurship</span>. This has led me to work with
        several restaurants in the Charlotte area and introduced me to Freshlist. I began to teach myself coding 
        a year ago. I made a lot of use of freeCodeCamp and LinkedIn Learn videos. Aside from coding I enjoy,
        cooking and baking, watching Netflix documentaries and anime, playing video games, and spending time with my family.  
        </p>

        <p className='indent'>Working with Freshlist, I was able to use HTML and CSS to edit our Shopify order slips to include or logo, format, and style. We were able to prototype an Instagram follower counter. The prototype was an HTML scrape coded with Python to pull the data we needed and then a seven-segment display was wired to a Raspberry Pi to show the data. Recently, I have built a full-stack web app allowing users to search through Freshlist's recipes. We have also set up an Express API with PostgreSQL database for a proprietary app to help facilitate business between Freshlist and local farmers</p>

        <p className='indent'>During my free time I have set up an Express server on Raspberry Pi, enabled and configured UFW firewall to access remotely with SSH. Also registered 2 domains (<span className='emphasize'>dinnerbear.com and smokeybear.dev</span>) and updated the respective DNS PTRs to both apps hosted on <span className='emphasize'>Firebase</span></p>

        <p className='indent'>I am proficient in <span className='emphasize'>Node.js, React, Express, and PostrgreSQL</span>. On the side I am teaching myself <span className='emphasize'>C/C++ and Python</span> to be able to interface with various microcontrollers and embedded devices. I am always eager to learn more.</p>

      </div>
      {(pathname === '/about')
        ? <button className="back" type="button"><Link to='/'>Back</Link></button>
        : null }
    </div>
    
    )
}

export default AboutMe;
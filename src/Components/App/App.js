import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../../Routes/About';
import Home from '../../Routes/Home';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import DinnerSS from './images/Dinner_SS_Wheel.png';
import RecipeProject from './images/recipe-project-ss.png';
import BookmarkProject from './images/bookmark-project-ss.png';
import SBCMain from './images/mainPageSS.png';
import hireLocal from './images/hireLocal.png';
import Context from '../../Context';
import Projects from '../../Routes/Projects';
import Contact from '../../Routes/Contact';
import './App.css';

class App extends React.Component {

  state = {
    projects: [
      {
        title: `What's For Dinner`,
        host: 'https://dinnerbear.com/',
        clientRepo: 'https://github.com/rhammock1/whats-for-dinner-client',
        serverRepo: 'https://github.com/rhammock1/whats-for-dinner-server',
        description: 'This app can help users decide what to do for dinner with the help of a fun spinning wheel. The app is for anyone who is having trouble deciding on dinner. Users can filter by restaurants or recipes. Users can sign up/login and save their own restaurants and recipes and can even mark favorites. I created this app to help my wife and I decide on dinner.',
        stack: 'JavaScript, React, Node.js, Express, PostgreSQL',
        img: DinnerSS,
        alt: 'What\'s For Dinner app home page screen shot',
        type: 'web',
      },
      {
        title: `Hire Local`,
        host: 'https://hire-local-client.vercel.app',
        clientRepo: 'https://github.com/rhammock1/hire-local-client',
        serverRepo: 'https://github.com/rhammock1/hire-local-server',
        description: 'This app\'s goal is to help connect local businesses with local talent. The app is for small and local businesses who don\'t often make job posts, and local people who are looking to help and support these businesses. Users can post new jobs and search for jobs by zip code. Users can apply for jobs by uploading a resume on sign up or on their account page. In my area, there are lots of restaurants and small businesses who don\'t make job posts when they\'re ready to hire- instead they use word-of-mouth to try and find new employees. This app aims to make it easier for them to make job posts and find local employees.',
        stack: 'JavaScript, React, Node.js, Express, PostgreSQL',
        img: hireLocal,
        alt: 'Hire Local app main page screen shot',
        type: 'web',
      },
      {
        title: `Sports Biz Cares Fundraising Raffle`,
        host: 'https://sbc-fundraising-campaign.vercel.app',
        clientRepo: 'https://github.com/rhammock1/sbc-random-raffler',
        serverRepo: 'https://github.com/rhammock1/sbc-raffle-server',
        description: 'Sports Biz Cares is 501(c)(3) non-profit, whose mission is to create career opportunities for individuals that are passionate about sports and currently underrepresented in the sports business. This is a simple PERN app that enables Sports Biz Cares to upload a csv file and spin a wheel to randomly choose a winner for their raffles. The winner is randomly chosen based on the number of entries each person has according to the csv file. During 2020 Giving Tuesday, Sports Biz Cares chose to do a raffle-like auction. I built this app for them to make choosing a winner, easier and non-biased.',
        stack: 'JavaScript, React, Node.js, Express, PostgreSQL',
        img: SBCMain,
        alt: 'SBC fundraising raffle app home page screen shot',
        type: 'web',
      },
      {
        title: 'Freshlist Recipe Search',
        host: 'https://freshlist-recipe-search.vercel.app/',
        clientRepo: 'https://github.com/rhammock1/freshlist-recipe-search',
        serverRepo: '',
        description: 'This is an app to search through Freshlist\'s recipes. Users can directly search through recipes or they can decide to filter by the course. This app is for users who are interesting finding new and exciting recipes. I built this app to practice with React Context and Router.',
        stack: 'JavaScript, React, HTML5, CSS3',
        img: RecipeProject,
        alt: 'Freshlist recipe app home page screen shot',
        type: 'web',
      },
      {
        title: 'Website Bookmark App',
        host: 'https://thinkful-ei-tiger.github.io/robert-hammock-bookmark-app/',
        clientRepo: 'https://github.com/thinkful-ei-tiger/robert-hammock-bookmark-app',
        serverRepo: '',
        description: 'This app can add, edit, and delete website bookmarks. Bookmarks can be rated and expanded to see more details about it. This app is for users who want an easy way to save bookmarks for later. I built this app because it was a project during my time at Thinkful.',
        stack: 'JavaScript, JQuery, HTML5, CSS3, Webpack',
        img: BookmarkProject,
        alt: 'Bookmark app home page screen shot',
        type: 'web',
      },
    ],
    temperature: 0,
    data: [],
    error: null,
    repos: [],
  }

  componentDidMount() {
    // Eventually add in github api 
    const URL = 'https://damp-bayou-68931.herokuapp.com/temperature';
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        this.setState({ temperature: resJson.temperature, data: resJson.data });
      })
      .catch((error) => {
        this.setState({ error });
      })

    
  }

  render() {
    const value = {
      projects: this.state.projects,
      temp: this.state.temperature,
      data: this.state.data
    }
    return (
      <Context.Provider value={value} >
        <Header />
        <main>
          <div className="big-container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/projects' component={Projects} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </div>
        </main>
        <Footer />
      </Context.Provider>

      )
  }
}

export default App;
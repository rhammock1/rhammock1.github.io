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
import ledStrip from './images/ledSensorButton.JPG';
import balconyTemp from './images/balconyTempSensor.JPG';
import fullBreakBeam from './images/breakBeamFullView.JPG';
import zoomClone from './images/zoomCloneCrop.png';
import noise from './images/noiseMachine.jpg';
import Context from '../../Context';
import Projects from '../../Routes/Projects';
import Contact from '../../Routes/Contact';
import './App.css';
import helpers from '../../helper-functions';

class App extends React.Component {

  state = {
    projects: [],
    temperature: 0,
    data: [],
    error: null,
    repo: {},
    images: [
      {
        id: 1,
        image: zoomClone,
      },
      {
        id: 2,
        image: DinnerSS,
      },
      {
        id: 3,
        image: hireLocal,
      },
      {
        id: 4,
        image: SBCMain,
      },
      {
        id: 5,
        image: RecipeProject,
      },
      {
        id: 6,
        image: BookmarkProject,
      },
      {
        id: 7,
        image: ledStrip,
      },
      {
        id: 8,
        image: balconyTemp,
      },
      {
        id: 9,
        image: fullBreakBeam,
      },
      {
        id: 10,
        image: noise,
      }
      
    ]
  }

  async componentDidMount() {
    // Eventually add in github api 
    const URL = 'http://9098781dacfc.ngrok.io' || 'https://damp-bayou-68931.herokuapp.com';
    // const URL = 'http://localhost:8080';

    await Promise.all([fetch(`${URL}/temperature`, {
      headers: {
        clientkey: process.env.REACT_APP_BASE_KEY,
      }
    }), fetch(`${URL}/projects`, {
      headers: {
        clientkey: process.env.REACT_APP_BASE_KEY,
      }
    })])
      .then(([resTemp, resProjects]) => {
          if (!resTemp.ok) {
            return resTemp.json().then((e) => Promise.reject(e));
          }
          if (!resProjects.ok) {
            return resProjects.json().then((e) => Promise.reject(e));
          }

          return Promise.all([
            resTemp.json(),
            resProjects.json(),
          ]);
      })
      .then(([temp, projects]) => {
        this.setState({
          temperature: temp.temperature,
          data: temp.data,
          projects
        });
      })
      .catch((error) => {
        this.setState({ error });
      });

    const repos = await helpers.getRepos();
    this.setState({repo: repos[0]});

  }

  render() {
    const { projects, images, temperature, data, repo } = this.state;
    const value = {
      projects,
      images,
      temperature,
      data,
      repo, 
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
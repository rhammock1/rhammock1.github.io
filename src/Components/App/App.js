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
    projects: [],
    temperature: 0,
    data: [],
    error: null,
    repos: [],
    images: [
      {
        id: 1,
        image: DinnerSS,
      },
      {
        id: 2,
        image: hireLocal,
      },
      {
        id: 3,
        image: SBCMain,
      },
      {
        id: 4,
        image: RecipeProject,
      },
      {
        id: 5,
        image: BookmarkProject,
      },
    ]
  }

  async componentDidMount() {
    // Eventually add in github api 
    const URL = 'https://damp-bayou-68931.herokuapp.com';

    await Promise.all([fetch(`${URL}/temperature`), fetch(`${URL}/projects`)])
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

    
  }

  render() {
    const value = {
      projects: this.state.projects,
      images: this.state.images,
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
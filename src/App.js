import './App.css';
import React from 'react';
import Categories from './Components/Categories';
import Header from './Components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Tech from './Components/Tech';
import Men from './Components/Men';
import Books from './Components/Books';
import Home from './Components/Home';



class App extends React.Component{


  render(){
    return (
      <Router>
        <div className="container">
          <Route exact path='/' children={<Header/>}/>
          <Route exact path='/' children={<Categories/>}/>
          <Route path='/technologies' children={<Tech/>}/>
          <Route path='/humans' children={<Men/>}/>
          <Route path='/edu' children={<Books/>}/>
          <Route path='/accessories' children={<Home/>}/>



        </div>
      </Router>
    );
  }
}

export default App;

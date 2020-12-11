import React, {Component} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import SocialFollow from "./SocialFollow"
class App extends Component {  

  constructor(props){  
super(props);  
this.state = { showPopup: false };  
}  

  togglePopup() {  
this.setState({  
     showPopup: !this.state.showPopup  
});  
 }  

  render() {  
return (  
<div>  

 
<Router>
      <Navbar />
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
      </Switch>
    </Router>
    <SocialFollow/>
    </div>
);  
}  
}  

export default App;
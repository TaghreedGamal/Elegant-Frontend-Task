import React, { useState ,useEffect} from 'react'
import TopBar from './components/layouts/top-bar/top-bar';
import NavBar from './components/layouts/nav-bar/nav-bar';
import { BrowserRouter as Router,Switch,Route  } from 'react-router-dom';
import Home from './pages/home';
import Category from './pages/category';
import AllAuctions from './pages/allAuctions';
import Blog from './pages/blog';
import AboutUs from './pages/aboutUs';
import Register from './pages/register/register';
import Footer from './components/layouts/footer/footer';
import './App.scss'
import Dashboard from './pages/dashboard/dashboard';

function App() {
  const [user,setUser]=useState({username:"",email:""})
  const [isLogin,setIsLogin]=useState(false)
  const login =details =>{
    setUser({
        username:details.username,
        email:details.email
    })
    setIsLogin(true)
  }
  return (
    <div className="App">
      <TopBar isLogin={isLogin}/>
      <Router>
        <NavBar isLogin={isLogin}  userName={user.username}/>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/category" component={Category}/>
          <Route path="/aucations" component={AllAuctions}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/about-us" component={AboutUs}/>
          <Route expact path="/register" component={() => <Register user={user} login={login} setIsLogin={setIsLogin} setUser={setUser} />} />
          {isLogin &&  <Route path="/dashboard" component={()=><Dashboard userName={user.username} setUser={setUser} setIsLogin={setIsLogin}/>}/>}
          {!isLogin &&  <Route path="/dashboard" component={()=> <h1 className="warningMsg">You have to Login first</h1>}/>}
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

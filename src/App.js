import React, { useState, useEffect } from "react";
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer"
import { Login } from "./pages/Login"
import { ProductPage } from "./pages/ProductPage"
import { Dashboard } from "./pages/Dashboard"
import { NoPageFound } from "./pages/NoPageFound"

function App() {
  
  const products = [
    {
      id: 1,
      title: "Activity 1",
      description: "First Product description",
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      price: "$399"
    },
    {
      id: 2,
      title: "Activity 2",
      description: "Second product description",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      price: "$399"
    },
    {
      id: 3,
      title: "Activity 3",
      description: "Third Product description",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      price: "$399"
    },
    {
      id: 4,
      title: "Activity 4",
      description: "Fourth product description",
      image: "https://bestchineseproducts.com/wp-content/uploads/2019/05/best-huawei-products-2019.png",
      price: "$399"
    },
    {
      id: 5,
      title: "Activity 5",
      description: "Fifth Product description",
      image: "https://bestchineseproducts.com/wp-content/uploads/2019/05/best-huawei-products-2019.png",
      price: "$399"
    },
    {
      id: 6,
      title: "Activity 6",
      description: "Sixth product description",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      price: "$399"
    },
    {
      id: 7,
      title: "Activity 7",
      description: "Seventh Product description",
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      price: "$399"
    },
    {
      id: 8,
      title: "Activity 8",
      description: "Eight product description",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      price: "$399"
    },
    {
      id: 9,
      title: "Activity 9",
      description: "Nineth Product description",
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      price: "$399"
    },
    {
      id: 10,
      title: "Activity 10",
      description: "Tenth product description",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      price: "$399"
    },
  ]

  const [searchField, setSearchField] = useState("");
  const [currentPage, setCurrentPage] = useState("home")
  const [user, setUser] = useState({})
  const [handleLogin, setHandleLogin] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    checkLoginStatus()
  }, []);

  const onSearchChange = (e) => {
    e.preventDefault()
    setSearchField(e.target.value)
  }

  function checkLoginStatus () {
    axios
      .get("http://localhost:3001/logged_in",
        { withCredentials: true }
      ).then(res => {
          if (res?.data?.logged_in && !loggedIn) {
            setLoggedIn(true)
            setUser(res.data.user)
          } else if (!res.data.logged_in && loggedIn) {
            setLoggedIn(false)
            setUser({})
          }
        }).catch(err => console.log("check logged in?", err))

  }

  const filteredProducts = products?.filter(product => {
    return product?.title?.toLowerCase().includes(searchField.toLowerCase())
  })

  return (
    <div className="App">
      <Router>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser} />
        <Switch>
          <Route path='/' exact render={(props) => <Home products={filteredProducts} {...props} />} />
          <Route path='/login' exact render={(props) => <Login setHandleLogin={setHandleLogin} setUser={setUser} {...props} />} />
          <Route path='/product/:id' exact component={ProductPage} />
          <Route path='/dashboard' exact render={(props) => <Dashboard products={filteredProducts} {...props} />} />
          <Route component={NoPageFound} />
        </Switch>
      </Router>
    <Footer/>
    </div>
  );
}

export default App;

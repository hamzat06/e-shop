import React, { useState } from "react";
import './App.css';
import { Navbar } from "./components/Navbar";
// import { Home } from "./pages/Home";
import { Footer } from "./components/Footer"
// import { Login } from "./pages/Login"
// import { ProductPage } from "./pages/ProductPage"
import { Dashboard } from "./pages/Dashboard"

function App() {

  const products = [
    {
      id: 1,
      title: "First Product",
      description: "First Product description",
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      price: "$399"
    },
    {
      id: 2,
      title: "Second Product",
      description: "Second product description",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      price: "$399"
    },
    {
      id: 3,
      title: "Third Product",
      description: "Third Product description",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      price: "$399"
    },
    {
      id: 4,
      title: "Fourth Product",
      description: "Fourth product description",
      image: "https://bestchineseproducts.com/wp-content/uploads/2019/05/best-huawei-products-2019.png",
      price: "$399"
    },
    {
      id: 5,
      title: "Fifth Product",
      description: "Fifth Product description",
      image: "https://bestchineseproducts.com/wp-content/uploads/2019/05/best-huawei-products-2019.png",
      price: "$399"
    },
    {
      id: 6,
      title: "Sixth Product",
      description: "Sixth product description",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      price: "$399"
    },
    {
      id: 7,
      title: "Seventh Product",
      description: "Seventh Product description",
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      price: "$399"
    },
    {
      id: 8,
      title: "Eight Product",
      description: "Eight product description",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      price: "$399"
    },
    {
      id: 9,
      title: "Nineth Product",
      description: "Nineth Product description",
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      price: "$399"
    },
    {
      id: 10,
      title: "Tenth Product",
      description: "Tenth product description",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      price: "$399"
    },
  ]

  const [searchField, setSearchField] = useState("");
  const onSearchChange = (e) => {
    e.preventDefault()
    setSearchField( e.target.value )
  }

  const filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(searchField.toLowerCase())
  })

  return (
    <div className="App">
      <Navbar/>
      {/*<Home products={filteredProducts} searchChange={onSearchChange}/>*/}
      {/*<Login/>*/}
      {/*<ProductPage/>*/}
      <Dashboard products={products}/>
      <Footer/>
    </div>
  );
}

export default App;

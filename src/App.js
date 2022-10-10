import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/navbar";
// import Products from "./components/products";
// import Posts from "./components/posts";
// import ProductDetails from "./components/productDetails";
// import Dashboard from "./components/admin/dashboard";
import Home from "./components/home";
import NotFound from "./components/notFound";
import Rentals from './components/rentals';
import Movies from './components/movie';
import Customers from './components/customers';
import MoviesForm from './components/moviesForm';


class App extends Component {



  render() {
    return (
      <div >
        <NavBar />
        <div className="content">

          <Routes>
            {/* <Route path={"/products/:id"} element={<ProductDetails />} />
            <Route path={"/products"} element={<Products />} />
            <Route path="/posts/:year/"  >
              <Route path=":month/" element={<Posts />} />
              <Route path="" element={<Posts />} />

            </Route>
            <Route path={"/admin/*"} element={<Dashboard />} /> */}
            <Route path={'movies/:id'} element={<MoviesForm />} />
            <Route path={"/customers"} element={<Customers />} />
            <Route path={"/rentals"} element={<Rentals />} />
            <Route path={"/movies"} element={<Movies />} />
            <Route path={"/"} element={<Home />} />
            <Route path={'*'} element={<NotFound />} />
          </Routes>


        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Author from "../components/Author";
import Profile from "../components/Profile";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <main>
        <Routes>
          <Route path="/articles/:title" element={<Article/>}/>
          <Route path="/authors/:name" element={<Author/>}/>
          <Route path="/categories/:name" element={<Category/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/articles' element={<Articles/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/profile/*' element={<Profile/>}/>
        </Routes>
      </main>

      <Footer />
      
    </BrowserRouter>
  );
}

export default App;

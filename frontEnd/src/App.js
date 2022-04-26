import "swiper/swiper.min.css"
import "./assets/boxicons-2.0.7/css/boxicons.min.css"
import "./App.scss"

import { BrowserRouter, Route } from "react-router-dom"

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

import Routes from "./config/Routes"

import axios from "axios"
axios.defaults.baseURL = "http://localhost:3001/watchlist"

function App() {
  return (
    <>
      <BrowserRouter>
        <Route
          render={(props) => (
            <>
              <Header {...props} />
              <Routes />
              <Footer />
            </>
          )}
        />
      </BrowserRouter>
    </>
  )
}

export default App

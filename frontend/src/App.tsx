import React, { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom" 
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/Header'
import { Footer } from './components/Footer'

import { DownloadPage } from './pages/DownloadMaps/DownloadPage'
import { AddMapPage } from "./pages/AddMap/AddMapPage";
import { ArticlePage } from "./pages/ArticlePage";
import { AboutPage } from "./pages/About/AboutPage";

import { ModalContext, ModalState } from "./context/ModalContext";


function App() {

    const [page, setPage] = useState("main")  
    // const { modal, open, close } = useContext(ModalContext)

    return (
        <ModalState>
        <div className='App '>
        <div className="text-bg-dark d-flex flex-column min-vh-100 p-3 " data-bs-theme="dark">

            <Header />     

            <Routes>
                <Route path="/" element={ <DownloadPage /> } />
                <Route path="/downloadpage" element={ <DownloadPage /> } />
                <Route path="/addmap" element={ <AddMapPage /> } />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/articles" element={ <ArticlePage /> } />
            </Routes>

            <Footer />
        </div>
        </div>
        </ModalState>
    )
}

export default App;

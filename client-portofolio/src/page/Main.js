import React from "react"
import ReactDOM from "react-dom"
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import Beranda from "./Beranda"
import Komentar from './Komentar'

const Main = () => {
    return (

        ReactDOM.render(
            <React.StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Beranda />} />
                        <Route path="komentar/:id" element={<Komentar />} />
                    </Routes>

                </BrowserRouter>
            </React.StrictMode>,
            document.getElementById("root")
        )
    )
}

export default Main
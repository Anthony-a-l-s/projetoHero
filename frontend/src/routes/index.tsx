import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { BookDetails } from "../pages/BookDetails"
export const Approutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:id" element={<BookDetails/>}/>
            </Routes>
        </BrowserRouter>
    )
}
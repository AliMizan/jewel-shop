import { Navigate, Route, Routes } from "react-router"
import Layout from "./layouts/layout"
import HeroSection from "./components/hero-section"
import CategoriesSection from "./components/categories-section"
// import HomePage from "./pages/HomePage"
// import AuthCallbackPage from "./pages/AuthCallbackPage"
// //import Header from "./components/Header"



const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout><HeroSection/> <CategoriesSection/></Layout>}/>
        {/* <Route path="/auth-callback" element={<AuthCallbackPage/>} />
        <Route path="/user-profile" element={<span>profile </span>}/> */}
        <Route path="*" element={<Navigate to="/"/>} />
    </Routes> 
  )
}
export default AppRoutes
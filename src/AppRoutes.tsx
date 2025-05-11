import { Navigate, Route, Routes } from "react-router"
import Layout from "./layouts/layout"
import HeroSection from "./components/hero-section"
import CategoriesSection from "./components/categories-section"
import AuthCallbackPage from "./pages/AuthCallbackPage"
import UserProfilePage from "./pages/UserProfilePage"
import ProtectedRoute from "./auth/ProtectedRoute"
import ProductsPage from "./pages/products"
import DetailPage from "./pages/DetailPage"
import Cart from "./pages/Cart"
// import HomePage from "./pages/HomePage"
// import AuthCallbackPage from "./pages/AuthCallbackPage"
// //import Header from "./components/Header"



const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout><HeroSection/> <CategoriesSection/></Layout>}/>
        <Route path="/auth-callback" element={<AuthCallbackPage/>} />
        <Route path="/products" element={<Layout> <ProductsPage/></Layout>}/>
        <Route path="/products/:category" element={<Layout> <ProductsPage/></Layout>}/>
        <Route path="/detail/:productId" element={
          <Layout showHero={false}>
            <DetailPage />
          </Layout>
        }
      />
      <Route path="/cart" element={<Layout> <Cart/></Layout>}/>

        <Route element={<ProtectedRoute/>} >
        
        <Route path="/user-profile" element={<Layout><UserProfilePage/></Layout>}/>
        </Route>
        {/* <Route path="*" element={<Navigate to="/"/>} /> */}
    </Routes> 
  )
}
export default AppRoutes
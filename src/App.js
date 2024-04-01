import './App.css';
import Prenavbar from './component/prenavbar';
import Navbar from './component/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Slider from './component/slider';
import data from "./data/data.json"
import Offers from './component/offers';
import Header from './component/header';
import Startproducts from './component/startproducts';
import Hotaccessoriesmenu from './component/hotaccessoriesmenu';
import Hotaccessories from './component/hotaccessories';
import Productreviews from './component/productreviews';
import Videos from './component/videos';
import Banner from './component/banner';
import Footer from './component/footer';
import Navoptions from './component/navoptions';

const banneR = data.banner
function App() {
  return (
    <Router>
      <Prenavbar />
      <Navbar />
      <Navoptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} accessories={data.accessories} audio={data.audio} />
      <Slider start={banneR.start} />
      <Offers offer={data.offer} />
      <Header text="STAR PRODUCTS" />
      <Startproducts startproduct={data.starProduct} />
      <Header text="HOT ACCESSORIES" />
      <Hotaccessoriesmenu />
      <Routes>
        <Route exact path="/music" element={<Hotaccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
        <Route exact path="/smartdevices" element={<Hotaccessories smartdevices={data.hotAccessories.smartDevice} smartdevicesCover={data.hotAccessoriesCover.smartDevice} />} />
        <Route exact path="/home" element={<Hotaccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
        <Route exact path="/lifestyle" element={<Hotaccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />} />
        <Route exact path="/mobileaccessories" element={<Hotaccessories mobileaccessories={data.hotAccessories.mobileAccessories} mobileaccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>
      <Header text="PRODUCT REVIEWS" />
      <Productreviews productreviews={data.productReviews} />
      <Header text="VIDEOS" />
      <Videos videos={data.videos} />
      <Header text="IN THE PRESS" />
      <Banner end={banneR.end} />
      <Footer footer={data.footer} />
    </Router>
  )
}
export default App;

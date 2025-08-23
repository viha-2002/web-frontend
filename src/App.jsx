import "./App.css";
import Header from "./components/header.jsx";
import ProductCard from "./components/productCard.jsx";

function App() {
  return (
    <>
      <Header />
      <ProductCard name="Apple Laptop" description="wef fwf wef wfe" price="$1200" picture="https://lipsum.app/id/3/1600x900"/>
    </>
  );
}

export default App;

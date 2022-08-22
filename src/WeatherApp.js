import Form from "./Form";
import Headings from "./Headings";
import Description from "./Description";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Form />
        <Headings />
        <Description />
        <Footer />
      </div>
    </div>
  );
}

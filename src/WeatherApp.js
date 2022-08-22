import Form from "./Form";
import Description from "./Description";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Form />
        <Description />
        <Footer />
      </div>
    </div>
  );
}

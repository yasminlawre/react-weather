import Form from "./Form";
import Headings from "./Headings";
import Description from "./Description";
import Footer from "./Footer";
import "./weather.css";

export default function App() {
  return (
    <div className="App container">
      <Form />
      <Headings />
      <Description />
      <Footer />
    </div>
  );
}

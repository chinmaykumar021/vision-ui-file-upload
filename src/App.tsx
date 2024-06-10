import "./App.css";
import Hero from "./components/Hero";
import MultipleFileUploader from "./components/MultipleFileUploader";

function App() {
  return (
    <div className="max-container custom-scroll">
      <Hero />
      <MultipleFileUploader />
    </div>
  );
}

export default App;

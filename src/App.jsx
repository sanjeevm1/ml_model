// import logo from './logo.svg';
// import './App.css';


import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Navigator } from "./components/Navigator";
import { TextGen } from "./pages/TextGen";
import { SentimentAnalysis } from "./pages/SentimentAnalysis";
import StudentPerformance from "./pages/StudentPerformance";

function App() {
  return (
     
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Navigator/>}>
          <Route path="/text-gen" element={<TextGen/>}/>
          <Route path="/comprehension" element={<SentimentAnalysis/>}/>
          <Route path="/student-performance" element={<StudentPerformance/>}/>
        </Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;

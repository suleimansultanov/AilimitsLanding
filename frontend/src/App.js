import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import Home from "@/pages/Home";
import CvSite from "@/cv/CvSite";
import { AILIMITS_PATH } from "@/lib/paths";

// "/" and the tab routes are the CV; the AILIMITS landing lives under /projects/ailimits.
// Login/Admin (waitlist admin) need the FastAPI backend, which is not deployed on
// GitHub Pages, so they are not routed here. Their files stay in src/pages.
function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CvSite />} />
            <Route path="/experience" element={<CvSite />} />
            <Route path="/projects" element={<CvSite />} />
            <Route path="/education" element={<CvSite />} />
            <Route path="/skills" element={<CvSite />} />
            <Route path={AILIMITS_PATH} element={<Home />} />
            {/* Old URLs */}
            <Route path="/founder" element={<Navigate to="/" replace />} />
            <Route path={`${AILIMITS_PATH}/founder`} element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;

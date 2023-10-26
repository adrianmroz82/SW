import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Characters } from "./pages/Characters";
// import { ErrorPage } from "./pages/ErrorPage";
// import { CharacterDetails } from "./components/CharacterDetails/CharacterDetails";
// import { VehicleDetails } from "./components/DetailsPages/VehicleDetails";
// import { HomeworldDetails } from "./components/DetailsPages/HomeworldDetails";

import { Characters } from "./pages/Characters";
import { CharacterDetails } from "./pages/CharacterDetails";
import classes from "./App.module.scss";

export function App() {
  return (
    <div className={classes.container}>
      <Router>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
          {/* <Route path="/vehicles/:id" element={<VehicleDetails />} /> */}
          {/* <Route path="/planets/:id" element={<HomeworldDetails />} /> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

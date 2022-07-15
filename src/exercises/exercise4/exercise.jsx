import "exercise.css";
import ImageList from "ImageList";
import Navigation from "Navigation";
import NotFound from "NotFound";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" element={<ImageList />} />
          <Route path="/pictures" element={<ImageList />} />
          <Route path="*" element={<NotFound />} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;

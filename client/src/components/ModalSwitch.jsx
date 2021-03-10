import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";
import Login from "../components/Login";
import PhotoGallery from "../components/photogalery/PhotoGallery";
export default function ModalSwitch() {
  let location = useLocation();

  // This piece of state is set when one of the
  // gallery links is clicked. The `background` state
  // is the location that we were at when one of
  // the gallery links was clicked. If it's there,
  // use it as the location for the <Switch> so
  // we show the gallery in the background, behind
  // the modal.
  let background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/" component={PhotoGallery} />
      </Switch>

      {/* Show the modal when a background page is set */}
      {background && <Route path="/login" component={Login} />}
    </div>
  );
}

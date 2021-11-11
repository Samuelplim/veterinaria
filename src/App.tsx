import { BrowserRouter, Route } from "react-router-dom";
//import GlobalStyles from "./styles/GlobalStyles";
//<Route path="/Register" exact component={Register} />
import { SignIn } from "./screens/SignIn";
import { Register } from "./screens/Register";
function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <SignIn />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>
    </BrowserRouter>
  );
}

export default App;

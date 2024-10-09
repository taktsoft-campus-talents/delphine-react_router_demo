import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header";

function Contacts() {
  return (
    <div>
      <p>I am Contacts</p>
      {/* <a href="/">Contacts</a> */}
      {/* <Link to={`/`}>Home</Link> */}
      <Outlet></Outlet>
    </div>
  );
}

export default Contacts;

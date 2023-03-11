import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Content />
    <Footer />
    {/* <div>Home || About us || Login here || Contact us</div> 
    <br />
    <br />
    <table border="1">
      <tr>
        <td>names</td>
        <td>marks</td>
      </tr>
      <tr>
        <td>rohan</td>
        <td>50</td>
      </tr>
      <tr>
        <td>pranay</td>
        <td>80</td>
      </tr>
      <tr>
        <td>nirav</td>
        <td>65</td>
      </tr>
    </table>
    <br />
    <br />
    <img
      src="https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?cs=srgb&dl=pexels-pixabay-158028.jpg&fm=jpg"
      height="400px"
      width="620px"
      alt=""
    ></img>
    <img
      src="https://media.gettyimages.com/id/157672314/photo/lawn-and-formal-garden.jpg?s=612x612&w=gi&k=20&c=7h1UF3rzEQXSoLyi9rVGN1yfA6rey_fH1fmCnHLnJhU="
      alt=""
      height="400px"
      width="620px"
    ></img>
    <img
      src="https://assets.architecturaldigest.in/photos/622268cae66a108a6c6e5fa7/4:3/w_1440,h_1080,c_limit/12%20beautiful%20architectural%20gardens%20around%20the%20world%20.jpg"
      alt=""
      height="400px"
      width="620px"
    ></img>
    <br />
    <br />
    <h1>Latest Movie names</h1>
    <ul>
      <li>Hera Pheri 3</li>
      <li>Gaddar 2</li>
      <li>Pathan</li>
      <li>KGF</li>
    </ul>  */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

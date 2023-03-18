import react from "react";
import "./CSS/Header.css";
import img1 from "./images/headimg1.jpg";
import img2 from "./images/headimg2.jpg";
import img3 from "./images/headimg3.jpg";
export default function Header() {
  return (
    <>
      <div className="slider">
        <div className="bxslider">
          <div>
            <img
              src={img1}
              title="Coffee 1"
              alt=""
              width="100%"
              height="700px"
            />
            <h2>Jewellery Collection</h2>
            <h3>Turn Your Dream</h3>
          </div>
          <div>
            <img
              src={img2}
              alt=""
              title="Coffee 2"
              width="100%"
              height="700px"
            />
            <h2>Beautiful Jewellry</h2>
            <h3>New Classic Items</h3>
          </div>
          <div>
            <img
              src={img3}
              alt=""
              title="Coffee 3"
              width="100%"
              height="700px"
            />
            <h2>Unique Jewellry</h2>
            <h3>Shine With Luxury</h3>
          </div>
        </div>
      </div>
      <div className="Navbar">
        <div className="logo">
          <h1>ENTERPRISE</h1>
        </div>
        <div className="Menu">
          <ul>
            <li>
              <a href="">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">Gallary</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

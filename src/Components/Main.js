import react from "react";
import img4 from "./images/infoimg.jpg";
import img5 from "./images/proimg2.jpg";
import img6 from "./images/proimg3.jpg";
import img7 from "./images/proimg4.jpg";
import img8 from "./images/proimg5.jpg";
import "./CSS/Main.css";
export default function Main() {
  return (
    <>
      <div className="container">
        <div className="image">
          <img
            className="imgstart"
            src={img4}
            alt=""
            height="400px"
            width="500px"
          ></img>
        </div>
        <div className="info">
          <h1>
            Perfect Jewellery <br />
            For You
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor
            sit amet
          </p>
          <button>read more</button>
        </div>
      </div>
      <section className="gallary">
        <div className="proinfo">
          <div className="image1 ">
            <img src={img5} alt=""></img>
            <div className="imgHeading">
              <h1>hello</h1>
            </div>
          </div>
          <div className="gallaryimg">
            <img src={img6} alt=""></img>
            <div className="imgHeading">
              <h1>hello</h1>
            </div>
          </div>
          <div className="gallaryimg">
            <img src={img7} alt=""></img>
            <div className="imgHeading">
              <h1>hello</h1>
            </div>
          </div>
          <div className="gallaryimg">
            <img src={img8} alt=""></img>
            <div className="imgHeading">
              <h1>hello</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="review">
        <div className="review-main">
          <div className="name">
            <h1>j p jewellers</h1>
          </div>
          {/* <div className="slider-main"> */}
          <div class="bxslider1">
            <div>
              <h1>how r u?</h1>
            </div>
            <div>
              <h1>how r u?</h1>
            </div>
            <div>
              <h1>how r u?</h1>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import iphone_14 from "../images/iphone_14_1.jpg";
import iphone from "../images/iphone.jpg";
import ipad from "../images/ipad_1.jpg";
import macbook from "../images/macbook_pro_14.jpg";
import watch from "../images/watch.jpg";

function Home() {
  return (
    <div className="home">
      <Link
        to="iphone/iphone-14-pro"
        className="text-decoration-none  text-white"
      >
        <div>
          <div className="bg-black text-center">
            <h2 className="m-0 fs-1 pt-4 pb-0">iPhone 14 Pro</h2>
            <h3 className="m-0 p-2 fs-4">Pro. Beyond.</h3>
            <img src={iphone_14} className="img-fluid" alt="Iphone 14 Pro" />
          </div>
        </div>
      </Link>
      <Link to="iphone" className="text-decoration-none text-black">
        <div className="text-center">
          <h2 className="m-0 fs-1 pt-4 pb-0">iPhone 14</h2>
          <h3 className="m-0 p-2 fs-4">Wonderfull.</h3>
          <img src={iphone} className="img-fluid" alt="Iphones" />
        </div>
      </Link>
      <Link
        to="ipad"
        className="half text-decoration-none text-black float-start bg-white"
      >
        <div className="text-center">
          <h2 className="m-0 fs-1 pt-4 pb-0">iPad</h2>
          <h3 className="m-0 p-2 fs-4">Lovable. Drawable. Magical.</h3>
          <img src={ipad} className="img-fluid" alt="Ipad" />
        </div>
      </Link>
      <Link
        to="mac/macbook-pro"
        className="half text-decoration-none text-black float-start"
      >
        <div className="text-center">
          <img src={macbook} className="img-fluid mt-5" alt="Ipad" />
          <h2 className="mt-4 fs-1 pt-4 pb-0 text-white">MacBook Pro</h2>
          <h3 className="m-0 p-2 fs-4 text-white">
            Supercharged by M2 Pro and M2 Max.
          </h3>
        </div>
      </Link>
      <Link to="watch" className="text-decoration-none text-white float-start">
        <div className="text-center bg-black pb-5">
          <h2 className="m-0 fs-1 pt-4 pb-0 text-uppercase">
            Apple Watch Series 8
          </h2>
          <h3 className="m-0 p-2 fs-4">A healthy leap ahead.</h3>
          <img src={watch} className="img-fluid" alt="Watches" />
        </div>
      </Link>
    </div>
  );
}

export default Home;

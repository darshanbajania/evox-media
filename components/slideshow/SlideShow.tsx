import React from "react";
import { Fade } from "react-slideshow-image";

const fadeImages = [
  {
    url: "slideshow_1.jpg",
    caption: "First Slide",
  },
  {
    url: "slideshow_2.jpg",
    caption: "Second Slide",
  },
  {
    url: "slideshow_3.jpg",
    caption: "Third Slide",
  },
  {
    url: "slideshow_4.jpg",
    caption: "Third Slide",
  },
];
// const fadeImages = [
//   {
//     url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     caption: "First Slide",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//     caption: "Second Slide",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     caption: "Third Slide",
//   },
// ];
const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
};
const properties = {
  prevArrow: (
    // <button style={{ ...buttonStyle }}>
    //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
    //     <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
    //   </svg>
    // </button>
    <> </>
  ),
  nextArrow: (
    // <button style={{ ...buttonStyle }}>
    //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
    //     <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
    //   </svg>
    // </button>
    <></>
  ),
};
const Slideshow = () => {
  return (
    <div className="slide-container ">
      <Fade {...properties}>
        {fadeImages.map((fadeImage, index) => (
          <div className="w-full h-[70vh] md:h-[100vh]" key={index}>
            <img
              className="object-cover w-full h-full"
              style={{ width: "100%" }}
              src={fadeImage.url}
            />
            {/* <h2>{fadeImage.caption}</h2> */}
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;

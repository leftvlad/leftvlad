import BeforeImage from "../assets/before.jpg";
import AfterImage from "../assets/after.jpg";
import { useEffect } from "react";

function ExplorePicture() {
useEffect(()=>{
const compareSliderThumb = document.getElementById('.compare-slider-thumb');
const compareImageOverlay = document.getElementById('.compare-overlay');

const compareImages = (imageOverlay, thumb) => {
  const sliderWidth = 720;
  let isClicked = false;

  const slideCompareSlider = (x) => {
    imageOverlay.style.width = x + 'px';
    thumb.style.left = imageOverlay.offsetWidth - thumb.offsetWidth / 2 + 'px';
  };

  const getCursorPosition = (event) => {
    let x = 0;
    event = event || window.event;
    imageOverlayObject = imageOverlay.getBoundingClientRect(); 
    x = event.pageX - imageOverlayObject.left;
    x = x - window.pageXOffset;
    return x;
  };

  const slideMove = (event) => {
    if (!isClicked) return false;
    let position = getCursorPosition(event);
    if (position < 0) position = 0;
    if (position > sliderWidth) position = sliderWidth;
    slideCompareSlider(position);
  };

  const slideReady = (event) => {
    event.preventDefault();
    isClicked = true;
    window.addEventListener('mousemove', slideMove);
    window.addEventListener('touchmove', slideMove);
  };

  const slideFinish = () => {
    isClicked = false;
  };

  thumb.addEventListener('mousedown', slideReady);
  window.addEventListener('mouseup', slideFinish);
  thumb.addEventListener('touchstart', slideReady);
  window.addEventListener('touchstop', slideFinish);
};

compareImages(compareImageOverlay, compareSliderThumb);

})

  return (
    <div className="dark-bg" id="explore">
        <div className="container explore-section">
          <div className="explore-wrapper">
            <h2 className="section-title underlined-title">Picture explore</h2>
            <p className="section-content-first">
              Las Meninas is a 1656 painting by Diego Velázquez, the leading
              artist of the Spanish Golden Age.
            </p>
            <p className="section-content">
              It was cleaned in 1984 to remove a
              <span className="gold">"yellow veil"</span> of dust that had gathered
              since the previous restoration in the 19th century.
            </p>
            <p className="section-content">
              The cleaning provoked furious protests, not because the picture
              had been damaged in any way, but because it looked different.
            </p>
          </div>
          <div className="compare">
            <div className="compare-img">
              <img
                src={BeforeImage}
                alt="Las Meninas after restoration"
                width="720"
                height="700"
              />
            </div>
            <div id="compare-slider-thumb" className="compare-slider-thumb"></div>
            <div id="compare-overlay" className="compare-img compare-overlay">
              <img
                src={AfterImage}
                alt="Las Meninas before restoration"
                width="720"
                height="700"
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default ExplorePicture;




import "./GalleryStyles.css";
import Mountain1 from "../assets/img/1.jpg";
import Mountain2 from "../assets/img/2.jpg";
import Mountain3 from "../assets/img/3.jpg";
import Mountain4 from "../assets/img/4.jpg";
import Mountain5 from "../assets/img/5.jpg";
import Mountain6 from "../assets/img/6.jpg";
import Mountain7 from "../assets/img/7.jpg";
import Mountain8 from "../assets/img/8.jpg";
import Mountain9 from "../assets/img/9.jpg";
import Mountain10 from "../assets/img/10.jpg";
import Mountain11 from "../assets/img/11.jpg";
import Mountain12 from "../assets/img/12.jpg";
import Mountain13 from "../assets/img/13.jpg";
import Mountain14 from "../assets/img/14.jpg";

// import Mountain2 from "../assets/2.jpg";
// import Mountain3 from "../assets/3.jpg";
// import Mountain4 from "../assets/4.jpg";
import { useEffect } from "react";
// {HomeImage}
function Gallery() {
    useEffect(()=>{
    const NUMBER_OF_IMAGES = 13;
    const gallery = document.getElementById('test');
    const sources = [];
    
    const images = [Mountain1, Mountain2, Mountain3, Mountain4, Mountain5, Mountain6, Mountain7, Mountain8, Mountain9, Mountain10, Mountain11, Mountain12, Mountain13, Mountain14]

    for (let i = 1; i <= NUMBER_OF_IMAGES; i++) {
      sources.push(i);
    }
    
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];
    
      }
      return array;
    };
    
    const createAndAddNewImgElement = (number) => {
      const image = document.createElement('img');
      image.classList.add('gallery-img');
      image.src = images[number-1];//`../assets/${number}.jpg`;
      image.alt = `gallery image`;
    //   console.log(gallery);
      gallery.append(image);
    };
    
    const fillGallery = (array) => {
      shuffleArray(array);
      array.map((item) => createAndAddNewImgElement(item));
    };
    
    fillGallery(sources);
    





const galleryImages = document.querySelectorAll('.gallery-img');

function optimizeFunctionCall(func, period = 20, immediate = true) {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, period);

    if (callNow) func.apply(context, args);
  };
}


function showAnimatedImages(event) {
  galleryImages.forEach((image) => {
    const heightOfScrolling = window.scrollY;
    const imageHeight = image.height;
    const imageOffset = image.getBoundingClientRect();
    const imageOffsetTop = heightOfScrolling + imageOffset.top;
    const imageBottom = imageOffsetTop + imageHeight;
    const imageShouldBeShownFrom = imageOffsetTop - 1.3 * imageHeight;
    const isTimeToShowImage = heightOfScrolling > imageShouldBeShownFrom;
    const isImageNotScrolledToEnd = heightOfScrolling < imageBottom;
    if (isTimeToShowImage && isImageNotScrolledToEnd) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', optimizeFunctionCall(showAnimatedImages, 10));
})
  return (
    <>
      <div className="dark-bg" id="gallery">
        <div className="container gallery-container">
          
          <div className="gallery-outer-container">
            <div id="test" className="gallery-inner-container"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;

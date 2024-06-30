import"./ImageBanner.scss"
import { useState } from "react";

 export function ImageBanner(props) {

  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);
  
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

const moveToNext = () => {
  setCurrentPicture((currentPicture +1) % pictures.length);
};

const moveToPrevious = () => {
  const newCurrentPicture = currentPicture - 1;
  if (newCurrentPicture < 0) {
    setCurrentPicture(pictures.length - 1);
    return;
  }
  setCurrentPicture(currentPicture - 1);
};



  return (
    <div className="image__banner">
      <div className="image__container">
   {pictures.map((pic, i) => (
     <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
    ))}
    </div>
    <button className="btn btn-previous" onClick={moveToPrevious}>
    <i className="fa-solid fa-chevron-left"></i>
      </button>
      <span className="slide-counter"> 
       {currentPicture +1} / {pictures.length}
        </span>
    <button className="btn btn-next" onClick={moveToNext}>
    <i className="fa-solid fa-chevron-right"></i>
    </button>
  </div>
  )
}

export default ImageBanner

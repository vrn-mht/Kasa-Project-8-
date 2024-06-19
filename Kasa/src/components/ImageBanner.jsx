
 export function ImageBanner(props) {
  return (
    <div>
    <img className="img-desktop" src={props.imageUrl} alt="Photo de l'appartment" />
    {/* <img className="img-mobile" src={props.imageUrl} alt="Photo de l'appartment Mobile" /> */}
  </div>
  )
}

export default ImageBanner

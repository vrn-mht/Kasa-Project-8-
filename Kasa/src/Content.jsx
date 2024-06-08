
import "./Content.css"

function Content(props) {
  const { children } = props;
  return (
    <div className='main'>
      {children}
    </div>
  );
}

export default Content;

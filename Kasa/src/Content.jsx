
import "./Content.scss"

function Content(props) {
  const { children } = props;
  return (
    <div className='main'>
      {children}
    </div>
  );
}

export default Content;

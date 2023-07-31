import './Button.scss';

function Button({ handleClick, text, backgroundColor }) {
  return (
    <button style={{backgroundColor : backgroundColor}} type="button" className="button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;

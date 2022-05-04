import './button.css';

export default function Button(props) {
  const { type, onClick, children } = props;

  const style = type ? `button ${type}` : 'button';

  return (
    <button
      className={style}
      onClick={onClick}
    >
      {children}
    </button> 
  )
}
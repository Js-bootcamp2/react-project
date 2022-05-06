import './ViewAllButton.scss';

export function ViewAllButton({ text, onClick }) {

  return (
    <span className="view-all-button" onClick={onClick}>{text}</span>
  )
}
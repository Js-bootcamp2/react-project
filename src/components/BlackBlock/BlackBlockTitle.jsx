import './BlackBlockTitle.scss';

export default function BlackBlockTitle({
  firstText, firstColor, secondText, secondColor
}) {

  return (
    <>
      {firstText && <span style={{color: firstColor}} className='first'>{firstText}</span>}
      {' '}
      {secondText && <span style={{color: secondColor}} className='second'>{secondText}</span>}
    </>
  )
}
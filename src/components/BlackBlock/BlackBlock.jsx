import './BlackBlock.scss';

export default function BlackBlock({ 
  title,
  coloredTitle,
  subTitle,
  products,
}) {

  return (
    <section className="black_container">
      <h1>Jersey {title}</h1>
      <hr/>
      <h2>{coloredTitle}</h2>
      <hr/>
      <h2>{subTitle}</h2>
      <div className="products">
        {products.map((item, i) => {
          return (
            <div key={i} className="products-card">
              <img width={100} height={120} src={item.image} alt="" />
              <div className="products-card__name">{item.name}</div>
              <div className="products-card__description">{item.description}</div>
            </div>
          )
        })}
      </div>
      <div className="cards">
        <div className="products-card__name">{'SUPER TITLE'}</div>
      </div>
    </section>
  )
}
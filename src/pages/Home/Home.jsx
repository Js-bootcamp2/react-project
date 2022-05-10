import React, { useState, useEffect } from 'react';
import BlackBlock from '../../components/BlackBlock/BlackBlock';
import BlackBlockTitle from '../../components/BlackBlock/BlackBlockTitle';

const baseURL = 'https://api.sampleapis.com/coffee/hot';

export default function Home({cart, setCart}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    fetchProducts();
  }, [])

  const fetchProducts = () => {
    setLoading(true);
    fetch(baseURL)
      .then(resp => resp.json())
      .then(data => {
        setProducts(data.map(item => ({...item, name: item.title})))
        setLoading(false);
      }).catch(e => {
        console.log("e", e.message)
        setLoading(false);
      });
  }

  const bestSellersProducts = [
    {
      id: 1,
      name: 'Lebron James',
      image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/884b3cb9-1716-45d3-a7ba-289fae30a14d/%D0%B4%D0%B6%D0%B5%D1%80%D1%81%D0%B8-%D0%BD%D0%B1%D0%B0-swingman-lakers-icon-edition-2020-hhgqSg.png',
      description: 'Nike NBA',
      price: '$100',
    },
    {
      id: 2,
      name: 'Michael Jordan',
      image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/884b3cb9-1716-45d3-a7ba-289fae30a14d/%D0%B4%D0%B6%D0%B5%D1%80%D1%81%D0%B8-%D0%BD%D0%B1%D0%B0-swingman-lakers-icon-edition-2020-hhgqSg.png',
      description: 'Nike NBA',
      price: '$100',
    },
    {
      id: 3,
      name: 'Stephan Curry',
      image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/884b3cb9-1716-45d3-a7ba-289fae30a14d/%D0%B4%D0%B6%D0%B5%D1%80%D1%81%D0%B8-%D0%BD%D0%B1%D0%B0-swingman-lakers-icon-edition-2020-hhgqSg.png',
      description: 'Nike NBA',
      price: '$100',
    },
    {
      id: 4,
      name: 'Aktan Kerimbekov',
      image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/884b3cb9-1716-45d3-a7ba-289fae30a14d/%D0%B4%D0%B6%D0%B5%D1%80%D1%81%D0%B8-%D0%BD%D0%B1%D0%B0-swingman-lakers-icon-edition-2020-hhgqSg.png',
      description: 'Nike NBA',
      price: '$100',
    },
    {
      id: 5,
      name: 'Shakil Oneal',
      image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/884b3cb9-1716-45d3-a7ba-289fae30a14d/%D0%B4%D0%B6%D0%B5%D1%80%D1%81%D0%B8-%D0%BD%D0%B1%D0%B0-swingman-lakers-icon-edition-2020-hhgqSg.png',
      description: 'Nike NBA',
      price: '$100',
    },
  ]

  console.log('products', products)
  return (
    <>
       {loading ? (
         <div>Loading...</div>
       ) : (
        <BlackBlock
          title="coffee" 
          coloredTitle={
            <BlackBlockTitle
              firstText="Coffee" 
              firstColor="red"
            />
          }
          subTitle="collection"
          products={products}
          cart={cart}
          addToCart={setCart}
        />
      )}
      <BlackBlock
        title="KOBE BRYANT"
        coloredTitle={
          <BlackBlockTitle 
            firstText="KOBE" 
            secondText="BRYANT"
            firstColor="#FCBF05"
            secondColor="#0949EF" 
          />
        }
        subTitle="collection"
        products={bestSellersProducts}
        cart={cart}
        addToCart={setCart}
      />

      <BlackBlock
        title="1992 TEAM USA" 
        coloredTitle={
          <BlackBlockTitle 
            firstText="1992" 
            secondText="TEAM USA"
            firstColor="#0949EF"
            secondColor="#FB0223" 
          />
        }
        subTitle="collection"
        products={[]}
        cart={cart}
        addToCart={setCart}
      />
    </>
  )
}
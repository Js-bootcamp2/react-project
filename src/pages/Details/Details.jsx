import React from 'react';
import { useParams } from "react-router-dom";
import Button from '../../components/Button/button';
export default function Details({product, close}) {
  // const { productId } = useParams();

  // const details = {
  //   id: 1,
  //   name: 'Lebron James',
  //   image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/884b3cb9-1716-45d3-a7ba-289fae30a14d/%D0%B4%D0%B6%D0%B5%D1%80%D1%81%D0%B8-%D0%BD%D0%B1%D0%B0-swingman-lakers-icon-edition-2020-hhgqSg.png',
  //   description: 'Nike NBA',
  //   price: '$100',
  //   long_description: 'LeBron Raymone James Sr. (/ləˈbrɒn/; born December 30, 1984) is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA). Nicknamed "King James", he is widely considered one of the greatest players of all time and is often compared to Michael Jordan in debates over the greatest basketball player ever.[a] James has won four NBA championships, four NBA MVP awards, four NBA Finals MVP awards, three All-Star MVP awards, and two Olympic gold medals. James has scored the most points in the playoffs, the second most career points, and has the',
  //   age: 40,
  //   highSchool: 'St. Vincent–St. Mary'
  // }

  return (
    <div>
      <Button onClick={close}>Close X</Button>
      <h1>THIS IS DETAILS PAGE {product.id}</h1>
      <div>
        <div>{product.name}</div>
      </div>
      <img width={400} src={product.image} alt="" />
    </div>
  )
}
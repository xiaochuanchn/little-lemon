import React from 'react'
import "./styles/Testimonials.css"
import { avatar1, avatar2, avatar3, avatar4} from "../../assets"
const reviewsData = [
    {
      id: 10034,
      name: "Jane Mary",
      img: avatar1,
      rating: "8",
      text: "Authentic and delicious food.",
    },
    {
      id: 10035,
      name: "John Doe",
      img: avatar2,
      rating: "8.5",
      text: "Great ambiance and friendly staff.",
    },
    {
      id: 10036,
      name: "Jean Billie",
      img: avatar3,
      rating: "9",
      text: "Great place for an afternoon hangout!",
    },
    {
      id: 10037,
      name: "Jude Aloha",
      img: avatar4,
      rating: "8",
      text: "Will definitely visit again!",
    },
  ];

export default function Testimonials() {
  return (
    <div className='testimonials_container'>
      <h2 style={{textAlign:'center'}}>Testimonials</h2>
      <div>

      
      <ul>
        {reviewsData.map((review, index) => {
            return (
                <li key={index}>
                    <div className='review'>
                         <img src={review.img} alt="" />
                         <div className='review_header'>
                            <h3>{review.name}</h3>
                            <p>Rating:{review.rating}/10</p>
                            <p>{review.text}</p>
                        </div>
                    </div>
                </li>
            )
        })}
      </ul>
      </div>
    </div>
  )
}

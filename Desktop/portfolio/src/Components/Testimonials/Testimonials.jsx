import React from 'react'
import "./Testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

const data =[
  {
    avatar:AVTR1,
    name: 'Tina Willer',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci nostrum aperiam a accusantium natus dolore modi, repellendus ullam quibusdam magni nobis quo reiciendis possimus autem voluptatibus similique voluptas dicta!"
  },
  {
    avatar:AVTR2,
    name: 'John Doe',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci nostrum aperiam a accusantium natus dolore modi, repellendus ullam quibusdam magni nobis quo reiciendis possimus autem voluptatibus similique voluptas dicta!"
  },
  {
    avatar:AVTR3,
    name: 'Richard Mantez',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci nostrum aperiam a accusantium natus dolore modi, repellendus ullam quibusdam magni nobis quo reiciendis possimus autem voluptatibus similique voluptas dicta!"
  },
  {
    avatar:AVTR4,
    name: 'Stella Mantz',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci nostrum aperiam a accusantium natus dolore modi, repellendus ullam quibusdam magni nobis quo reiciendis possimus autem voluptatibus similique voluptas dicta!"
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <article className="testimonial">
          <div className="client_avatar">
            <img src={avatar} alt="Avatar one" />
          </div>
          <h5>{name}</h5>
            <small className="client_review">
              {review}
            </small>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials

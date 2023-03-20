import React from 'react'
import styles from './Slider.module.scss'
import { testimonials } from '../../data.js'
import left_arrow from '../../assets/icon-prev.svg'
import right_arrow from '../../assets/icon-next.svg'

const Slider = () => {
  return (
    <main>
      <section>
        <div className={styles.slider}>
          <div>
            <p className={styles.testimonial}>{testimonials[0].text}</p>
            <p className={styles.title}>
              {testimonials[0].title} <span>{testimonials[0].subTitle}</span>
            </p>
          </div>

          <figure>
            <img src={testimonials[0].img} alt="user" />
            <div className={styles.buttons}>
              <button className={styles.lbutton}>
                <img src={left_arrow} alt="arrow" />
              </button>
              <button className={styles.rbutton}>
                <img src={right_arrow} alt="arrow" />
              </button>
            </div>
          </figure>
        </div>
      </section>
    </main>
  )
}

export default Slider

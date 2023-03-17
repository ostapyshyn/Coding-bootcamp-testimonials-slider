import React from 'react'
import styles from './Slider.module.scss'
import user from '../../assets/image-tanya.jpg'

const Slider = () => {
  return (
    <main>
      <section>
        <div className={styles.slider}>
          <p className={styles.testimonial}>
            “ I’ve been interested in coding for a while but never taken the jump, until now. I
            couldn’t recommend this course enough. I’m now in the job of my dreams and so excited
            about the future. ”
          </p>
          <figure>
            <img src={user} alt="user" />
          </figure>
        </div>
      </section>
    </main>
  )
}

export default Slider

import React, { useState } from 'react'
import styles from './Slider.module.scss'
import { items } from '../../data.js'
import left_arrow from '../../assets/icon-prev.svg'
import right_arrow from '../../assets/icon-next.svg'
import background from '../../assets/pattern-bg.svg'
import quotes from '../../assets/pattern-quotes.svg'

const Slider = () => {
  const [currentItem, setCurrentItem] = useState(0)

  const nextItem = () => {
    setCurrentItem((currentItem + 1) % items.length)
  }

  const prevItem = () => {
    setCurrentItem((currentItem + items.length - 1) % items.length)
  }
  return (
    <main>
      <section>
        <div className={styles.slider}>
          <div className={styles.left}>
            <img src={quotes} alt="quotes" className={styles.quotes} />
            <p className={styles.testimonial}>{items[currentItem].text}</p>
            <div className={styles.position}>
              <p className={styles.title}>{items[currentItem].title}</p>
              <p className={styles.subTitle}>{items[currentItem].subTitle}</p>
            </div>
          </div>

          <div className={styles.figure}>
            {/* <img src={background} alt="bg" className={styles.bg} /> */}
            <img src={items[currentItem].img} alt="user" className={styles.user} />
            <div className={styles.buttons}>
              <button className={styles.lbutton} onClick={prevItem}>
                <img src={left_arrow} alt="arrow" />
              </button>
              <button className={styles.rbutton} onClick={nextItem}>
                <img src={right_arrow} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Slider

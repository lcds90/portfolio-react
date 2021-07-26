import styles from './style.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

type SlideshowProps = {
  images: Array<any>;
};

export const Slideshow = ({ images }: SlideshowProps) => {
  return (
    <section className={styles.slideshow}>
      <article className={styles.slideshowSlider}>
        <Carousel showThumbs={false} infiniteLoop={true} dynamicHeight={true}>
          {images.map((image: StaticImageData, index: number) => {
            return (
              <img
                src={image.src}
                className={styles.slide}
                key={index}
              />
            );
          })}
        </Carousel>
      </article>
    </section>
  );
};

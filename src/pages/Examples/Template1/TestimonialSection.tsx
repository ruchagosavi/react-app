import React from 'react';
import styles from './TestimonialSection.module.css';

const TestimonialSection: React.FC = () => {
  return (
    <section className={styles.testimonialSection}>
      <h2>What Our Clients Say</h2>
      <div className={styles.testimonials}>
        <div className={styles.testimonial}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel arcu ut nisi commodo sodales."</p>
          <h3>- John Doe</h3>
        </div>
        <div className={styles.testimonial}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel arcu ut nisi commodo sodales."</p>
          <h3>- Jane Smith</h3>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

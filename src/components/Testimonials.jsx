import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1> Words from Our Shoppers</h1>
      <div className="testimonial">
        <figure className="snip1390">
          <img src="images/customer-4.jpg" alt="profile-sample3" className="profile" />
          <figcaption>
            <h2>Rohit Mehra</h2>
            <h4>SuperMenMart Customer</h4>
            <blockquote>
              SuperMenMart delivers top-quality products at great prices! The fast delivery and packaging were impressive. Will shop again!
            </blockquote>
          </figcaption>
        </figure>

        <figure className="snip1390">
          <img src="images/customer-2.jpg" alt="profile-sample3" className="profile" />
          <figcaption>
            <h2>Arjun Khanna</h2>
            <h4>SuperMenMart Customer</h4>
            <blockquote>
              Excellent shopping experience. I found all my essentials in one place. The customer service was quick and helpful too!
            </blockquote>
          </figcaption>
        </figure>

        <figure className="snip1390">
          <img src="images/customer-1.jpg" alt="profile-sample3" className="profile" />
          <figcaption>
            <h2>Vikram Joshi</h2>
            <h4>SuperMenMart Customer</h4>
            <blockquote>
              I loved the variety and quality of products. The interface is smooth and payment was super easy. Highly recommended!
            </blockquote>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;

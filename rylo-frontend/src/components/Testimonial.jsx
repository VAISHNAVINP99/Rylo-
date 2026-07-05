import { useEffect, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonial() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/reviews")
      .then((response) => {
        setReviews(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
            Customer Reviews
          </h2>

          <p className="text-gray-600 mt-4">
            What our customers say about RYLO Support Services
          </p>

        </div>

        {loading ? (
          <div className="text-center">
            Loading Reviews...
          </div>
        ) : (

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            loop={reviews.length > 3}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >

            {reviews.map((review) => (
              <SwiperSlide key={review.id}>

                <div className="bg-white rounded-3xl shadow-lg p-8 h-full hover:shadow-2xl transition-all duration-300">

                  {/* Profile Image */}
                  <div className="flex justify-center">

                    <img
                      src={
                        review.image
                          ? `http://127.0.0.1:8000/storage/${review.image}`
                          : "https://via.placeholder.com/100"
                      }
                      alt={review.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-purple-100"
                    />

                  </div>

                  {/* Stars */}
                  <div className="flex justify-center mt-4">

                    {[...Array(review.rating)].map((_, index) => (
                      <span
                        key={index}
                        className="text-yellow-400 text-xl"
                      >
                        ★
                      </span>
                    ))}

                  </div>

                  {/* Review */}
                  <p className="text-gray-600 text-center mt-5 leading-7 ">
                    "{review.review}"
                  </p>

                  {/* Name */}
                  <h3 className="text-center text-xl font-bold mt-2 text-purple-700">
                    {review.name}
                  </h3>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        )}

      </div>
    </section>
  );
}
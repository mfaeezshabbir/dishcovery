import { useState } from 'react';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { testimonials } from '../data/testimonials';

const TestimonialSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const handlePrev = () => {
        setCurrentTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1);
    };

    const handleNext = () => {
        setCurrentTestimonial(currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1);
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    className={`mr-1 text-green-500 ${i < testimonials[currentTestimonial].rating ? 'fill-current' : 'fill-gray-300'
                        }`}
                />
            );
        }
        return stars;
    };

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Read trusted reviews from our customers</h2>
                <div className="flex items-center justify-between">
                    <div className="w-full flex justify-between items-center">
                        <button
                            className="text-3xl text-gray-400 focus:outline-none"
                            onClick={handlePrev}
                            aria-label="Previous testimonial"
                        >
                            <FaArrowLeft />
                        </button>
                        <div className="testimonial-card p-8 rounded-lg shadow-lg bg-white mx-4 flex flex-col items-center justify-center w-full">
                            <img
                                src={testimonials[currentTestimonial].image}
                                alt={testimonials[currentTestimonial].name}
                                className="w-20 h-20 rounded-full mb-4"
                            />
                            <div className="text-lg font-bold mb-2">{testimonials[currentTestimonial].name}</div>
                            <div className="flex justify-center items-center mb-2">{renderStars()}</div>
                            <p className="text-lg italic font-medium text-center text-gray-500">{testimonials[currentTestimonial].review}</p>
                        </div>
                        <button
                            className="text-3xl text-gray-400 focus:outline-none"
                            onClick={handleNext}
                            aria-label="Next testimonial"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;

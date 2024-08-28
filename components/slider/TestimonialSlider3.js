'use client'
import Link from "next/link"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider3() {
    return (
        <>
            <Swiper {...swiperOptions} className="testimonials-3 owl-carousel">
                <SwiperSlide className="single-testimonial">
                    <div className="testimonial-icon">
                        <img src="/assets/img/icons/SS.png" alt="" />
                    </div>
                    <p>
                    Mr.Srinivasan has more than two decades of experience in Silicon Valley CA, USA in state of art Computer Graphics Technologies on Quality Assurance,Rapid Prototyping, Reverse Engineering, and 3D Product design that helped NASA, Boeing, BMW, Raytheon, Adidas, AMD and more to modernize their Inspection and Product Design Pipeline.
Being a Fitness freak, he happily grabbed the opportunity to lead the execution of Aellam for “Reverse Engineering” Human Health Care with Natural SupplementProducts deployed with current Machine Learning and AI technologies.

                    </p>
                    <div className="author-reviews">
                        <div className="author">
                            <Link href="#">Mr. Srinivasan Samuel</Link>
                        </div>
                        <div className="review-1">
                            <div className="review">
                                <ul>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star-half" /></li>
                                </ul>
                            </div>
                            <div className="review-rate">
                                <p>(4.5)</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-testimonial">
                    <div className="testimonial-icon">
                        <img src="/assets/img/icons/SK.png" alt="" />
                    </div>
                    <p>
                    Dr. Senthil is the brain behind Aellam products. He completed his M.Pharm and Ph.D.from Anna University and was an Inspire Faculty at CSIR lab. He carries with him more than 10 years of experience from Ph.D. and post Ph.D.in the area of new product formulations. He has a zeal for embracing curative solutions from Nature, which is instrumental in the creation of products for Aellam.

                    </p>
                    <div className="author-reviews">
                        <div className="author">
                            <Link href="#">Dr.C. Senthil Kumar</Link>
                        </div>
                        <div className="review-1">
                            <div className="review">
                                <ul>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star-half" /></li>
                                </ul>
                            </div>
                            <div className="review-rate">
                                <p>(4.5)</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-testimonial">
                    <div className="testimonial-icon">
                        <img src="/assets/img/icons/SM.png" alt="" />
                    </div>
                    <p>
                    Dr. Sathiawith v M.Pharm, completed his Ph.D. from CSIR-CLRI and Post Doctoral research from IIT-Madras. He has a proven track record in the production of advanced wound care and dental care products. He has an eye that does not miss out on details to ensure an efficient production line and deliverhigh-quality products.

                    </p>
                    <div className="author-reviews">
                        <div className="author">
                            <Link href="#">Dr.P.Sathiamurthi</Link>
                        </div>
                        <div className="review-1">
                            <div className="review">
                                <ul>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star-half" /></li>
                                </ul>
                            </div>
                            <div className="review-rate">
                                <p>(4.5)</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className="single-testimonial">
                    <div className="testimonial-icon">
                        <img src="/assets/img/icons/quote-1.png" alt="" />
                    </div>
                    <p>
                        “Consultia law firm is wonderful. I have had the chance to
                        work with three of the lawyers and they all have been
                        wonderful. They will tell you when you need a lawyer and when
                        you don't. They actually try to save you money. They respond
                        very fast to questions and try to help you understand what is
                        going on.”
                    </p>
                    <div className="author-reviews">
                        <div className="author">
                            <Link href="#">Jason Behrendorff</Link>
                        </div>
                        <div className="review-1">
                            <div className="review">
                                <ul>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star-half" /></li>
                                </ul>
                            </div>
                            <div className="review-rate">
                                <p>(4.5)</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </>
    )
}

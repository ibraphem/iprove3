import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import testShape from "../../images/testimonials/shape.png"
import dev1 from "../../images/testimonials/dev1.png"
import dev2 from "../../images/testimonials/dev2.png"
import dev3 from "../../images/testimonials/dev3.png"
import dev4 from "../../images/testimonials/dev4.png"
import dev5 from "../../images/testimonials/dev5.png"
import dev6 from "../../images/testimonials/dev6.png"
import plusOrange from "../../images/shap/plus-orange.png"
import squareBlue from "../../images/shap/square-blue.png"
import circleDots from "../../images/shap/circle-dots.png"
import circleOrange2 from "../../images/shap/circle-orange-2.png"

class testimonialSection extends Component{
	
	render(){
			
		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		
		return(
			<>
					
				
				<section className="section-area section-sp3 testimonial-wraper">
					<div className="container">
						<div className="heading-bx text-center">
							<h6 className="title-ext text-secondary">Developers</h6>
							
						</div>
						<div className="row align-items-center">
							<div className="col-lg-6 text-center">
								<div className="thumb-wraper">
									<img className="bg-img" src={testShape} alt=""/>
									<ul>
										<li data-member="1"><Link to="#"><img src={dev1} alt=""/></Link></li>
										<li data-member="2"><Link to="#"><img src={dev2} alt=""/></Link></li>
										<li data-member="3"><Link to="#"><img src={dev3} alt=""/></Link></li>
										<li data-member="4"><Link to="#"><img src={dev4} alt=""/></Link></li>
										<li data-member="5"><Link to="#"><img src={dev5} alt=""/></Link></li>
										<li data-member="6"><Link to="#"><img src={dev6} alt=""/></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6">
								<Slider {...settings} className="testimonial-slide">
									<div className="slider-item">
										<div className="testimonial-bx">
										<div className="client-info">
												<h5 className="name">Leverage On Our API</h5>
											</div>
											<div className="testimonial-content">
												<p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
												Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</b></p>
											</div>
											
										
										</div>
									</div>
									
								</Slider>
							</div>	 
						</div>	 
					</div>
					<img className="pt-img1 animate1" src={plusOrange} alt=""/>
					<img className="pt-img2 animate2" src={squareBlue} alt=""/>
					<img className="pt-img3 animate3" src={circleDots} alt=""/>
					<img className="pt-img4 animate4" src={circleOrange2} alt=""/>
				</section>
				
			</>
		);
	}
}

export default testimonialSection;
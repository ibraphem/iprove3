import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import lineCircleBlue from "../../images/shap/line-circle-blue.png";
import squareDotsOrange from "../../images/shap/square-dots-orange.png";
import waveBlue from "../../images/shap/wave-blue.png";
import squareRotate from "../../images/shap/square-rotate.png";

import { StyledServiceContainer, StyledServiceWrapper } from '../../styles/ServiceWrapper.styled';

import immigration from '../../images/about/immigration.png';
import nin from '../../images/about/nin.jpg';
import inec from '../../images/about/inec.jpg';
import frsc from '../../images/about/frsc.jpg';

class ServicesSliderSection extends Component{
	render(){
			
		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			autoplay: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 591,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		
		return(
			<>
				
				<StyledServiceContainer className="section-area section-sp1 service-wraper">
					<div className="row align-items-center">
						<div className="col-xl-4 col-lg-7 mb-30">	
							<div className="heading-bx">
								<h6 className="title-ext text-secondary">How We Do IT</h6>
								<h2 className="title">We exist to reinforce integrity</h2>
								<p>Our platform uses the authoritative data sources to validate identities - Nigerian Identity Management Commission (NIMC), Federal Road 
									Safety Commission (FRSC), Independent National Electoral Commission and the National Immigration office.</p>
							</div>
							<Link to="/about-us" className="btn btn-secondary btn-lg shadow">Abou Us</Link>
						</div>
						<div className="col-xl-8 mb-15" >	
							<Slider {...settings} className="service-slide slick-arrow-none" >
								<div className="slider-item">
									<StyledServiceWrapper className="feature-container  feature1" >
									<li><img  src={immigration} alt=""/></li>
							
										<div className="icon-content">
											<h4 className="ttr-title">Intl. Passport</h4>
											<p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
										</div>
									</StyledServiceWrapper> 
								</div>
								<div className="slider-item">
									<StyledServiceWrapper className="feature-container feature1">
									<li><img  src={nin} alt=""/></li>
							
										<div className="icon-content">
											<h4 className="ttr-title">Nat. Identity</h4>
											<p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
										</div>
									</StyledServiceWrapper> 
								</div>
								<div className="slider-item">
									<StyledServiceWrapper className="feature-container feature1">
									<li><img  src={inec} alt=""/></li>
							
										<div className="icon-content">
											<h4 className="ttr-title">Voters Identity</h4>
											<p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
										</div>
									</StyledServiceWrapper> 
								</div>
								<div className="slider-item">
									<StyledServiceWrapper className="feature-container feature1">
									<li><img  src={frsc} alt=""/></li>
							
										<div className="icon-content">
											<h4 className="ttr-title">Driver License</h4>
											<p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
										</div>
									</StyledServiceWrapper> 
								</div>
							</Slider>
						</div>	 
					</div>
					<img className="pt-img1 animate-rotate" src={lineCircleBlue} alt=""/>
					<img className="pt-img2 animate2" src={squareDotsOrange} alt=""/>
					<img className="pt-img3 animate-wave" src={waveBlue} alt=""/>
					<img className="pt-img4 animate1" src={squareRotate} alt=""/>
				</StyledServiceContainer>
				
			</>
		);
	}
}

export default ServicesSliderSection;
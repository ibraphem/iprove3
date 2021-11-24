import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images

import main from '../../images/main-banner/main.png';
import ptImg1 from '../../images/shap/trangle-orange.png';
import ptImg2 from '../../images/shap/square-blue.png';
import ptImg3 from '../../images/shap/chicle-blue-2.png';
import ptImg4 from '../../images/shap/plus-orange.png';
import ptImg5 from '../../images/shap/wave-orange.png';
import { StyledMainBanner } from '../../styles/MainBanner.styled';

class aboutSection extends Component{
	render(){
		return(
			<>
				
				<StyledMainBanner className="main-banner">
					<div className="container inner-content">
						<div className="row align-items-center">
							<div className="col-lg-7 col-md-6 col-sm-7">
								<h6 className="title-ext text-primary">Welcome to IPROVE</h6>
								<h1>We Verify and Proove beyond every possible doubt.</h1>
								<Link to="/about-us" className="btn btn-secondary btn-lg shadow">Learn More</Link>
							</div>
							<div className="col-lg-5 col-md-6 col-sm-5">
								<div className="banner-img">
									<img src={main} alt=""/>
								</div>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate1" src={ptImg1} alt=""/>
					<img className="pt-img2 animate2" src={ptImg2} alt=""/>
					<img className="pt-img3 animate3" src={ptImg3} alt=""/>
					<img className="pt-img4 animate4" src={ptImg4} alt=""/>
					<img className="pt-img5 animate-wave" src={ptImg5} alt=""/>
				</StyledMainBanner>
				
			</>
		);
	}
}

export default aboutSection;
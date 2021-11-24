import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images

import ptImg1 from '../../images/shap/wave-blue.png';
import ptImg2 from '../../images/shap/circle-dots.png';
import ptImg3 from '../../images/shap/plus-blue.png';
import ptImg4 from '../../images/shap/wave-blue.png';

// Social Images
import facebook from '../../images/social/facebook.png';
import twitter from '../../images/social/twitter.png';
import instagram from '../../images/social/instagram.png';
import linkedin from '../../images/social/linkedin.png';


import { StyledFooter } from '../../styles/FooterStyle';
import iprove from '../../images/iprove.png';

class aboutSection extends Component{
	render(){
		return(
			<>
				
				<StyledFooter className="footer">
					<div className="footer-top">
						<div className="container">
							<div className="row">
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="widget widget_info">
										<div className="footer-logo">
											<Link to="/"><img src={iprove} style={{marginTop:"-50px"}} alt=""/></Link>
										</div>
										<div className="ft-contact" style={{marginTop:"-60px"}}>
											<p>We offer the best verification service your business can rely on. Boostrap your decisions with proper validation</p>
											<div className="contact-bx">
												<div className="icon"><i className="fas fa-phone-alt"></i></div>
												<div className="contact-number"  >
													<span>Contact Us</span>
													<h4 className="number">+01 123 456 7890</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-6">
									<div className="widget footer_widget ml-50">
										<h3 className="footer-title">Quick Links</h3>
										<ul>
											<li><Link to="/about-us"><span>About Us</span></Link></li>
											<li><Link to="/contact-us"><span>Contact Us</span></Link></li>
											<li><Link to="/api"><span>API</span></Link></li>
										</ul>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-6">
									<div className="widget footer_widget">
										<h3 className="footer-title">Our Service</h3>
										<ul>
											<li><Link to="/services/kyc"><span>KYC</span></Link></li>
											<li><Link to="/services/kyc"><span> Identity Verification</span></Link></li>
											<li><Link to="/services/kyc"><span>Address Verification</span></Link></li>
										</ul>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="widget widget_form">
										<h3 className="footer-title">We are social</h3>
									
										<div className="footer-social-link">
											<ul>
												<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><img src={facebook} alt=""/></a></li>
												<li><a target="_blank" rel="noreferrer" href="https://twitter.com/"><img src={twitter} alt=""/></a></li>
												<li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><img src={instagram} alt=""/></a></li>
												<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><img src={linkedin} alt=""/></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="footer-bottom">
							<div className="row">
								<div className="col-12 text-center">
									<p className="copyright-text">Copyright © 2021 Design & Developed by <Link to="/"  className="text-secondary">iProve</Link></p>
								</div>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate-wave" src={ptImg1} alt=""/>
					<img className="pt-img2 animate1" src={ptImg2} alt=""/>
					<img className="pt-img3 animate-rotate" src={ptImg3} alt=""/>
					<img className="pt-img4 animate-wave" src={ptImg4} alt=""/>
				</StyledFooter>
			
			</>
		);
	}
}

export default aboutSection;
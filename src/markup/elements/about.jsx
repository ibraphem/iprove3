import React, { Component } from 'react';


// Import Images

import kyc from '../../images/about/kyc.jpg';
import address from '../../images/about/address.png';
import identity from '../../images/about/identity.png';
import { StyledAboutSection } from '../../styles/AboutSection.styled';

class aboutSection extends Component{
	render(){
		return(
			<>
				<StyledAboutSection className="section-sp1 about-area">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 mb-30">
								<div className="about-thumb-area">
									<ul>
										<li><img className="about-thumb1" src={identity} alt=""/></li>
										<li><img className="about-thumb2" src={kyc} alt=""/></li>
										<li><img className="about-thumb3" src={address} alt=""/></li>
										<li><div className="exp-bx">5<span>Year Experience</span></div></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6 mb-30">
								<div className="heading-bx">
									<h6 className="title-ext text-secondary">Our Story</h6>
									<h2 className="title">Ensuring reliable and proper identification is the reason for our existence</h2>
									<p>
										It all began in September 2011, when Olutunji Oluwole employed “Francis” as his cook. Six months later, 
										after a nice dinner, he and his family passed out. Eighteen hours later, they regained consciousness to find that 
										“Francis” had poisoned and robbed them blind.
										</p>
										
										<p>
										Several weeks later, Olutunji found out that “Francis” had gained employment in the same estate with another family as “Joshua”, with a completely different identity and an altered employment history. 
										He had begun poisoning his new employers, aided by the housemaid who had been employed with the family for 4 years..
										</p>
										
								</div>
								<h6 className="title-ext text-secondary">Our Core Values</h6>
								<div className="row">
								
									<div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
										<div className="feature-container feature-bx1 feature1">
											<div className="icon-md">
												<span className="icon-cell">
												<svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Flat"><g id="Color"><polygon fill="#212529" points="45 17 32 25 19 17 19 3 45 3 45 17"/><polygon fill="#dd051d" points="40 3 40 20.08 32 25 24 20.08 24 3 40 3"/><path d="M32,25l6.49-4a21.36,21.36,0,0,0-13,0Z" fill="#a60416"/><circle cx="32" cy="41.5" fill="#fccd1d" r="19.5"/><circle cx="32" cy="41.5" fill="#f9a215" r="14.5"/><path d="M33.37,34l1.52,2.63a1.54,1.54,0,0,0,1.06.76L39,38a1.53,1.53,0,0,1,.85,2.56l-2.1,2.22a1.5,1.5,0,0,0-.4,1.22l.36,3a1.57,1.57,0,0,1-2.22,1.58l-2.81-1.27a1.6,1.6,0,0,0-1.32,0l-2.81,1.27A1.57,1.57,0,0,1,26.31,47l.36-3a1.5,1.5,0,0,0-.4-1.22l-2.1-2.22A1.53,1.53,0,0,1,25,38l3-.59a1.54,1.54,0,0,0,1.06-.76L30.63,34A1.59,1.59,0,0,1,33.37,34Z" fill="#fccd1d"/></g></g></svg>
												</span> 
											</div>
											<div className="icon-content">
												<h4 className="ttr-title">Integrity</h4>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
										<div className="feature-container feature-bx1 feature2">
											<div className="icon-md">
												<span className="icon-cell">
												<svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Flat"><g id="Color"><circle cx="32" cy="26.5" fill="#fccd1d" r="19.5"/><circle cx="32" cy="26.5" fill="#f9a215" r="14.5"/><path d="M33.37,19l1.52,2.63a1.54,1.54,0,0,0,1.06.76L39,23a1.53,1.53,0,0,1,.85,2.56l-2.1,2.22a1.5,1.5,0,0,0-.4,1.22l.36,3a1.57,1.57,0,0,1-2.22,1.58l-2.81-1.27a1.6,1.6,0,0,0-1.32,0l-2.81,1.27A1.57,1.57,0,0,1,26.31,32l.36-3a1.5,1.5,0,0,0-.4-1.22l-2.1-2.22A1.53,1.53,0,0,1,25,23l3-.59a1.54,1.54,0,0,0,1.06-.76L30.63,19A1.59,1.59,0,0,1,33.37,19Z" fill="#fccd1d"/><polygon fill="#212529" points="45 43 45 57 61 57 55 50 61 43 45 43"/><polygon fill="#212529" points="19 43 19 57 3 57 9 50 3 43 19 43"/><rect fill="#dd051d" height="14" width="38" x="13" y="39"/><polygon fill="#a60416" points="13 53 19 57 19 53 13 53"/><polygon fill="#a60416" points="51 53 45 57 45 53 51 53"/></g></g></svg>
												</span> 
											</div>
											<div className="icon-content">
												<h4 className="ttr-title">Professionalism</h4>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
										<div className="feature-container feature-bx1 feature3">
											<div className="icon-md">
												<span className="icon-cell">
												<svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Flat"><g id="Color"><polygon fill="#212529" points="41 27.69 32 34 23 27.69 23 3 41 3 41 27.69"/><polygon fill="#dd051d" points="37 3 37 30.49 32 34 27 30.49 27 3 37 3"/><path d="M33.88,41.08,36,44.68a2.13,2.13,0,0,0,1.45,1l4.15.81A2.09,2.09,0,0,1,42.71,50l-2.87,3a2.08,2.08,0,0,0-.55,1.68l.49,4.1a2.14,2.14,0,0,1-3,2.16L32.9,59.27a2.25,2.25,0,0,0-1.8,0L27.26,61a2.14,2.14,0,0,1-3-2.16l.49-4.1a2.08,2.08,0,0,0-.55-1.68l-2.87-3a2.09,2.09,0,0,1,1.16-3.49l4.15-.81a2.13,2.13,0,0,0,1.45-1l2.07-3.6A2.18,2.18,0,0,1,33.88,41.08Z" fill="#fccd1d"/><path d="M32,33a4,4,0,1,0,4,4A4,4,0,0,0,32,33Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,32,39Z" fill="#f9a215"/></g></g></svg>
												</span> 
											</div>
											<div className="icon-content">
												<h4 className="ttr-title">Innovation</h4>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
										<div className="feature-container feature-bx1 feature4">
											<div className="icon-md">
												<span className="icon-cell">
												<svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Flat"><g id="Color"><polygon fill="#212529" points="8.26 3 25.94 33.62 38.06 26.62 24.42 3 8.26 3"/><path d="M38.06,26.62l-7.21-12.5-3.72,6.44a21.53,21.53,0,0,0-7,3l5.8,10Z" fill="#111315"/><polygon fill="#dd051d" points="34.6 28.62 29.4 31.62 12.87 3 19.8 3 34.6 28.62"/><polygon fill="#212529" points="39.58 3 25.94 26.62 38.06 33.62 55.74 3 39.58 3"/><path d="M34.6,28.62l-6.06-10.5-1.42,2.46a21.44,21.44,0,0,0-3.46,1.1l5.74,9.94Z" fill="#a60416"/><path d="M43.86,23.58a21.46,21.46,0,0,0-14.17-3.45l-3.75,6.49,12.12,7Z" fill="#111315"/><polygon fill="#dd051d" points="51.13 3 34.6 31.62 29.4 28.62 44.2 3 51.13 3"/><path d="M34.6,31.62l5.74-9.94a21.41,21.41,0,0,0-6-1.55L29.4,28.62Z" fill="#a60416"/><circle cx="32" cy="41.5" fill="#fccd1d" r="19.5"/><circle cx="32" cy="41.5" fill="#f9a215" r="14.5"/><path d="M33.37,34l1.52,2.63a1.54,1.54,0,0,0,1.06.76L39,38a1.53,1.53,0,0,1,.85,2.56l-2.1,2.22a1.5,1.5,0,0,0-.4,1.22l.36,3a1.57,1.57,0,0,1-2.22,1.58l-2.81-1.27a1.6,1.6,0,0,0-1.32,0l-2.81,1.27A1.57,1.57,0,0,1,26.31,47l.36-3a1.5,1.5,0,0,0-.4-1.22l-2.1-2.22A1.53,1.53,0,0,1,25,38l3-.59a1.54,1.54,0,0,0,1.06-.76L30.63,34A1.59,1.59,0,0,1,33.37,34Z" fill="#fccd1d"/></g></g></svg>
												</span> 
											</div>
											<div className="icon-content">
												<h4 className="ttr-title">Excellence</h4>
											</div>
										</div>
									</div>
								</div>
							
							</div>
						</div>
					</div>
				</StyledAboutSection>
				
			</>
		);
	}
}

export default aboutSection;
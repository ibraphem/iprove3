import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

// Layout

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import servicesPic1 from "../../images/services/pic1.jpg";
import pdf from "../../images/icon/pdf.png";
import doc from "../../images/icon/doc.png";
import bg2 from "../../images/main-banner/bg2.jpg"
import { StyledAboutSection } from '../../styles/AboutSection.styled';
import { useStateValue } from '../../StateProvider';

const ServiceDetail = () => {
	const [{ nightMode }] = useStateValue();
	return (
		<div className="page-content bg-white">

		<div className="banner-wraper">
			<div className="page-banner"  style={nightMode ? {backgroundImage: "url("+bg2+")"} : {backgroundImage: "url("+bnrImg1+")"}}>
				<div className="container">
					<div className="page-banner-entry text-center">
						<h1>API DOCUMENTATION</h1>
						<nav aria-label="breadcrumb" className="breadcrumb-row">
							<ul className="breadcrumb">
								<li className="breadcrumb-item"><a href="index.html"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</a></li>
								<li className="breadcrumb-item active" aria-current="page">API Documentation</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>

		<StyledAboutSection className="section-area section-sp1">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<aside className="sticky-top pb-1">
							<div className="widget">

								<ul className="service-menu">
									<li className="active"><Link to="/service-detail"><span>Welcome </span><i className="fa fa-angle-right"></i></Link></li>
									<br />
									<h6>GENERAL</h6>
									<li ><Link to="/service-detail"><span>Getting Started</span><i className="fa fa-angle-right"></i></Link></li>
									<li><Link to="/service-detail"><span>Introduction</span><i className="fa fa-angle-right"></i></Link></li>
									<li><Link to="/service-detail"><span>Authentication</span><i className="fa fa-angle-right"></i></Link></li>
									<li><Link to="/service-detail"><span>About Verifications</span><i className="fa fa-angle-right"></i></Link></li>
									<br />
									<h6>IDENTITY VERIFICATIONS</h6>
									<li><Link to="/service-detail"><span>Bank Verification Numbers (BVN)</span><i className="fa fa-angle-right"></i></Link></li>
									<li><Link to="/service-detail"><span>Corporate Affairs Commission</span><i className="fa fa-angle-right"></i></Link></li>
									<li><Link to="/service-detail"><span>Driver License</span><i className="fa fa-angle-right"></i></Link></li>
									<li><Link to="/service-detail"><span>Identity Biometrics</span><i className="fa fa-angle-right"></i></Link></li>
									<li><Link to="/service-detail"><span>Identity Matching</span><i className="fa fa-angle-right"></i></Link></li>
									<li><Link to="/service-detail"><span>National Identity</span><i className="fa fa-angle-right"></i></Link></li>
									<li><Link to="/service-detail"><span>Tax Identification Number</span><i className="fa fa-angle-right"></i></Link></li>
									<li><Link to="/service-detail"><span>Voters Card</span><i className="fa fa-angle-right"></i></Link></li>
									<br />
									<h6>ADDRESS VERIFICATIONS</h6>
									<li><Link to="/service-detail"><span>Submit Address Verification</span><i className="fa fa-angle-right"></i></Link></li>
									<li><Link to="/service-detail"><span>Get Address Verification By ID</span><i className="fa fa-angle-right"></i></Link></li>
									<li><Link to="/service-detail"><span>Get Address Verifications</span><i className="fa fa-angle-right"></i></Link></li>
									<li><Link to="/service-detail"><span>Cancel Address verification</span><i className="fa fa-angle-right"></i></Link></li>
									<li><Link to="/service-detail"><span>Fetch an Address By Identity</span><i className="fa fa-angle-right"></i></Link></li>
								</ul>
							</div>
							<div className="widget">
								<div className="brochure-bx">
									<h5 className="title-head">Download</h5>
									<Link to="#" className="download-link">
										<img src={pdf} alt="" />
										<h5 className="title">Download our Brochures</h5>
										<span>Download</span>
									</Link>
									<Link to="/" className="download-link">
										<img src={doc} alt="" />
										<h5 className="title">Our Company Details</h5>
										<span>Download</span>
									</Link>
								</div>
							</div>

						</aside>
					</div>
					<div className="col-lg-8 mb-30">
						<div className="ttr-media mb-30">
							<h2 >Welcome</h2><hr style={{ color: "black" }} />
							<p >Hey There! How's your day going?</p>
							<img src={servicesPic1} className="rounded" alt="" />
						</div>
						<div className="clearfix">
							<div className="head-text mb-30">
								<h2 className="title mb-15">Why Medical Had Been So Popular Till</h2>
								<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
							</div>
							<div className="row align-items-center">
								<div className="col-md-6 mb-30">
									<ul className="list-check-squer mb-0">
										<li>Then along come two they</li>
										<li>That’s just a little bit more than</li>
										<li>Standard dummy text ever since</li>
										<li>Simply dummy text of the printing</li>
										<li>Make a type specimen book</li>
									</ul>
								</div>
								<div className="col-md-6 mb-30">
									<div className="skillbar-box mb-30">
										<h6 className="title">Advanced Technology</h6>
										<div className="skillbar appear">
											<p className="skillbar-bar" style={{ width: "96%" }}></p>
											<span className="skill-bar-percent">96%</span>
										</div>
									</div>
									<div className="skillbar-box mb-30">
										<h6 className="title">Certified Engineers</h6>
										<div className="skillbar appear">
											<p className="skillbar-bar" style={{ width: "79%" }}></p>
											<span className="skill-bar-percent">79%</span>
										</div>
									</div>
									<div className="skillbar-box mb-0">
										<h6 className="title">6 years Experience</h6>
										<div className="skillbar appear">
											<p className="skillbar-bar" style={{ width: "75%" }}></p>
											<span className="skill-bar-percent">75%</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="clearfix">
							<div className="head-text mb-30">
								<h4 className="title mb-10">Popular Questions</h4>
								<p className="mb-0">Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
							</div>
							<Accordion defaultActiveKey="0" className="accordion ttr-accordion1">
								<Accordion.Item eventKey="0">
									<Accordion.Header>How Doctor Can Ease Your Pain?</Accordion.Header>
									<Accordion.Body>
										<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>How do I withdraw from a subject?</Accordion.Header>
									<Accordion.Body>
										<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>Understand Doctor Before You Regret?</Accordion.Header>
									<Accordion.Body>
										<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>What types of systems do you support?</Accordion.Header>
									<Accordion.Body>
										<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="4">
									<Accordion.Header>We Teach You How To Feel Better?</Accordion.Header>
									<Accordion.Body>
										<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="5">
									<Accordion.Header>How Can I Contact You?</Accordion.Header>
									<Accordion.Body>
										<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
					</div>

				</div>
			</div>
		</StyledAboutSection>

	</div>
	);
};

export default ServiceDetail;
import React from 'react';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";

// Layout

// Import Images
import kyc from "../../images/services/kyc.jpg"
import address from "../../images/services/address.jpg"
import identity from "../../images/services/identity.jpg"

import { useStateValue } from '../../StateProvider';


// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import bg2 from "../../images/main-banner/bg2.jpg"
import { StyledAboutSection } from '../../styles/AboutSection.styled';
import ServiceBreak from '../elements/service-break';

const data = {
    'kyc': {
        'title': "Know Your Customer",
        'subtitle': 'Why Medical Had Been So Popular Till',
        'content': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.React lets you define components as classes or functions. Components defined as classes currently provide more features which are described in detail on this page. To define a React component class, you need to extend React.Component",
        'image':kyc,
    },
    'identity': {
        'title': "Identity Verification",
        'subtitle': 'Why Medical Had Been So Popular Till',
        'content': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. React lets you define components as classes or functions. Components defined as classes currently provide more features which are described in detail on this page. To define a React component class, you need to extend React.Component",
        'image':identity,
    },
    'address': {
        'title': "Address Verification",
        'subtitle': 'Why Medical Had Been So Popular Till',
        'content': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. React lets you define components as classes or functions. Components defined as classes currently provide more features which are described in detail on this page. To define a React component class, you need to extend React.Component",
        'image':address,
    }
}

const Services = () => {
	const [{ nightMode }] = useStateValue();
	let params = useParams();
	let { service } = params;
	return (
		<>
				
		<div className="page-content bg-white">
			
			<div className="banner-wraper">
				<div className="page-banner" style={nightMode ? {backgroundImage: "url("+bg2+")"} : {backgroundImage: "url("+bnrImg1+")"}}>
					<div className="container">
						<div className="page-banner-entry text-center">
							<h1>Services</h1>
							<nav aria-label="breadcrumb" className="breadcrumb-row">
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Services</li>
									<li className="breadcrumb-item active" aria-current="page">{service}</li>
								</ul>
							</nav>
						</div>
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

											<ul className="service-menu list-group">
												
												<h6>What We do</h6>
												<li ><Link style={{backgroundColor: service === "kyc" && "#000"}}  to="/services/kyc" className="active"><span>KYC</span><i className="fa fa-angle-right"></i></Link></li>
												<li ><Link style={{backgroundColor: service === "identity" && "#000"}} to="/services/identity"><span>Identity Verification</span><i className="fa fa-angle-right"></i></Link></li>
												<li ><Link style={{backgroundColor: service === "address" && "#000"}} to="/services/address"><span>Address Verification</span><i className="fa fa-angle-right"></i></Link></li>										
											</ul>
										</div>
									</aside>
								</div>
								
								<ServiceBreak data={service === 'kyc' ? data.kyc : service === 'identity' ? data.identity : data.address}/>

							</div>
						</div>
					</StyledAboutSection>
		
	</>
	);
};

export default Services;
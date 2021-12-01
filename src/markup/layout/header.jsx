import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images

import iprove from '../../images/iprove.png';
import { StyledHeader, StyledHeader1 } from '../../styles/Header.styled';
import { useStateValue } from '../../StateProvider';




const Header = () => {

	const [{ nightMode }, dispatch] = useStateValue();
	useEffect(() => {
		var menuIcon = document.querySelector(".menuicon")
		var menuLinks = document.querySelector(".menu-links")
		var menuClose = document.getElementById("menuClose")

		menuIcon.addEventListener('click', function () {
			menuLinks.classList.add("show")
		})

		menuClose.addEventListener('click', function () {
			menuLinks.classList.remove("show")
		})

		// Mobile Submenu open close function
		var navMenu = [].slice.call(document.querySelectorAll('.menu-links > ul > li'));
		for (var y = 0; y < navMenu.length; y++) {
			navMenu[y].addEventListener('click', function () { menuClick(this) });
		}

		function menuClick(current) {
			const active = current.classList.contains("open")
			navMenu.forEach(el => el.classList.remove('open'));

			if (active) {
				current.classList.remove('open')
				console.log("active")
			} else {
				current.classList.add('open');
				console.log("close")
			}
		}


	}, [])


	const changeMode = () => {
		dispatch({
			type: "CHANGE_MODE",
		});

	}
	return (
		<>
			<StyledHeader1 className="header header-transparent rs-nav">
				<Sticky enabled={true} className="sticky-header navbar-expand-lg" >
					<StyledHeader className="menu-bar clearfix" >
						<div className="container-fluid clearfix">
							<div className="menu-logo logo-dark" style={{ marginTop: "-30px" }}>
								<Link to="/"><img src={iprove} alt="" /></Link>
							</div>
							<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
								<span></span>
								<span></span>
								<span></span>
							</button>
							<div className="secondary-menu">
								<ul>
									<li className="btn-area"><button onClick={changeMode} className="btn  shadow">{nightMode ? "Light Mode" : "Dark Mode"} <i className="btn-icon-bx fas fa-chevron-right"></i></button></li>
								</ul>
							</div>
							<div className="menu-links navbar-collapse collapse justify-content-end" id="menuDropdown">
								<div className="menu-logo">
									<Link to="/"><img src={iprove} alt="" /></Link>
								</div>
								<ul className="nav navbar-nav">
									<li className="active"><Link to="/">Home</Link></li>
									<li><Link to="/about-us"><span>About Us</span></Link></li>
									<li><Link to="/services/kyc"><span>Services</span></Link></li>
									<li><Link to="/api/welcome"><span>API</span></Link></li>
									<li><Link to="/contact-us"><span>Contact Us</span></Link></li>
									{/*			<li>
									<Link to="#">Pages <i className="fas fa-plus"></i></Link>
									<ul className="sub-menu">
										<li className="add-menu-left">
											<ul>
												<li><Link to="/about-us"><span>About Us</span></Link></li>
												<li><Link to="/team"><span>Our Team</span></Link></li>
												<li><Link to="/faq"><span>FAQ's</span></Link></li>
												<li><Link to="/booking"><span>Booking</span></Link></li>
												<li><Link to="/error-404"><span>Error 404</span></Link></li>
												<li><Link to="/form-login"><span>Login / Register</span></Link></li>
											</ul>
										</li>
									</ul>
								</li> 
								<li>
									<Link to="#">Services <i className="fas fa-plus"></i></Link>
									<ul className="sub-menu">
										<li className="add-menu-left">
											<ul>
												<li><Link to="/services"><span>Service</span> </Link></li>
												<li><Link to="/service-detail"><span>Service Detail</span></Link></li>
											</ul>
										</li>
									</ul>
								</li>
								<li><Link to="#">Blog <i className="fas fa-plus"></i></Link>
									<ul className="sub-menu left">
										<li><Link to="/blog-grid"><span>Blogs</span></Link></li>
										<li><Link to="/blog-details"><span>Blog Details</span></Link></li>
									</ul>
								</li> */}

								</ul>
								{/*		<ul className="social-media">
								<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="btn btn-primary"><i className="fab fa-facebook-f"></i></a></li>
								<li><a target="_blank" rel="noreferrer" href="https://www.google.com/" className="btn btn-primary"><i className="fab fa-google"></i></a></li>
								<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className="btn btn-primary"><i className="fab fa-linkedin-in"></i></a></li>
								<li><a target="_blank" rel="noreferrer" href="https://twitter.com/" className="btn btn-primary"><i className="fab fa-twitter"></i></a></li>
							</ul> */}
								<div className="menu-close" id="menuClose" style={{ backgroundColor: "#fff" }}>
									<i className="ti-close"></i>
								</div>
							</div>
						</div>
					</StyledHeader>
				</Sticky>
			</StyledHeader1>

		</>
	);
};

export default Header;
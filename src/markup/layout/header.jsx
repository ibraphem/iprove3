import React, {useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images

import iprove from '../../images/iprove.png';
import { StyledHeader, StyledHeader1, StyledHeader2 } from '../../styles/Header.styled';
import { useStateValue } from '../../StateProvider';




const Header = () => {

	const [{ nightMode }, dispatch] = useStateValue();
	useEffect(() => {
		var menuIcon = document.querySelector(".menuicon")
		var menuLinks = document.querySelector(".menu-links")
		var menuClose = document.getElementById("menuClose")
	
		menuIcon.addEventListener('click',function(){
			menuLinks.classList.add("show")
		})
	
		menuClose.addEventListener('click',function(){
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
			
			if(active){
				current.classList.remove('open') 
				console.log("active")
			} else{
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
		<header className="header header-transparent rs-nav">
			<Sticky enabled={true} className="sticky-header navbar-expand-lg" >
				<StyledHeader className="menu-bar clearfix" >
					<div className="container-fluid clearfix">
						<div className="menu-logo logo-dark" style={{marginTop: "-30px"}}>
							<Link to="/"><img src={iprove} alt=""/></Link>
						</div>
						<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
							<span></span>
							<span></span>
							<span></span>
						</button>
						<div className="secondary-menu">
							<ul>
								<li className="btn-area"><button onClick={changeMode} className="btn  shadow">{nightMode ? "Light Mode" : "Dark Mode"} <i className="btn-icon-bx fas fa-chevron-right" style={{color:"#F0B90B"}}></i></button></li>
							</ul>
						</div>
						<div className="menu-links navbar-collapse collapse justify-content-end" id="menuDropdown">
							<div className="menu-logo">
								<Link to="/"><img src={iprove} alt=""/></Link>
							</div>
							<ul className="nav navbar-nav">	
								<li><NavLink activeStyle={{ color: '#fff' }} to="/">Home</NavLink></li>
								<li ><NavLink activeStyle={{ color: '#fff' }} to="/about-us">About Us</NavLink></li>
								<li><NavLink activeStyle={{ color: '#fff' }} to="/services/kyc">Services</NavLink></li>
								<li><NavLink activeStyle={{ color: '#fff' }} to="/api">API</NavLink></li>
								<li><NavLink activeStyle={{ color: '#fff' }} to="/contact-us">Contact Us</NavLink></li>		
							</ul>

							<div className="menu-close" id="menuClose" >
								<i className="ti-close"></i>
							</div> 
						</div>
					</div>
				</StyledHeader>
			</Sticky>
		</header>
		
	</>
	);
};

export default Header;
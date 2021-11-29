import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Elements
import BackToTop from './elements/back-top';
import PageScrollTop from './elements/page-scroll-top';

// All Pages Router
import Index from './pages/index';
import AboutUs from './pages/about-us';
import Services from './pages/services';
import ServiceDetail from './pages/service-detail';
import ContactUs from './pages/contact-us';
import Error from './pages/error-404';
import Footer from './layout/footer';

class Markup extends Component{
	render(){
		return(
			<>
				<BrowserRouter>
					
					<Switch>
					
						<Route path='/' exact component={Index} />
						<Route path='/about-us' exact component={AboutUs} />
						<Route path='/contact-us' exact component={ContactUs} />
						<Route path='/services/:service' exact component={Services} />
						<Route path='/api' exact component={ServiceDetail} />
						<Route component={Error} />
						
					</Switch>
					
					<PageScrollTop />
					<Footer/>
				</BrowserRouter>
				
				<BackToTop />
				
			</>
		);
	}
}

export default Markup;
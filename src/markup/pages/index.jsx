import React, {Component} from 'react';

// Elements
import MainBannerSection from "../elements/main-banner";
import WorkSection from "../elements/work";
import TestimonialSection from "../elements/testimonial";
import ServicesSliderSection from "../elements/services-slider";
import Header from '../layout/header';


class Index extends Component{
	
	render(){
		return (
			<>	
			<Header/>
				<MainBannerSection />
				<WorkSection />
				<ServicesSliderSection />
				<TestimonialSection />


			</>
		);
	}
}

export default Index;
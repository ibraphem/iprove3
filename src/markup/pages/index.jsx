import React, {Component} from 'react';

// Elements
import MainBannerSection from "../elements/main-banner";
import WorkSection from "../elements/work";
import TestimonialSection from "../elements/testimonial";
import ServicesSliderSection from "../elements/services-slider";


class Index extends Component{
	
	render(){
		return (
			<>	
				<MainBannerSection />
				<WorkSection />
				<ServicesSliderSection />
				<TestimonialSection />


			</>
		);
	}
}

export default Index;
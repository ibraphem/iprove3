import React, { Component } from 'react';
import '../../layouts/generic.css';
import './welcome.css';
// Layout
import ApiHeader from "../../layouts/ApiHeader";
import ApiSide from "../../layouts/ApiSide";
// Import Images
import servicesPic1 from "../../../../../images/services/welcome_api.jpg";

class Welcome extends Component {

	render() {
		return (
			<>
				<div className="page-content bg-white">
					<ApiHeader />
					{/*  ApiHeader */}
					<section className="section-area section-sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-4">
									{/*  Nav SideBar */}
									<ApiSide />
								</div>
								<div className="col-lg-8 mb-30">
									<div className="ttr-media mb-30">
										<h2>Welcome</h2><hr style={{ color: "black" }} />
										<p>Hey There! How's your day going?</p>
										<img src={servicesPic1} className="rounded" alt="" />
									</div>
									<div className="clearfix">
										<div className="head-text mb-30">
											<h2 className="title mb-15">Why Iprove?</h2>
											<p className="mb-0">
											Iprove allows you to verify the identities of other individuals all over the country. This could be for hiring, Background checks, etc.</p>
										 <p>Our APIs expose most of our services for you to be able to include our services into the great products you're building.</p>
										</div>
									</div>
									<div className="col-lg-8 mb-30">
										<div className="readmore">
										<div>
												<ul class="pager">
													<li class="previous">
													<a href="css-float">&larr; Prev</a>
													</li>
													<li class="next">
													<a href="styling-link-into-nice-button">Next &rarr;</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

							</div>
							
						</div>
					</section>

				</div>

			</>
		);
	}
}

export default Welcome;
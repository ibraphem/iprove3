import React, { Component } from 'react';
import '../../layouts/generic.css';
import './getting-started.css';
// Layout
import ApiHeader from "../../layouts/ApiHeader";
import ApiSide from "../../layouts/ApiSide";
// Import Images
import servicesPic1 from "../../../../../images/services/get1.png";
import servicesPic2 from "../../../../../images/services/get2.png";

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
										<h2>Getting Started</h2><hr />
										<p>You can start integrating our API's into your beautiful products by following the steps below:</p>
										<img src={servicesPic1} className="rounded" alt="" />
									</div>
									<div className="clearfix">
										<div className="head-text mb-30">

											<ul>
												<li className="listing">
													<p className="mb-0">Once you have created the account,
														Kindly request for your account to be enabled for API from your verifyMe account manager. You need to specify your risk threshold and identity payload type while making this request.
														See more about risk level and identity payload type here</p><br />
												</li>
												<li className="listing">
													<p className="mb-0">
														Once created you should have access to the API section in the image below. Your API KEYS  and Webhooks can be found in this part of your portal.</p>
												</li>
											</ul>
											<br />
											<img src={servicesPic2} className="rounded" alt="" />
											<ul>
												<li className="listing">
													<p className="mb-0">Head over to the Billing tab and fund your account in order to start making verification requests</p><br />
												</li>
												<li className="listing">
													<p className="mb-0">Once funded, You should be able to make successful API calls🎊</p><br />

												</li>
											</ul>
										</div>
									</div>
									<div className="mb-30">
										<div className="readmore">
											<div>
												<ul class="pager">
													<li class="previous">
														<a href="/api/welcome">&larr; Prev</a>
													</li>
													<li class="next">
														<a href="/api/introduction">Next &rarr;</a>
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
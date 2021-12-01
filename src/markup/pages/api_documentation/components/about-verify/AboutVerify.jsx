import React, { Component } from 'react';
import '../../layouts/generic.css';
import './about_verify.css';
// Layout
import ApiHeader from "../../layouts/ApiHeader";
import ApiSide from "../../layouts/ApiSide";
// Import Images


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
										<h2>About verification</h2><hr style={{ color: "black" }} />

									</div>
									<div className="clearfix">
										<div className="head-text mb-30">
											<h5 className="title mb-15">Risk Levels</h5>
											<p className="mb-0">
												Some of our verifications might require the applicant's Identity to be verified. But we understand that these may not be necessary for your use case.</p>
											<br /><p>
												To solve this we introduced risk levels that are specific for each organization on our platform. These help us determine how strict our system should verify the data provided.
												They are set by our customer service while enabling an organization for API access.
											</p>
											<br /><p>
												They are:

											</p>
											<br />
											<div class="table-responsive">
												<table class="table">
													<thead>
														<tr>
															<th scope="col">Risk Level</th>
															<th scope="col">Description</th>

														</tr>
													</thead>
													<tbody>
														<tr>
															<th>NONE</th>
															<td><p>This implies that no form of identity verification should be done on applicants</p></td>

														</tr>
														<tr>
															<th>LOW</th>
															<td><p>This implies that only the last name of the applicant would be verified</p></td>

														</tr>
														<tr>
															<th>MEDIUM</th>
															<td><p>This implies that the last name and first name of the applicant would be verified</p></td>

														</tr>
														<tr>
															<th>HIGH</th>
															<td><p>This implies the first name, last name, and date of birth would be verified</p></td>

														</tr>



													</tbody>
												</table>
											</div>
											<br />
											<br />
											<div className="mb-30 quoteTag">

												<p className="mb-0">
													The optional fields for each request are dependent on what threshold your
													account is set on ie If a particular threshold is selected and the fields required are not provided then the verification will throw an error.

												</p><br />
												<p className="mb-0">
													Eg: A company "Z" registers an account with a MEDIUM risk level. if  Z wants to make an address verification request and the request does not contain the
													firstname or lastname fields for the applicant, then Z's API request would return an error.
												</p>
											</div>
											<br /><p>
												The minimum risk levels for each of our verifications are:

											</p>
											<br />
											<div class="table-responsive">
												<table class="table">
													<thead>
														<tr>
															<th scope="col">Verification</th>
															<th scope="col">Minimum Risk Level</th>

														</tr>
													</thead>
													<tbody>
														<tr>
															<td><p>Address Verifications</p></td>
															<th>LOW</th>
														</tr>
														<tr>

															<td><p>Guarantor Verifications</p></td>
															<th>LOW</th>

														</tr>

													</tbody>
												</table>
											</div>

										</div>
									</div>
									<div className="mb-30">
										<div className="readmore">
											<div>
												<ul class="pager">
													<li class="previous">
														<a href="/api/authentication">&larr; Prev</a>
													</li>
													<li class="next">
														<a href="/api/user_verify/id">Next &rarr;</a>
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
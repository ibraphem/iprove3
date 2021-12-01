import React, { useState } from 'react';
import { MdContentCopy } from "react-icons/md";
import '../../layouts/generic.css';
import './introduction.css';
import { CopyToClipboard } from "react-copy-to-clipboard";
// Layout
import ApiHeader from "../../layouts/ApiHeader";
import ApiSide from "../../layouts/ApiSide";
// // Import Images
// import servicesPic1 from "../../../../../images/services/welcome_api.jpg";

const Welcome = () => {

	//const [text, setText] = useState("");
	const [isCopied, setIsCopied] = useState(false);

	const onCopyText = () => {
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 1000);
	};

	const codeSnippet = `
  1|  https://testapi.iprove.ng/
  `;

	const codeSnippet2 = `
	https://testapi.iprove.ng/
  `;
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
									<h2>Introduction</h2><hr style={{ color: "black" }} />
									<h3>API Reference</h3>
									{/* <img src={servicesPic1} className="rounded" alt="" /> */}
								</div>
								<div className="clearfix">
									<div className="head-text mb-30">

										<p className="mb-0">
											The iProve REST API is a very important part of the  VerifyMe platform.
											The API is built using RESTful endpoints and standard HTTP verbs and uses standard HTTP response codes
											to indicate the success or failure of an API request.
										</p>
									</div>
									<div className="containerCopy">
										<div className="code-snippet">
											<div className="code-section">
												<pre>{codeSnippet}</pre>
												<CopyToClipboard text={codeSnippet2} onCopy={onCopyText}>
													<span>{isCopied ? "Copied!" : <MdContentCopy />}</span>
												</CopyToClipboard>
											</div>
										</div>
									</div>
								</div>
								<div className="mb-30">
									<div className="readmore">
										<div>
											<ul class="pager">
												<li class="previous">
													<a href="/api/getting-started">&larr; Prev</a>
												</li>
												<li class="next">
													<a href="/api/authentication">Next &rarr;</a>
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


export default Welcome;
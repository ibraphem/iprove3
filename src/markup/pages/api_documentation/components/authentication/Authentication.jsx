import React, { useState } from 'react';
import { MdContentCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import '../../layouts/generic.css';
import './authentication.css';
// Layout
import ApiHeader from "../../layouts/ApiHeader";
import ApiSide from "../../layouts/ApiSide";
// Import Images
import servicesPic1 from "../../../../../images/services/iprove_auth.png";

const Authentication = () => {

	
	const [isCopied, setIsCopied] = useState(false);

	const onCopyText = () => {
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 1000);
	};


	const codeSnippet = `
	1 {
	2	"Authorization": "Bearer <secret>"
	3 }
  `;

	const codeSnippet2 = `
		{
		"Authorization": "Bearer <secret>"
		}
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
									<h2>Authentication</h2><hr style={{ color: "black" }} />

									<img src={servicesPic1} className="rounded" alt="" />
								</div>
								<div className="clearfix">
									<div className="mb-30">
										<div className="containerCopy">
											<div className="code-snippet">
												<div className="code-section">
													<pre><code>{codeSnippet}</code></pre>
													<CopyToClipboard text={codeSnippet2} onCopy={onCopyText}>
														<span>{isCopied ? "Copied!" : <MdContentCopy />}</span>
													</CopyToClipboard>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="mb-30">
									<div className="readmore">
										<div>
											<ul class="pager">
												<li class="previous">
													<a href="/api/introduction">&larr; Prev</a>
												</li>
												<li class="next">
													<a href="/api/about-verification">Next &rarr;</a>
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


export default Authentication;
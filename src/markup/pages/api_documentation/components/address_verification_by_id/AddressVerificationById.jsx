import React, {useState} from 'react';
// import { Collapse,Table,Button} from 'antd';
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import {
    Circle
} from 'draw-shape-reactjs';
import { MdContentCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
//import Prism from "prismjs";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
//import { darcula, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
//import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import '../../layouts/generic.css';
import './address_verification_by_id.css';
import '../../layouts/prism.css';
// Layout
import ApiHeader from "../../layouts/ApiHeader";
import ApiSide from "../../layouts/ApiSide";
//import ResponseComponent from "./ninResponse";
import { columns1, 
	// columns2,columns3,
	columns4, 
	// columns5,columns6,columns7,columns8,
	codeString, error404, requestBody, codeString_header,curlRequest
 } from './jsondata';
import { Container } from 'react-bootstrap';
SyntaxHighlighter.registerLanguage('jsx', jsx);

const AddressVerificationById = () => {

	  const [isCopied, setIsCopied] = useState(false);

	  const onCopyText = () => {
		  setIsCopied(true);
		  setTimeout(() => {
			  setIsCopied(false);
		  }, 1000);
	  };
  
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
										<h3>GET ADDRESS VERIFICATION BY ID</h3><hr style={{ color: "black" }} />
										{/* <p>Hey There! How's your day going?</p>
										<img src={servicesPic1} className="rounded" alt="" /> */}
									</div>
									<div className="clearfix">
										<div className="mb-30 collapsed">
										<Accordion defaultActiveKey="0">
											<Accordion.Item eventKey="0">
												<h5 style={{padding:"5px",margin:"5px"}}>Fetch a verified address for an Identity</h5>
												<p>This endpoint returns a verified address for a given identity within a specified period.</p>
												<Accordion.Header>
												<input type="button" value="GET" size="sm" className="myButton" variant="primary"></input>
												&nbsp;&nbsp;&nbsp;&nbsp; <strong><small>{`https://testapi.iprove.ng/identity/api/v1/address/get_verification/{verificationId}`}</small></strong>
												
												</Accordion.Header>
												<Accordion.Body>
												<Container>
													<Row>
														<Col sm ><p className="params">Parameters</p></Col>
													</Row>	
													<br/>
													<Row>
														<Col sm><p className="paramsHeading">Paths</p></Col>
													</Row>

													<Row>
														<Col sm><p>{columns1[0].title}</p></Col>
														<Col sm><p>{columns1[1].title}</p></Col>
														<Col sm><p>{columns1[2].title}</p></Col>
													</Row>	
													<br/>	


													{/* <Row>
														<Col sm><p className="paramsHeading">Query</p></Col>
													</Row>

													<Row>
														<Col sm><p>{columns2[0].title}</p></Col>
														<Col sm><p>{columns2[1].title}</p></Col>
														<Col sm><p>{columns3[2].title}</p></Col>
													</Row>		

													<br/> */}
													<Row>
														<Col sm><p className="paramsHeading"> Header</p></Col>
													</Row>

													<br/>	
													{/* <Row>
														<Col sm><p className="paramsHeading">Body</p></Col>
													</Row> */}
														<Row>
															<Col sm><p>{columns4[0].title}</p></Col>
															<Col sm><p>{columns4[1].title}</p></Col>
															<Col sm><p>{columns4[2].title}</p></Col>
														</Row>
														{/* <Row>
															<Col sm><p>{columns5[0].title}</p></Col>
															<Col sm><p>{columns5[1].title}</p></Col>
															<Col sm><p>{columns5[2].title}</p></Col>
														</Row>
														<Row>
															<Col sm><p>{columns6[0].title}</p></Col>
															<Col sm><p>{columns6[1].title}</p></Col>
															<Col sm><p>{columns6[2].title}</p></Col>
														</Row>
														<Row>
															<Col sm><p>{columns7[0].title}</p></Col>
															<Col sm><p>{columns7[1].title}</p></Col>
															<Col sm><p>{columns7[2].title}</p></Col>
														</Row>
														<Row>
															<Col sm><p>{columns8[0].title}</p></Col>
															<Col sm><p>{columns8[1].title}</p></Col>
															<Col sm><p>{columns8[2].title}</p></Col>
														</Row> */}
														<br/><br/>
													
													<Row>
														<Col sm ><p className="params">Responses</p></Col>
													</Row>
													<br/>
												
														<Accordion>
															<Accordion.Item eventKey="0">
																<Accordion.Header>
																	<Row>
																		<Col sm><p className="paramsb"><span className="circle"><Circle center={[15, 25]} radius={3} color='green' /></span>
																				&nbsp;&nbsp;200 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="paramsHeading">Request Successful</span></p>
																		</Col>
																	</Row>
																
																</Accordion.Header>
																<Accordion.Body>
																<Row><Col>
																<div class="mb-30 panel-body">
																<pre class="line-numbers">
																	<code className="language-javascript">
																	{codeString}												
																	</code>		
																</pre>
																<CopyToClipboard text={codeString} onCopy={onCopyText}>
																		<span>{isCopied ? "Copied!" : <MdContentCopy />}</span>
																</CopyToClipboard>
																</div>	
																</Col></Row>
																</Accordion.Body>
															</Accordion.Item>
															
														</Accordion>												
														<Accordion>
															<Accordion.Item eventKey="0">
																<Accordion.Header>
																	<Row>
																		<Col sm><p className="paramsb"><span className="circle"><Circle center={[15, 25]} radius={3} color='red' /></span>
																				&nbsp;&nbsp;404 	</p>
																		</Col>
																	</Row>
																
																</Accordion.Header>
																<Accordion.Body>
																<Row><Col>
																<div class="mb-30 panel-body">
																<pre className="line-numbers">
																	<code className="language-javascript">
																	{error404}												
																	</code>		
																</pre>
																<CopyToClipboard text={codeString} onCopy={onCopyText}>
																		<span>{isCopied ? "Copied!" : <MdContentCopy />}</span>
																</CopyToClipboard>
																</div>	
																</Col></Row>
																</Accordion.Body>
															</Accordion.Item>
															
														</Accordion>
												</Container>
												</Accordion.Body>
											</Accordion.Item>
											
											</Accordion>
										</div>
										<div className="mb-30">
											<Row>
												<Col sm><p className="params">Sample Request</p></Col>
											</Row>
											<Row>
												<Tabs defaultActiveKey="json" id="uncontrolled-tab-example" className="mb-3">
													<Tab eventKey="json" title="JSON">
													<Col sm>
												<div class="mb-30 panel-body">
													<pre class="line-numbers">
														<code className="language-javascript">
															{requestBody}
														</code>
													</pre>
														
													<CopyToClipboard text={codeString_header} onCopy={onCopyText}>
														<span>{isCopied ? "Copied!" : <MdContentCopy />}</span>
													</CopyToClipboard>
												</div>
													</Col>
													</Tab>
													<Tab eventKey="curl" title="CURL">
													<Col sm>
														<div class="mb-30 panel-body">
																<pre className="line-numbers">
																	<code className="language-javascript">
																		{curlRequest}												
																	</code>		
																</pre>
																<CopyToClipboard text={codeString_header} onCopy={onCopyText}>
																	<span>{isCopied ? "Copied!" : <MdContentCopy />}</span>
																</CopyToClipboard>																	
														</div>
													</Col>
													</Tab>
													
												</Tabs>
												
											</Row>	
											<Row>
												<Col>
												
													
												</Col>
											</Row>		
										</div>
									</div>
									<div className="mb-30">
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


export default AddressVerificationById;
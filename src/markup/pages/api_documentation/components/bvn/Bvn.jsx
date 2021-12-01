import React, {useState} from 'react';
// import { Collapse,Table,Button} from 'antd';
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import { MdContentCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Col from 'react-bootstrap/Col'
import SyntaxHighlighter from 'react-syntax-highlighter';
import '../../layouts/generic.css';
import './bvn.css';
// Layout
import ApiHeader from "../../layouts/ApiHeader";
import ApiSide from "../../layouts/ApiSide";
//import ResponseComponent from "./bvnResponse";
import { columns1, columns2,columns3, columns4, columns5, columns6 } from './jsondata';
import { Container } from 'react-bootstrap';


const Bvn = () => {
	  //const { Panel } = Collapse;
	  const codeString = 
	  `
	  {
		  "status": "success",
		  "data": {
			"fieldMatches":{
			  "firsname":false,
			  "lastname":false,
			  "dob":false
			}
			"bvn": 10000000001,
			"firstname": "John",
			"lastname": "Doe",
			"middlename": "Jane"
			"phone": "08066676673",
			"gender": "female"
			"birthdate": "04-04-1944",
			"photo": "Base64 Encoded",
			"maritalStatus": "Single",
			"lgaOfResidence": "Surulere",
			"lgaOfOrigin": "Ijebu ode",
			"residentialAddress": "1 jameson street",
			"stateOfOrigin": "Ogun State",
			"enrollmentBank": "058",
			"enrollmentBranch": "BODIJA",
			"nameOnCard": "JOHN DOE",
			"title": "Mr",
			"levelOfAccount": "Level 2 - Medium Level Accounts",
		  } 
		}
	  `;
		
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
										<h2>Biometric Verification Number - (BVN)</h2><hr style={{ color: "black" }} />
										{/* <p>Hey There! How's your day going?</p>
										<img src={servicesPic1} className="rounded" alt="" /> */}
									</div>
									<div className="clearfix">
										<div className="mb-30 quoteTag">

											<p className="mb-0">
											Please note that when using your test key, Our test 
											persona is <b>John Doe</b> and his Bank Verification Number as 
											<b>10000000001</b>. Hence all matching done with your test keys
											 with details other than that of our Test Persona would 
											 simulate a failed identity matching. 
											</p>
										</div>
										<div className="mb-30 collapsed">
										<Accordion>
											<Accordion.Item eventKey="0">
												<h5>Verify BVN</h5>
												<Accordion.Header>
												<input type="button" value="POST" size="sm" className="myButton" variant="primary"></input>
												&nbsp;&nbsp;&nbsp;&nbsp; <strong><small>https://vapi.verifyme.ng/v1/verifications/identities/bvn/:ref</small></strong>
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


													<Row>
														<Col sm><p className="paramsHeading">Query</p></Col>
													</Row>

													<Row>
														<Col sm><p>{columns2[0].title}</p></Col>
														<Col sm><p>{columns2[1].title}</p></Col>
														<Col sm><p>{columns3[2].title}</p></Col>
													</Row>		

													<br/>
													<Row>
														<Col sm><p className="paramsHeading">Header</p></Col>
													</Row>

													<Row>
														<Col sm><p>{columns3[0].title}</p></Col>
														<Col sm><p>{columns3[1].title}</p></Col>
														<Col sm><p>{columns3[2].title}</p></Col>
													</Row>	
													<br/>	
													<Row>
														<Col sm><p className="paramsHeading">Body</p></Col>
													</Row>
													<Row>
															<Col sm><p>{columns4[0].title}</p></Col>
															<Col sm><p>{columns4[1].title}</p></Col>
															<Col sm><p>{columns4[2].title}</p></Col>
														</Row>
														<Row>
															<Col sm><p>{columns5[0].title}</p></Col>
															<Col sm><p>{columns5[1].title}</p></Col>
															<Col sm><p>{columns5[2].title}</p></Col>
														</Row>
														<Row>
															<Col sm><p>{columns6[0].title}</p></Col>
															<Col sm><p>{columns6[1].title}</p></Col>
															<Col sm><p>{columns6[2].title}</p></Col>
														</Row>
														<br/><br/>
													<Row>
														<Col sm ><p className="params">Responses</p></Col>
													</Row>
													<br/>
													<Row>
														<Accordion>
															<Accordion.Item eventKey="0">
																<Accordion.Header>
																	<Row>
																		<Col sm><p className="paramsb"><span className="circle"></span>
																				&nbsp;&nbsp;200 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For premium payload type</p>
																		</Col>
																	</Row>
																
																</Accordion.Header>
																<Accordion.Body className="panel-body">
																
																<SyntaxHighlighter language="javascript" showLineNumbers={true}>
																	{codeString}																	
																</SyntaxHighlighter>
																<CopyToClipboard text={codeString} onCopy={onCopyText}>
																		<span>{isCopied ? "Copied!" : <MdContentCopy />}</span>
																</CopyToClipboard>
																</Accordion.Body>
															</Accordion.Item>
														</Accordion>
													</Row>	
													
												</Container>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey="1">
												<Accordion.Header>Accordion Item #2</Accordion.Header>
												<Accordion.Body>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
												tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
												veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
												commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
												velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
												cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
												est laborum.
												</Accordion.Body>
											</Accordion.Item>
											</Accordion>
											
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


export default Bvn;
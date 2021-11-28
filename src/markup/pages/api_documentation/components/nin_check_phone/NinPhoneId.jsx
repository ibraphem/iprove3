import React, {useState} from 'react';
// import { Collapse,Table,Button} from 'antd';
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import { MdContentCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Col from 'react-bootstrap/Col';
import '../../layouts/prism.css';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
//import { darcula, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
//import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import '../../layouts/generic.css';
import './nin_phone_id.css';
// Layout
import ApiHeader from "../../layouts/ApiHeader";
import ApiSide from "../../layouts/ApiSide";
//import ResponseComponent from "./ninResponse";
import { columns1, columns2,columns3 } from './jsondata';
import { Container } from 'react-bootstrap';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const NinPhoneId = () => {

	
	  //const { Panel } = Collapse;
const codeString_header = `
	secret-key =  {secretKey}"
	org-id ={organizationId} 
`
const codeString = 
`{
    "message": "Request Successful",
    "success": true,
    "payload": {
        "title": "miss",
        "firstname": "KUDIRAT",
        "surname": "AZEEZ",
        "middlename": "OMOWUNMI",
        "birthcountry": "****",
        "birthdate": "26-05-1994",
        "birthlga": "****",
        "birthstate": "****",
        "gender": "f",
        "nin": "23521253866",
        "telephoneno": "08127763271",
        "religion": null,
        "photo": "Base64 Encoded"
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
										<h3>CHECK NIN BY PHONE NO</h3><hr style={{ color: "black" }} />
										{/* <p>Hey There! How's your day going?</p>
										<img src={servicesPic1} className="rounded" alt="" /> */}
									</div>
									<div className="clearfix">
										<div className="mb-30 quoteTag">

											<p className="mb-0">
											Please Joor note that when using your test key, Our test 
											personel is <b>John Doe</b> and his Bank Verification Number as 
											<b>10000000001</b>. Hence all matching done with your test keys
											 with details other than that of our Test Persona would 
											 simulate a failed identity matching. 
											</p>
										</div>
										<div className="mb-30 collapsed">
										<Accordion defaultActiveKey="0">
											<Accordion.Item eventKey="0">
												<h5>Check User Details by Phone Number</h5>
												<Accordion.Header>
												<input type="button" value="GET" size="sm" className="myButton" variant="primary"></input>
												&nbsp;&nbsp;&nbsp;&nbsp; <strong><small>{`https://testapi.iprove.ng/identity/api/v1/nin/details/get_by_id/{phoneNumber}`}</small></strong>
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
														<Col sm><p className="paramsHeading">Request Header</p></Col>
													</Row>

													<Row>
														<Col sm>
														<div class="mb-30 panel-body">
															<SyntaxHighlighter language="javascript"  showLineNumbers={true}>
																{codeString_header}
																<CopyToClipboard text={codeString_header} onCopy={onCopyText}>
																<span>{isCopied ? "Copied!" : <MdContentCopy />}</span>
															</CopyToClipboard>																	
															</SyntaxHighlighter>
															<CopyToClipboard text={codeString_header} onCopy={onCopyText}>
																<span>{isCopied ? "Copied!" : <MdContentCopy />}</span>
															</CopyToClipboard>
														</div>
														</Col>
														
													</Row>	
													<br/>	
													<Row>
														<Col sm><p className="paramsHeading">Body</p></Col>
													</Row>
													<Row>
															<Col sm><p>NONE</p></Col>
															<Col sm><p>&nbsp;</p></Col>
															<Col sm><p>&nbsp;</p></Col>
														</Row>
														
														<br/><br/>
													<Row>
														<Col sm ><p className="params">Responses</p></Col>
													</Row>
													<br/>
												
														<Accordion defaultActiveKey="0">
															<Accordion.Item eventKey="0">
																<Accordion.Header>
																	<Row>
																		<Col sm><p className="paramsb"><span className="circle"></span>
																				&nbsp;&nbsp;200 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For premium payload type</p>
																		</Col>
																	</Row>
																
																</Accordion.Header>
																<Accordion.Body>
																<Row><Col>
																<div class="mb-30 panel-body">
																	<pre className="line-numbers">
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
												</Container>
												</Accordion.Body>
											</Accordion.Item>
											{/* <Accordion.Item eventKey="1">
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
											</Accordion.Item> */}
											</Accordion>
											
										</div>
									</div>
									<div className="mb-30">
										<div className="readmore">
										<div>
												<ul class="pager">
													<li class="previous">
													<a href="/api/user_verify/id">&larr; Prev</a>
													</li>
													<li class="next">
													<a href="/api/user_verify/fingerprint/">Next &rarr;</a>
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


export default NinPhoneId;
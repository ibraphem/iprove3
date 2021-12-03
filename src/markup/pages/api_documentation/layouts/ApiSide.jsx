import { useState, useEffect } from 'react';
import './apiSidebar.css';
import { Link,useParams} from 'react-router-dom';
import Sticky from 'react-stickynode';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { isMobile } from "react-device-detect";

function ApiSide(props) {

    let params = useParams();
    const [sidebar, setSidebar] = useState(false)

    const showSideBar = () => {
        setSidebar(!sidebar)
        console.log(sidebar)
    }

    useEffect(() => {
        if(!isMobile && !sidebar){
            setSidebar(true)
        }
      }, [sidebar]);
    
      const screenHeight = isMobile && sidebar ? "600px": 
                           !isMobile && sidebar ? "600px":
                           isMobile && !sidebar ? "100px" : ""

    return (
       
        <Sticky>
            <aside className="sticky-top pb-1 sideBar" style={{height:`${screenHeight}`}}>
                <div className="navbar">
                {isMobile &&
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSideBar}/>
                    </Link>
                    
                }
                </div>
               <div className={sidebar ? "service-menu active" : "service-menu"}>
                     <ul onClick={showSideBar}>

                    {/* <ul className="service-menu"> */}
                    {isMobile ?
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        :
                        ""}
                        <li><Link to="/api/welcome" className={params.welcome === "welcome" && "active"}><span className="serviceText">Welcome </span><i className="fa fa-angle-right"></i></Link></li>
                        <br />
                        <h6>GENERAL</h6>
                        <li><Link to="/api/getting/started" className={params.started === "started" && "active"}><span className="serviceText">Getting Started</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api_introduction" className={params.api_introduction === "api_introduction" && "active"}><span className="serviceText">Introduction</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/page/api/authentication" className={params.authentication === "authentication" && "active"}><span className="serviceText">Authentication</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/about/verification" className={params.verification === "verification" && "active"}><span className="serviceText">About Verifications</span><i className="fa fa-angle-right"></i></Link></li>
                        <br />
                        {/* <h6>NATIONAL ID CARD CHECKS</h6>
                        <li><Link to="/api/user-check-id"><span className="serviceText">Check NIN By ID</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/user-check-phone"><span className="serviceText">Check NIN By Phone No</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/user-check-fingerprint"><span className="serviceText">Check  Nin by Fingerprint</span><i className="fa fa-angle-right"></i></Link></li>
                        <br /> */}
                        <h6>NATIONAL ID VERIFICATION</h6>
                        <li><Link to="/api/user/verify_id" className={params.verify_id === "verify_id" && "active"}><span className="serviceText">Verify NIN By ID</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/user-verify/phone" className={params.phone === "phone" && "active"}><span className="serviceText">Verify NIN By Phone No</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/userverify/fingerprint" className={params.fingerprint === "fingerprint" && "active"}><span className="serviceText">Verify  NIN by Fingerprint</span><i className="fa fa-angle-right"></i></Link></li>
                        <br />
                        <h6>BUSINESS VERIFICATIONS</h6>
                        <li><Link to="/api/business/verify/submit" className={params.submit === "submit" && "active"}><span className="serviceText">Submit Business Verification</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/business/verify_cancel" className={params.verify_cancel === "verify_cancel" && "active"}><span className="serviceText">Cancel Business Verification</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/business_verify/getById" className={params.getById === "getById" && "active"}><span className="serviceText">Get Business Verification by ID</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/business_verify_all/businesses" className={params.businesses === "businesses" && "active"}><span className="serviceText">Get All Business Verifications</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/business_verify/all/statuses" className={params.statuses === "statuses" && "active"}><span className="serviceText">Get All Business Verifications by Status</span><i className="fa fa-angle-right"></i></Link></li>
                        {/* <li><Link to="/api/identity-biometrics"><span className="serviceText">Identity Biometrics</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/identity-matching"><span className="serviceText">Identity Matching</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/nin"><span className="serviceText">National Identity</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/tin"><span className="serviceText">Tax Identification Number</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/voterscard"><span className="serviceText">Voters Card</span><i className="fa fa-angle-right"></i></Link></li>
                        */}
                        <br /> 
                        <h6>ADDRESS VERIFICATIONS</h6>
                        <li><Link to="/api/address/verification/submit" className={params.submit === "submit" && "active"}><span className="serviceText">Submit Address Verification</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api-address/verification/cancel" className={params.cancel === "cancel" && "active"}><span className="serviceText">Cancel Address verification</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/address-verification/by_id" className={params.by_id === "by_id" && "active"}><span className="serviceText">Get Address Verification By ID</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/all/address/verification/all_address" className={params.all_address === "all_address" && "active"}><span className="serviceText">Get All Address Verification</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/address/verification-status/address_status" className={params.address_status === "address_status" && "active"}><span className="serviceText">Fetch an Address By Identity</span><i className="fa fa-angle-right"></i></Link></li>
                        <br />

                        <h6>PROPERTY VERIFICATIUON</h6>
                        <li><Link to="/api/property/verification/submit_property" className={params.submit_property === "submit_property" && "active"}><span className="serviceText">Submit Property Verification</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api-property/verification/cancel_property" className={params.cancel_property === "cancel_property" && "active"}><span className="serviceText">Cancel Property Verification</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/property-verification/property_id" className={params.property_id === "property_id" && "active"}><span className="serviceText">Get Property Verification By ID</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/all/property/verification/all_property" className={params.all_property === "all_property" && "active"}><span className="serviceText">Get All Property Verification</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/property/verification-status/property_status" className={params.property_status === "property_status" && "active"}><span className="serviceText">Fetch an Property By Identity</span><i className="fa fa-angle-right"></i></Link></li>
                        <br />

                        <h6>EMPLOYMENT VERIFICATIUON</h6>
                        <li><Link to="/api/employment/verification/submit_employment" className={params.submit_employment === "submit_employment" && "active"}><span className="serviceText">Submit Employment History Verification</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api-employment/verification/cancel_employment" className={params.cancel_employment === "cancel_employment" && "active"}><span className="serviceText">Cancel Employment History Verification</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/employment-verification/employment_id" className={params.employment_id === "employment_id" && "active"}><span className="serviceText">Get Employment History Verification By ID</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/all/employment/verification/all_employment" className={params.all_employment === "all_employment" && "active"}><span className="serviceText">Get Employment History Verifications</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/employment/verification-status/employment_status" className={params.employment_status === "employment_status" && "active"}><span className="serviceText">Fetch an Employment History By Identity</span><i className="fa fa-angle-right"></i></Link></li>
                        <br />
                        
                        <h6>GUARANTOR VERIFICATIUON</h6>
                        <li><Link to="/api/guarantor/verification/submit_guarantor" className={params.submit_guarantor === "submit_guarantor" && "active"}><span className="serviceText">Submit Guarantor Verification</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api-guarantor/verification/cancel_guarantor" className={params.cancel_guarantor === "cancel_guarantor" && "active"}><span className="serviceText">Cancel Guarantor History Verification</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/guarantor-verification/guarantor_id" className={params.guarantor_id === "guarantor_id" && "active"}><span className="serviceText">Get Guarantor History Verification By ID</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/all/guarantor/verification/all_guarantor" className={params.all_guarantor === "all_guarantor" && "active"}><span className="serviceText">Get Guarantor History Verifications</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/guarantor/verification-status/guarantor_status" className={params.guarantor_status === "guarantor_status" && "active"}><span className="serviceText">Fetch an Guarantor History By Identity</span><i className="fa fa-angle-right"></i></Link></li>
                        <br />

                        <h6>LOCATION CHECKS</h6>
                        <li><Link to="/api/get/all_states" className={params.all_states === "all_states" && "active"}><span className="serviceText">Get All States</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/get/state/by_lga" className={params.by_lga === "by_lga" && "active"}><span className="serviceText">Get Lga By Country</span><i className="fa fa-angle-right"></i></Link></li>
                        <br />
                        
                        <h6>NATIONAL ID CARD CHECKS</h6>
                        <li><Link to="/api/verify/user/details/by_nin" className={params.by_nin === "by_nin" && "active"}><span className="serviceText">Verify  User Details by NIN ID</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/verify-user/details/by_phone" className={params.by_phone === "by_phone" && "active"}><span className="serviceText">Verify  User Details by Phone No</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/verify-user-details/by_fingerprint" className={params.by_fingerprint === "by_fingerprint" && "active"}><span className="serviceText">Verify  User Details by Fingerprint</span><i className="fa fa-angle-right"></i></Link></li>
                    </ul>
                </div>
            </aside>
        </Sticky>
    );
}

export default ApiSide;
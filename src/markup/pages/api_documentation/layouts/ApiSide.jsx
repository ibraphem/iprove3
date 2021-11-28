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
                        <h6>IDENTITY VERIFICATIONS</h6>
                        <li><Link to="/api/bvn"><span className="serviceText">Bank Verification Numbers (BVN)</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/cac"><span className="serviceText">Corporate Affairs Commission</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/driver-licence"><span className="serviceText">Driver License</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/identity-biometrics"><span className="serviceText">Identity Biometrics</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/identity-matching"><span className="serviceText">Identity Matching</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/nin"><span className="serviceText">National Identity</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/tin"><span className="serviceText">Tax Identification Number</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/voterscard"><span className="serviceText">Voters Card</span><i className="fa fa-angle-right"></i></Link></li>
                        <br />
                        <h6>ADDRESS VERIFICATIONS</h6>
                        <li><Link to="/service-detail"><span className="serviceText">Submit Address Verification</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/service-detail"><span className="serviceText">Get Address Verification By ID</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/service-detail"><span className="serviceText">Get Address Verifications</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/service-detail"><span className="serviceText">Cancel Address verification</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/service-detail"><span className="serviceText">Fetch an Address By Identity</span><i className="fa fa-angle-right"></i></Link></li>
                    </ul>
                </div>
            </aside>
        </Sticky>
    );
}

export default ApiSide;
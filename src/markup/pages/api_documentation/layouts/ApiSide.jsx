import { useState } from 'react';
import './apiSidebar.css';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';
function ApiSide(props) {
    const [activeState, setActiveState] = useState({
        activeObj: null,
        objects: [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}]
    })
    const toggleActiveLink = (index) => {
        console.log("1. activeState", activeState)
        console.log("event clicked is ",activeState.objects[index])
        setActiveState({ ...activeState, activeObj: activeState.objects[index] })
        console.log("2. activeState", activeState)
    }

    return (
       
        <Sticky>
            <aside className="sticky-top pb-1 sideBar">
                <div className="widget">

                    <ul className="service-menu">
                        <li key={1} onClick={()=>toggleActiveLink(1)}><Link to="/api/welcome"><span>Welcome </span><i className="fa fa-angle-right"></i></Link></li>
                        <br />
                        <h6>GENERAL</h6>
                        <li key={2}  onClick={()=>toggleActiveLink(2)}><Link to="/api/getting-started"><span>Getting Started</span><i className="fa fa-angle-right"></i></Link></li>
                        <li key={3} onClick={()=>toggleActiveLink(3)}><Link to="/api/introduction"><span>Introduction</span><i className="fa fa-angle-right"></i></Link></li>
                        <li key={4} onClick={()=>toggleActiveLink(4)}><Link to="/api/authentication"><span>Authentication</span><i className="fa fa-angle-right"></i></Link></li>
                        <li key={5} onClick={()=>toggleActiveLink(5)}><Link to="/api/about-verification"><span>About Verifications</span><i className="fa fa-angle-right"></i></Link></li>
                        <br />
                        <h6>NATIONAL ID CARD CHECKS</h6>
                        <li key={6} onClick={()=>toggleActiveLink(6)}><Link to="/api/user_check/id"><span>Check NIN By ID</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/user_check/phone"><span>Check NIN By Phone No</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/user_check/fingerprint"><span>Check  Nin by Fingerprint</span><i className="fa fa-angle-right"></i></Link></li>
                        <br />
                        <h6>NATIONAL ID VERIFICATION</h6>
                        <li><Link to="/api/user_verify/id"><span>Verify NIN By ID</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/user_verify/phone"><span>Verify NIN By Phone No</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/user_verify/fingerprint"><span>Verify  NIN by Fingerprint</span><i className="fa fa-angle-right"></i></Link></li>
                        <br />
                        {/* <h6>IDENTITY VERIFICATIONS</h6>
                        <li><Link to="/api/bvn"><span>Bank Verification Numbers (BVN)</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/cac"><span>Corporate Affairs Commission</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/driver-licence"><span>Driver License</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/identity-biometrics"><span>Identity Biometrics</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/identity-matching"><span>Identity Matching</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/nin"><span>National Identity</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/tin"><span>Tax Identification Number</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/voterscard"><span>Voters Card</span><i className="fa fa-angle-right"></i></Link></li>
                        <br /> */}
                        <h6>ADDRESS VERIFICATIONS</h6>
                        <li><Link to="/service-detail"><span>Submit Address Verification</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/service-detail"><span>Get Address Verification By ID</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/service-detail"><span>Get Address Verifications</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/service-detail"><span>Cancel Address verification</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/service-detail"><span>Fetch an Address By Identity</span><i className="fa fa-angle-right"></i></Link></li>
                    </ul>
                </div>
            </aside>
        </Sticky>
    );
}

export default ApiSide;
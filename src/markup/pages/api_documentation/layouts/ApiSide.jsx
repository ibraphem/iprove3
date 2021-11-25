import './apiSidebar.css';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';
function ApiSide(props) {
    return (
        <Sticky>
            <aside className="sticky-top pb-1 sideBar">
                <div className="widget">

                    <ul className="service-menu">
                        <li className="active"><Link to="/api/welcome"><span>Welcome </span><i className="fa fa-angle-right"></i></Link></li>
                        <br />
                        <h6>GENERAL</h6>
                        <li ><Link to="/api/getting-started"><span>Getting Started</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/introduction"><span>Introduction</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/authentication"><span>Authentication</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/about-verification"><span>About Verifications</span><i className="fa fa-angle-right"></i></Link></li>
                        <br />
                        <h6>IDENTITY VERIFICATIONS</h6>
                        <li><Link to="/api/bvn"><span>Bank Verification Numbers (BVN)</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/cac"><span>Corporate Affairs Commission</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/driver-licence"><span>Driver License</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/identity-biometrics"><span>Identity Biometrics</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/identity-matching"><span>Identity Matching</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/nin"><span>National Identity</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/tin"><span>Tax Identification Number</span><i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="/api/voterscard"><span>Voters Card</span><i className="fa fa-angle-right"></i></Link></li>
                        <br />
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
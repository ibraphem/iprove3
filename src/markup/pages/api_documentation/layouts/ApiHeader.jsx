import bnrImg1 from "../../../../images/banner/img1.jpg";
import waveBlue from "../../../../images/shap/wave-blue.png";
import circleDots from "../../../../images/shap/circle-dots.png";
import plusBlue from "../../../../images/shap/plus-blue.png";
import './generic.css';

export default function ApiHeader() {
    return (
        <>
            <div className="banner-wraper">
                <div className="page-banner" style={{ height: "200px", backgroundImage: "url(" + bnrImg1 + ")" }}>
                    <div className="container">
                        <div className="page-banner-entry text-center">
                            <h3 style={{ marginTop: '-70px' }}>API DOCUMENTATION</h3>
                            {/* <nav aria-label="breadcrumb" className="breadcrumb-row" style={{}}>
                                <ul className="breadcrumb"  >
                                    <li className="breadcrumb-item"><a href="index.html"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">API Documentation</li>
                                </ul> 
                            </nav>*/}
                        </div>
                    </div>
                    <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
                    <img className="pt-img2 animate2" src={circleDots} alt="" />
                    <img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
                </div>
            </div>
        </>
    )
}

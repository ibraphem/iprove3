import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Elements
import BackToTop from './elements/back-top';
import PageScrollTop from './elements/page-scroll-top';

// All Pages Router
import Index from './pages/index';
import AboutUs from './pages/about-us';
import Team from './pages/team';
import Services from './pages/services';
import ServiceDetail from './pages/service-detail';
import FormLogin from './pages/form-login';
import FormRegister from './pages/form-register';
import FormForgetPassword from './pages/form-forget-password';
import Faq from './pages/faq';
import ContactUs from './pages/contact-us';
import Booking from './pages/booking';
import BlogGrid from './pages/blog-grid';
import BlogDetails from './pages/blog-details';
import Error from './pages/error-404';
import Header from './layout/header';
import Footer from './layout/footer';
import Welcome from './pages/api_documentation/components/welcome/Welcome';
import GettingStarted from './pages/api_documentation/components/getting-started/GettingStarted';
import AboutVerify from './pages/api_documentation/components/about-verify/AboutVerify';
import Introduction from './pages/api_documentation/components/introduction/Introduction';
import Authentication from './pages/api_documentation/components/authentication/Authentication';
import Bvn from './pages/api_documentation/components/bvn/Bvn';
import Tin from './pages/api_documentation/components/tin/Tin';
import Cac from './pages/api_documentation/components/cac/Cac';
import DriverLicence from './pages/api_documentation/components/driver-licence/DriverLicence';
import IdentityBiometric from './pages/api_documentation/components/identity-biometric/IdentityBiometric';
import IdentityMatching from './pages/api_documentation/components/identity-matching/IdentityMatching';
// import NinCheckId from './pages/api_documentation/components/nin_check_id/NinCheckId';
// import NinPhoneId from './pages/api_documentation/components/nin_check_phone/NinPhoneId';
// import NinFingerPrintId from './pages/api_documentation/components/nin_check_fingerprint/NinFingerPrintId';
import NinVerifyId from './pages/api_documentation/components/nin_verify_id/NinVerifyId';
import NinVerifyPhone from './pages/api_documentation/components/nin_verify_phone/NinVerifyPhone';
import NinVerifyFingerprint from './pages/api_documentation/components/nin_verify_fingerprint/NinVerifyFingerprint';


import BusinessVerify from './pages/api_documentation/components/business_verify_submit/BusinessVerify';
import BusinessVerifyGetById from './pages/api_documentation/components/business_verify_get_byId/BusinessVerifyGetById';
import BusinessVerifyCancel from './pages/api_documentation/components/business_verify_cancel/BusinessVerifyCancel';
import BusinessVerifyAll from './pages/api_documentation/components/business_verify_all_businesses/BusinessVerifyAll';
import BusinessVerifyAllStatus from './pages/api_documentation/components/business_verify_by_status/BusinessVerifyAllStatus';

import AddressVerification from './pages/api_documentation/components/address_verification/AddressVerification';
import AddressVerificationCancel from './pages/api_documentation/components/address_verification_cancel/AddressVerificationCancel';
import AddressVerificationById from './pages/api_documentation/components/address_verification_by_id/AddressVerificationById';
import AddressVerificationAll from './pages/api_documentation/components/address_verification_all/AddressVerificationAll';
import AddressVerificationByStatus from './pages/api_documentation/components/address_verification_by_status/AddressVerificationByStatus';

import PropertyVerificationSubmit from './pages/api_documentation/components/property_verification_submit/PropertyVerificationSubmit';
import PropertyVerificationCancel from './pages/api_documentation/components/property_verification_cancel/PropertyVerificationCancel';
import PropertyVerificationById from './pages/api_documentation/components/property_verification_by_id/PropertyVerificationById';
import PropertyVerificationAll from './pages/api_documentation/components/property_verification_all/PropertyVerificationAll';
import PropertyVerificationByStatus from './pages/api_documentation/components/property_verification_by_status/PropertyVerificationByStatus';

import EmploymentVerificationSubmit from './pages/api_documentation/components/employment_verification_submit/EmploymentVerificationSubmit';
import EmploymentVerificationCancel from './pages/api_documentation/components/employment_verification_cancel/EmploymentVerificationCancel';
import EmploymentVerificationById from './pages/api_documentation/components/employment_verification_by_id/EmploymentVerificationById';
import EmploymentVerificationAll from './pages/api_documentation/components/employment_verification_all/EmploymentVerificationAll';
import EmploymentVerificationByStatus from './pages/api_documentation/components/employment_verification_by_status/EmploymentVerificationByStatus';

import GuarantorVerificationSubmit from './pages/api_documentation/components/guarantor_verification_submit/GuarantorVerificationSubmit';
import GuarantorVerificationCancel from './pages/api_documentation/components/guarantor_verification_cancel/GuarantorVerificationCancel';
import GuarantorVerificationById from './pages/api_documentation/components/guarantor_verification_by_id/GuarantorVerificationById';
import GuarantorVerificationAll from './pages/api_documentation/components/guarantor_verification_all/GuarantorVerificationAll';
import GuarantorVerificationByStatus from './pages/api_documentation/components/guarantor_verification_by_status/GuarantorVerificationByStatus';

import StateVerificationAll from './pages/api_documentation/components/state_verification_all/StateVerificationAll';
import StateByLga from './pages/api_documentation/components/state_by_lga/StateByLga';

import VerifyUserDetailByNin from './pages/api_documentation/components/verify_user_detail_nin_id/VerifyUserDetailByNin';
import VerifyUserDetailByPhoneNo from './pages/api_documentation/components/verify_user_detail_phone_no/VerifyUserDetailByPhoneNo';
import VerifyUserDetailByFingerPrint from './pages/api_documentation/components/verify_user_detail_fingerprint/VerifyUserDetailByFingerPrint';


class Markup extends Component {
	render() {
		return (
			<>
				<BrowserRouter>
					<Header />
					<Switch>

						<Route path='/' exact component={Index} />
						<Route path='/about-us' exact component={AboutUs} />
						<Route path='/team' exact component={Team} />
						<Route path='/services/:service' exact component={Services} />
						{/* <Route path='/api' exact component={ServiceDetail} /> */}
						<Route path='/api/:welcome' exact component={Welcome} />
						<Route path='/api/getting/:started' exact component={GettingStarted} />
						<Route path='/:api_introduction' exact component={Introduction} />
						<Route path='/page/api/:authentication' exact component={Authentication} />
						<Route path='/api/about/:verification' exact component={AboutVerify} />
						<Route path='/api/page/:bvn' exact component={Bvn} />
						{/* <Route path='/api/user/:check-id' exact component={NinCheckId} />
						<Route path='/api/user-check/:phone' exact component={NinPhoneId} />
						<Route path='/api/user/check/:fingerprint' exact component={NinFingerPrintId} /> */}
						<Route path='/api/user/:verify_id' exact component={NinVerifyId} />
						<Route path='/api/user-verify/:phone' exact component={NinVerifyPhone} />
						<Route path='/api/userverify/:fingerprint' exact component={NinVerifyFingerprint} />
						<Route path='/api/tin' exact component={Tin} />
						<Route path='/api/cac' exact component={Cac} />
						<Route path='/api/driver-licence' exact component={DriverLicence} />
						<Route path='/api/identity-biometric' exact component={IdentityBiometric} />
						<Route path='/api/identity-matching' exact component={IdentityMatching} />
						<Route path='/service-detail' exact component={ServiceDetail} />
						<Route path='/form-login' exact component={FormLogin} />
						<Route path='/form-register' exact component={FormRegister} />
						<Route path='/form-forget-password' exact component={FormForgetPassword} />
						<Route path='/faq' exact component={Faq} />
						<Route path='/contact-us' exact component={ContactUs} />
						<Route path='/booking' exact component={Booking} />
						<Route path='/blog-grid' exact component={BlogGrid} />
						<Route path='/blog-details' exact component={BlogDetails} />

						<Route path='/api/business_verify/:getById' exact component={BusinessVerifyGetById} />
+						<Route path='/api/business/verify/:submit' exact component={BusinessVerify} />
+						<Route path='/api/business/:verify_cancel' exact component={BusinessVerifyCancel} />
+						<Route path='/api/business_verify_all/:businesses' exact component={BusinessVerifyAll} />
+						<Route path='/api/business_verify/all/:statuses' exact component={BusinessVerifyAllStatus} />
						<Route path='/api/address/verification/:submit' exact component={AddressVerification} />
						<Route path='/api-address/verification/:cancel' exact component={AddressVerificationCancel} />
						<Route path='/api/address-verification/:by_id' exact component={AddressVerificationById} />
						<Route path='/api/all/address/verification/:all_address' exact component={AddressVerificationAll} />
						<Route path='/api/address/verification-status/:address_status' exact component={AddressVerificationByStatus} />
						
						<Route path='/api/property/verification/:submit_property' exact component={PropertyVerificationSubmit} />
						<Route path='/api-property/verification/:cancel_property' exact component={PropertyVerificationCancel} />
						<Route path='/api/property-verification/:property_id' exact component={PropertyVerificationById} />
						<Route path='/api/all/property/verification/:all_property' exact component={PropertyVerificationAll} />
						<Route path='/api/property/verification-status/:property_status' exact component={PropertyVerificationByStatus} />
						
						<Route path='/api/employment/verification/:submit_employment' exact component={EmploymentVerificationSubmit} />
						<Route path='/api-employment/verification/:cancel_employment' exact component={EmploymentVerificationCancel} />
						<Route path='/api/employment-verification/:employment_id' exact component={EmploymentVerificationById} />
						<Route path='/api/all/employment/verification/:all_employment' exact component={EmploymentVerificationAll} />
						<Route path='/api/employment/verification-status/:employment_status' exact component={EmploymentVerificationByStatus} />


						<Route path='/api/guarantor/verification/:submit_guarantor' exact component={GuarantorVerificationSubmit} />
						<Route path='/api-guarantor/verification/:cancel_guarantor' exact component={GuarantorVerificationCancel} />
						<Route path='/api/guarantor-verification/:guarantor_id' exact component={GuarantorVerificationById} />
						<Route path='/api/all/guarantor/verification/:all_guarantor' exact component={GuarantorVerificationAll} />
						<Route path='/api/guarantor/verification-status/:guarantor_status' exact component={GuarantorVerificationByStatus} />

						<Route path='/api/get/:all_states' exact component={StateVerificationAll} />
						<Route path='/api/get/state/:by_lga' exact component={StateByLga} />

						<Route path='/api/verify/user/details/:by_nin' exact component={VerifyUserDetailByNin} />
						<Route path='/api/verify-user/details/:by_phone' exact component={VerifyUserDetailByPhoneNo} />
						<Route path='/api/verify-user-details/:by_fingerprint' exact component={VerifyUserDetailByFingerPrint} />

						<Route component={Error} />
						
					</Switch>

					<PageScrollTop />
					<Footer />
				</BrowserRouter>

				<BackToTop />

			</>
		);
	}
}

export default Markup;
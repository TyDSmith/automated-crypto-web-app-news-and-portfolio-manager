import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header'
import Footer from './Footer'

//import { markets } from '../actions';

class Imprint extends Component {
	
	render() {
			return (
				<div className="imprint">
				<Header />
				<div className="container">
				<h1 className="top100">Imprint</h1>
				Information in accordance with Section 5 TMG
				<br />Firstname Lastname<br />Address<br />Postcode City<br /><br />
				<h2>Contact Information</h2>
				Telephone: +49 123456789<br />E-Mail: test@mail.de<br />Internet address: http://domain.de/<br /><br />
				<h2>Disclaimer</h2>
				Accountability for content<br />
				The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents'
				accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for 
				our own content on these web pages. In this matter, please note that we are not obliged to monitor 
				the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. 
				Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per 
				§§ 8 to 10 of the Telemedia Act (TMG).

				<br /><br />Accountability for links<br />
				Responsibility for the content of 
				external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were 
				evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective 
				link immediately.<br /><br />Copyright<br /> Our web pages and their contents are subject to German copyright law. Unless 
				expressly permitted by law, every form of utilizing, reproducing or processing 
				works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. 
				Individual reproductions of a work are only allowed for private use. 
				The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.
				</div>
				<Footer />
				</div>
			)
		

}
}


export default Imprint; //
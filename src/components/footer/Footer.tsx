import * as React from 'react';
import { Link } from 'react-router-dom';

import { Colors } from '../../styles';
const LogoImage = require('../../static/footer-logo.png');

const Footer = () => {
	return (
		<div
			style={{
				position: 'absolute',
				display: 'flex',
				justifyContent: 'space-around',
				bottom: '0px',
				height: '30px',
				backgroundColor: '#000000',
			}}
		>
			<Link to="/">
				<img
					src={LogoImage}
					alt="footer-logo"
					style={{ padding: '10px 0px 0px 20px' }}
				/>
			</Link>
			<span
				style={{
					color: Colors.WHITE,
					fontSize: '12px',
					marginTop: '8px',
					marginRight: '10px',
				}}
			>
				Copyright © {new Date().getFullYear()} Design Services, Inc. -
				Deborah Burnett. All Rights Reserved. Benya Burnett Consultancy
			</span>
			<span
				style={{
					color: Colors.WHITE,
					fontSize: '12px',
					marginTop: '8px',
					marginRight: '10px',
				}}
			>
				<Link to="/login">Admin</Link>
			</span>
		</div>
	);
};

export default Footer;

import React, { Fragment } from 'react';
import { Card, Avatar } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Title from 'antd/lib/typography/Title';
export const Cricketer = ({ name, email, avatarSrc, children }) =>
	<Card bordered style={{ width: 300, float: 'left', margin: 10 }}>
		<Meta
			avatar={<Avatar src={avatarSrc} />}
			title={name}
		/>
		<hr></hr>
		Email : {email}
		<br></br>
		{children}
	</Card>
export const TestCareer = ({ CIN, children }) =>
	<Card.Grid style={{ width: '100%' }}>
		<Title level={4}>CIN : {CIN}</Title>
		{children}
	</Card.Grid>
export const Bowling = ({ massar, Niveau ,address}) =>
	<Fragment>
		Massar : {massar}
		<br></br>
		Niveau : {Niveau}
        <br></br>
		Adresse : {address}
	</Fragment>
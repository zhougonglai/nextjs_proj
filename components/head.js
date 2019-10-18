import React from 'react';
import NextHead from 'next/head';
import { string, array } from 'prop-types';
import '../static/style/global.scss';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = props => (
	<NextHead>
		<meta charSet='UTF-8' />
		<title>{props.title || ''}</title>
		<meta
			name='description'
			content={props.description || defaultDescription}
		/>
		<meta
			name='viewport'
			content='width=device-width, viewport-fit=cover,user-scalable=no,initial-scale=1'
		/>
		<meta name='apple-mobile-web-app-capable' content='yes' />
		<link rel='icon' sizes='192x192' href='/static/touch-icon.png' />
		<link rel='apple-touch-icon' href='/static/touch-icon.png' />
		<link rel='mask-icon' href='/static/favicon-mask.svg' color='#49B882' />
		<link rel='icon' href='/static/favicon.ico' />
		<link
			rel='stylesheet'
			href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
		/>
		<link
			href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700'
			rel='stylesheet'
		/>
		<link
			href='https://fonts.googleapis.com/icon?family=Material+Icons'
			rel='stylesheet'></link>
		{props.styles &&
			props.styles.length &&
			props.styles.map((style, i) => (
				<link key={i} href={style} rel='stylesheet' />
			))}
		{props.scripts &&
			props.scripts.length &&
			props.scripts.map((script, i) => <script key={i} src={script}></script>)}
		<meta property='og:url' content={props.url || defaultOGURL} />
		<meta property='og:title' content={props.title || ''} />
		<meta
			property='og:description'
			content={props.description || defaultDescription}
		/>
		<meta name='twitter:site' content={props.url || defaultOGURL} />
		<meta name='twitter:card' content='summary_large_image' />
		<meta name='twitter:image' content={props.ogImage || defaultOGImage} />
		<meta property='og:image' content={props.ogImage || defaultOGImage} />
		<meta property='og:image:width' content='1200' />
		<meta property='og:image:height' content='630' />
		<script src='//cdn.jsdelivr.net/npm/eruda'></script>
	</NextHead>
);

Head.propTypes = {
	title: string,
	description: string,
	url: string,
	ogImage: string,
	scripts: array,
	styles: array,
};

export default Head;

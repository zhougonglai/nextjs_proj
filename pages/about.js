import fetch from 'isomorphic-unfetch';
import Head from '../components/head';

export default class About extends React.Component {
	componentDidMount() {
		console.log('componentDidMount');
	}

	static async getInitialProps() {
		const res = await fetch('http://localhost:3000/api/report').then(res =>
			res.json(),
		);
		console.log(res);
		return res;
	}

	render() {
		return (
			<div className='report'>
				<Head title='示例报告' />
				<div className='report-header'>asfasf</div>
			</div>
		);
	}
}

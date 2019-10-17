import MaterialIcon from '@material/react-material-icon';
import Head from '../components/head';
import BouncingLoader from '../components/bouncing-loader';
import '../static/css/about.scss';

export default class About extends React.Component {
	state = {};
	async componentDidMount() {
		const res = await fetch('/api/report').then(res => res.json());
		this.setState(res.data);
	}

	render() {
		return (
			<div className='report'>
				<Head title='示例报告' />
				{'info' in this.state ? (
					<>
						<div className='report-header'>
							<div className='report-info'>
								<div className='info'>
									<div className='info-name'>
										<span className='large blod'>{this.state.info.name}</span>
										<span className='small ml-2'>
											{this.state.info.gender === 1 ? '男' : '女'}
										</span>
									</div>

									<div className='info-age'>
										年龄: <span>{this.state.info.age}</span>
									</div>

									<div className='info-card_no'>
										身份证号码: <span>{this.state.info.card_no}</span>
									</div>

									<div className='info-from'>
										归属地:
										<span>
											{this.state.info.province}
											{this.state.info.city}
										</span>
									</div>

									<div className='info-report_no'>
										报告编号: {this.state.report.report_no}
									</div>
								</div>
								<div className='rate'>
									<div className='label'>信用评级</div>
									<div className='icon'>D</div>
								</div>
							</div>
							<div className='report-descript text-center border-top-1px'>
								您的信用超过全国{this.state.report.percentage_no}%的用户.完善度
								{this.state.report.complete_no}%。
								<br />
								报告获取时间:{' '}
								{new Date(this.state.report.report_date).toLocaleString()}
							</div>
						</div>

						<div className='risk'>
							<div className='risk-descript'>
								<div className='subtitle x-large'>
									<MaterialIcon icon='insert_comment' />
									报告综述
								</div>
								<p>{this.state.risk.desc.join('')}</p>
							</div>
							<div className='risk-list'>
								<div className='subtitle x-large'>
									<MaterialIcon icon='insert_comment' />
									个人风险
								</div>
								<div className='list mt-5'>
									{this.state.risk.list.map((risk, key) => (
										<div className='item' key={key}>
											{risk}
											<div className='fill'></div>
											<MaterialIcon icon='check' />
										</div>
									))}
								</div>
							</div>
						</div>

						<div className='loans border-top-1px border-bottom-1px'>
							<div className='credit_card cart'>credit_card</div>
							<div className='p2p_lending cart'>p2p_lending</div>
						</div>
					</>
				) : (
					<BouncingLoader />
				)}
			</div>
		);
	}
}

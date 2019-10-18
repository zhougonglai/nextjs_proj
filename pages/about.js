import MaterialIcon from '@material/react-material-icon';
import Head from '../components/head';
import BouncingLoader from '../components/bouncing-loader';
import '../static/css/about.scss';

const scripts = ['//at.alicdn.com/t/font_1461110_b80qt95a9l7.js'];

export default class About extends React.Component {
	state = {};
	async componentDidMount() {
		eruda.init();
		const res = await fetch('/api/report').then(res => res.json());
		this.setState(res.data);
	}

	render() {
		return (
			<div className='report'>
				<Head title='示例报告' scripts={scripts} />
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

						<div className='loans'>
							<div className='cart'>
								<svg className='credit_card'>
									<circle
										className='fill-fit'
										fill='transparent'
										r='75'
										cx='50%'
										cy='50%'
										strokeDasharray={Math.PI * 75 * 2}
										strokeDashoffset='0'></circle>
									<circle
										className='bar'
										fill='transparent'
										r='75'
										cx='50%'
										cy='50%'
										strokeDasharray={Math.PI * 75 * 2}
										strokeDashoffset={
											Math.PI *
											75 *
											2 *
											((100 - this.state.loans.credit_card) / 100)
										}></circle>
								</svg>
								<div className='descript large bold text-secondary'>
									<div>信用卡申请</div>
									<div>通过率</div>
									<div>{this.state.loans.credit_card}%</div>
								</div>
							</div>
							<div className='p2p_lending cart'>
								<svg className='p2p_lending'>
									<circle
										className='fill-fit'
										fill='transparent'
										r='75'
										cx='50%'
										cy='50%'
										strokeDasharray={Math.PI * 75 * 2}
										strokeDashoffset='0'></circle>
									<circle
										className='bar'
										fill='transparent'
										r='75'
										cx='50%'
										cy='50%'
										strokeDasharray={Math.PI * 75 * 2}
										strokeDashoffset={
											Math.PI *
											75 *
											2 *
											((100 - this.state.loans.p2p_lending) / 100)
										}></circle>
								</svg>
								<div className='descript large bold text-tertiary'>
									<div>网贷申请</div>
									<div>通过率</div>
									<div>{this.state.loans.p2p_lending}%</div>
								</div>
							</div>
						</div>

						<div className='xin'>
							<div className='header'>
								<svg className='icon'>
									<use xlinkHref='#icon-zhima'></use>
								</svg>
								<div className='fill large bold'>芝麻信用评估</div>
							</div>
						</div>
					</>
				) : (
					<BouncingLoader />
				)}
			</div>
		);
	}
}

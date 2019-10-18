import Link from 'next/link';
import Fab from '@material/react-fab';
import IconButton from '@material/react-icon-button';
import MaterialIcon from '@material/react-material-icon';

import Head from '../components/head';
import BouncingLoader from '../components/bouncing-loader';
import '../static/css/about.scss';

const scripts = ['//at.alicdn.com/t/font_1461110_b80qt95a9l7.js'];

export default class About extends React.Component {
	state = {
		expansion: {
			xin: true,
			analyze: true,
		},
	};

	async componentDidMount() {
		const res = await fetch('/api/report').then(res => res.json());
		this.setState(res.data);
	}

	expandable = target => {
		this.setState({
			expansion: {
				...this.state.expansion,
				[target]: !this.state.expansion[target],
			},
		});
	};

	render() {
		return (
			<div className='report'>
				<Head title='示例报告' scripts={scripts} />
				<Link href='/'>
					<Fab
						className='fixed bottom right'
						icon={<MaterialIcon icon='arrow_back' />}></Fab>
				</Link>
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
								<div className='subtitle large'>
									<MaterialIcon icon='insert_comment' />
									报告综述
								</div>
								<p className='larger'>{this.state.risk.desc.join('')}</p>
							</div>
							<div className='risk-list'>
								<div className='subtitle large'>
									<MaterialIcon icon='insert_comment' />
									个人风险
								</div>
								<div className='list'>
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
								<svg className='icon mr-2'>
									<use xlinkHref='#icon-zhima'></use>
								</svg>
								<div className='fill large bold'>芝麻信用评估</div>
								<IconButton onClick={() => this.expandable('xin')}>
									<MaterialIcon
										icon={
											this.state.expansion.xin
												? 'arrow_drop_down'
												: 'arrow_drop_up'
										}
									/>
								</IconButton>
							</div>

							{this.state.expansion.xin && (
								<>
									<div className='list'>
										<div className='item'>
											是否实名一致
											<div className='fill'></div>
											{this.state.xin.same ? '实名一致' : '实名不一致'}
										</div>
										<div className='item'>
											花呗授信额度
											<div className='fill'></div>
											{this.state.xin.hua.status
												? `${this.state.xin.hua.limit}元`
												: `未开通`}
										</div>
										<div className='item'>
											花呗可用额度
											<div className='fill'></div>
											{this.state.xin.hua.status
												? `${this.state.xin.hua.usable}元`
												: `未开通`}
										</div>
										<div className='item'>
											借呗授信额度
											<div className='fill'></div>
											{this.state.xin.jie.status
												? `${this.state.xin.jie.limit}元`
												: `未开通`}
										</div>
										<div className='item'>
											借呗可用额度
											<div className='fill'></div>
											{this.state.xin.jie.status
												? `${this.state.xin.jie.usable}元`
												: `未开通`}
										</div>
										<div className='item'>
											近30天内消费额度总和
											<div className='fill'></div>
											{this.state.xin.recent.month}元
										</div>
										<div className='item'>
											近90天内消费额度总和
											<div className='fill'></div>
											{this.state.xin.recent.quarter}元
										</div>
										<div className='item'>
											近150天内消费额度总和
											<div className='fill'></div>
											{this.state.xin.recent.semiyearly}元
										</div>
										<div className='item'>
											150天内交易成功的记录条数
											<div className='fill'></div>
											{this.state.xin.recent.semiyearly_count}条
										</div>
									</div>

									<div className='subtitle large ml-1 mt-3'>
										<MaterialIcon icon='donut_large' />
										可疑行为
									</div>

									<div className='list'>
										<div className='item'>
											是否有疑似诈骗记录
											<div className='fill'></div>
											<span className='text-success'>
												{this.state.xin.suspicious.suspected_fraud
													? '有'
													: '否'}
											</span>
										</div>
										<div className='item'>
											是否有疑似赌博记录
											<div className='fill'></div>
											<span className='text-success'>
												{this.state.xin.suspicious.suspected_gambling
													? '有'
													: '否'}
											</span>
										</div>
										<div className='item'>
											是否有疑似高风险交易
											<div className='fill'></div>
											<span className='text-success'>
												{this.state.xin.suspicious.suspected_risk_trading
													? '有'
													: '否'}
											</span>
										</div>
										<div className='item'>
											是否有疑似套现行为
											<div className='fill'></div>
											{this.state.xin.suspicious.suspected_cash ? (
												<span className='text-danger'>有</span>
											) : (
												<span className='text-success'>否</span>
											)}
										</div>
									</div>

									<div className='subtitle large ml-1 mt-3'>
										<MaterialIcon icon='donut_large' />
										消费分析
									</div>

									<div className='mdc-data-table'>
										<table className='mdc-data-table__table'>
											<thead>
												<tr className='mdc-data-table__header-row'>
													<th
														className='mdc-data-table__header-cell'
														role='columnheader'
														scope='col'>
														消费时间
													</th>
													<th
														className='mdc-data-table__header-cell text-end'
														role='columnheader'
														scope='col'>
														消费金额
													</th>
												</tr>
											</thead>
											<tbody className='mdc-data-table__content'>
												{this.state.xin.consumption.map((consum, key) => (
													<tr className='mdc-data-table__row' key={key}>
														<td className='mdc-data-table__cell'>
															{consum.year}-{consum.month}月
														</td>
														<td className='mdc-data-table__cell mdc-data-table__cell--numeric'>
															{consum.money}元
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</>
							)}
						</div>

						<div className='analyze'>
							<div className='header'>
								<svg className='icon mr-2'>
									<use xlinkHref='#icon-strength_blue'></use>
								</svg>
								<div className='fill large bold'>运营商数据检测</div>
								<IconButton onClick={() => this.expandable('analyze')}>
									<MaterialIcon
										icon={
											this.state.expansion.analyze
												? 'arrow_drop_down'
												: 'arrow_drop_up'
										}
									/>
								</IconButton>
							</div>

							{this.state.expansion.analyze && (
								<>
									<div className='subtitle large ml-1 mt-3'>
										<MaterialIcon icon='donut_large' />
										消费分析
									</div>
								</>
							)}
						</div>
					</>
				) : (
					<BouncingLoader />
				)}
			</div>
		);
	}
}

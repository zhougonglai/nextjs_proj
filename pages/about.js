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
						{/* 芝麻信用 */}
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
									<div className='list mx-3'>
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

									<div className='list mx-3'>
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

									<div className='row justify-center'>
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
									</div>
								</>
							)}
						</div>
						{/* 运营商数据检测 */}
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
									<div className='list mx-3'>
										<div className='item'>
											是否实名认证
											<div className='fill'></div>
											{this.state.analyze.consumption.autonym
												? '实名一致'
												: '未实名'}
										</div>
										<div className='item'>
											是否亲情网用户
											<div className='fill'></div>
											{this.state.analyze.consumption.isUser ? '是' : '否'}
										</div>
										<div className='item'>
											入网时长
											<div className='fill'></div>
											{this.state.analyze.consumption.net_time}个月
										</div>
										<div className='item'>
											号码归属
											<div className='fill'></div>
											{this.state.analyze.consumption.affiliation}
										</div>
										<div className='item'>
											所属运营商
											<div className='fill'></div>
											{this.state.analyze.consumption.operator}
										</div>
										<div className='item'>
											余额
											<div className='fill'></div>
											{this.state.analyze.consumption.balance}元
										</div>
									</div>

									<div className='subtitle large ml-1 mt-3'>
										<MaterialIcon icon='donut_large' />
										交叉检测
									</div>

									<div className='list mx-3'>
										<div className='item'>
											黑中介分数
											<div className='fill'></div>
											<span
												className={
													this.state.analyze.cross_over_analysis
														.black_intermediary_score < 40
														? 'text-danger'
														: this.state.analyze.cross_over_analysis
																.black_intermediary_score < 60
														? 'text-warning'
														: 'text-success'
												}>
												{
													this.state.analyze.cross_over_analysis
														.black_intermediary_score
												}
											</span>
										</div>
										<div className='smaller text-gray'>
											(总分100,低于40分为高危人群,
											低于60分为警戒,高于60分为信用良好)
										</div>
										<div className='item'>
											直接联系人数
											<div className='fill'></div>
											{
												this.state.analyze.cross_over_analysis
													.direct_contact_num
											}
											人
										</div>
										<div className='item'>
											直接联系人黑名单
											<div className='fill'></div>
											{
												this.state.analyze.cross_over_analysis
													.direct_contact_blacklist_num
											}
											人
										</div>
										<div className='item'>
											引起间接黑名单人数
											<div className='fill'></div>
											{
												this.state.analyze.cross_over_analysis
													.causes_indirect_blacklist_num
											}
											人
										</div>
										<div className='item'>
											间接黑名单人数
											<div className='fill'></div>
											{
												this.state.analyze.cross_over_analysis
													.indirect_blacklist_number
											}
											人
										</div>
										<div className='item'>
											直接联系人中引起间接黑名单占比
											<div className='fill'></div>
											{
												this.state.analyze.cross_over_analysis
													.direct_contacts_cause_indirect_blacklist_proportion
											}
											%
										</div>
									</div>

									<div className='subtitle large ml-1 mt-3'>
										<MaterialIcon icon='donut_large' />
										关联检测
									</div>

									<div className='list mx-3'>
										<div className='item'>
											身份证是否组合过其他姓名
											<div className='fill'></div>
											{this.state.analyze.correlation_detection
												.id_is_not_combined_with_other_names
												? '是'
												: '否'}
										</div>
										<div className='item'>
											身份证是否组合过其他电话
											<div className='fill'></div>
											{this.state.analyze.correlation_detection
												.id_is_not_combined_with_other_phone
												? '是'
												: '否'}
										</div>
										<div className='item'>
											电话号码是否组合过其他姓名
											<div className='fill'></div>
											{this.state.analyze.correlation_detection
												.phone_is_not_combined_with_other_names
												? '是'
												: '否'}
										</div>
										<div className='item'>
											电话号码是否组合过其他身份证
											<div className='fill'></div>
											{this.state.analyze.correlation_detection
												.phone_is_not_combined_with_other_id
												? '是'
												: '否'}
										</div>
									</div>

									<div className='subtitle large ml-1 mt-3'>
										<MaterialIcon icon='donut_large' />
										通话行为检测
									</div>

									<div className='list mx-3'>
										<div className='item'>
											手机静默情况
											<div className='fill'></div>
											180天有
											{
												this.state.analyze.correlation_detection
													.cell_phone_silence
											}
											天无通话记录
										</div>
										<div className='item'>
											号码沉默度<div className='fill'></div>
											{this.state.analyze.communication_behavior_detection
												.number_silence === 'normal'
												? '正常活跃用户'
												: '不正常用户'}
										</div>
										<div className='item'>
											欠费风险
											<div className='fill'></div>
											{this.state.analyze.communication_behavior_detection
												.lack_of_risk === 'low'
												? '低风险'
												: '高风险'}
										</div>
										<div className='item'>
											与110通话情况<div className='fill'></div>
											{this.state.analyze.communication_behavior_detection
												.call_the_police
												? this.state.analyze.communication_behavior_detection
														.call_the_police + '次'
												: '无通话记录'}
										</div>
										<div className='item'>
											与法院电话通话情况<div className='fill'></div>
											{this.state.analyze.communication_behavior_detection
												.court_calls
												? this.state.analyze.communication_behavior_detection
														.court_calls + '次'
												: '无通话记录'}
										</div>
										<div className='item'>
											与贷款类号码联系情况
											<div className='fill'></div>
											{this.state.analyze.communication_behavior_detection
												.loan_type_phone_contact === 'none'
												? '无该类号码记录'
												: '多次号码记录'}
										</div>
										<div className='item'>
											与银行类号码联系情况
											<div className='fill'></div>
											{this.state.analyze.communication_behavior_detection
												.bank_type_phone_contact === 'often'
												? '经常'
												: '无'}
										</div>
										<div className='smaller text-gray'>
											(联系次数在5次以上,包含5次,且主动呼叫占比大于50%,包含50%)
										</div>
										<div className='item'>
											与信用卡类号码联系情况
											<div className='fill'></div>
											{this.state.analyze.communication_behavior_detection
												.credit_card_type_phone_contact === 'occasionally'
												? '偶尔'
												: '无'}
										</div>
										<div className='item'>
											与催收号码联系情况
											<div className='fill'></div>
											{this.state.analyze.communication_behavior_detection
												.collection_type_phone_contact === 'none'
												? '无该类号码记录'
												: '有多次该类号码记录'}
										</div>
										<div className='item'>
											夜间活动情况
											<div className='fill'></div>
											{this.state.analyze.communication_behavior_detection
												.night_activity === 'low'
												? '很少夜间活动'
												: '无夜间活动'}
										</div>
										<div className='smaller text-gray'>(低于20%)</div>
									</div>

									<div className='subtitle large ml-1 mt-3'>
										<MaterialIcon icon='donut_large' />
										社交分析
									</div>

									<div className='list mx-3'>
										<div className='item'>
											朋友圈大小
											<div className='fill'></div>
											6个月共
											<span className='text-danger'>
												{
													this.state.analyze.social_analysis
														.circle_of_friends_size
												}
											</span>
											个联系人
										</div>
										<div className='item'>
											朋友圈亲密度
											<div className='fill'></div>
											近6个月与
											<span className='text-danger'>
												{
													this.state.analyze.social_analysis
														.circle_of_friends_intimacy
												}
											</span>
											人联系十次以上
										</div>
										<div className='item'>
											朋友圈互动
											<div className='fill'></div>
											近6个月与
											<span className='text-danger'>
												{
													this.state.analyze.social_analysis
														.circle_of_friends_interactive
												}
											</span>
											人互相通话
										</div>
										<div className='item'>
											朋友圈所在地
											<div className='fill'></div>
											{
												this.state.analyze.social_analysis
													.circle_of_friends_home
											}
										</div>
										<div className='item'>
											朋友圈是否在本地
											<div className='fill'></div>
											{this.state.analyze.social_analysis
												.circle_of_friends_is_in_home
												? '是'
												: '否'}
										</div>
									</div>

									<div className='subtitle large ml-1 mt-3'>
										<MaterialIcon icon='donut_large' />
										朋友圈手机号码归属地TOP3
									</div>

									<div className='row justify-center'>
										<div className='mdc-data-table'>
											<table className='mdc-data-table__table'>
												<thead>
													<tr className='mdc-data-table__header-row'>
														<th
															className='mdc-data-table__header-cell'
															role='columnheader'
															scope='col'>
															通话地
														</th>
														<th
															className='mdc-data-table__header-cell text-end'
															role='columnheader'
															scope='col'>
															通话号码数
														</th>
														<th
															className='mdc-data-table__header-cell text-end'
															role='columnheader'
															scope='col'>
															主/被叫次数
														</th>
														<th
															className='mdc-data-table__header-cell text-end'
															role='columnheader'
															scope='col'>
															总分钟
														</th>
													</tr>
												</thead>
												<tbody className='mdc-data-table__content'>
													{this.state.analyze.list_top_of_the_circle_of_friends.map(
														(item, key) => (
															<tr className='mdc-data-table__row' key={key}>
																<td className='mdc-data-table__cell'>
																	{item.from}
																</td>
																<td className='mdc-data-table__cell text-center'>
																	{item.time}
																</td>
																<td className='mdc-data-table__cell text-center'>
																	{item.call_time}/{item.be_call_time}
																</td>
																<td className='mdc-data-table__cell text-center'>
																	{item.total_of_minutes}
																</td>
															</tr>
														),
													)}
												</tbody>
											</table>
										</div>
									</div>

									<div className='subtitle large ml-1 mt-3'>
										<MaterialIcon icon='donut_large' />
										近6个月经常联系人TOP10
									</div>

									<div className='row justify-center'>
										<div className='mdc-data-table'>
											<table className='mdc-data-table__table'>
												<thead>
													<tr className='mdc-data-table__header-row'>
														<th
															className='mdc-data-table__header-cell'
															role='columnheader'
															scope='col'>
															对方号码
														</th>
														<th
															className='mdc-data-table__header-cell text-end'
															role='columnheader'
															scope='col'>
															归属地
														</th>
														<th
															className='mdc-data-table__header-cell text-end'
															role='columnheader'
															scope='col'>
															主/被叫次数
														</th>
														<th
															className='mdc-data-table__header-cell text-end'
															role='columnheader'
															scope='col'>
															总分钟
														</th>
													</tr>
												</thead>
												<tbody className='mdc-data-table__content'>
													{this.state.analyze.list_often_of_the_circle_of_friends.map(
														(item, key) => (
															<tr className='mdc-data-table__row' key={key}>
																<td className='mdc-data-table__cell'>
																	{item.phone_numbe}
																</td>
																<td className='mdc-data-table__cell text-center'>
																	{item.from}
																</td>
																<td className='mdc-data-table__cell text-center'>
																	{item.call_time}/{item.be_call_time}
																</td>
																<td className='mdc-data-table__cell text-center'>
																	{item.total_of_minutes}
																</td>
															</tr>
														),
													)}
												</tbody>
											</table>
										</div>
									</div>

									<div className='subtitle large ml-1 mt-3'>
										<MaterialIcon icon='donut_large' />
										消费分析
									</div>

									<div className='row justify-center'>
										<div className='mdc-data-table'>
											<table className='mdc-data-table__table'>
												<thead>
													<tr className='mdc-data-table__header-row'>
														<th
															className='mdc-data-table__header-cell'
															role='columnheader'
															scope='col'>
															消费类型
														</th>
														<th
															className='mdc-data-table__header-cell'
															role='columnheader'
															scope='col'>
															6个月消费数(元)
														</th>
													</tr>
												</thead>
												<tbody className='mdc-data-table__content'>
													<tr className='mdc-data-table__row'>
														<td className='mdc-data-table__cell'>消费总金额</td>
														<td className='mdc-data-table__cell'>
															{
																this.state.analyze.consumption_table
																	.total_amount_of_consumption
															}
														</td>
													</tr>
													<tr className='mdc-data-table__row'>
														<td className='mdc-data-table__cell'>
															网络流量消费金额
														</td>
														<td className='mdc-data-table__cell'>
															{
																this.state.analyze.consumption_table
																	.amount_of_network_traffic_consumption
															}
														</td>
													</tr>
													<tr className='mdc-data-table__row'>
														<td className='mdc-data-table__cell'>
															通话消费金额
														</td>
														<td className='mdc-data-table__cell'>
															{
																this.state.analyze.consumption_table
																	.call_consumption
															}
														</td>
													</tr>
													<tr className='mdc-data-table__row'>
														<td className='mdc-data-table__cell'>
															短信消费金额
														</td>
														<td className='mdc-data-table__cell'>
															{
																this.state.analyze.consumption_table
																	.message_consumption
															}
														</td>
													</tr>
													<tr className='mdc-data-table__row'>
														<td className='mdc-data-table__cell'>
															增值业务消费金额
														</td>
														<td className='mdc-data-table__cell'>
															{
																this.state.analyze.consumption_table
																	.service_consumption
															}
														</td>
													</tr>
													<tr className='mdc-data-table__row'>
														<td className='mdc-data-table__cell'>
															其他消费金额
														</td>
														<td className='mdc-data-table__cell'>
															{
																this.state.analyze.consumption_table
																	.other_consumption
															}
														</td>
													</tr>
													<tr className='mdc-data-table__row'>
														<td className='mdc-data-table__cell'>充值金额</td>
														<td className='mdc-data-table__cell'>
															{
																this.state.analyze.consumption_table
																	.recharge_money
															}
														</td>
													</tr>
													<tr className='mdc-data-table__row'>
														<td className='mdc-data-table__cell'>最大金额</td>
														<td className='mdc-data-table__cell'>
															{
																this.state.analyze.consumption_table
																	.single_large_recharge
															}
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>

									<div className='subtitle large ml-1 mt-3'>
										<MaterialIcon icon='donut_large' />
										出行分析
									</div>

									<div className='row justify-center'>
										<div className='mdc-data-table'>
											<table className='mdc-data-table__table'>
												<thead>
													<tr className='mdc-data-table__header-row'>
														<th
															className='mdc-data-table__header-cell'
															role='columnheader'
															scope='col'>
															出发地
														</th>
														<th
															className='mdc-data-table__header-cell'
															role='columnheader'
															scope='col'>
															目的地
														</th>
														<th
															className='mdc-data-table__header-cell'
															role='columnheader'
															scope='col'>
															出发时间
														</th>
														<th
															className='mdc-data-table__header-cell'
															role='columnheader'
															scope='col'>
															结束时间
														</th>
														<th
															className='mdc-data-table__header-cell'
															role='columnheader'
															scope='col'>
															类型
														</th>
													</tr>
												</thead>
												<tbody className='mdc-data-table__content'>
													{this.state.analyze.travel_analysis.map(
														(item, key) => (
															<tr className='mdc-data-table__row' key={key}>
																<td className='mdc-data-table__cell text-center'>
																	{item.from}
																</td>
																<td className='mdc-data-table__cell text-center'>
																	{item.to}
																</td>
																<td className='mdc-data-table__cell text-center'>
																	{new Date(
																		item.start_time,
																	).toLocaleDateString()}
																</td>
																<td className='mdc-data-table__cell text-center'>
																	{new Date(item.end_time).toLocaleDateString()}
																</td>
																<td className='mdc-data-table__cell text-center'>
																	{item.type === 'Workday'
																		? '工作日'
																		: '节假日'}
																</td>
															</tr>
														),
													)}
												</tbody>
											</table>
										</div>
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

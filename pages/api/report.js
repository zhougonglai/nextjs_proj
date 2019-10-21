export default (req, res) => {
	res.json({
		data: {
			info: {
				name: '王小明',
				gender: 1,
				age: 22,
				card_no: '3501***7722',
				city: '福州市',
				province: '福建省',
			},
			report: {
				// 报告排名
				report_no: 800000001,
				// 完成时间
				report_date: 1571293551388,
				// 百分比
				percentage_no: 85,
				// 完成度
				complete_no: 100,
			},
			risk: {
				desc: [
					'您的综合信用属于中等；',
					'具体来说您的社交环境普通,朋友圈比较一般;',
					'目前本身负债情况较低;',
					'本身的借贷履约能力不足;',
					'历史履约纪录较差;',
					'属于金融机构的一般客户;',
				],
				list: [
					'命中高风险关注名单',
					'身份证作为联系人出现次数过多',
					'命中网贷欺诈黑名单',
					'3个月内身份证关联多个手机号',
					'3个月内手机号关联多个身份证',
				],
			},
			loans: {
				credit_card: 53,
				p2p_lending: 36,
			},
			xin: {
				same: true,
				hua: {
					status: true,
					limit: 15000,
					usable: 8574.59,
				},
				jie: {
					status: false,
					limit: 0,
					usable: 0,
				},
				recent: {
					month: 1568.97,
					quarter: 3584.04,
					semiyearly: 5741.23,
					semiyearly_count: 75,
				},
				// 可以行为
				suspicious: {
					// 疑似诈骗行为
					suspected_fraud: false,
					// 疑似赌博
					suspected_gambling: false,
					// 疑似风险交易
					suspected_risk_trading: false,
					// 疑似套现
					suspected_cash: false,
				},
				consumption: [
					{
						year: 2019,
						month: 10,
						money: 4210.24,
					},
					{
						year: 2019,
						month: 9,
						money: 3911.22,
					},
					{
						year: 2019,
						month: 8,
						money: 12424.24,
					},
					{
						year: 2019,
						month: 7,
						money: 62421.1,
					},
					{
						year: 2019,
						month: 6,
						money: 8241.24,
					},
					{
						year: 2019,
						month: 5,
						money: 2427.24,
					},
				],
			},
			// 运营商数据
			analyze: {
				// 消费分析
				consumption: {
					// 是否实名认证
					autonym: true,
					isUser: false,
					net_time: 72, // month
					affiliation: '福建福州',
					operator: '福建联通',
					balance: 87.07,
				},
				// 交叉检测
				cross_over_analysis: {
					// 黑中介分数: 总分100,低于40分为高危人群
					black_intermediary_score: 73,
					// 直接联系人
					direct_contact_num: 235,
					// 直接联系人黑名单
					direct_contact_blacklist_num: 0,
					// 引起间接黑名单人数
					causes_indirect_blacklist_num: 5,
					// 间接黑名单人数
					indirect_blacklist_number: 8,
					// 直接联系人中引起间接黑名单占比
					direct_contacts_cause_indirect_blacklist_proportion: 2,
				},
				// 关联检测
				correlation_detection: {
					// 身份证是否组合过其他姓名
					id_is_not_combined_with_other_names: false,
					id_is_not_combined_with_other_phone: false,
					phone_is_not_combined_with_other_names: true,
					phone_is_not_combined_with_other_id: true,
				},
				// 通话行为检测
				communication_behavior_detection: {
					// 180天有 N 天无童话记录
					cell_phone_silence: 15,
					// 号码静默
					number_silence: 'normal',
					// 欠费风险
					lack_of_risk: 'low',
					// 报警通话次数
					call_the_police: 0,
					// 法院通话
					court_calls: 0,
					// 贷款类号码联系情况
					loan_type_phone_contact: 'none',
					// 银行类号码联系情况
					// 联系次数在5次以上,包含5次,且主动呼叫占比大于50%,包含50%
					bank_type_phone_contact: 'often',
					// 信用卡类号码联系情况 : 偶尔
					credit_card_type_phone_contact: 'occasionally',
					// 催收号码联系情况
					collection_type_phone_contact: 'none',
					// 夜间活动情况
					night_activity: 'low',
				},
				// 社交分析
				social_analysis: {
					// 6个月共 N 个联系人
					circle_of_friends_size: 75,
					// 亲密度 (十次以上联系)
					circle_of_friends_intimacy: 6,
					// 朋友圈互动
					circle_of_friends_interactive: 17,
					// 朋友圈所在地
					circle_of_friends_home: '福州',
					// 朋友圈是否在本地
					circle_of_friends_is_in_home: true,
				},
				list_top_of_the_circle_of_friends: [
					{
						from: '福州',
						time: 53,
						call_time: 25,
						be_call_time: 28,
						total_of_minutes: 136.58,
					},
					{
						from: '厦门',
						time: 21,
						call_time: 13,
						be_call_time: 8,
						total_of_minutes: 52.02,
					},
					{
						from: '杭州',
						time: 8,
						call_time: 5,
						be_call_time: 3,
						total_of_minutes: 37.21,
					},
				],
				list_often_of_the_circle_of_friends: [
					{
						from: '福州',
						time: 8,
						call_time: 34,
						be_call_time: 21,
						total_of_minutes: 89.36,
						phone_numbe: '158***6962',
						label: '未知',
					},
					{
						from: '厦门',
						time: 8,
						call_time: 23,
						be_call_time: 15,
						total_of_minutes: 65.13,
						phone_numbe: '187***5637',
						label: '未知',
					},
					{
						from: '杭州',
						time: 8,
						call_time: 12,
						be_call_time: 9,
						total_of_minutes: 60.97,
						phone_numbe: '135***6005',
						label: '未知',
					},
					{
						from: '福州',
						time: 8,
						call_time: 11,
						be_call_time: 10,
						total_of_minutes: 34.63,
						phone_numbe: '130***0010',
						label: '未知',
					},
					{
						from: '福州',
						time: 8,
						call_time: 9,
						be_call_time: 8,
						total_of_minutes: 28.71,
						phone_numbe: '153***1022',
						label: '未知',
					},
				],
				//消费分析
				consumption_table: {
					// 消费总金额
					total_amount_of_consumption: 678.17,
					// 网络流量消费金额
					amount_of_network_traffic_consumption: 585.51,
					// 通话消费金额
					call_consumption: 328.8,
					// 短信消费金额
					message_consumption: 0,
					// 增值业务消费金额
					service_consumption: 10.0,
					// 其他消费金额
					other_consumption: 0,
					// 充值金额
					recharge_money: 530,
					// 最大金额
					single_large_recharge: 100,
				},
				// 出行分析
				travel_analysis: [
					{
						from: '福州',
						to: '漳州',
						start_time: 1532476800000,
						end_time: 1532649600000,
						type: 'Workday',
					},
					{
						frome: '厦门',
						to: '福州',
						start_time: 1534550400000,
						end_time: 1534636800000,
						type: 'Holiday',
					},
					{
						frome: '福州',
						to: '杭州',
						start_time: 1536710400000,
						end_time: 1536883200000,
						type: 'Workday',
					},
					{
						frome: '厦门',
						to: '福州',
						start_time: 1540166400000,
						end_time: 1540425600000,
						type: 'Workday',
					},
				],
			},
			// 检测报告详情
			test_report_details: {
				// 网贷风险检测
				p2p_risk_test: {
					// 身份证命中高风险名单
					id_test_risk_list: [],
					// 手机号命中高风险名单
					phone_test_risk_list: [
						{
							hight_risk: true,
							label: '法院结案',
						},
						{
							hight_risk: true,
							label: '法院失信',
						},
						{
							hight_risk: true,
							label: '法院执行',
						},
						{
							hight_risk: true,
							label: '法院失信欠款类',
						},
					],
					// 申请人命中网贷欺诈黑名单
					applicant_in_p2p_blacklist: [
						{
							hight_risk: false,
							label: '异常借款',
						},
					],
					// 申请人命中网贷灰名单
					applicant_in_p2p_graylist: false,
					// 身份证是否命中恶意注册名单
					id_hit_malicious_registration_list: false,
					// 手机号是否命中恶意注册名单
					phone_hit_malicious_registration_list: false,
					// 身份证是否存在信贷逾期历史记录
					id_card_has_overdue_credit_history: false,
					// 手机号是否命中通讯小号库
					phone_has_hit_communication_trumpet_library: false,
					// 手机号是否命中虚假号码库
					phone_hit_the_false_number_library: false,
					// 手机号是否命中诈骗骚扰库
					phone_hit_fraud_harassment_library: false,
					// 身份证是否命中高风险区域
					id_hit_high_risk_area: false,
					// 身份证是否命中信贷逾期名单
					id_hit_credit_overdue_list: false,
					// 身份证是否命中信贷逾期后还款名单
					id_hit_credit_overdue_repayment_list: false,
					// 身份证对应人是否存在助学贷款欠费历史
					identity_card_corresponds_is_history_of_student_loan_arrears: false,
					// 身份证是否命中车辆租赁违约名单
					id_hit_vehicle_rental_default_list: false,
				},
				// 多头借贷数据检测
				long_lending_data_detection: {
					// 7天内在多个平台申请借款次数
					times_of_application_for_loan_on_multiple_platforms_within_7_days: 2,
					// 1个月内在多个平台申请借款次数
					times_of_applying_for_loans_on_multiple_platforms_within_1_month: 5,
					// 3个月在多个平台申请借款次数
					times_of_applying_for_loans_on_multiple_platforms_within_3_month: 8,
					// 3个月内申请贷款成功次数
					number_of_successful_loan_applications_within_3_months: 6,
				},
				// 不良信息检测
				bad_information_detection: {
					// 身份证是否命中法院失信黑名单
					id_hit_the_court_blacklist_of_broken_promises: false,
					// 身份证命中法院执行名单
					id_hit_court_execution_list: false,
					// 身份证命中法院结案名单
					id_hit_the_court_list_of_closed_cases: false,
					// 身份证命中欠款公司法人代表名单
					id_hit_arrears_of_the_company_legal_representative_list: false,
				},
				// 关联检测
				correlation_detection: {
					// 手机号作为联系人出现次数过多
					phone_appears_too_often_as_contact: false,
					// 身份证作为联系人出现次数过多
					id_appears_too_often_contact: true,
					// 3个月内身份证关联多个手机号
					multiple_phone_associated_with_id_within_3_months: [
						'187***1317',
						'134***8581',
					],
					// 3个月内手机号关联多个身份证
					multiple_id_associated_with_id_within_3_months: [
						'350105***6315',
						'352222***5008',
					],
				},
			},
		},
	});
};

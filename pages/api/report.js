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
		},
	});
};

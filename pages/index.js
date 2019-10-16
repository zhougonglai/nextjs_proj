import Button from '@material/react-button';
import Link from 'next/link';

import Head from '../components/head';
import '../static/style/index.scss';

const scripts = ['//at.alicdn.com/t/font_1461110_47gj7bx9u48.js'];

export default () => {
	return (
		<div className='root'>
			<Head title='首页' scripts={scripts} />
			<div className='cell-list cards'>
				<div className='cell-item flex column align-center elevation-1'>
					<Link href='/login'>
						<Button raised className='mdc-button-shaped margin-vertical'>
							立即查询
						</Button>
					</Link>
					<a className='margin-vertical' href='/history'>
						查看历史报告
					</a>
					<p>
						已为<span className='text-primary'>287469</span>
						人诊断了信用问题,帮助他们成功贷款.
					</p>
				</div>
				<div className='cell-item flex elevation-1'>
					<svg className='icon'>
						<use xlinkHref='#icon-optimizationcogwheelsettingmechanismbul'></use>
					</svg>

					<div className='item-content'>
						<div className='content-title large bold'>天马报告</div>
						<div className='content-descript'>
							多维度网黑检测.多头借贷检测.网贷下款评估.1分钟查询被拒原因.
						</div>
						<div className='content-actions flex align-center'>
							<div className='price fill large text-danger'>
								¥29.9次
								<span className='small text-gray text-through'>¥88.8次</span>
							</div>
							<Link href='/about'>
								<Button dense raised className='mdc-button-shaped'>
									示例报告
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className='row mt-2'>
				<div className='col flex column align-center'>
					<div className='box-avatar'>
						<svg className='icon'>
							<use xlinkHref='#icon-Datastatistics'></use>
						</svg>
					</div>
					<div className='box-title larger margin-vertical'>权威数据</div>
					<div className='box-label small text-gray'>数据全面真是</div>
				</div>

				<div className='col flex column align-center'>
					<div className='box-avatar'>
						<svg className='icon'>
							<use xlinkHref='#icon-safe'></use>
						</svg>
					</div>
					<div className='box-title larger margin-vertical'>隐私保护</div>
					<div className='box-label small text-gray'>数据全面真是</div>
				</div>

				<div className='col flex column align-center'>
					<div className='box-avatar'>
						<svg className='icon'>
							<use xlinkHref='#icon-ServiceCentre1'></use>
						</svg>
					</div>
					<div className='box-title larger margin-vertical'>技术实力</div>
					<div className='box-label small text-gray'>数据全面真是</div>
				</div>

				<div className='col flex column align-center'>
					<div className='box-avatar'>
						<svg className='icon'>
							<use xlinkHref='#icon-serviceicon'></use>
						</svg>
					</div>
					<div className='box-title larger margin-vertical'>专业服务</div>
					<div className='box-label small text-gray'>数据全面真是</div>
				</div>
			</div>
		</div>
	);
};

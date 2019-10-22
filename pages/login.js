import Head from '../components/head';
import Fab from '@material/react-fab';
import TextField, { HelperText, Input } from '@material/react-text-field';
import Button from '@material/react-button';
import Link from 'next/link';
import MaterialIcon from '@material/react-material-icon';
import '../static/css/login.scss';

export default class Login extends React.Component {
	state = {
		name: '',
		card_no: '',
		phone_no: '',
	};

	componentDidMount() {
		console.log('componentDidMount');
	}

	blurFix() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}
	render() {
		return (
			<div className='login'>
				<Head title='登录' />
				<Link href='/'>
					<Fab
						className='absolute bottom right'
						icon={<MaterialIcon icon='arrow_back' />}></Fab>
				</Link>

				<div className='cell-list cards'>
					<div className='cell-item shadow-3'>
						<div className='title margin-vertical'>请输入查询对象身份信息</div>
						<form className='flex column forms'>
							<TextField
								outlined
								label='真实姓名'
								onTrailingIconSelect={() => this.setState({ name: '' })}
								leadingIcon={<MaterialIcon role='button' icon='person' />}
								trailingIcon={
									this.state.name && <MaterialIcon role='button' icon='clear' />
								}>
								<Input
									value={this.state.name}
									onChange={e => this.setState({ name: e.currentTarget.value })}
								/>
							</TextField>

							<TextField
								outlined
								label='身份证号码'
								onTrailingIconSelect={() => this.setState({ card_no: '' })}
								leadingIcon={<MaterialIcon role='button' icon='account_box' />}
								trailingIcon={
									this.state.card_no && (
										<MaterialIcon role='button' icon='clear' />
									)
								}>
								<Input
									value={this.state.card_no}
									onChange={e =>
										this.setState({ card_no: e.currentTarget.value })
									}
								/>
							</TextField>

							<TextField
								outlined
								label='手机号码'
								onTrailingIconSelect={() => this.setState({ phone_no: '' })}
								leadingIcon={<MaterialIcon role='button' icon='dialpad' />}
								trailingIcon={
									this.state.phone_no && (
										<MaterialIcon role='button' icon='clear' />
									)
								}>
								<Input
									pattern='\d*'
									value={this.state.phone_no}
									onBlur={this.blurFix}
									onChange={e =>
										this.setState({ phone_no: e.currentTarget.value })
									}
								/>
							</TextField>
							<Button unelevated className='mt-5' type='button'>
								打赏查询
							</Button>
						</form>
						<div className='description mt-5'>
							<div className='tip text-danger'>温馨提示:</div>
							<p className='text-gray'>
								天马报告仅帮助客户分析本人网贷大数据信息.
								<br />
								付款后有可能出现付款失败.无法获取报告的情况.请直接前往首页"历史查询"即可查看报告.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

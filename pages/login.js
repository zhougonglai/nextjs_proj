import Head from '../components/head';
import Fab from '@material/react-fab';
import TextField, { HelperText, Input } from '@material/react-text-field';
import Link from 'next/link';
import MaterialIcon from '@material/react-material-icon';
import '../static/css/login.scss';

export default class Login extends React.Component {
	state = {
		name: '',
		card_no: '',
		phone_no: '',
	};
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
									type='tel'
									value={this.state.phone_no}
									onChange={e =>
										this.setState({ phone_no: e.currentTarget.value })
									}
								/>
							</TextField>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

import React, { useState } from 'react';
import './Sign.css';
import LogoImage from '../assets/images/title/title_img.svg';
import { validateEmail, validatePassword, errorMessages } from '../Utils/Validator';
import InputField from '../components/Sign/InputField';
import PasswordInputField from '../components/Sign/PasswordInputField';
import SocialSignIn from '../components/Sign/SocialSignIn';

const SignIn: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState({
		user_email: '',
		user_psw: '',
	});

	const validateField = (name: string, value: string) => {
		let error = '';
		switch (name) {
			case 'user_email':
				if (value === '') {
					error = errorMessages.email.empty;
				} else if (!validateEmail(value)) {
					error = errorMessages.email.invalid;
				}
				break;
			case 'user_psw':
				if (value === '') {
					error = errorMessages.password.empty;
				} else if (!validatePassword(value)) {
					error = errorMessages.password.invalid;
				}
				break;
			default:
				break;
		}
		setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		switch (name) {
			case 'user_email':
				setEmail(value);
				break;
			case 'user_psw':
				setPassword(value);
				break;
			default:
				break;
		}
		validateField(name, value);
	};

	const handleSubmit = () => {
		validateField('user_email', email);
		validateField('user_psw', password);

		if (!errors.user_email && !errors.user_psw) {
			console.log('Form submitted');
		}
	};

	const togglePasswordVisibilityHandler = () => {
		setShowPassword(!showPassword);
	};

	return (
		<main className='sign_in_main'>
			<a className='logo_btn' href='/'>
				<img className='logo_img' src={LogoImage} alt='Logo' />
			</a>

			<form className='sign_in_form' method='get'>
				<fieldset className='content'>
					<InputField
						id='user_email'
						label='이메일'
						type='email'
						value={email}
						placeholder='이메일을 입력해주세요'
						error={errors.user_email}
						onChange={handleInputChange}
					/>
					<PasswordInputField
						id='user_psw'
						label='비밀번호'
						value={password}
						placeholder='비밀번호를 입력해주세요'
						error={errors.user_psw}
						showPassword={showPassword}
						onChange={handleInputChange}
						togglePasswordVisibility={togglePasswordVisibilityHandler}
					/>
					<div>
						<button id='btn' className='submit_btn' type='button' onClick={handleSubmit}>
							로그인
						</button>
					</div>
				</fieldset>
			</form>

			<SocialSignIn />

			<div className='to_sign_up'>
				<p className='sign_up_text'>
					판다마켓이 처음이신가요?
					<a className='sign_up_btn' href='/signup'>
						회원가입
					</a>
				</p>
			</div>
		</main>
	);
};

export default SignIn;

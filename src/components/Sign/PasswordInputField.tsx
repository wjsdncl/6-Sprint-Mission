import React from 'react';
import EyeOpenIcon from '../../assets/images/icon/ic_eye_open.svg';
import EyeCloseIcon from '../../assets/images/icon/ic_eye_close.svg';

interface PasswordInputFieldProps {
	id: string;
	label: string;
	value: string;
	placeholder: string;
	error: string;
	showPassword: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	togglePasswordVisibility: () => void;
}

const PasswordInputField: React.FC<PasswordInputFieldProps> = ({
	id,
	label,
	value,
	placeholder,
	error,
	showPassword,
	onChange,
	togglePasswordVisibility,
}) => {
	return (
		<div>
			<div className={`${id}_label`}>
				<label htmlFor={id}>{label}</label>
			</div>
			<div className={`${id}_content`}>
				<input
					id={id}
					className={`${id}_input ${error ? 'error_line' : ''}`}
					type={showPassword ? 'text' : 'password'}
					value={value}
					name={id}
					placeholder={placeholder}
					onChange={onChange}
					required
				/>
				<button type='button' className='psw_chk_btn' onClick={togglePasswordVisibility}>
					<img
						className='psw_chk_img'
						src={showPassword ? EyeOpenIcon : EyeCloseIcon}
						alt='toggle password visibility'
					/>
				</button>
				{error && <span className={`error_msg ${id}_error_msg`}>{error}</span>}
			</div>
		</div>
	);
};

export default PasswordInputField;

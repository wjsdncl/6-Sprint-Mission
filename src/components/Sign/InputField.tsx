import React from 'react';

interface InputFieldProps {
	id: string;
	label: string;
	type: string;
	value: string;
	placeholder: string;
	error: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
	id,
	label,
	type,
	value,
	placeholder,
	error,
	onChange,
}) => {
	return (
		<div>
			<div className={`${id}_label`}>
				<label htmlFor={id}>{label}</label>
			</div>
			<div>
				<input
					id={id}
					className={`${id}_input ${error ? 'error_line' : ''}`}
					type={type}
					value={value}
					name={id}
					placeholder={placeholder}
					onChange={onChange}
					required
				/>
				{error && <span className={`error_msg ${id}_error_msg`}>{error}</span>}
			</div>
		</div>
	);
};

export default InputField;

import React from 'react';

import { InputProps } from '../input';

import inputStyle from '../input.module.css';
import passStyle from './passinput.module.css';

export const PasswordInput: React.FC<InputProps> = ({
	isError = false,
	helperText,
	label,
	...props
}) => {
	const inputRef = React.useRef<HTMLInputElement>(null);
	const [isFocus, setIsFocus] = React.useState(!!props.value ?? false);
	const [showPassword, setPasswordToggle] = React.useState(false);
	const showPasswordToggle = props.value;

	return (
		<>
			<div
				className={`${inputStyle.input_container} ${
					isError ? inputStyle.input_container : ''
				} ${isFocus ? inputStyle.focused : ''}`}
				onClick={() => {
					inputRef.current?.focus();
					setIsFocus(true);
				}}
			>
				<label htmlFor='' className={inputStyle.input_label}>
					{label}
				</label>
				<input
					type={showPasswordToggle && showPassword ? 'text' : 'password'}
					onBlur={() => !props.value && setIsFocus(false)}
					ref={inputRef}
					className={inputStyle.input}
					{...props}
				/>
				{showPasswordToggle && (
					<div
						className={passStyle.password_toggle_container}
						onClick={() => setPasswordToggle(!showPassword)}
					>
						{!showPassword ? (
							<svg
								width='18'
								height='13'
								viewBox='0 0 18 13'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M5.53846 6.2325C5.53846 4.32021 7.08824 2.77 9 2.77C10.9118 2.77 12.4615 4.32021 12.4615 6.2325C12.4615 8.14479 10.9118 9.695 9 9.695C7.08824 9.695 5.53846 8.14479 5.53846 6.2325ZM9 4.155C7.85295 4.155 6.92308 5.08513 6.92308 6.2325C6.92308 7.37987 7.85295 8.31 9 8.31C10.1471 8.31 11.0769 7.37987 11.0769 6.2325C11.0769 5.08513 10.1471 4.155 9 4.155Z'
									fill='black'
									fillOpacity='0.5'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M1.91393 4.98263C1.52705 5.54026 1.38462 5.97646 1.38462 6.2325C1.38462 6.48854 1.52705 6.92474 1.91393 7.48237C2.28791 8.02141 2.84379 8.60573 3.54708 9.14565C4.95672 10.2278 6.88934 11.08 9 11.08C11.1107 11.08 13.0433 10.2278 14.4529 9.14565C15.1562 8.60573 15.7121 8.02141 16.0861 7.48237C16.4729 6.92474 16.6154 6.48854 16.6154 6.2325C16.6154 5.97646 16.4729 5.54026 16.0861 4.98263C15.7121 4.44359 15.1562 3.85927 14.4529 3.31935C13.0433 2.23716 11.1107 1.385 9 1.385C6.88934 1.385 4.95672 2.23716 3.54708 3.31935C2.84379 3.85927 2.28791 4.44359 1.91393 4.98263ZM2.70407 2.22065C4.30122 0.994503 6.52245 0 9 0C11.4776 0 13.6988 0.994503 15.2959 2.22065C16.096 2.83489 16.7568 3.52016 17.2236 4.19299C17.6775 4.84724 18 5.56521 18 6.2325C18 6.89979 17.6775 7.61776 17.2236 8.27201C16.7568 8.94484 16.096 9.63011 15.2959 10.2444C13.6988 11.4705 11.4776 12.465 9 12.465C6.52245 12.465 4.30122 11.4705 2.70407 10.2444C1.90396 9.63011 1.24321 8.94484 0.776403 8.27201C0.322496 7.61776 0 6.89979 0 6.2325C0 5.56521 0.322496 4.84724 0.776403 4.19299C1.24321 3.52016 1.90396 2.83489 2.70407 2.22065Z'
									fill='black'
									fillOpacity='0.5'
								/>
							</svg>
						) : (
							<svg
								width='18'
								height='17'
								viewBox='0 0 18 17'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M16.8742 1.18193C17.1445 0.911545 17.1445 0.473169 16.8742 0.202787C16.6038 -0.0675956 16.1654 -0.0675956 15.8951 0.202787L1.12585 14.9731C0.855486 15.2435 0.855486 15.6818 1.12585 15.9522C1.39621 16.2226 1.83456 16.2226 2.10492 15.9522L4.73282 13.3241C5.99403 13.9179 7.44663 14.3087 9 14.3087C11.4776 14.3087 13.6988 13.3144 15.2959 12.0885C16.096 11.4744 16.7568 10.7893 17.2236 10.1166C17.6775 9.46248 18 8.74465 18 8.0775C18 7.41034 17.6775 6.69252 17.2236 6.03841C16.7568 5.36572 16.096 4.68059 15.2959 4.06647C15.054 3.88075 14.7977 3.70035 14.5283 3.52791L16.8742 1.18193ZM13.5226 4.53367L11.888 6.1684C12.2505 6.71566 12.4615 7.37193 12.4615 8.0775C12.4615 9.98939 10.9118 11.5393 9 11.5393C8.29448 11.5393 7.63826 11.3282 7.09104 10.9657L5.7833 12.2736C6.76686 12.6743 7.85734 12.924 9 12.924C11.1107 12.924 13.0433 12.072 14.4529 10.99C15.1562 10.4502 15.7121 9.86604 16.0861 9.32711C16.4729 8.76959 16.6154 8.33349 16.6154 8.0775C16.6154 7.82151 16.4729 7.38541 16.0861 6.82789C15.7121 6.28896 15.1562 5.70476 14.4529 5.16495C14.1638 4.94307 13.8527 4.73085 13.5226 4.53367ZM8.10456 9.95215C8.37569 10.0819 8.67936 10.1546 9 10.1546C10.1471 10.1546 11.0769 9.22463 11.0769 8.0775C11.0769 7.75684 11.0043 7.45315 10.8745 7.18199L8.10456 9.95215Z'
									fill='black'
									fillOpacity='0.5'
								/>
								<path
									d='M9 1.84629C9.94187 1.84629 10.8467 1.98998 11.6943 2.23548C11.8729 2.2872 11.926 2.51049 11.7945 2.64196L11.0631 3.37349C11.0012 3.43534 10.9116 3.4601 10.8263 3.44059C10.2393 3.30631 9.62754 3.231 9 3.231C6.88934 3.231 4.95672 4.08299 3.54708 5.16495C2.84379 5.70476 2.28791 6.28896 1.91393 6.82789C1.52705 7.38541 1.38462 7.82151 1.38462 8.0775C1.38462 8.33349 1.52705 8.76959 1.91393 9.32711C2.2374 9.79324 2.69694 10.2932 3.27025 10.7691C3.38586 10.8651 3.39693 11.0402 3.29069 11.1464L2.66389 11.7733C2.57358 11.8636 2.42946 11.8715 2.33173 11.7893C1.69792 11.256 1.16868 10.6819 0.776403 10.1166C0.322496 9.46248 0 8.74465 0 8.0775C0 7.41034 0.322496 6.69252 0.776403 6.03841C1.24321 5.36572 1.90396 4.68059 2.70407 4.06647C4.30122 2.84058 6.52245 1.84629 9 1.84629Z'
									fill='black'
									fillOpacity='0.5'
								/>
								<path
									d='M9 4.61571C9.09741 4.61571 9.19389 4.61974 9.28927 4.62763C9.48629 4.64393 9.55769 4.87898 9.4179 5.01878L8.32374 6.11302C7.72069 6.3206 7.24323 6.79809 7.03566 7.40119L5.94154 8.49539C5.80174 8.6352 5.56667 8.5638 5.55037 8.36677C5.54248 8.27139 5.53846 8.17491 5.53846 8.0775C5.53846 6.16561 7.08824 4.61571 9 4.61571Z'
									fill='black'
									fillOpacity='0.5'
								/>
							</svg>
						)}
					</div>
				)}
			</div>
			{isError && helperText && <span className={inputStyle.helper_text}>{helperText}</span>}
		</>
	);
};
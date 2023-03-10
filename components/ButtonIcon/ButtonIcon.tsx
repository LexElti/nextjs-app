import React from 'react';
import cn from 'classnames';
import styles from './ButtonIcon.module.css';
import { ButtonIconProps, icons } from './ButtonIcon.props';

export const ButtonIcon = ({
	appearance,
	icon,
	className,
	...props
}: ButtonIconProps): JSX.Element => {
	const IconComp = icons[icon];

	return (
		<button
			className={cn(
				styles.button,
				styles[appearance],
				className
			)}
			{...props}
		>
			<IconComp />
		</button>
	);
};

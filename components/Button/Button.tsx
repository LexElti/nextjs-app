import cn from 'classnames';
import { motion } from 'framer-motion';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';

export const Button = ({
	appearance,
	arrow = 'none',
	children,
	className,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			className={cn(
				styles.button,
				styles[appearance],
				className
			)}
			{...props}
		>
			{children}
			{arrow != 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow === 'down'
					})}
				>
					<ArrowIcon />
				</span>
			)}
		</motion.button>
	);
};

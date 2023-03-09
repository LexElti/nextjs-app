import { ForwardedRef, forwardRef } from 'react';
import { TextareaProps } from './Textarea.props';
import cn from 'classnames';
import styles from './Textarea.module.css';

export const Textarea = forwardRef((
	{
		error,
		className,
		...props
	}: TextareaProps,
	ref: ForwardedRef<HTMLTextAreaElement>
): JSX.Element => {
	return (
		<div className={cn(styles.textareaWrapper, className)}>
			<textarea
				ref={ref}
				className={cn(styles.textarea, {
					[styles.error]: error
				})}
				{...props}
			/>
			{error && (
				<span
					role="alert"
					className={styles.errorMessage}
				>
					{error.message}
				</span>
			)}
		</div>
	);
});

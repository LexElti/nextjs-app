import { useState, KeyboardEvent } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { SearchProps } from './Search.props';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import styles from './Search.module.css';
import GlassIcon from './glass.svg';

export const Search = ({
	className,
	...props
}: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		});
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key == 'Enter') {
			goToSearch();
		}
	};

	return (
		<form
			className={cn(className, styles.search)}
			{...props}
			role="search"
		>
			<Input
				value={search}
				placeholder="Поиск..."
				className={styles.input}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Button
				appearance="primary"
				className={styles.button}
				onClick={goToSearch}
				aria-label="Искать по сайту"
			>
				<GlassIcon />
			</Button>
		</form>
	);
};

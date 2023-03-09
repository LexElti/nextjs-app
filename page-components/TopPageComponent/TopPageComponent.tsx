import { useEffect, useReducer } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Advantages, Htag, Product, Sort, Tag } from '../../components';
import { TopPageComponentProps } from './TopPageComponent.props';
import { HhData } from '../../components';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { SortEnum } from '../../components/Sort/Sort.props';
import { sortReducer } from './sort.reducer';
import styles from './TopPageComponent.module.css';

export const TopPageComponent = ({
	page,
	products,
	firstCategory
}: TopPageComponentProps): JSX.Element => {
	const [
		{ products: sortedProducts, sort },
		dispathSort
	] = useReducer(
		sortReducer,
		{ products, sort: SortEnum.Rating }
	);
	const shouldReduceMotion = useReducedMotion();

	const setSort = (sort: SortEnum) => {
		dispathSort({ type: sort });
	};

	useEffect(() => {
		dispathSort({ type: 'reset', initialState: products });
	}, [products]);

	return (
		<>
			<div className={styles.title}>
				<Htag tag='h1'>
					{page.title}
				</Htag>
				{products && (
					<Tag
						color='grey'
						size='m'
					>
						<span className="visualyHidden">элементов</span>
						{products.length}
					</Tag>
				)}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div role='list'>
				{sortedProducts && sortedProducts.map(p => (
					<Product
						key={p._id}
						product={p}
						layout={!shouldReduceMotion}
						role='listitem'
					/>
				))}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>
					Вакансии - {page.category}
				</Htag>
				<Tag color='red' size='m'>
					hh.ru
				</Tag>
			</div>
			{firstCategory == TopLevelCategory.Courses && page.hh && (
				<HhData {...page.hh} />
			)}
			{page.advantages && page.advantages.length > 0 && (
				<>
					<Htag tag='h2'>Преимущства</Htag>
					<Advantages advantages={page.advantages} />
				</>
			)}
			{page.seoText && (
				<div
					className={styles.seo}
					dangerouslySetInnerHTML={{ __html: page.seoText }}
				/>
			)}
			<Htag tag='h2'>Получаемые навыки</Htag>
			{page.tags.map(t => (
				<Tag key={t} color='primary'>
					{t}
				</Tag>
			))}
		</>
	);
};

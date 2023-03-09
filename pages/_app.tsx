import '../styles/globals.css';
import Head from 'next/head';
import Router from 'next/router';
import { AppProps } from 'next/app';
import React from 'react';
import ym, { YMInitializer } from 'react-yandex-metrika';

Router.events.on('routeChangeComplete', (url: string) => {
	if (typeof window !== 'undefined') {
		ym('hit', url);
	}
});

function MyApp({
	Component,
	pageProps,
	router
}: AppProps): JSX.Element {
	return <>
		<Head>
			<title>MyTop - лучший топ</title>
			<meta
				property="og:url"
				content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
			/>
		</Head>
		<YMInitializer
			accounts={[]}
			options={{ webvisor: true, defer: true }}
			version="2"
		/>
		<Component {...pageProps} />
	</>;
}

export default MyApp;

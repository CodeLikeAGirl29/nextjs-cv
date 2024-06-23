import './globals.css';

// External styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-coverflow';
import 'react-modern-drawer/dist/index.css';
import 'react-circular-progressbar/dist/styles.css';
// import "tw-elements-react/dist/css/tw-elements-react.min.css";

import { Lit } from 'litlyx-js';
Lit.init('6677d4122e282316a8b1bc7f');

import CustomCursor from '@/src/components/shared/CustomCursor';
import { Poppins } from 'next/font/google';
import BackToTop from '@/src/components/shared/BackToTop';
import ModeSwitcher from '@/src/components/shared/ModeSwitcher';
import { ThemeProvider } from '../context/theme-provider';

const poppins = Poppins({
	weight: ['200', '300', '400', '500', '600', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: 'Personal Resume/vCard Nextjs Template',
	description: 'Personal Resume/vCard Nextjs Template',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning={true} className='scroll-smooth'>
			<body
				className={`${poppins.className} relative`}
				suppressHydrationWarning={true}
			>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
					<main>
						{children}
						<CustomCursor />
						<BackToTop />
						<ModeSwitcher />
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}

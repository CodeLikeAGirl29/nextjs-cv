import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='py-6 text-center lg:ml-auto footer-section max-w-content xl:max-2xl:max-w-50rem'>
			<p className=''>
				Copyright by
				<Link href='#' className='transition-colors'>
					lindseyk.dev
				</Link>
			</p>
		</footer>
	);
};

export default Footer;

import logo from '@/public/assets/img/site-logo.svg';
import { IoHomeOutline } from 'react-icons/io5';
import { CiUser } from 'react-icons/ci';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { SlGraduation } from 'react-icons/sl';
import {
	FaRegFileAlt,
	FaRegEnvelope,
	FaFacebook,
	FaLinkedin,
	FaTwitter,
	FaInstagram,
} from 'react-icons/fa';
import { BsListTask } from 'react-icons/bs';
import { LiaBlogSolid } from 'react-icons/lia';
import { BiCommentDetail } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa6';
import { MdFormatListBulleted } from 'react-icons/md';

export const siteSettings = {
	logo: {
		image: logo?.src,
		alt: 'Minfo',
		url: '/',
		text: 'Minfo',
	},
	headersMenu: [
		{
			id: 1,
			title: 'Home',
			selector: '#home',
			url: '/',
			Icon: <IoHomeOutline />,
			notVisibleRoutes: [],
		},
		{
			id: 2,
			title: 'About',
			selector: '#about',
			url: '/',
			Icon: <FaRegUser />,
			notVisibleRoutes: [],
		},
		{
			id: 3,
			title: 'Services',
			selector: '#service',
			url: '/',
			Icon: <IoBriefcaseOutline />,
			notVisibleRoutes: [],
		},
		{
			id: 4,
			title: 'Skills',
			selector: '#skill',
			url: '/',
			Icon: <SlGraduation />,
			notVisibleRoutes: [],
		},
		{
			id: 5,
			title: 'Resume',
			selector: '#resume',
			url: '/',
			Icon: <FaRegFileAlt />,
			notVisibleRoutes: [],
		},
		{
			id: 6,
			title: 'Portfolio',
			selector: '#portfolio',
			url: '/',
			Icon: <MdFormatListBulleted />,
			notVisibleRoutes: [],
		},
		{
			id: 7,
			title: 'Blog',
			selector: '#blog',
			url: '/',
			Icon: <LiaBlogSolid />,
			notVisibleRoutes: [],
		},

		{
			id: 9,
			title: 'Contact',
			selector: '#contact',
			url: '/',
			Icon: <FaRegEnvelope />,
			notVisibleRoutes: [],
		},
	],
	socialMedias: [
		{
			id: 1,
			name: 'Facebook',
			tooltip: 'Share with Facebook',
			Icon: <FaFacebook />,
			url: 'https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Flindseyk.dev&layout&size&appId=331344995225523&width=77&height=20',
		},
		{
			id: 2,
			name: 'Linkedin',
			tooltip: 'Share with Linkedin',
			Icon: <FaLinkedin />,
			url: 'https://linkedin.com/in/lindsey-howard',
		},
		{
			id: 3,
			name: 'X',
			tooltip: 'Share with X',
			Icon: <FaTwitter />,
			url: 'https://twitter.com/dev_lindseyk',
		},
		{
			id: 4,
			name: 'Instagram',
			tooltip: 'Share with Instagram',
			Icon: <FaInstagram />,
			url: 'https://instagram.com/fiercely.lindseyy',
		},
	],
	preloader: {
		image: logo?.src,
	},
};

import BrandingIcon from '@/src/components/icons/home/BrandingIcon';
import EmailIcon from '@/src/components/icons/home/EmailIcon';
import LocationIcon from '@/src/components/icons/home/LocationIcon';
import PhoneIcon from '@/src/components/icons/home/PhoneIcon';
import SeoIcon from '@/src/components/icons/home/SeoIcon';
import UiUxIcon from '@/src/components/icons/home/UiUxIcon';
import WebDevIcon from '@/src/components/icons/home/WebDevIcon';
import {
	FaBlog,
	FaBriefcase,
	FaFolderOpen,
	FaGraduationCap,
	FaRegEnvelopeOpen,
} from 'react-icons/fa';
import { GrTasks } from 'react-icons/gr';
import { BiCheckDouble, BiCommentCheck } from 'react-icons/bi';

import nextjsImage from '@/public/assets/img/skill/nextjs.svg';
import nodejsImage from '@/public/assets/img/skill/nodejs.svg';
import tailwindImage from '@/public/assets/img/skill/tailwind.svg';
import htmlImage from '@/public/assets/img/skill/html.svg';
import cssImage from '@/public/assets/img/skill/css.svg';
import jsImage from '@/public/assets/img/skill/js.svg';
import jqueryImage from '@/public/assets/img/skill/jquery.svg';

import partner1Image from '@/public/assets/img/partners/logo1.svg';
import partner2Image from '@/public/assets/img/partners/logo2.svg';
import partner3Image from '@/public/assets/img/partners/logo3.svg';
import partner4Image from '@/public/assets/img/partners/logo4.svg';

import userImage from '@/public/assets/img/user-sidebar-thumb.png';
import userImageLight from '@/public/assets/img/user-sidebar-thumb-light.png';

import portfolioImage1Thumb from '@/public/assets/img/portfolio/portfolio-img1.png';
import portfolioImage1 from '@/public/assets/img/portfolio/portfolio-img1.png';

import portfolioImage2Thumb from '@/public/assets/img/portfolio/portfolio-img2.png';
import portfolioImage2 from '@/public/assets/img/portfolio/portfolio-img2.png';

import portfolioImage3Thumb from '@/public/assets/img/portfolio/portfolio-img3.png';
import portfolioImage3 from '@/public/assets/img/portfolio/portfolio-img3.png';

import portfolioImage4Thumb from '@/public/assets/img/portfolio/portfolio-img4.png';
import portfolioImage4 from '@/public/assets/img/portfolio/portfolio-img4.png';

import projectInner1Image from '@/public/assets/img/blog/article-inner1.png';
import projectInner2Image from '@/public/assets/img/blog/article-inner2.png';

import blog1Thumbnail from '@/public/assets/img/blog/article1.png';
import blog1Image from '@/public/assets/img/blog/article1.png';
import blog2Thumbnail from '@/public/assets/img/blog/article2.png';
import blog2Image from '@/public/assets/img/blog/article2.png';
import blog3Thumbnail from '@/public/assets/img/blog/article3.png';
import blog3Image from '@/public/assets/img/blog/article3.png';
import blog4Image from '@/public/assets/img/blog/article4.png';

import author1 from '@/public/assets/img/testimonial/author1.png';
import author2 from '@/public/assets/img/testimonial/author2.png';
import { IoHomeOutline } from 'react-icons/io5';

export const introduce = {
	iconBox: {
		Icon: <IoHomeOutline className='text-theme' size={14} />,
		title: 'INTRODUCE',
	},
	heading: {
		heading1: 'Turning Ideas into ',
		heading2: 'Interactive Realities',
	},
	desc: (
		<p>
			I am a{' '}
			<span className='font-medium text-black dark:text-white/90'>
				Frontend Developer.
			</span>{' '}
			I enjoy using my obsessive attention to detail, my unequivocal love for
			creating things, and my mission-driven work ethic to complete my
			objectives.
		</p>
	),
	jobs: [
		{
			id: 1,
			title: 'Available for work',
			icon: <BiCheckDouble size={25} className='text-theme mr-1' />,
		},
		{
			id: 2,
			title: 'Full Time Job',
			icon: <BiCheckDouble size={25} className='text-theme mr-1' />,
		},
	],
};

export const partners = [
	{
		imgUrl: partner1Image,
		altText: 'freeCodeCamp',
		link: '#',
	},
	{
		imgUrl: partner2Image,
		altText: 'IBM',
		link: '#',
	},
	{
		imgUrl: partner3Image,
		altText: 'Meta',
		link: '#',
	},
	{
		imgUrl: partner4Image,
		altText: 'Microsoft',
		link: '#',
	},
];

export const technologies = [
	{
		id: 1,
		title: 'HTML5 & CSS3',
		skill: '90',
		url: '#',
	},
	{
		id: 2,
		title: 'React.js',
		skill: '80',
		url: '#',
	},
	{
		id: 3,
		title: 'TailwindCSS',
		skill: '70',
		url: '#',
	},
];

export const userDetails = [
	{
		field: 'Phone',
		value: '850.533.5877',
	},
	{
		field: 'Skype',
		value: 'live:.cid.e150a93a0f1adeea',
	},
	{
		field: 'Language',
		value: 'English',
	},
	{
		field: 'Email',
		value: 'lindseykdev@gmail.com',
	},
	{
		field: 'GitHub',
		value: '@CodeLikeAGirl29',
	},
];

export const userDetailsSidebar = {
	userImage: userImage,
	userImageLight: userImageLight,
	userName: 'Lindsey Howard',
	designations: ['Web Developer', 'Blogger', 'Graphic Designer'],
	basicInfo: [
		{
			id: 1,
			field: 'Residence',
			value: 'Florida',
		},
		{
			id: 2,
			field: 'City',
			value: 'Ft Walton Bch',
		},
		{
			id: 3,
			field: 'Age',
			value: '33',
		},
	],
	skillsInfo: [
		{
			id: 1,
			name: 'HTML',
			value: 90,
		},
		{
			id: 2,
			name: 'CSS',
			value: 80,
		},
		{
			id: 3,
			name: 'JS',
			value: 90,
		},
		{
			id: 4,
			name: 'PHP',
			value: 55,
		},
	],
};

export const projectExperiences = [
	{
		title: 'Years Of Experience',
		count: 4,
		postFix: true,
	},
	{
		title: 'Handled Projects',
		count: 100,
		postFix: true,
	},
	{
		title: 'Available Hours',
		count: 45,
		postFix: true,
	},
	{
		title: 'Certifications',
		count: 18,
		postFix: false,
	},
];

export const services = {
	servicesHeading: {
		icon: <FaBriefcase className='text-theme' />,
		title: 'SERVICES',
		heading: 'My',
		coloredHeading: 'Services',
		description:
			'Crafting Intuitive and Engaging User Experiences with Cutting-Edge Frontend Development.',
	},
	servicesData: [
		{
			id: 1,
			number: '01',
			title: 'UI/UX Design',
			desc: 'Transforming ideas into visually stunning & user-friendly interfaces, ensuring a seamless & engaging user experience.',
			icon: <UiUxIcon />,
		},
		{
			id: 2,
			number: '02',
			title: 'Web Development',
			desc: 'I specialize in creating visually stunning, responsive websites that offer seamless user experiences & elevate your digital presence.',
			icon: <WebDevIcon />,
		},
		{
			id: 3,
			number: '03',
			title: 'SEO / Marketing',
			desc: 'Enhance your online presence & drive organic traffic with our tailored SEO & marketing strategies designed to boost your visibility while growing your audience.',
			icon: <SeoIcon />,
		},
		{
			id: 4,
			number: '04',
			title: 'Branding & Strategy',
			desc: 'Transform your brand vision into a cohesive & impactful digital presence with tailored strategies that resonate and engage.',
			icon: <BrandingIcon />,
		},
	],
};

export const skills = {
	skillsHeading: {
		icon: <FaGraduationCap className='text-theme' />,
		title: 'SKILLS',
		heading: 'My',
		coloredHeading: 'Advantages',
		description:
			'I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute',
	},
	skillsData: [
		{
			image: nextjsImage?.src,
			percent: 90,
			name: 'Nextjs',
		},
		{
			image: nodejsImage?.src,
			percent: 85,
			name: 'Nodejs',
		},
		{
			image: tailwindImage?.src,
			percent: 90,
			name: 'Tailwind',
		},
		{
			image: htmlImage?.src,
			percent: 95,
			name: 'HTML5',
		},
		{
			image: cssImage?.src,
			percent: 95,
			name: 'CSS3',
		},
		{
			image: jsImage?.src,
			percent: 75,
			name: 'JavaScript',
		},
		{
			image: jqueryImage?.src,
			percent: 70,
			name: 'jQuery',
		},
	],
};

export const resume = {
	resumeHeading: {
		icon: <FaFolderOpen className='text-theme' />,
		title: 'RESUME',
		heading: 'Work',
		coloredHeading: 'Experience',
		description:
			'I have successfully designed and developed responsive, user-friendly websites and web applications, leveraging modern technologies such as React, CSS3, and JavaScript, while ensuring optimal performance and seamless user experiences.',
	},
	resumeData: [
		{
			platform: 'Freelancer',
			duration: 'April 2021 - Current',
			position: 'Web Developer',
			description:
				'As a freelance web developer, I design, develop, and maintain dynamic and responsive websites for a diverse range of clients, leveraging the latest technologies and frameworks to deliver high-quality, user-friendly digital experiences.',
		},
		{
			platform: 'JBL Painting',
			duration: 'Oct 2021 - Jan 2024',
			position: 'Interior Painter',
			description:
				'Skilled interior painter with experience in preparing, priming, and painting residential and commercial spaces, ensuring high-quality finishes and customer satisfaction through meticulous attention to detail and color matching.',
		},
		{
			platform: 'Tristate Marketing',
			duration: 'Oct 2016 - April 2021',
			position: 'Sales & Marketing',
			description:
				'Developed and executed strategic sales and marketing plans, successfully increasing revenue and expanding market presence through targeted campaigns and effective team leadership.',
		},
	],
};

export const educations = {
	educationsHeading: {
		icon: '',
		title: '',
		heading: 'My',
		coloredHeading: 'Education',
		description:
			'Graduated with an Associate&apos;s in Computer Science from Florida Tech, demonstrating a strong foundation in systems analysis, programming and electronic commerce, and consistently achieving high academic performance.',
	},
	educationsData: [
		{
			institution: 'Meta',
			duration: '2022-2022',
			degree: 'Front-end Developer Professional',
			description: '',
		},
		{
			institution: 'IBM',
			duration: '2022 - 2022',
			degree: 'Front-end Developer',
			description: '',
		},
		{
			institution: 'Florida Tech',
			duration: '2014-2018',
			degree: 'Associate&apos;s - Computer Science',
			description:
				'Learned the fundamentals of algorithmic thinking and gain the ability to express solutions to problems using computer-programming languages.',
		},
	],
};

export const portfolio = {
	portfolioHeading: {
		icon: <GrTasks className='text-theme' />,
		title: 'PORTFOLIO',
		heading: 'Featured ',
		coloredHeading: 'Projects',
		description:
			'I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute',
	},
	projectsData: [
		{
			id: 1,
			image: {
				thumbnail: portfolioImage1Thumb?.src,
				image: portfolioImage1?.src,
				thumbnailText1: 'Design',
				thumbnailText2: 'Specialization',
			},
			type: 'Branding',
			title: 'Three wine glasses filled with candies',
			slug: 'three-wine-glasses-filled-with-candies',
			projectHeading: {
				icon: <GrTasks className='text-theme' />,
				title: 'Project Details',
			},
			projectInfo: [
				{
					field: 'CLIENT',
					value: 'Envato Theme',
				},
				{
					field: 'SERVICES:',
					value: 'Tips & Tricks, Design',
				},
				{
					field: 'DURATION',
					value: '108 hrs',
				},
			],
			projectDescription: {
				descriptionTitle: 'Project Description',
				description:
					'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.',
				descriptionLists: [
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
					'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
					'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
				],
				projectImage: [projectInner1Image?.src, projectInner2Image?.src],
			},
		},
		{
			id: 2,
			image: {
				thumbnail: portfolioImage2Thumb?.src,
				image: portfolioImage2?.src,
				thumbnailText1: 'Design',
				thumbnailText2: 'Specialization',
			},
			type: 'Design',
			title: '',
			slug: 'navigating-the-css-landscape',
			projectHeading: {
				icon: <GrTasks className='text-theme' />,
				title: 'Project Details',
			},
			projectInfo: [
				{
					field: 'CLIENT',
					value: '',
				},
				{
					field: 'SERVICES',
					value: 'Responsive, Design',
				},
			],
			projectDescription: {
				descriptionTitle: 'Project Description',
				description:
					'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.',
				descriptionLists: [
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
					'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
					'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
				],
				projectImage: [projectInner1Image?.src, projectInner2Image?.src],
			},
		},
		{
			id: 3,
			image: {
				thumbnail: portfolioImage3Thumb?.src,
				image: portfolioImage3?.src,
				thumbnailText1: 'Design',
				thumbnailText2: 'Specialization',
			},
			type: 'Branding',
			title: 'Three wine glasses filled with candies',
			slug: 'three-wine-glasses-filled-with-candies',
			projectHeading: {
				icon: <GrTasks className='text-theme' />,
				title: 'Project Details',
			},
			projectInfo: [
				{
					field: 'CLIENT',
					value: 'Envato Theme',
				},
				{
					field: 'SERVICES',
					value: 'Tips & Tricks, Design',
				},
				{
					field: 'DURATION',
					value: '108 hrs',
				},
			],
			projectDescription: {
				descriptionTitle: 'Project Description',
				description:
					'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.',
				descriptionLists: [
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
					'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
					'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
				],
				projectImage: [projectInner1Image?.src, projectInner2Image?.src],
			},
		},
		{
			id: 4,
			image: {
				thumbnail: portfolioImage4Thumb?.src,
				image: portfolioImage4?.src,
				thumbnailText1: 'Design',
				thumbnailText2: 'Specialization',
			},
			type: 'Branding',
			title: 'Three wine glasses filled with candies',
			slug: 'three-wine-glasses-filled-with-candies',
			projectHeading: {
				icon: <GrTasks className='text-theme' />,
				title: 'Project Details',
			},
			projectInfo: [
				{
					field: 'CLIENT',
					value: 'Envato Theme',
				},
				{
					field: 'SERVICES',
					value: 'Tips & Tricks, Design',
				},
				{
					field: 'DURATION',
					value: '108 hrs',
				},
			],
			projectDescription: {
				descriptionTitle: 'Project Description',
				description:
					'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.',
				descriptionLists: [
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
					'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
					'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
				],
				projectImage: [projectInner1Image?.src, projectInner2Image?.src],
			},
		},
	],
};

export const blogs = {
	blogsHeading: {
		icon: <FaBlog className='text-theme' />,
		title: 'BLOG',
		heading: 'Latest',
		coloredHeading: 'Insights',
		description:
			'Discover the latest insights and trends in Web Development on my blog, where I delve into topics ranging from JavaScript frameworks to API integration, offering valuable perspectives and actionable advice.',
	},
	blogsData: [
		{
			image: {
				thumbnail: blog1Thumbnail?.src,
				image: blog1Image?.src,
			},
			category: 'Frontend',
			date: '03 May 2023',
			title: 'Supercharged Development: Why Gatsby.js Is My Go-To Framework',
			slug: 'supercharged-dev-why-gatsby-is-my-goto',
			blogInfo: {
				projectHeading: {
					icon: <FaBlog className='text-theme' />,
					title: 'Blog Details',
				},
				projectInfo: [
					{
						field: 'POSTED BY',
						value: 'Lindsey',
					},
					{
						field: 'CATEGORY:',
						value: 'Frameworks, Design',
					},
					{
						field: 'POSTED ON:',
						value: 'May 03, 2023',
					},
				],
				projectDescription: {
					descriptionTitle: 'Cappuccino Bliss',
					description:
						'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.',
					descriptionListsTitle: 'Benifits of coffee',
					descriptionLists: [
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
						'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
						'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
					],
					projectImage: [projectInner2Image?.src, projectInner1Image?.src],
				},
			},
		},
		{
			image: {
				thumbnail: blog2Thumbnail?.src,
				image: blog2Image?.src,
			},
			category: 'UI Design',
			date: '13 May 2023',
			title: 'Navigating the CSS Landscape',
			slug: 'navigating-the-css-landscape',
			blogInfo: {
				projectHeading: {
					icon: <FaBlog className='text-theme' />,
					title: 'Blog Details',
				},
				projectInfo: [
					{
						field: 'POSTED BY',
						value: 'Lindsey',
					},
					{
						field: 'CATEGORY:',
						value: 'Tips, Design',
					},
					{
						field: 'POSTED ON:',
						value: 'May 13, 2023',
					},
				],
				projectDescription: {
					descriptionTitle: 'Cappuccino Bliss',
					description:
						'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.',
					descriptionListsTitle: 'Benifits of coffee',
					descriptionLists: [
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
						'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
						'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
					],
					projectImage: [projectInner2Image?.src, projectInner1Image?.src],
				},
			},
		},
		{
			image: {
				thumbnail: blog3Thumbnail?.src,
				image: blog3Image?.src,
			},
			category: 'UI Design',
			date: '23 May 2023',
			title: 'JavaScript Fundamentals: Understanding the Core Concepts',
			slug: 'homeward-bound-crafting-a-productive-home-office',
			blogInfo: {
				projectHeading: {
					icon: <FaBlog className='text-theme' />,
					title: 'Blog Details',
				},
				projectInfo: [
					{
						field: 'POSTED BY',
						value: 'Lindsey',
					},
					{
						field: 'CATEGORY:',
						value: 'Frontend',
					},
					{
						field: 'POSTED ON:',
						value: 'May 23, 2023',
					},
				],
				projectDescription: {
					descriptionTitle: 'Cappuccino Bliss',
					description:
						'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.',
					descriptionListsTitle: 'Benifits of coffee',
					descriptionLists: [
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
						'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
						'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
					],
					projectImage: [projectInner2Image?.src, projectInner1Image?.src],
				},
			},
		},
		{
			image: {
				thumbnail: blog1Thumbnail?.src,
				image: blog4Image?.src,
			},
			category: 'Code',
			date: '03 June 2023',
			title: 'Integrating External Data into Your Web Projects',
			slug: 'integrating-external-data-into-your-web-projects',
			blogInfo: {
				projectHeading: {
					icon: <FaBlog className='text-theme' />,
					title: 'Blog Details',
				},
				projectInfo: [
					{
						field: 'POSTED BY',
						value: 'Lindsey',
					},
					{
						field: 'CATEGORY:',
						value: 'Code',
					},
					{
						field: 'POSTED ON:',
						value: 'June 03, 2023',
					},
				],
				projectDescription: {
					descriptionTitle: 'Cappuccino Bliss',
					description:
						'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.',
					descriptionListsTitle: 'Benifits of coffee',
					descriptionLists: [
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
						'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
						'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
					],
					projectImage: [projectInner2Image?.src, projectInner1Image?.src],
				},
			},
		},
		{
			image: {
				thumbnail: blog2Thumbnail?.src,
				image: blog2Image?.src,
			},
			category: 'UI Design',
			date: '03 May 2023',
			title: 'Mastering the clock: A guide to time management',
			slug: 'mastering-the-clock-a-guide-to-time-management',
			blogInfo: {
				projectHeading: {
					icon: <FaBlog className='text-theme' />,
					title: 'Blog Details',
				},
				projectInfo: [
					{
						field: 'POSTED BY',
						value: 'Adrinao Smith',
					},
					{
						field: 'CATEGORY:',
						value: 'Tips & Tricks, Design',
					},
					{
						field: 'POSTED ON:',
						value: 'Noveber 01, 2023',
					},
				],
				projectDescription: {
					descriptionTitle: 'Cappuccino Bliss',
					description:
						'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.',
					descriptionListsTitle: 'Benefits of coffee',
					descriptionLists: [
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
						'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
						'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
					],
					projectImage: [projectInner2Image?.src, projectInner1Image?.src],
				},
			},
		},
	],
};

export const testimonials = {
	testimonialsHeading: {
		icon: <BiCommentCheck className='text-theme' />,
		title: 'TESTIMONIAL',
		heading: 'What',
		coloredHeading: 'People Say:',
		description: ' I deliver beyond their expectations',
	},
	testimonialsData: [
		{
			id: 1,
			image: author1?.src,
			desc: (
				<div className='text-sm md:text-[15px] leading-loose content'>
					I had the pleasure of working with{' '}
					<span className='font-semibold text-theme'>Lindsey</span> on our
					latest web development project, and I couldn&apos;t be more satisfied
					with the results. From the initial consultation to the final launch,
					she demonstrated exceptional expertise, creativity, and
					professionalism.
				</div>
			),
			name: 'Sarah Yates',
			position: 'Developer',
		},
		{
			id: 2,
			image: author2?.src,
			desc: (
				<div className='text-sm md:text-[15px] leading-loose content'>
					<span className='font-semibold text-theme'>Lindsey</span> exceeds
					expectations with top-tier coding skills. Reliable, collaborative, and
					a true asset to any project. Highly recommended!
				</div>
			),
			name: 'Mily Martin',
			position: 'Project Manager',
		},
		{
			id: 3,
			image: author1?.src,
			desc: (
				<div className='text-sm md:text-[15px] leading-loose content'>
					Working with <span className='font-semibold text-theme'>Lindsey</span>{' '}
					is a game-changer. Their coding expertise and commitment to quality
					make every project effortless.
				</div>
			),
			name: 'Alex Johnson',
			position: 'Developer',
		},
	],
};

export const contactInfo = {
	contactInfoHeading: {
		icon: <FaRegEnvelopeOpen className='text-theme' />,
		title: 'CONTACT',
		heading: 'Contact',
		coloredHeading: 'Me.',
		description:
			'I love being able to help people by simplifying some of life&apos;s more complex problems.',
	},
	contactInfoData: [
		{
			id: 1,
			field: 'Location',
			data: 'Fort Walton Beach, FL 32548',
			Icon: <LocationIcon />,
		},
		{
			id: 2,
			field: 'E-mail',
			data: 'lindseykdev@gmail.com',
			Icon: <EmailIcon />,
		},
		{
			id: 3,
			field: 'Phone',
			data: '850.533.5877',
			Icon: <PhoneIcon />,
		},
	],
};

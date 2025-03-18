'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { INavLinks } from '../../interfaces/nav-links'

const SideBar = () => {
	const [links, setLinks] = useState<INavLinks[]>([
		{
			link: '/reporting',
			title: 'Обзор отчетов',
			isActive: false,
		},
		{
			link: '/reporting/add-company',
			title: 'Добавить компанию',
			isActive: false,
		},
		{
			link: '/reporting/companies',
			title: 'Компании',
			isActive: false,
		},

		{
			link: '/reporting/audience',
			title: 'Аудитория',
			isActive: false,
		},
		{
			link: '/reporting/financial-statements',
			title: 'Финансовая отчетность',
			isActive: false,
		},
		{
			link: '/reporting/traffic-sources',
			title: 'Источники трафика',
			isActive: false,
		},
		{
			link: '/reporting/email-marketing',
			title: 'Email маркетинг',
			isActive: false,
		},
	])
	const pathName = usePathname()

	useEffect(() => {
		setLinks(prev =>
			prev.map(link => ({
				...link,
				isActive: link.link === pathName,
			}))
		)
	}, [pathName])

	return (
		<div className='h-[100vh] w-[300px] bg-[#111827] justify-center pt-20 fixed'>
			<ul className='text-white space-y-7  w-full pl-5'>
				{links.map(link => (
					<li
						className={`pl-5 pt-2 pb-2 pr-0 ${
							link.isActive
								? 'bg-[#0085FA] rounded-tl-md rounded-bl-md transition duration-200'
								: ''
						}`}
						key={link.title}
					>
						<Link href={link.link}>{link.title}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
export default SideBar

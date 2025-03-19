'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { INavLinks } from '../../interfaces/nav-links'
const NavBar = () => {
	const [links, setLinks] = useState<INavLinks[]>([
		{
			link: '/',
			title: 'Главная',
			isActive: false,
		},
		{
			link: '/reporting',
			title: 'Отчеты',
			isActive: false,
		},
		{
			link: '/users',
			title: 'Пользователи',
			isActive: false,
		},
		{
			link: '/access-rights',
			title: 'Права доступа',
			isActive: false,
		},
	])
	const pathName = usePathname()

	useEffect(() => {
		setLinks(prev =>
			prev.map(link => ({
				...link,

				isActive:
					pathName === link.link ||
					(pathName.startsWith(link.link) &&
						pathName.charAt(link.link.length) === '/'),
			}))
		)
	}, [pathName])

	return (
		<nav className='bg-[#111827] h-16 flex'>
			<div className='container flex m-auto justify-between items-center'>
				<div className='text-[#ffffff] text-3xl'>
					<span className='text-[#0085fa]'>CRMHealth</span>Flow
				</div>
				<ul className='flex gap-10 text-white'>
					{links.map(link => (
						<li key={link.title} className='relative'>
							<Link
								href={link.link}
								className={`
							py-2 block transition-all duration-300
							${link.isActive ? 'text-[#0085FA]' : 'hover:text-[#0085FA]/70'}
						`}
							>
								{link.title}
							</Link>
							<span
								className={`
							absolute bottom-0 left-0 w-full h-0.5 
							bg-[#0085FA] transition-all duration-300
							${link.isActive ? 'scale-x-100' : 'scale-x-0'}
						`}
							/>
						</li>
					))}
				</ul>
				<div>
					<button className='relative overflow-hidden text-white border border-white px-4 py-2 cursor-pointer transition-colors duration-300 group'>
						<div className='flex gap-3 relative z-10 items-center'>
							<span>Выйти</span>
							<Image src='/exit.png' alt='Выход' width={30} height={30} />
						</div>

						<span className='absolute top-0 left-0 w-full h-full bg-[#0085fa] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out'></span>
					</button>
				</div>
			</div>
		</nav>
	)
}
export default NavBar

'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const SideBar = () => {
	const [groups, setGroups] = useState([
		{
			title: 'Отчеты',
			links: [
				{
					link: '/sales-reports',
					title: 'Обзор отчетов по продажам',
					isActive: false,
				},
				{
					link: '/supplier-reports',
					title: 'Обзор отчетов по поставщикам',
					isActive: false,
				},
				{
					link: '/sales-dynamics',
					title: 'Динамика продаж',
					isActive: false,
				},
			],
		},
		{
			title: 'Поставщики',
			links: [
				{
					link: '/reporting/add-supplier',
					title: 'Добавить поставщика',
					isActive: false,
				},
				{
					link: '/reporting/suppliers',
					title: 'Поставщики',
					isActive: false,
				},
			],
		},
		{
			title: 'Продукция',
			links: [
				{
					link: '/reporting/add-products',
					title: 'Добавить продукцию',
					isActive: false,
				},
				{
					link: '/reporting/list-products',
					title: 'Перечень продукции',
					isActive: false,
				},
			],
		},
		{
			title: 'Аптеки и филиалы',
			links: [
				{
					link: '/reporting/traffic-sources',
					title: 'Список аптек',
					isActive: false,
				},
				{
					link: '/reporting/email-marketing',
					title: 'Добавить аптеку',
					isActive: false,
				},
				{
					link: '/reporting/email-marketing',
					title: 'Сотрудники',
					isActive: false,
				},
				{
					link: '/reporting/email-marketing',
					title: 'График работы аптек',
					isActive: false,
				},
				{
					link: '/reporting/email-marketing',
					title: 'Инвентаризация',
					isActive: false,
				},
			],
		},
	])

	const pathName = usePathname()

	useEffect(() => {
		setGroups(prevGroups =>
			prevGroups.map(group => ({
				...group,
				links: group.links.map(link => ({
					...link,
					isActive: link.link === pathName,
				})),
			}))
		)
	}, [pathName])

	return (
		<div className='h-[100vh] w-[300px] bg-[#111827] justify-center pt-20 fixed'>
			<ul className='text-white space-y-7 w-full pl-5'>
				{groups.map((group, groupIndex) => (
					<div key={group.title}>
						<div className='text-gray-400 text-xs uppercase font-bold pl-5 mb-2'>
							{group.title}
						</div>

						{group.links.map(link => (
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

						{groupIndex < groups.length - 1 && (
							<hr className='border-gray-700 mx-5 my-4' />
						)}
					</div>
				))}
			</ul>
		</div>
	)
}

export default SideBar

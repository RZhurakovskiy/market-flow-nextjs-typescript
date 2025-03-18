import { ICompanies } from '@/app/interfaces/companiesData'
import Image from 'next/image'
type CompaniesTableProps = {
	dataCompanies: ICompanies[]
	deleteCompanies: (id: string) => void
}
const CompaniesTable: React.FC<CompaniesTableProps> = ({
	dataCompanies,
	deleteCompanies,
}) => {
	return (
		<div className='container m-auto ml-[320px]'>
			<h1 className='text-xl font-bold  text-gray-800 mb-6'>Список компаний</h1>

			<div className='flex items-center justify-center'>
				<table className='min-w-full bg-white border border-gray-300 shadow-md rounded-lg'>
					<thead className='bg-gray-800 text-white'>
						<tr>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								Название компании
							</th>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								Юридический адрес
							</th>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								Телефон
							</th>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								Email
							</th>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								Сайт
							</th>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								Размер компании
							</th>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								Статус взаимодействия
							</th>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								География
							</th>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								Тип компании
							</th>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								Действия
							</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-200'>
						{dataCompanies.map(company => (
							<tr
								className='hover:bg-gray-50 transition-colors'
								key={company.id}
							>
								<td className='py-4 px-4 text-xs text-gray-700'>
									{company.name}
								</td>
								<td className='py-4 px-4 text-xs text-gray-700'>
									{company.address}
								</td>
								<td className='py-4 px-4 text-xs text-gray-700'>
									{company.phone}
								</td>
								<td className='py-4 px-4 text-xs text-gray-700'>
									{company.email}
								</td>
								<td className='py-4 px-4 text-xs text-blue-600 underline'>
									<a href='https://pharmainnovations.ru' target='_blank'>
										{company.website}
									</a>
								</td>
								<td className='py-4 px-4 text-xs text-gray-700'>
									{company.employees}
								</td>
								<td className='py-4 px-4 text-xs text-green-600 font-medium'>
									<div>{company.status}</div>
								</td>
								<td className='py-4 px-4 text-xs text-gray-700'>
									{' '}
									{company.region}
								</td>
								<td className='py-4 px-4 text-xs text-gray-700'>
									{company.type}
								</td>
								<td className='py-4 px-4 text-xs text-gray-700'>
									<button onClick={() => deleteCompanies(company.id)}>
										<Image
											src='/delete-icon.png'
											width={24}
											height={24}
											alt='Удалить компанию'
										/>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
export default CompaniesTable

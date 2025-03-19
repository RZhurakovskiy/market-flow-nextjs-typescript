import Spinner from '@/app/components/general-ui/Spinner'
import { ISuppliers } from '@/app/interfaces/suppliersData'
import Image from 'next/image'

import Link from 'next/link'

type CompaniesTableProps = {
	dataSuppliers: ISuppliers[]
	isLoad: boolean
	deleteCompanies: (id: string) => void
}

const CompaniesTable: React.FC<CompaniesTableProps> = ({
	dataSuppliers,
	deleteCompanies,
	isLoad,
}) => {
	return (
		<div className='container m-auto ml-[320px]'>
			<h1 className='text-xl font-bold text-gray-800 mb-6'>
				Список поставщиков
			</h1>

			<div className='flex items-center justify-center'>
				<table className='min-w-full bg-white border border-gray-300 shadow-md rounded-lg'>
					{/* Заголовок таблицы */}
					<thead className='bg-gray-800 text-white'>
						<tr>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								Название компании
							</th>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								ИНН/КПП
							</th>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								Юридический адрес
							</th>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								Контактное лицо
							</th>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								Телефон
							</th>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								Email
							</th>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								Тип продукции
							</th>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								Мин. сумма заказа
							</th>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								Сроки доставки
							</th>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								Банковские реквизиты
							</th>
							<th className='py-3 px-4 text-left text-xs font-semibold uppercase'>
								Действия
							</th>
						</tr>
					</thead>

					{/* Тело таблицы */}
					<tbody className='divide-y divide-gray-200'>
						{isLoad ? (
							// Индикатор загрузки
							<tr>
								<td colSpan={11} className='py-8 text-center bg-gray-100'>
									<div className='flex justify-center items-center h-full'>
										<Spinner />
									</div>
								</td>
							</tr>
						) : (
							// Отображение данных поставщиков
							dataSuppliers.map(supplier => (
								<tr
									className='hover:bg-gray-50 transition-colors'
									key={supplier.id}
								>
									<td className='py-4 px-4 text-xs text-gray-700'>
										{supplier.companyName}
									</td>
									<td className='py-4 px-4 text-xs text-gray-700'>
										{supplier.innKpp}
									</td>
									<td className='py-4 px-4 text-xs text-gray-700'>
										{supplier.legalAddress}
									</td>
									<td className='py-4 px-4 text-xs text-gray-700'>
										{supplier.contactPerson}
									</td>
									<td className='py-4 px-4 text-xs text-gray-700'>
										{supplier.phone}
									</td>
									<td className='py-4 px-4 text-xs text-gray-700'>
										{supplier.email}
									</td>
									<td className='py-4 px-4 text-xs text-gray-700'>
										{supplier.productType}
									</td>
									<td className='py-4 px-4 text-xs text-gray-700'>
										{supplier.minOrderAmount
											? `${supplier.minOrderAmount.toLocaleString()} ₽`
											: '-'}
									</td>
									<td className='py-4 px-4 text-xs text-gray-700'>
										{supplier.deliveryTime || '-'}
									</td>
									<td className='py-4 px-4 text-xs text-gray-700'>
										{supplier.bankDetails || '-'}
									</td>
									<td className='py-4 px-4 text-xs text-gray-700 flex gap-5'>
										<button
											onClick={() => deleteCompanies(supplier.id)}
											className='cursor-pointer'
										>
											<Image
												src='/delete-icon.png'
												width={20}
												height={20}
												alt='Удалить компанию'
											/>
										</button>
										<Link
											href={{
												pathname: `/reporting/supplier-information-detailed/${supplier.id}`,
												query: { supplier: JSON.stringify(supplier) },
											}}
										>
											<button className='cursor-pointer'>
												<Image
													src='/eye-arrow-left.png'
													width={20}
													height={20}
													alt='Подробная информация'
												/>
											</button>
										</Link>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default CompaniesTable

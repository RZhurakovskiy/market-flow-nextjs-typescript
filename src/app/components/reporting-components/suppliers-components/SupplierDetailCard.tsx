import { IFormValues } from '@/app/interfaces/formData'
type SupplierProps = {
	supplier: IFormValues
}

const SupplierDetailCard: React.FC<SupplierProps> = ({ supplier }) => {
	return (
		<div>
			<h2 className='text-2xl font-bold text-gray-800'>
				Детальная информация о поставщике
			</h2>
			<hr className='border-[#1118274f] my-4' />
			<div className='space-y-4'>
				<h3 className='text-xl font-semibold text-gray-700'>
					Общая информация
				</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<div>
						<p className='text-sm font-medium text-gray-500'>
							Название компании:
						</p>
						<p className='text-base text-gray-800'>{supplier.companyName}</p>
					</div>
					<div>
						<p className='text-sm font-medium text-gray-500'>
							Контактное лицо:
						</p>
						<p className='text-base text-gray-800'>{supplier.contactPerson}</p>
					</div>
					<div>
						<p className='text-sm font-medium text-gray-500'>Телефон:</p>
						<p className='text-base text-gray-800'>{supplier.phone}</p>
					</div>
					<div>
						<p className='text-sm font-medium text-gray-500'>Email:</p>
						<p className='text-base text-gray-800'>{supplier.email}</p>
					</div>
					<div>
						<p className='text-sm font-medium text-gray-500'>Сайт:</p>
						<p className='text-base text-gray-800 break-words'>
							{supplier.website ? (
								<a
									href={supplier.website}
									target='_blank'
									rel='noopener noreferrer'
									className='text-blue-500 hover:underline'
								>
									{supplier.website}
								</a>
							) : (
								<span>не указано</span>
							)}
						</p>
					</div>
					<div>
						<p className='text-sm font-medium text-gray-500'>ИНН/КПП:</p>
						<p className='text-base text-gray-800'>{supplier.innKpp}</p>
					</div>
				</div>
			</div>
			<hr className='border-[#1118274f] my-4' />
			<div className='space-y-4'>
				<h3 className='text-xl font-semibold text-gray-700'>
					Банковские реквизиты
				</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<div>
						<p className='text-sm font-medium text-gray-500'>
							Реквизиты банка:
						</p>
						<p className='text-base text-gray-800'>{supplier.bankDetails}</p>
					</div>
					<div>
						<p className='text-sm font-medium text-gray-500'>
							Юридический адрес:
						</p>
						<p className='text-base text-gray-800'>{supplier.legalAddress}</p>
					</div>
				</div>
			</div>
			<hr className='border-[#1118274f] my-4' />
			<div className='space-y-4'>
				<h3 className='text-xl font-semibold text-gray-700'>
					Дополнительная информация
				</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<div>
						<p className='text-sm font-medium text-gray-500'>
							Минимальная сумма заказа:
						</p>
						<p className='text-base text-gray-800'>
							{supplier.minOrderAmount || 'не указано'} ₽
						</p>
					</div>
					<div>
						<p className='text-sm font-medium text-gray-500'>Время доставки:</p>
						<p className='text-base text-gray-800'>
							{supplier.deliveryTime || 'не указано'} дней
						</p>
					</div>
					<div>
						<p className='text-sm font-medium text-gray-500'>Тип продукции:</p>
						<p className='text-base text-gray-800'>{supplier.productType}</p>
					</div>
					<div>
						<p className='text-sm font-medium text-gray-500'>Статус:</p>
						<p className='text-base text-gray-800'>{supplier.status}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SupplierDetailCard

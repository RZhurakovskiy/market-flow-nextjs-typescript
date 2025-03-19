'use client'
import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form'

import { IFormValues } from '@/app/interfaces/formData'
interface IFormProps {
	register: UseFormRegister<IFormValues>
	handleSubmit: UseFormHandleSubmit<IFormValues>
	errors: FieldErrors<IFormValues>
	onSubmit: (data: IFormValues) => void
}
const AddSupplierForm: React.FC<IFormProps> = ({
	register,
	handleSubmit,
	errors,
	onSubmit,
}) => {
	return (
		<div className='bg-[#fdfdfd] h-[800px] w-full max-w-[1400px] shadow-sm rounded-sm p-4 overflow-y-auto'>
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* Общая информация */}
				<div className='mb-6'>
					<h2 className='text-xl font-semibold mb-4 text-gray-700'>
						Общая информация
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						{/* Название компании */}
						<div>
							<label
								htmlFor='companyName'
								className='block text-sm font-medium text-gray-700'
							>
								Название компании
							</label>
							<input
								type='text'
								id='companyName'
								{...register('companyName', {
									required: 'Это поле обязательно',
								})}
								className={`mt-1 block w-full px-3 py-2 border ${
									errors.companyName ? 'border-red-500' : 'border-gray-300'
								} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
								placeholder='Введите название компании'
							/>
							{errors.companyName && (
								<p className='text-red-500 text-sm mt-1'>
									{errors.companyName.message}
								</p>
							)}
						</div>
						{/* ИНН/КПП */}
						<div>
							<label
								htmlFor='innKpp'
								className='block text-sm font-medium text-gray-700'
							>
								ИНН/КПП
							</label>
							<input
								type='text'
								id='innKpp'
								{...register('innKpp', {
									required: 'Это поле обязательно',
								})}
								className={`mt-1 block w-full px-3 py-2 border ${
									errors.innKpp ? 'border-red-500' : 'border-gray-300'
								} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
								placeholder='Введите ИНН/КПП'
							/>
							{errors.innKpp && (
								<p className='text-red-500 text-sm mt-1'>
									{errors.innKpp.message}
								</p>
							)}
						</div>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
						{/* Юридический адрес */}
						<div>
							<label
								htmlFor='legalAddress'
								className='block text-sm font-medium text-gray-700'
							>
								Юридический адрес
							</label>
							<input
								type='text'
								id='legalAddress'
								{...register('legalAddress', {
									required: 'Это поле обязательно',
								})}
								className={`mt-1 block w-full px-3 py-2 border ${
									errors.legalAddress ? 'border-red-500' : 'border-gray-300'
								} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
								placeholder='Введите юридический адрес'
							/>
							{errors.legalAddress && (
								<p className='text-red-500 text-sm mt-1'>
									{errors.legalAddress.message}
								</p>
							)}
						</div>
						{/* Контактное лицо */}
						<div>
							<label
								htmlFor='contactPerson'
								className='block text-sm font-medium text-gray-700'
							>
								Контактное лицо
							</label>
							<input
								type='text'
								id='contactPerson'
								{...register('contactPerson', {
									required: 'Это поле обязательно',
								})}
								className={`mt-1 block w-full px-3 py-2 border ${
									errors.contactPerson ? 'border-red-500' : 'border-gray-300'
								} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
								placeholder='ФИО контактного лица'
							/>
							{errors.contactPerson && (
								<p className='text-red-500 text-sm mt-1'>
									{errors.contactPerson.message}
								</p>
							)}
						</div>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
						{/* Телефон */}
						<div>
							<label
								htmlFor='phone'
								className='block text-sm font-medium text-gray-700'
							>
								Телефон
							</label>
							<input
								type='tel'
								id='phone'
								{...register('phone', { required: 'Это поле обязательно' })}
								className={`mt-1 block w-full px-3 py-2 border ${
									errors.phone ? 'border-red-500' : 'border-gray-300'
								} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
								placeholder='+7 (XXX) XXX-XX-XX'
							/>
							{errors.phone && (
								<p className='text-red-500 text-sm mt-1'>
									{errors.phone.message}
								</p>
							)}
						</div>
						{/* Email */}
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-700'
							>
								Email
							</label>
							<input
								type='email'
								id='email'
								{...register('email', { required: 'Это поле обязательно' })}
								className={`mt-1 block w-full px-3 py-2 border ${
									errors.email ? 'border-red-500' : 'border-gray-300'
								} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
								placeholder='example@example.com'
							/>
							{errors.email && (
								<p className='text-red-500 text-sm mt-1'>
									{errors.email.message}
								</p>
							)}
						</div>
					</div>
				</div>

				{/* Условия сотрудничества */}
				<div className='mb-6'>
					<h2 className='text-xl font-semibold mb-4 text-gray-700'>
						Условия сотрудничества
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						{/* Тип продукции */}
						<div>
							<label
								htmlFor='productType'
								className='block text-sm font-medium text-gray-700'
							>
								Тип продукции
							</label>
							<select
								id='productType'
								{...register('productType', {
									required: 'Это поле обязательно',
								})}
								className={`mt-1 block w-full px-3 py-2 border ${
									errors.productType ? 'border-red-500' : 'border-gray-300'
								} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
							>
								<option value=''>Выберите тип</option>
								<option value='Лекарственные препараты'>
									Лекарственные препараты
								</option>
								<option value='БАДы'>БАДы</option>
								<option value='Косметика'>Косметика</option>
							</select>
							{errors.productType && (
								<p className='text-red-500 text-sm mt-1'>
									{errors.productType.message}
								</p>
							)}
						</div>
						{/* Минимальная сумма заказа */}
						<div>
							<label
								htmlFor='minOrderAmount'
								className='block text-sm font-medium text-gray-700'
							>
								Минимальная сумма заказа
							</label>
							<input
								type='number'
								id='minOrderAmount'
								{...register('minOrderAmount', { valueAsNumber: true })}
								className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
								placeholder='Введите сумму'
							/>
						</div>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
						{/* Сроки доставки */}
						<div>
							<label
								htmlFor='deliveryTime'
								className='block text-sm font-medium text-gray-700'
							>
								Сроки доставки
							</label>
							<input
								type='text'
								id='deliveryTime'
								{...register('deliveryTime')}
								className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
								placeholder='Например: 3-5 дней'
							/>
						</div>
						{/* Способы оплаты */}
						<div>
							<label
								htmlFor='paymentMethods'
								className='block text-sm font-medium text-gray-700'
							>
								Способы оплаты
							</label>
							<select
								id='productType'
								{...register('productType', {
									required: 'Это поле обязательно',
								})}
								className={`mt-1 block w-full px-3 py-2 border ${
									errors.productType ? 'border-red-500' : 'border-gray-300'
								} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
							>
								<option value=''>Выберите тип оплаты</option>
								<option value='Лекарственные препараты'>Наличные</option>
								<option value='БАДы'>Безналичные</option>
							</select>
							{errors.paymentMethods && (
								<p className='text-red-500 text-sm mt-1'>
									{errors.paymentMethods.message}
								</p>
							)}
						</div>
					</div>
				</div>

				{/* Реквизиты и дополнительная информация */}
				<div className='mb-6'>
					<h2 className='text-xl font-semibold mb-4 text-gray-700'>
						Реквизиты и дополнительная информация
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						{/* Банковские реквизиты */}
						<div>
							<label
								htmlFor='bankDetails'
								className='block text-sm font-medium text-gray-700'
							>
								Банковские реквизиты
							</label>
							<textarea
								id='bankDetails'
								rows={3}
								{...register('bankDetails', {
									required: 'Это поле обязательно',
								})}
								className={`mt-1 block w-full px-3 py-2 border ${
									errors.bankDetails ? 'border-red-500' : 'border-gray-300'
								} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
								placeholder='Введите реквизиты'
							></textarea>
							{errors.bankDetails && (
								<p className='text-red-500 text-sm mt-1'>
									{errors.bankDetails.message}
								</p>
							)}
						</div>
						{/* Статус поставщика */}
						<div>
							<label
								htmlFor='status'
								className='block text-sm font-medium text-gray-700'
							>
								Статус поставщика
							</label>
							<select
								id='status'
								{...register('status', {
									required: 'Это поле обязательно',
								})}
								className={`mt-1 block w-full px-3 py-2 border ${
									errors.status ? 'border-red-500' : 'border-gray-300'
								} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
							>
								<option value=''>Выберите статус</option>
								<option value='Активный'>Активный</option>
								<option value='Заблокированный'>Заблокированный</option>
								<option value='На проверке'>На проверке</option>
							</select>
							{errors.status && (
								<p className='text-red-500 text-sm mt-1'>
									{errors.status.message}
								</p>
							)}
						</div>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
						{/* Сайт */}
						<div>
							<label
								htmlFor='website'
								className='block text-sm font-medium text-gray-700'
							>
								Сайт
							</label>
							<input
								type='url'
								id='website'
								{...register('website')}
								className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
								placeholder='https://example.com'
							/>
						</div>
					</div>
				</div>

				<div className='flex justify-end'>
					<button
						type='submit'
						className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#0085FA] hover:bg-[#6580af] focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer'
					>
						Сохранить
					</button>
				</div>
			</form>
		</div>
	)
}

export default AddSupplierForm

'use client'
import MessageAlert from '@/app/components/general-ui/MessageAlert'
import axios from 'axios'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
type FormValues = {
	name: string
	address: string
	phone: string
	email: string
	website: string
	employees: number
	revenue: number
	status: string
	country: string
	region: string
	type: string
}

const SalesFunnel = () => {
	const [isShowMessageAlert, setShowMessageAlert] = useState<boolean>(false)
	const [messageAlertColors, setMessageAlertColors] = useState('')
	const [messageAlertText, setMessageAlertText] = useState('')

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>()

	const onSubmit: SubmitHandler<FormValues> = data => {
		axios
			.post(
				'https://react-crm-232e6-default-rtdb.europe-west1.firebasedatabase.app/companies.json',
				{
					name: data.name,
					address: data.address,
					phone: data.phone,
					email: data.email,
					website: data.website,
					employees: data.employees,
					revenue: data.revenue,
					status: data.status,
					country: data.country,
					region: data.region,
					type: data.type,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			.then(() => {
				setShowMessageAlert(true)
				setMessageAlertColors('#00694E')
				setMessageAlertText('успешное сохранение данных')
			})
			.catch(() => {
				setShowMessageAlert(true)
				setMessageAlertColors('red')
				setMessageAlertText('Ошибка сохранения данных')
			})
			.finally(() => {
				reset()
			})
		setTimeout(() => {
			setShowMessageAlert(false)
		}, 2000)
	}

	return (
		<div>
			<div className='ml-[250px] h-full flex items-center justify-center'>
				<div className='bg-[#f4f4f4] h-[600px] w-full max-w-[1400px] shadow-sm rounded-sm p-4'>
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
										htmlFor='name'
										className='block text-sm font-medium text-gray-700'
									>
										Название компании
									</label>
									<input
										type='text'
										id='name'
										{...register('name', { required: 'Это поле обязательно' })}
										className={`mt-1 block w-full px-3 py-2 border ${
											errors.name ? 'border-red-500' : 'border-gray-300'
										} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
										placeholder='Введите название компании'
									/>
									{errors.name && (
										<p className='text-red-500 text-sm mt-1'>
											{errors.name.message}
										</p>
									)}
								</div>
								{/* Юридический адрес */}
								<div>
									<label
										htmlFor='address'
										className='block text-sm font-medium text-gray-700'
									>
										Юридический адрес
									</label>
									<input
										type='text'
										id='address'
										{...register('address', {
											required: 'Это поле обязательно',
										})}
										className={`mt-1 block w-full px-3 py-2 border ${
											errors.address ? 'border-red-500' : 'border-gray-300'
										} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
										placeholder='Введите юридический адрес'
									/>
									{errors.address && (
										<p className='text-red-500 text-sm mt-1'>
											{errors.address.message}
										</p>
									)}
								</div>
							</div>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
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

						{/* Размер компании и статус взаимодействия */}
						<div className='mb-6'>
							<h2 className='text-xl font-semibold mb-4 text-gray-700'>
								Размер компании и статус взаимодействия
							</h2>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								{/* Размер компании */}
								<div>
									<label
										htmlFor='size'
										className='block text-sm font-medium text-gray-700'
									>
										Размер компании
									</label>
									<div className='mt-1 flex space-x-4'>
										<input
											type='number'
											id='employees'
											{...register('employees', {
												required: 'Это поле обязательно',
												valueAsNumber: true,
											})}
											className={`block w-48 px-3 py-2 border ${
												errors.employees ? 'border-red-500' : 'border-gray-300'
											} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
											placeholder='Кол-во сотрудников'
										/>
										<input
											type='number'
											id='revenue'
											{...register('revenue', {
												required: 'Это поле обязательно',
												valueAsNumber: true,
											})}
											className={`block w-48 px-3 py-2 border ${
												errors.revenue ? 'border-red-500' : 'border-gray-300'
											} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
											placeholder='Годовой оборот'
										/>
									</div>
									{errors.employees && (
										<p className='text-red-500 text-sm mt-1'>
											{errors.employees.message}
										</p>
									)}
									{errors.revenue && (
										<p className='text-red-500 text-sm mt-1'>
											{errors.revenue.message}
										</p>
									)}
								</div>
								{/* Статус взаимодействия */}
								<div>
									<label
										htmlFor='status'
										className='block text-sm font-medium text-gray-700'
									>
										Статус взаимодействия
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
										<option value='Потенциальный клиент'>
											Потенциальный клиент
										</option>
										<option value='Активный клиент'>Активный клиент</option>
										<option value='Партнёр'>Партнёр</option>
										<option value='Lost-лид'>Lost-лид</option>
									</select>
									{errors.status && (
										<p className='text-red-500 text-sm mt-1'>
											{errors.status.message}
										</p>
									)}
								</div>
							</div>
						</div>

						{/* География и тип компании */}
						<div className='mb-6'>
							<h2 className='text-xl font-semibold mb-4 text-gray-700'>
								География и тип компании
							</h2>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								{/* География */}
								<div>
									<label
										htmlFor='geography'
										className='block text-sm font-medium text-gray-700'
									>
										География
									</label>
									<div className='mt-1 flex space-x-4'>
										<input
											type='text'
											id='country'
											{...register('country', {
												required: 'Это поле обязательно',
											})}
											className={`block w-48 px-3 py-2 border ${
												errors.country ? 'border-red-500' : 'border-gray-300'
											} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
											placeholder='Страна'
										/>
										<input
											type='text'
											id='region'
											{...register('region', {
												required: 'Это поле обязательно',
											})}
											className={`block w-48 px-3 py-2 border ${
												errors.region ? 'border-red-500' : 'border-gray-300'
											} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
											placeholder='Регион'
										/>
									</div>
									{errors.country && (
										<p className='text-red-500 text-sm mt-1'>
											{errors.country.message}
										</p>
									)}
									{errors.region && (
										<p className='text-red-500 text-sm mt-1'>
											{errors.region.message}
										</p>
									)}
								</div>
								{/* Тип компании */}
								<div>
									<label
										htmlFor='type'
										className='block text-sm font-medium text-gray-700'
									>
										Тип компании
									</label>
									<select
										id='type'
										{...register('type', { required: 'Это поле обязательно' })}
										className={`mt-1 block w-full px-3 py-2 border ${
											errors.type ? 'border-red-500' : 'border-gray-300'
										} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
									>
										<option value=''>Выберите тип</option>
										<option value='Поставщик'>Поставщик</option>
										<option value='Клиент'>Клиент</option>
										<option value='Партнёр'>Партнёр</option>
										<option value='Конкурент'>Конкурент</option>
									</select>
									{errors.type && (
										<p className='text-red-500 text-sm mt-1'>
											{errors.type.message}
										</p>
									)}
								</div>
							</div>
						</div>

						{/* Submit */}
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
			</div>
			{isShowMessageAlert ? (
				<MessageAlert
					messageAlertColors={messageAlertColors}
					messageAlertText={messageAlertText}
				/>
			) : (
				''
			)}
		</div>
	)
}

export default SalesFunnel

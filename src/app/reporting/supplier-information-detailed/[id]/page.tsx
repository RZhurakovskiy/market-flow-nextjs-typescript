'use client'
import ModalEditSupplier from '@/app/components/reporting-components/suppliers-components/ModalEditSupplier'
import SupplierDetailCard from '@/app/components/reporting-components/suppliers-components/SupplierDetailCard'
import { IFormValues } from '@/app/interfaces/formData'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const SupplierInformationDetailed = () => {
	const params = useParams()
	const id = params.id

	const [supplier, setSupplier] = useState<IFormValues | null>(null)
	const [isShowModal, setShowModal] = useState(false)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormValues>()

	const getSuppliers = useCallback(() => {
		axios
			.get(
				`https://react-crm-232e6-default-rtdb.europe-west1.firebasedatabase.app/suppliers/${id}.json`,
				{
					headers: { 'Content-Type': 'application/json' },
				}
			)
			.then(res => {
				const data = res.data
				if (data && typeof data === 'object') {
					setSupplier(data as IFormValues)
				}
			})
			.catch(error => {
				console.error('Ошибка при получении данных поставщика:', error)
			})
	}, [id])

	useEffect(() => {
		getSuppliers()
	}, [getSuppliers])

	const onSubmit: SubmitHandler<IFormValues> = data => {
		axios
			.put(
				`https://react-crm-232e6-default-rtdb.europe-west1.firebasedatabase.app/suppliers/${id}.json`,
				data,
				{ headers: { 'Content-Type': 'application/json' } }
			)
			.then(() => {
				setShowModal(false)
				getSuppliers()
			})
			.catch(error => {
				console.error('Ошибка при обновлении данных поставщика:', error)
			})
	}

	const showEditModal = () => {
		setShowModal(true)
		if (supplier) reset(supplier)
	}

	const closeEditModal = () => setShowModal(false)

	return (
		<div>
			<div className='ml-[250px] h-full flex items-center justify-center'>
				<div className='bg-[#fdfdfd] h-auto w-full max-w-[1400px] shadow-md rounded-md p-6 overflow-y-auto space-y-6'>
					<div className='flex justify-between'>
						<button className='cursor-pointer' onClick={showEditModal}>
							<Image
								src='/edit.png'
								width={28}
								height={28}
								alt='Редактировать данные'
							/>
						</button>
						<Link href='/reporting/suppliers'>
							<button className='bg-[#111827] px-5 py-2 text-white font-medium rounded-md hover:bg-[#333] transition-colors cursor-pointer'>
								Назад
							</button>
						</Link>
					</div>
					<div>
						{supplier ? (
							<SupplierDetailCard supplier={supplier} />
						) : (
							<p>Загрузка данных поставщика...</p>
						)}
					</div>
				</div>
			</div>
			{isShowModal && supplier && (
				<ModalEditSupplier
					register={register}
					handleSubmit={handleSubmit}
					errors={errors}
					onSubmit={onSubmit}
					onClick={closeEditModal}
				/>
			)}
		</div>
	)
}

export default SupplierInformationDetailed

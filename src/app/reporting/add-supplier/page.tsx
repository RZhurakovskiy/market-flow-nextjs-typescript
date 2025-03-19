'use client'
import MessageAlert from '@/app/components/general-ui/MessageAlert'
import AddSupplierForm from '@/app/components/reporting-components/suppliers-components/AddSupplierForm'
import { IFormValues } from '@/app/interfaces/formData'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const AddSupplierFormWrapper = () => {
	const [isShowMessageAlert, setShowMessageAlert] = useState<boolean>(false)
	const [messageAlertColors, setMessageAlertColors] = useState('')
	const [messageAlertText, setMessageAlertText] = useState('')

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormValues>()

	const onSubmit = (data: IFormValues) => {
		const formData = {
			companyName: data.companyName,
			innKpp: data.innKpp,
			legalAddress: data.legalAddress,
			contactPerson: data.contactPerson,
			phone: data.phone,
			email: data.email,
			productType: data.productType,
			minOrderAmount: data.minOrderAmount,
			deliveryTime: data.deliveryTime,
			paymentMethods: data.paymentMethods,
			bankDetails: data.bankDetails,
			status: data.status,
			website: data.website,
		}

		axios
			.post(
				'https://react-crm-232e6-default-rtdb.europe-west1.firebasedatabase.app/suppliers.json',
				formData,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			.then(() => {
				setShowMessageAlert(true)
				setMessageAlertColors('#00694E')
				setMessageAlertText('Поставщик успешно добавлен')
			})
			.catch(() => {
				setShowMessageAlert(true)
				setMessageAlertColors('red')
				setMessageAlertText('Ошибка при добавлении поставщика')
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
				<AddSupplierForm
					register={register}
					handleSubmit={handleSubmit}
					errors={errors}
					onSubmit={onSubmit}
				/>
			</div>
			{isShowMessageAlert && (
				<MessageAlert
					messageAlertColors={messageAlertColors}
					messageAlertText={messageAlertText}
				/>
			)}
		</div>
	)
}

export default AddSupplierFormWrapper

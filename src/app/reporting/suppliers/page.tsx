'use client'
import CompaniesTable from '@/app/components/reporting-components/suppliers-components/SuppliersTable'
import { ISuppliers } from '@/app/interfaces/suppliersData'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Companies = () => {
	const [dataSuppliers, setDataSuppliers] = useState<ISuppliers[]>([])
	const [isLoad, setLoad] = useState(true)
	const getComanies = () => {
		axios
			.get(
				'https://react-crm-232e6-default-rtdb.europe-west1.firebasedatabase.app/suppliers.json',
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			.then(res => {
				const data = res.data
				const response = Object.keys(data).map(key => {
					return {
						id: key,
						...data[key],
					}
				})
				setLoad(false)
				setDataSuppliers(response)
			})
			.catch(() => {
				setLoad(false)
			})
	}

	const deleteCompanies = (id: string) => {
		axios
			.delete(
				`https://react-crm-232e6-default-rtdb.europe-west1.firebasedatabase.app/suppliers/${id}.json`,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			.then(() => {
				getComanies()
			})
			.catch(() => {})
	}

	useEffect(() => {
		getComanies()
	}, [])
	useEffect(() => {
		console.log(dataSuppliers)
	})

	return (
		<CompaniesTable
			dataSuppliers={dataSuppliers}
			deleteCompanies={deleteCompanies}
			isLoad={isLoad}
		/>
	)
}

export default Companies

'use client'
import CompaniesTable from '@/app/components/reporting-components/companies-components/CompaniesTable'

import { ICompanies } from '@/app/interfaces/companiesData'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Companies = () => {
	const [dataCompanies, setDataCompanies] = useState<ICompanies[]>([])
	const getComanies = () => {
		axios
			.get(
				'https://react-crm-232e6-default-rtdb.europe-west1.firebasedatabase.app/companies.json',
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
				setDataCompanies(response)
			})
			.catch(() => {})
	}

	const deleteCompanies = (id: string) => {
		axios
			.delete(
				`https://react-crm-232e6-default-rtdb.europe-west1.firebasedatabase.app/companies/${id}.json`,
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
		console.log(dataCompanies)
	})
	return (
		<div>
			<CompaniesTable
				dataCompanies={dataCompanies}
				deleteCompanies={deleteCompanies}
			/>
		</div>
	)
}

export default Companies

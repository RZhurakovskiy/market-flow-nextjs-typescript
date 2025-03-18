'use client'

import { useState } from 'react'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleEmailPasswordLogin = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!email || !password) {
			alert('Пожалуйста, заполните все поля')
			return
		}
	}

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-[#111827]'>
			<h1 className='mb-2 text-2xl font-bold text-white'>Вход в систему</h1>
			<div className='text-[#ffffff] text-3xl mb-10'>
				<span className='text-[#0085fa]'>Market</span>Flow
			</div>

			<form
				onSubmit={handleEmailPasswordLogin}
				className='w-full max-w-sm p-6 bg-white rounded-lg shadow-md'
			>
				<div className='mb-4'>
					<label
						htmlFor='email'
						className='block mb-2 text-sm font-medium text-gray-700'
					>
						Электронная почта
					</label>
					<input
						type='email'
						id='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder='Введите email'
						className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
						required
					/>
				</div>

				<div className='mb-6'>
					<label
						htmlFor='password'
						className='block mb-2 text-sm font-medium text-gray-700'
					>
						Пароль
					</label>
					<input
						type='password'
						id='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder='Введите пароль'
						className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
						required
					/>
				</div>

				<button
					type='submit'
					className='w-full px-4 py-2 text-white bg-[#0085FA] rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer'
				>
					Войти
				</button>
			</form>

			{/* Разделитель */}
			<div className='flex items-center my-6 space-x-2'>
				<div className='flex-grow h-px bg-gray-300'></div>
				<p className='text-sm text-white'>или</p>
				<div className='flex-grow h-px bg-gray-300'></div>
			</div>
		</div>
	)
}

export default Login

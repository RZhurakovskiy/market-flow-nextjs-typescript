import SideBar from '@/app/components/general-ui/SideBar'
export default function ReportsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex'>
			<SideBar />
			<main className='flex-1 p-4'>{children}</main>
		</div>
	)
}

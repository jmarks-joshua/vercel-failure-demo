export default function CaseDataLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		
		<div className='flex'>
			<section className='flex-grow mt-4'>
				{children}
			</section>
		</div>
	)
}

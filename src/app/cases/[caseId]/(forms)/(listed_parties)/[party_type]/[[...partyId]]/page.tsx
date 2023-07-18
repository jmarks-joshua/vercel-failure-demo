
import { getCase } from '@/app/helpers/cases'
import { ListSection } from '@/app/_utils/cases'
import PartiesList from '@/app/cases/[caseId]/(forms)/(listed_parties)/PartiesList'


export default async function ListedPartyPage({ params }: { params: { caseId: string, party_type: ListSection, partyId: string[] } }) {
	const { caseId, party_type, partyId = [''] } = params
	const currentCase = await getCase(caseId)
	if (!currentCase) {
		return <div className="min-h-screen container mx-auto bg-white p-4 rounded-xl ">
            Case not found
		</div>
	}

	return <div className="min-h-screen container mx-auto bg-white p-4 rounded-xl ">
		<div className="h-full">
			<div className='flex'>
				{/* @ts-expect-error Server Component */}
				<PartiesList caseId={caseId} type={party_type} partyId={partyId[0]} />
			</div>
		</div>
	</div>
}


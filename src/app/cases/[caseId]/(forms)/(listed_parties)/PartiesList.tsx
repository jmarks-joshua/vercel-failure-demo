import { getCase } from '@/app/helpers/cases'
import { ListSection } from '@/app/_utils/cases'
import { redirect } from 'next/navigation'

type PartyListProps = {
	caseId: string
	partyId?: string
	type: ListSection
}

export default async function PartiesList({ caseId, type, partyId }: PartyListProps) {
	const currentCase = await getCase(caseId)

	if (!currentCase) {
		return <div className="min-h-screen container mx-auto bg-white p-4 rounded-xl ">
            Case not found
		</div>
	}
	
	const partyList = currentCase.case_information[type] || [] 

	if (partyList.length > 0 && !partyId) {
		redirect(`/cases/${caseId}/${type}/${partyList[0].id}`)
	}

	if (!Array.isArray(partyList)) { redirect(`/cases/${caseId}`)}
	const partyExists = partyList.find(party => party.id === partyId)
	if (partyId && !partyExists) {
		redirect(`/cases/${caseId}/${type}`)
	}

	return (
		<div>Should not matter what is rendered anywhere</div>
	)
}

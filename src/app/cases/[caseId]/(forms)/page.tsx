import { redirect } from 'next/navigation'

export default async function CasePage({ params }: { params: { caseId: string } }) {
	redirect(`/cases/${params.caseId}/case_details`)
}

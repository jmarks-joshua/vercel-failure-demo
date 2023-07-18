
import prisma from '@/lib/database'

export const getCase = async (id: string) => {
	return await prisma.cases.findUnique({
		where: {
			id,
		},
	})
}
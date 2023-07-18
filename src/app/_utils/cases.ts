import { CasesData } from '@prisma/client'

export type CaseSection = keyof CasesData

type KeyWithArrayValue<T> = {
	[K in keyof T]: T[K] extends unknown[] ? K : never;
}[keyof T];

export type ListSection = KeyWithArrayValue<CasesData>

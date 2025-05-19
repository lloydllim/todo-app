type RepoSource = 'prisma' | 'mock'

const registry = {
	prisma: {
		user: () =>
			import('@/infrastructure/reposistories/prisma/prismaUserRepo').then(
				(m) => m.prismaUserRepo
			),
		todo: () =>
			import('@/infrastructure/reposistories/prisma/prismaToDoRepo').then(
				(m) => m.prismaToDoRepo
			),
	},
	mock: {
		user: () =>
			import('@/infrastructure/reposistories/mock/mockUserRepo').then(
				(m) => m.mockUserRepo
			),
		todo: () =>
			import('@/infrastructure/reposistories/mock/mockToDoRepo').then(
				(m) => m.mockToDoRepo
			),
	},
} satisfies Record<RepoSource, Record<string, () => Promise<any>>>

export async function getRepository<T = any>(
	type: keyof (typeof registry)['prisma'],
	source: RepoSource = 'prisma'
): Promise<T> {
	const loader = registry[source]?.[type]
	if (!loader)
		throw new Error(
			`Repository for "${type}" not found in source "${source}"`
		)
	return loader()
}

export const getStoreLocal = (name: string) => {
	if (typeof localStorage !== 'undefined') {
		const ls = localStorage.getItem(name)
		console.log(typeof ls)
		return ls ? JSON.parse(ls) : null
	}
	return null
}

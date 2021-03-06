export default function platzom(str) {
	let translation = str

	// Si la palabra original es un políndromo
	// Se omite cualquier regla y se devuelve la misma
	// palabra intercalando minúsculas y mayúsculas
	
	const reverse = (str) => str.split('').reverse().join('')

	function minMay(str) {
			const length = str.length
			let translation = ''
			let capitalize = true
			for (let i = 0; i < length; i++) {
				const char = str.charAt(i)
				translation += capitalize ? char.toUpperCase() : char.toLowerCase()
				capitalize = !capitalize
			} 
			return translation
	}

	if (str == reverse(str)) {
		return minMay(str)
	}

	// Si la palabra termina con ar, se quita
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2)
	}

	// Si la palabra inicia con Z, agregar al final "pe"
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe'
	}

	// Si la palabra traducida tiene más de 10 letras
	// Se parte a la mitadad con un guión

	const length = translation.length
	if (length >= 10) {
		const firstHalf = translation.slice (0, Math.round(length/2)) 
		const secondHalf = translation.slice (Math.round(length/2))
		translation = `${firstHalf}-${secondHalf}`
	}

	return translation
}
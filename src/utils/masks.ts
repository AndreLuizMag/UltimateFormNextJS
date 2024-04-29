export const cpfMask = (cpf: string) => {
	if (!cpf) {
		return ''
	}
	return cpf
		.replace(/\D/g, '')
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

export const cnpjMask = (cnpj: string) => {
	if (!cnpj) {
		return ''
	}

	return cnpj
		.replace(/^(\d{2})(\d)/, '$1.$2')
		.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
		.replace(/\.(\d{3})(\d)/, '.$1/$2')
		.replace(/(\d{4})(\d)/, '$1-$2')
}

export const phoneMask = (value: string) => {
	if (!value) {
		return ''
	}
	return value
		.replace(/\D/g, '')
		.replace(/(\d{2})(\d)/, '($1) $2')
		.replace(/(\d)(\d{4})$/, '$1-$2')
}

export const cepMask = (value: string) => {
	if (!value) {
		return ''
	}

	return value
		.replace(/\D/g, '')
		.replace(/(\d{5})(\d)/, '$1-$2')
		.replace(/(-\d{3})\d+?$/, '$1')
}

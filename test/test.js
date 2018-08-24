const expect = require('chai').expect
const platzom = require('../dist/src/platzom.js').default

describe('#platzom', function(){

	it('Si la palabra termina en "ar", se le quitan esos dos caracteres', function(){
		const translation = platzom("Programar")
		expect(translation).to.equal("Program")
	})

	it('Si la palabra inicia con Z, agregar al final "pe"', function() {
		const translation = platzom("Zorro")
		expect(translation).to.equal("Zorrope")
	})

	it('Si la palabra traducida tiene más de 10 letras, se parte a la mitadad con un guión', function() {
		const translation = platzom("abcdefghij")
		expect(translation).to.equal("abcde-fghij")
	})

	it('Si la palabra original es un políndromo, Se omite cualquier regla y se devuelve la misma palabra intercalando minúsculas y mayúsculas', function () {
		const translation = platzom('sometemos')
		expect(translation).to.equal('SoMeTeMoS')
	})
})
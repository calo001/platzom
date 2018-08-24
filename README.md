# Platzom

Platozom es un idioma inventado para el [Curso de Fundamentos de Javascript](https://platzi.com/js) de [Platzi](http://platzi.com), el mejor lugar de educación online.

## Descripción del idioma

- Si la palabra termina con "ar", se le quitan esas dos letras.
- Si la palabra incia con Z, se le añade "pe" al final.
- Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión bajo medio.
- Por último, si la palabra original es un políndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas.

## Instalación
```
npm install platzom
```

## Uso
```
import platzom from 'platzom'

platzom("Programar") // Program
platzom("Zorro") // Zorrope
platzom("Zarpar") // Zarppe
platzom("abecedario") // abece-dario
platzom("sometemos") // SoMeTeMoS
```

## Créditos
- [Sacha Lifszyc](http://twitter.com/@slifszyc)
- [Carlos](http://github.com/calo001)

## Licencia
[MIT](https://opensource.org/licenses/MIT)
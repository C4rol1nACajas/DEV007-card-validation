# Tarjeta de crédito válida

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones técnicas](#3-consideraciones-técnicas)

***

## 1. Preámbulo

Este es mi primer proyecto de página web, la temática es una tienda tipo cafetería especializada en donas :doughnut: llamada *Caro Donut*. Esta página le permite al usuario validar el número de tarjeta de crédito :credit_card:, cuando realice el pago del producto adquirido. La página contará con una interfaz fácil de usar e intuitiva, lo que permitirá a los usuarios puedan navegar en ella con facilidad.

[img1](./img20/img1.jpg)

## 2. Resumen del proyecto

La página web contará con la siguiente estructura de acuerdo a los criterios aceptación mínimos del proyecto:

*Primero*: Se muestra una interfaz en donde el usuario debe de completar los datos requeridos de manera obligatoria, caso contrario no podrá enviar la información solicitada.

[img2](./img20/Captura%20de%20pantalla%201.png)

Para lograr esto, se usó el elemento HTML <input> para crear campos de textos con el fin de recibir datos del usuario.

*Segundo*: El usuario al momento de digitar en el campo de "Número de tarjeta" solo le permitirá insertar caracteres numéricos para validar el número de tarjeta de crédito.

[img3](./img20/Captura%20de%20pantalla%202.png)

*Tercero*: Cuando haya ingresado todos los datos solicitados. Se mostrará una ventana de alerta si su tarjeta es válida o no.  

[img4](./img20/Captura%20de%20pantalla%203.png)

[img5](./img20/Captura%20de%20pantalla%204.png)

El proyecto consiste en desarrollar una aplicación web que le permita al usuario validar el número de una tarjeta de crédito utilizando el [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),también llamado algoritmo de módulo 10, es un método de suma de verificación, se utiliza para validar números de identificación; tales como el IMEI de los celulares, tarjetas de crédito, etc. 

**1. ¿Cómo funciona algoritmo de LUHN?**
Una tarjeta de crédito, o una tarjeta SIM, es válida si obteniendo la reversa de este número, y la suma sus dígitos debe ser un múltiplo de 10, es decir que la suma módulo 10 debe ser igual a cero.

![gráfica de algoritmo de Luhn](https://user-images.githubusercontent.com/12631491/217016579-865679e0-0949-4afd-b13f-d2ebba7a0c54.png)

*Cuarto*: Se implementó la funcionalidad para ocultar todos los dígitos de una tarjeta menos los últimos cuatro. 

[img6](./img20/Captura%20de%20pantalla%205.png)

## 3. Consideraciones técnicas

La lógica del proyecto está implementada completamente en JavaScript. Se utilizó como herramienta de trabajo el Visual Studio Code. 

Este repositorio contiene un _boilerplate_ con tests (pruebas). Un _boilerplate_ es la estructura básica de un proyecto que sirve como un punto de partida con archivos inicial y configuración básica de dependencias y tests. 
Ya contiene el setup y configuración necesaria para ejecutar los tests (pruebas) así como _code coverage_ para ver el nivel de cobertura de los tests usando el comando `npm.test`.

La estructura del proyecto es la siguiente:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── validator.js
│   ├── index.html
│   ├── index.js
│   ├── style.css
│   └── Img
│
└── test
│   ├── .eslintrc
│   └── validator.spec.js
│
└── img20
```
Por último, se menciona que los tests unitarios corridos arrojaron 100% de cumplimiento en: statements, functions, lines y branches.

***

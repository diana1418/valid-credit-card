# VALID CREDIT CARD

## Contenido :

  - _ALGORITMO DE LUHN_

  - _DIAGRAMA DE FLUJO_

  - _PSEUDOCODIGO_


  #### Algoritmo de Luhn:

  El algoritmo de Luhn es un método creado para la verificación de números de identificación, como los números de las tarjetas de crédito (Visa, MasterCard) o el IMEI de los teléfonos móviles.

  ### ¿COMO FUNCIONA?
  ~~~
  Explicare el algoritmo de validación con un ejemplo.

  Tenemos el número: 49927398716 .

  1.-Multiplicamos por 2 los dígitos que ocupan las posiciones pares empezando por el final:
       (1×2) = 2, (8×2) = 16, (3×2) = 6, (2×2) = 4, (9×2) = 18
  2.-Sumamos los dígitos que ocupaban las posiciones impares con los dígitos de los productos obtenidos:
       6 + (2) + 7 + (1+6) + 9 + (6) + 7 + (4) + 9 + (1+8) + 4 = 70
  3.-Si el resto de dividir el total entre 10 es igual a cero, el número es correcto:
      70 mod 10 = 0

  ~~~


#### Diagrama de flujo :








#### Pseudocódigo:


 ~~~

Funcion variable_de_retorno <- isValidCard ( )
	Escribir creditCard
	Leer sum
	sum<-0
	Para k<-0 Hasta creditCard.length Con Paso 1 Hacer
		Si no_hay_espacios_en_blanco y creditCard.length=16 Entonces
			Para i<-0 Hasta creditCard.length Con Paso 1 Hacer
				sum<-sum + parseInt(creditCard.substring(i,i+1))
			Fin Para
			Para j<-creditCard.length Hasta 0 Con Paso -2 Hacer
				arr<-new_Array(0,1,2,3,4,-4,-3,-2,-1,0)
				arrIndex<-parseInt(creditCard.substring(j,j+1))
				arrValue<-arr[arrIndex]
				sum<-sum+arrValue
			Fin Para
			module1<-sum %  10
			module1<-10-module1
			Si module1<-10 Entonces
				module1 <- 0
			Fin Si
		   return_module1		
		SiNo
			Escribir againCreditCard
			Para n<-0 Hasta againCreditCard.length Con Paso 1 Hacer
				sum<-sum + parseInt(againCreditCard.substring(n,n+1))
			Fin Para
			Para m<-againCreditCard.length Hasta 0 Con Paso -2 Hacer
				ar<-new_Array(0,1,2,3,4,-4,-3,-2,-1,0)
				arIndex<-parseInt(againCreditCard.substring(m,m+1))
				arValue<-ar[arIndex]
				sum<-sum+arValue
			Fin Para
			module2<-sum %10
			module2<- 10- module
			Si module2<-10 Entonces
				module2<-0
			Fin Si
			 return_module2
		Fin Si
	Fin Para
Fin Funcion

~~~

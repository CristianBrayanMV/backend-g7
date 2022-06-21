## ejercicio  06

from tkinter import TRUE


print("Adivinar un número")
numero_advino = 10
while TRUE: 
    numero = int(input("Porfavor ingresa un número: "))
    if numero > numero_advino:        
        print("El número es menor que ese")
    elif numero < numero_advino:
        print("El número es mayor que ese")
    else:
        print("Felicidades adivinaste el número")
        break
    

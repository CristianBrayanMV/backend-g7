## ejercicio  04
print("PROGRAMA QUE HACE LLEGAR A UN NÚMERO a 1 SEGÚN LA SERIE DE COLLATZ")
num = int(input("Porfavor ingresa un número: "))
print(num, end=" ")
while num > 1:
    if num % 2 == 0:
        num = int(num / 2)
    else:
        num = int((num * 3) + 1)
    print ( num , end=" ")
print(" ") ## salto de linea
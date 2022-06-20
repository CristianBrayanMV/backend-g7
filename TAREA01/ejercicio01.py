## ejercicio  01
print("PROGRAMA QUE DIBUJA UN RECTANGULO")
altura = int(input("Porfavor ingresa la altura del rectangulo: "))
ancho =  int(input("Porfavor ingresa el ancho del rectangulo: "))

for alt in range(altura):
    for anc in range(ancho):
        print("*", end="")
        
    print("")
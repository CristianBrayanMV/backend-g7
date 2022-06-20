## ejercicio  03
print("PROGRAMA QUE DIBUJA UN TRIANGULO INVERTIDO")
altura = int(input("Porfavor ingresa la altura del triangulo: "))
ancho = altura
for alt in range(altura):
    ancho = altura - alt
    for anc in range(ancho):
        print("*", end="")
        
    print("")
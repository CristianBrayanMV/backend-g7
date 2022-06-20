## ejercicio  02 programa un octogono
print("PROGRAMA QUE DIBUJA UN OCTOGONO")
grosor = int(input("Porfavor ingresa el grosor del octogono: ")) 
ancho = grosor
veces = grosor
grosor = grosor * 2
salto = veces
for x in range(ancho):
    if((x + 1 )< grosor):
        if (x + 1 ) < ancho:            
            salto = salto + 2
        elif (x + 1 ) > ancho:
            salto = salto - 2               
        

for x in range(grosor):
    if((x + 1 )< grosor):
        if (x + 1 ) < ancho:
            cad = '*' * veces           
            print(cad.center(salto, ' ') )
            veces = veces + 2
        elif (x + 1 ) > ancho:
            veces = veces - 2   
            cad = '*' * veces            
            print(cad.center(salto, ' ') )
        else:
            for y in range(x+1):        
               cad = '*' * veces
               print('*' * veces)
    

    
  
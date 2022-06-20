## ejercicio  07

numeros = [ 1 , 2, 5, 9, 12, 15, 17, 19, 21, 39, 45]
multiploT= 0
multiploC=0
for numero in numeros:
    flag = True
    if numero % 3 == 0:
        multiploT = multiploT + 1
        flag= False        
    if numero % 5 ==0:
        if flag:
            multiploC = multiploC + 1
        else:
            multiploT = multiploT - 1    

print("multiplos de 3: ", multiploT, " multiplos de 5: ",multiploC)


#NOTA: el número 5  es multiplo de 5 ya que se encuentra en la lista
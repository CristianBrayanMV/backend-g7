# crear una clase Persona en la cual se guarden su nombre, fecha_nacimiento, nacionalidad, dni, ademas tambien una clase Alumno y una clase Docente en la cual el alumno , a diferencia del docente, tenga una serie de cursos matriculados, y el docente por su parte tenga un numero del seguro social y su cuenta de la CTS. En base a lo visto de herencia crear las clases y ademas ver si hay algun atributo o metodo que deba de ser privado.

#Clase Persona

class Persona:
    def __init__(self, nombre, fecha_nacimiento, nacionalidad, dni):
        self.nombre = nombre
        self.__fecha_nacimiento = fecha_nacimiento
        self.nacionalidad = nacionalidad
        self.__dni = dni

#Clase Persona
class Alumno(Persona):
    #cursos_mat es una tupla que reciba tantos valores como sean posibles, en este caso cursos matriculados y estos pueden ser publicos
    def __init__(self,nombre, fecha_nacimiento, nacionalidad, dni, *cursos_mat):
        self.cursos_mat = cursos_mat
        super().__init__(nombre, fecha_nacimiento, nacionalidad, dni)




#Clase Persona
class Docente(Persona):
    def __init__(self,nombre, fecha_nacimiento, nacionalidad, dni, num_seg,cuenta_cts):
        #el número de seguro social es personal por lo tanto lo mantenemos en privado
        self.__num_seg = num_seg
        #el cuenta de cts debe ser publica esto con el fin de que al momento de un cese en las activiades como docente el gobierno otorgue una compensación por el tiempo de servicios
        self.cuenta_cts = cuenta_cts
        super().__init__(nombre, fecha_nacimiento, nacionalidad, dni)

#Creacion de una nueva instancia de la clase ALUMNO
alumno1 = Alumno('Juan Peréz','20-10-2022','Perú','20154678','Matematicas','Fisica','Arimetica')
#impresion de los cursos matriculados por el alumno1
print("Alumno1, cursos matriculados: {}".format(alumno1.cursos_mat))

#Creacion de una nueva instancia de la clase DOCENTE
docente1 = Docente('Pablo Rojas','10-03-1986','Perú','04000124','15426582','3030201025')
#impresion de la cuenta de cts del docente
print("Docente1 su cuenta de CTS es: {}".format(docente1.cuenta_cts))

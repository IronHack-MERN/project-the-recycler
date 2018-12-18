# project-the-recycler
# PROJECT Video game | "The recycler"

## Description
El juego consiste en que al "jugador" se le encomienda reciclar la máxima cantidad posible de residuos.
Durante el juego le van apareciendo diferentes tipos de residuos que debe atrapar para luego lanzarlos a un contenedor dependiendo del tipo de residuo.
- Gana si: atrapa el residuo y lo lanza al contenedor correcto, gana X puntos
- Pierde si: falla 3 veces  


## MVP (DOM - CANVAS)
- Pantalla de inicio del juego
- "El jugador" se va moviendo por la pantalla para coger una botella de plástico, la cuál recicla acercándose al contenedor
- Si lo hace bien suma puntos, sino pierde x puntos
- Pantalla de fin del juego


## Backlog
- Hacer el Score y mostrarlas
- Añadir oportunidades (3)
- Volver a comenzar
- Varios tipos de productos a reciclar
- Varios contenedores 
- Reciclar de acuerdo al tipo de producto en el contenedor correcto. 
- Guardar histórico de puntuaciones y mostrarla al usuario cuando se acabe juego
- Niveles
- Dos jugadores
- Multijugador


## Data structure
Classes and methods definition.
### Clase Juego
nuevo juego()

### Jugador

### Residuos:
- vidrio
- orgánico
- papel
- plástico

### Contenedores:
- vidrio
- orgánico
- papel
- plástico


## States y States Transitions
Definition of the different states and their transition (transition functions)
- splashScreen: que muestre un botón "Start" para dar inicio al juego
- gameScreen: en dónde aparecerán un score en la esquina superior izquierda, el nombre del jugador en la esquina superior derecha y en el centro de la pantalla aparecerán productos para reciclar, el cubo de reciclaje y el jugador,
- gameoverScreen: Se reulitiza el html de la pantalla de inicio, cambiando el texto del botón Start por "volver a jugar"
- winScreen: Se reulitza el html para mostrar el jugador y el score acumulado.


## Task
Task definition in order of priority
- Crear canvas
- Crear jugador
- Mover jugador en una dirección
- Mover jugadoras en todas las direcciones
- Aparezca un residuo en una coordenada random
- Detección de colisión (jugador y residuo)
- Lanzar el residuo al contenedor
- Botón de inicio


## Links


### Trello
https://trello.com/elenapiaggio/boards


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/elenapiaggio/project-the-recycler)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)




/* An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly "steps" steps, for every step it was noted if it was an uphill, "U", or a downhill, "D" step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.


- Function Description

Complete the countingValleys function in the editor below.

countingValleys has the following parameter(s):

int steps: the number of steps on the hike
string path: a string describing the path
Returns

int: the number of valleys traversed.*/

function countingValleys(steps, path) {
    let seaLevel = 0;
    let valleys = 0;
  
    for (let i = 0; i < steps; i++) {
      if (path[i] === 'U') {
        seaLevel++;
        if (seaLevel === 0) {
          valleys++;
        }
      } else {
        seaLevel--;
      }
    }
  
    return valleys;
  }


  /*Esta función toma dos argumentos: el número de pasos que dio una persona y una cadena que representa la ruta que tomó. La ruta se compone de 'U' (up) para cada paso hacia arriba y 'D' (down) para cada paso hacia abajo. La función cuenta el número de valles que la persona atravesó.

En el bucle "for", se recorre la cadena de la ruta. Si el carácter actual es 'U', se incrementa el nivel del mar en 1. Si el nivel del mar es 0 después de incrementarlo, se ha atravesado un valle, así que se incrementa el contador de valles. Si el carácter actual es 'D', se decrementa el nivel del mar en 1.

Al final, la función devuelve el número de valles contados.*/
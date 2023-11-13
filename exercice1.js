/* 
#Recréez la fonction Array.prototype.map() avec la signature suivante => 'myMap(arr, func)' elle doit donc prendre un array et une fonction en paramètre
Que faire dedans ?

1. Créer un array vide newArr (par exemple)
2. Boucler sur l'array passé en argument à myMap
3. Appeller `func` sur chaque element de `arr`
4. Push le résultat de `func` dans newArr
5. Return newArr après la fin de la boucle

Vous ne devez utiliser ni forEach ni aucune fonction provenant de Array.prototype (Donc toute les fonction qui s'écrivent array.func() sont interdites.)
EDIT : Sauf push() bien évidemment 
*/
function myMap(arr, func)
{
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]));
    }
    return newArr;

}


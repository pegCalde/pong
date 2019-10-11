#CANVAS

##Fonction draw()
La fonction draw récupére l'élèment canvas, et ensuite son contexte 2d. 
L'objet ctx peut ensuite être utilisé pour dessiner réellement vers le canvas. 

##fillRect, strokeRect et clearRect
L'exemple remplit simplement les deux rectangles, en positionnant fillStyle à deux couleurs différentes à l'aide des spécifications de couleur CSS et d'un appel à fillRect.
Les appels à fillRect, strokeRect et clearRect affichent un rectangle plein, surligné ou vide. Pour afficher des formes plus complexes, on utilise des chemins.

##fillStyle
Le second appel à fillStyle utilise rgba() pour spécifier une valeur alpha parmi les informations de couleur.
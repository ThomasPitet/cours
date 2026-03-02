#include <stdio.h>
#include <stdlib.h>
#include "fichier.h"

int main() {
int value;

printf("Quel language voulez-vous utiliser ? (0 : FR, 1 : EN, 2 : GER)");
scanf("%d", &value);

if(value == FRENCH)
{
    printf("Merci d'avoir choisir le français.\n");
}
else if (value == ENGLISH)
{
    printf("Thanks for chosing english.\n");
}
else if (value == GERMAN)
{
    printf("Vielen Dank, dass Sie sich für Deutsch entschieden haben.\n");
}
else
{
    printf("Pas de language choisi. Language par défaut : français.\n");
}
return(0);
}

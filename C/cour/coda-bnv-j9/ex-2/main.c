#include <stdio.h>
#include <stdlib.h>
#include "struct.h"

 void fill_struct(character * perso)
    {
        perso->strength = 1;
        perso->intelligence = 1;
        perso->wisdom = 1;
        perso->agility = 1;
        perso->endurance = 1;
    }

int main() {
character perso;

fill_struct(&perso);

printf("Character stats:\n");
printf("Strength: %d\n", perso.strength);
printf("Intelligence: %d\n", perso.intelligence);
printf("Wisdom: %d\n", perso.wisdom);
printf("Agility: %d\n", perso.agility);
printf("Endurance: %d\n", perso.endurance);

return(0);
}


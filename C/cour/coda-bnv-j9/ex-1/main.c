#include <stdio.h>
#include <stdlib.h>
#include "struct.h"

int main() {

    character pos;
    pos.strength = 1;
    pos.intelligence = 1;
    pos.wisdom = 1;
    pos.agility = 1;
    pos.endurance = 1;

printf("Character stats:\n");
printf("Strength: %d\n", pos.strength);
printf("Intelligence: %d\n", pos.intelligence);
printf("Wisdom: %d\n", pos.wisdom);
printf("Agility: %d\n", pos.agility);
printf("Endurance: %d\n", pos.endurance);

return(0);
}
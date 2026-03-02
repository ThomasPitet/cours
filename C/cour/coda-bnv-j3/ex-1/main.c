#include <stdio.h>

int main() {
    int nombre;

    printf("Veuillez choisir un nombre entier : ");
    scanf("%d", &nombre);

    if (nombre > 42) {
        printf("Le nombre %d est superieur a 42.\n", nombre);
    } else if (nombre < 42) {
        printf("Le nombre %d est inferieur a 42.\n", nombre);
    } else {
        printf("Le nombre %d est egal a 42.\n", nombre);
    }

    return 0;
}

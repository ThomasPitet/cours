#include <stdio.h>

int add(int nb1, int nb2);

int main() {
    int nombre1 = 5;
    int nombre2 = 3;
    int resultat;

    resultat = add(nombre1, nombre2);

    printf("La somme de %d et %d est : %d\n", nombre1, nombre2, resultat);

    return 0;
}

int add(int nb1, int nb2) {
    int somme = nb1 + nb2;
    return somme;
}


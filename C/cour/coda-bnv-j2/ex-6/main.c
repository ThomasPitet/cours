#include <stdio.h>

int main() {
    char prenom[30];
    int age;
    int annee_naissance_fin, annee_naissance_debut;

    printf("Bonjour, quel est votre prenom ?\n");
    scanf("%s", prenom);

    printf("Bonjour %s, quel est votre age ?\n", prenom);
    scanf("%d", &age);

    annee_naissance_fin = 2025 - age - 1;
    annee_naissance_debut = 2025 - age;

    printf("%s, si vous etes de la fin d'anne, votre anne de naissance est %d sinon c'est %d\n",
           prenom, annee_naissance_fin, annee_naissance_debut);

    return 0;
}

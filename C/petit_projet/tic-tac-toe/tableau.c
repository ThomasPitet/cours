#include <stdio.h>
int tableau() {

    char grille[] = "   |   |   \n"
                    "---+---+---\n"
                    "   |   |   \n"
                    "---+---+---\n"
                    "   |   |   \n";

	printf("%s", grille);

    printf("Veuillez mettre un rond dans une case.\n\n");
    printf("Information : il faut répondre par un numéro entre 0 et 8,\n");
    printf("en commençant en haut à gauche pour aller vers la droite.\n\n");

    return 0;
}


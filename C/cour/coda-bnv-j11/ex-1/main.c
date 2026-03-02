#include "fichier.h"

int main(void)
{
    number *list = NULL;
    int choix;
    int valeur;

    while (1) {
        display_menu();
        scanf("%d", &choix);

        switch (choix) {
            case 1:
                printf("\nEntrez un nombre entier : ");
                scanf("%d", &valeur);
                add_to_list(&list, valeur);
                printf("Nombre ajouté avec succès !\n");
                sleep(1);
                break;

            case 2:
                if (list == NULL) {
                    printf("\nLa liste est vide !\n");
                } else {
                    printf("\nListe des nombres :\n");
                    printf("------------------\n");
                    display_list(&list);
                }
                printf("\nAppuyez sur Entrée pour continuer...");
                while (getchar() != '\n');
                getchar();
                break;

            case 3:
                clear_screen();
                break;

            case 4:
                printf("\nMerci d'avoir utilisé le programme !\n");
                free_list(&list);
                return 0;

            default:
                printf("\nChoix invalide ! Veuillez choisir entre 1 et 4.\n");
                sleep(1);
        }
    }

    return 0;
}
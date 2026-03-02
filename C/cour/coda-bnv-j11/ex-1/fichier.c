#include "fichier.h"

/* Création d'un nouveau nœud */
number *create_node(int value)
{
    number *node = malloc(sizeof(*node));
    if (node == NULL) {
        fprintf(stderr, "Erreur d'allocation mémoire\n");
        exit(1);
    }
    node->value = value;
    node->next = NULL;
    return node;
}

/* Ajout d'un nombre à la fin de la liste */
void add_to_list(number **list, int value)
{
    if (*list == NULL) {
        *list = create_node(value);
        return;
    }

    number *tmp = *list;
    while (tmp->next != NULL)
        tmp = tmp->next;
    tmp->next = create_node(value);
}

/* Affichage de la liste */
void display_list(number **list)
{
    number *tmp = *list;
    int position = 1;

    while (tmp != NULL) {
        printf("Nombre %d : %d\n", position++, tmp->value);
        tmp = tmp->next;
    }
}

/* Libération de la mémoire */
void free_list(number **list)
{
    number *current = *list;
    while (current != NULL) {
        number *next = current->next;
        free(current);
        current = next;
    }
    *list = NULL;
}


void clear_screen(void)
{
    #ifdef _WIN32
    system("cls");
    #else
    system("clear");
    #endif
}

/* Affichage du menu */
void display_menu(void)
{
    printf("\n=== Menu Principal ===\n");
    printf("1. Ajouter un nombre\n");
    printf("2. Afficher tous les nombres\n");
    printf("3. Effacer l'écran\n");
    printf("4. Quitter le programme\n");
    printf("Votre choix (1-4) : ");
}
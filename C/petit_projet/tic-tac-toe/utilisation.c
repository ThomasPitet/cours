#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include "tic-tac-toe.h"


int positions[] = {1, 5, 9, 49, 53, 57, 97, 101, 105};

void Afficher(char grille[]) {
    printf("\n%s\n", grille);
}

bool EstLibre(char grille[], int num) {
    return grille[positions[num]] == ' ';
}

void Placer(char grille[], int num, char symbole) {
    grille[positions[num]] = symbole;
}

bool Gagne(char grille[], char symbole) {
    // Lignes
    if (grille[positions[0]] == symbole && grille[positions[1]] == symbole && grille[positions[2]] == symbole) return true;
    if (grille[positions[3]] == symbole && grille[positions[4]] == symbole && grille[positions[5]] == symbole) return true;
    if (grille[positions[6]] == symbole && grille[positions[7]] == symbole && grille[positions[8]] == symbole) return true;
    
    // Colonnes
    if (grille[positions[0]] == symbole && grille[positions[3]] == symbole && grille[positions[6]] == symbole) return true;
    if (grille[positions[1]] == symbole && grille[positions[4]] == symbole && grille[positions[7]] == symbole) return true;
    if (grille[positions[2]] == symbole && grille[positions[5]] == symbole && grille[positions[8]] == symbole) return true;
    
    // Diagonales
    if (grille[positions[0]] == symbole && grille[positions[4]] == symbole && grille[positions[8]] == symbole) return true;
    if (grille[positions[2]] == symbole && grille[positions[4]] == symbole && grille[positions[6]] == symbole) return true;
    
    return false;
}

bool Pleine(char grille[]) {
    for (int i = 0; i < 9; i++) {
        if (grille[positions[i]] == ' ') return false;
    }
    return true;
}

void JouerIA(char grille[]) {
    int num;
    do {
        num = rand() % 9;
    } while (!EstLibre(grille, num));
    
    Placer(grille, num, 'O');
}

int main() {
    char grille[] = "   |   |   \n"
                    "---+---+---\n"
                    "   |   |   \n"
                    "---+---+---\n"
                    "   |   |   \n";

    printf("%s", grille);
    printf("Veuillez mettre un rond dans une case.\n\n");
    printf("Information : il faut répondre par un numéro entre 0 et 8,\n");
    printf("en commençant en haut à gauche pour aller vers la droite.\n\n");

    printf("Numérotation :\n");
    printf(" 0 | 1 | 2 \n");
    printf("---+---+---\n");
    printf(" 3 | 4 | 5 \n");
    printf("---+---+---\n");
    printf(" 6 | 7 | 8 \n\n");
    
    int choix;
    char rejouer = 'o';
    
    while (rejouer == 'o') {
        
        do {
            printf("Votre choix (0-8) : ");
            scanf("%d", &choix);
            if (choix < 0 || choix > 8) {
                printf("Numéro invalide !\n");
            } else if (!EstLibre(grille, choix)) {
                printf("Case déjà occupée !\n");
            }
        } while (choix < 0 || choix > 8 || !EstLibre(grille, choix));
        
        Placer(grille, choix, 'X');
        Afficher(grille);
        
        if (Gagne(grille, 'X')) {
            printf("Vous avez gagné !\n");
            break;
        }
        
        if (Pleine(grille)) {
            printf("Égalité !\n");
            break;
        }
        
        
        printf("L'IA joue...\n");
        JouerIA(grille);
        Afficher(grille);
        
        if (Gagne(grille, 'O')) {
            printf("L'IA a gagné !\n");
            break;
        }
        
        if (Pleine(grille)) {
            printf("Égalité !\n");
            break;
        }
        
        printf("Continuer ? (o/n) : ");
        scanf(" %c", &rejouer);
    }
    
    return 0;
}

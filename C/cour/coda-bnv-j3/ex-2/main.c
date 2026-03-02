#include <stdio.h>

int main() {
    char operation;

    printf("Veuillez choisir un signe d'operation (+, -, /, *, %%): ");
    scanf(" %c", &operation);

    if (operation == '+') {
        printf("L'operation est une addition.\n");
    } else if (operation == '-') {
        printf("L'operation est une soustraction.\n");
    } else if (operation == '*') {
        printf("L'operation est une multiplication.\n");
    } else if (operation == '/') {
        printf("L'operation est une division.\n");
    } else if (operation == '%') {
        printf("L'operation est un modulo.\n");
    } else {
        printf("L'operation n'existe pas.\n");
    }

    return 0;
}

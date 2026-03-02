#include <stdio.h>
#include <string.h> // Pour utiliser strlen (facultatif, mais souvent utile avec les chaînes)

int main() {
    char mot[100];
    int i;

    printf("Veuillez saisir un mot : ");
    scanf("%99s", mot);

    for (i = 0; i < 5; i++) {
        printf("%s\n", mot);
    }

    return 0;
}

#include <stdio.h>

int main() {
    int x = 12;
    int y = 7;
    int moyenne;

    moyenne = (x + y) / 2;

    printf("Calcul réalisé par [VotrePrénom] :\n");
    printf("La moyenne de 12 et 7 est égale à %.2f\n", (float)moyenne);

    return 0;
}

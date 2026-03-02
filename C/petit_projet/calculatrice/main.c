#include <stdlib.h>
#include <stdio.h>

int main() {
	int number1;
	int number2;
	char symbol;

	printf("Bonjour !\n");

	printf("Choisisser une opération : +, -, *, /,");
	scanf("%c", &symbol);

	printf("Choisisser un premier nombre\n");
        scanf("%d", &number1);

        printf("Choisisser un second nombre\n");
        scanf("%d", &number2);

	if(symbol == '+') {
                printf("Vous avez choisi d'effectuer une addition\n");
		int resulatat = number1 + number2;
        }
        else if(symbol == '*') {
                printf("Vous avez choisi d'effectuer une multiplication\n");
        }
        else if(symbol == '-') {
                printf("Vous avez choisi d'effectuer une soustraction\n");
        }
        else if(symbol == '/') {
                printf("Vous avez choisi d'effectuer une division\n");
        }



return(0);

}

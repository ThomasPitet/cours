#include <stdio.h>
#include <string.h>

int main() {
	int number; 
	int i = 0; 

	printf("Veuillez écrire un nombre différent de 0");
	scanf("%d", &number);

	for(i = 0; i < number;  i++) {
		printf("%d\n", number);
	}

	return 0;
}

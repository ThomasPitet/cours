#include <stdio.h>

void swap(int *verre_1, int *verre_2) {

int *verre_vide;
int vide = 0;
verre_vide = &vide;

*verre_vide = *verre_1;
*verre_1 = *verre_2;
*verre_2 = *verre_vide;

}

int main() {
	int *verre_ross;
	int *verre_bob;

	int biere_blonde = 250;
	int biere_sans_alcool = 500;

	verre_ross = &biere_sans_alcool;
        verre_bob = &biere_blonde;

	printf("Avant l'échange \n");
	printf("Bob prend une bière blonde à %d \n", *verre_ross);
	printf("ross prend une bière sans alcool à %d \n\n\n", *verre_bob);

	printf("Le serveur se trompe et ne sais plus à qui appartient la bière \n");

swap(verre_ross, verre_bob);

	printf("Après l'échange \n");
	printf("Ross prend une bière blonde à %d \n", *verre_ross);
        printf("Bob prend une bière sans alcool à %d \n\n\n", *verre_bob);

return(0);

}

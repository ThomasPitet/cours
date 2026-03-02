#include <stdlib.h>
#include <stdio.h>
#include "functions.h"

int main()
{
	print_str("Hello World !\n");

	int sum = add(21, 21);
	printf("La somme de 21 et 21 est %d\n", sum);

	double average = compute_average(12, 16, -21);
	printf("La moyenne de 12, 16 et -21 est %.2f\n", average);

	exit(0);
}

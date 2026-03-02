#include <stdlib.h>
#include <stdio.h>
#include <time.h>

	int main() {
		srand(time(NULL));
		int numberO = rand() % 100 + 1;				//La création de la variable de l'ordinateur "numberO"
		int numberU;						//La création de la variable de l'utilisateur "numberU"
		int resultat = numberU = numberO;			//La création de la variable du résulatat, le numberU soit égale au numberO
		int caractère;

		printf("dit moi un nombre entre 1 à 100. \n");		//affichage du texte entre guillemet
		scanf("%d",&numberU);					//lis le nombre de l'utilisateur

                if (caractère != 1) {
                while (getchar() != '\n'){				//cette ligne je l'ai demander a Aria (IA de opera)
 			printf("veullier écrire un nombre entre 1 et 100. \n");
			scanf("%d", &numberU);
			if (numberU == 1) break;
}}
		while (numberU != numberO) {				//boucle si le nombre est différent de celui de l'ordinateur
   			if (numberU < numberO) {			//Si le nombre de l'utilisateur est inferieur de celui de l'ordinateur
       				 printf("C'est plus.\n");
} 			else {						//Sinole nombre de l'utilisateur est supérieur de celui de l'ordinateurn
        			printf("C'est moins.\n");
}
    		printf("Dites-moi un autre nombre.\n");
    		scanf("%d", &numberU);
}
		printf("Vous avez réussi.\n");

	return(0);

}

#include <stdio.h>


        void print_str(char *str);

        int main() {
                char *message = "Bonjour, le monde !";
                print_str(message);
    return 0;
}


        void print_str(char *str) {
                printf("%s\n", str);
}

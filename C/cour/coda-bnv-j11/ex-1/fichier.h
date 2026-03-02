#ifndef FICHIER_H
#define FICHIER_H

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

typedef struct s_number number;
struct s_number {
    int value;
    number *next;
};

number *create_node(int value);
void display_list(number **list);
void add_to_list(number **list, int value);
void free_list(number **list);
void clear_screen(void);
void display_menu(void);

#endif
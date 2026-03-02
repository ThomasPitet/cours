# Makefile

NAME = tic-tac-toe

SRCS = tableau.c \
	utilisation.c

all: $(NAME)

$(NAME): $(SRCS)
	gcc $(SRCS) -o $(NAME)

fclean:
	rm -f $(NAME)

re: fclean all

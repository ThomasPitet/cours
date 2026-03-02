#include <stdio.h>

int str_cmp(char *str1, char *str2)
{
    int i;

    i = 0;

    while(str1[i] != '\0')
    {
        if(str1[i] != str2[i])
        {
            return(0);
        }

        i++;
    }

    if(str1[i] == str2[i])
    {
        return(1);
    }

    return(0);
}

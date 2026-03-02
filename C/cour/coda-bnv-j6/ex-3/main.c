void str_rev(char *str)
{
    int i;

    i = str_len(str);

    while(i >= 0)
    {
        printf("%c", str[i]);
        i--;
    }
}

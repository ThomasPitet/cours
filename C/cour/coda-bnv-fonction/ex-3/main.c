double compute_average(double nb1, double nb2, double nb3)
{
    double average = (nb1 + nb2 + nb3) / 3;

    return average;
}

int main() {
    double average = compute_average(1, 2, 3);
    printf("%f\n", average);

    return 0;
}

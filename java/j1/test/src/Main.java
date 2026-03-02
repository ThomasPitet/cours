package j1;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Enter amount:");
        Scanner s = new Scanner(System.in);
        int amount = s.nextInt();

        int ten = 0;
        int five = 0;
        int two = 0;

        while (amount != 0) {
            if (amount >= 10) {
                ten = amount / 10;
                amount = amount % 10;
            } else if (amount >= 5) {
                five++;
                amount -= 5;
            } else if (amount >= 2) {
                two++;
                amount -= 2;
            } else {
                amount--;
            }
        }

        System.out.println("Billet de 10 : " + ten);
        System.out.println("Billet de 5 : " + five);
        System.out.println("Billet de 2 : " + two);
        s.close();
    }
}

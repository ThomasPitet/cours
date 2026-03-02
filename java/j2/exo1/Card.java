package j2.exo1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

public class Card implements Comparable<Card> {
    private String color;
    private int value;

    public Card(String color, int value) {
        this.color = color;
        this.value = value;
    }

    public String toString() {
        String value;
        switch (this.value) {
            case 1:
                value = "As";
                break;
            case 11:
                value = "Valet";
                break;
            case 12:
                value = "Dame";
                break;
            case 13:
                value = "Roi";
                break;
            default:
                value = "" + this.value;
                break;
        }
        return value + " de " + this.color;
    }

    public int compareTo(Card c) {
        if (this.value < c.value)
            return -1;

        if (this.value > c.value)
            return 1;

        return 0;
    }

    public static Card generateCard() {
        String[] colors = { "Pique", "Coeur", "Carreau", "Trefle" };
        int value = (int) (Math.random() * 13 + 1);
        int color = (int) (Math.random() * 4);
        Card c = new Card(colors[color], value);

        return c;
    }

    public static void main(String[] args) {
        Card c = new Card("Trefle", 5);
        System.out.println(c);
        Card c2 = new Card("Coeur", 12);
        System.out.println(c.compareTo(c2));
        Card c3 = Card.generateCard();
        System.out.println(c3);

        ArrayList<Card> cards = new ArrayList<>();

        for (int i = 0; i < 10; i++) {
            cards.add(Card.generateCard());
            System.out.println(cards.get(i));
        }

        Collections.sort(cards);
        System.out.println("-------");
        for (int i = 0; i < 10; i++) {
            System.out.println(cards.get(i));
        }
    }
}
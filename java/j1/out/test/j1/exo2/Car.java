package j1;

import java.util.Scanner;

package classes;

public class Car {
    public String brand;
    public String model;
    public int price;
    public float distance;

    public Car(String brand, String model, int price, float distance) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.distance = distance;
    }

    public void drive(int distance) {
        this.distance += distance;
    }

    public String toString() {
        return this.brand + " -  " +
                this.model + " - " +
                this.price + " € " + " " +
                this.distance + " km ";
    }
}
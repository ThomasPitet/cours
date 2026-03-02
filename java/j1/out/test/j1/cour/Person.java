package j1;

public class Person {
    public String lastname;
    public String firstname;
    public int age;

    public Person() {
        this.lastname = "Siriphol";
        this.firstname = "Dany";
        this.age = 38;
    }

    public Person(String lastname, String firstname) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.age = 38;
    }

    // methodes

    public void getOlder() {
        this.age ++;
    }

    public void getOlder(int years) {
        this.age += years;
    }

    public int getAge() {
        return age;
    }
}
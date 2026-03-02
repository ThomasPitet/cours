package j1;

import test.Person;

public class Main {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        System.out.println("coucou B1");

        Person p = new Person();
        System.out.println(p.firstname + " " + p.lastname);
        System.out.println(p.age);

        Person p2 = new Person("B", "Louis");
        System.out.println(p2.firstname + " " + p2.lastname);
        System.out.println(p2.age);
        p2.getOlder();
        switch( p2.age ) {
            case 38:
                System.out.println("t es vieux");
                break;
            case 39:
                System.out.println("encore plus vieux");
                break;
            default:
                System.out.println("je sais pas");
                break;
        }
    }

}
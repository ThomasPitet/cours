public class Main extends Charater {
    public static void main(String[] args) {

        Character c = new Character(100, 10, 50, 300);
        c.getAttack(10);
        c.getHp(100);
        c.getDefense(50);
        System.out.println(c.getAttack(10), c.getHp(100), c.getDefense(50));

        Character w = new Warrior( 100, 10, 50, 300);
        w.getAttack(20);
        w.getHp(50);
        w.getDefense(75);
        System.out.println(w.getAttack(20), w.getHp(50), w.getDefense(75));

        

    }
}
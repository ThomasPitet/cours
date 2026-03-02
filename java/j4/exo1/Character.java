public class Character {
    private String name;
    private int hp = 100;
    private int attack = 10;
    private int defense = 50;
    private int money = 300;

    public Character(
            String name,
            int hp,
            int attack,
            int defense,
            int money) {

        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.money = money;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    public int getAttack() {
        return attack;
    }

    public void setAttack(int attack) {
        this.attack = attack;
    }

    public int getDefense() {
        return defense;
    }

    public void setDefense(int defense) {
        this.defense = defense;
    }

    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }

    public boolean target(int life) {
        if ((this.hp -= attack) - defense < 0) {
            return true;
        } else {
            return false;
        }
    }
}
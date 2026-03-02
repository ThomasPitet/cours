package j3.exo1;

public class BankAccount {
    protected int balance;
    private String name;

    public BankAccount(int balance, String name) {
        this.balance = balance;
        this.name = name;
    }

    public void deposit(int amount) {
        this.balance += amount;
    }

    public boolean withdraw(int amount) {
        this.balance -= amount;
        return true;
    }

    public int getBalance() {
        return this.balance;
    }
}
package j3.exo1;

public class SavingAccount extends BankAccount {
    private double interest;

    public SavingAccount(int balance, String name, double interest) {
        super(balance, name);
        this.interest = interest;
    }

    public double getInterests() {
        return this.balance * this.interest;
    }

}
package j3.exo1;

public class DebitAccount extends BankAccount {

    public DebitAccount(int balance, String name) {
        super(balance, name);
    }

    public boolean withdraw(int amount) {
        if (amount > this.balance)
            return false;
        else
            return super.withdraw(amount);

    }

}
package j3.exo1;

public class CheckingAccount extends BankAccount {
    private int overdraft;

    public CheckingAccount(int balance, String name, int overdraft) {
        super(balance, name);
        this.overdraft = overdraft;
    }

    public boolean withdraw(int amount) {
        if ((this.balance - amount) + overdraft < 0) {
            return false;
        } else {
            return super.withdraw(amount);
        }
    }
}
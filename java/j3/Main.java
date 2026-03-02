
    public static void main(String[] args) {

        BankAccount b = new BankAccount(1000, "Dany");
        b.deposit(500);
        b.withdraw(10);
        System.out.println(b.getBalance());

        DebitAccount d = new DebitAccount(1000, "Pierre");
        d.withdraw(500);
        System.out.println(d.getBalance());
        d.withdraw(1500);
        System.out.println("----");

        CheckingAccount c = new CheckingAccount(1000, "Noa", 500);
        c.withdraw(1200);
        System.out.println(c.getBalance());
        c.withdraw(500);
        System.out.println(c.getBalance());

        SavingAccount s = new SavingAccount(1000, "Noa", 0.05);
        System.out.println(s.getInterests());

    }

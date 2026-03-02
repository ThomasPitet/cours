package j2.exo2;

public class StudentGrade implements Comparable<StudentGrade> {

    public int grade;
    public String name;

    public StudentGrade(int grade, String name) {
        this.grade = grade;
        this.name = name;
    }

    public int compareTo(StudentGrade grade) {
        return this.grade - grade.grade;
    }

    public static void main(String[] args) {
        StudentGrade grade = new StudentGrade(15, "Noa");
        Grades grades = new Grades();
        grades.add(grade);
        grades.add(new StudentGrade(0, "Sofiane"));
        grades.add(new StudentGrade(18, "Alban"));
        grades.add(new StudentGrade(10, "Dany"));
        System.out.println(grades.getAverage());
        System.out.println(grades.getMedian());
        System.out.println(grades.getStandardDeviation());
        grades.removeStudentByName("Dany");
    }
}
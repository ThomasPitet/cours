package j2.exo2;

import java.util.ArrayList;
import java.util.Collections;

public class Grades {
    public ArrayList<StudentGrade> grades;

    public Grades() {
        this.grades = new ArrayList<>();
    }

    public Grades(ArrayList<StudentGrade> grades) {
        this.grades = grades;
    }

    public void add(StudentGrade grade) {
        this.grades.add(grade);
    }

    public void removeStudentByName(String name) {
        for (int i = 0; i < this.grades.size(); i++) {
            StudentGrade grade = this.grades.get(i);
            if (grade.name.equals(name)) {
                this.grades.remove(i);
                return;
            }
        }
    }

    public float getAverage() {
        float sum = 0;
        for (int i = 0; i < this.grades.size(); i++) {
            StudentGrade grade = this.grades.get(i);
            sum += grade.grade;
        }

        return sum / this.grades.size();
    }

    public float getMedian() {
        Collections.sort(this.grades);

        if (this.grades.size() % 2 == 1) {
            int index = this.grades.size() / 2;
            StudentGrade median = this.grades.get(index);
            return median.grade;
        } else {
            int index1 = this.grades.size() / 2 - 1;
            int index2 = this.grades.size() / 2;
            int grade1 = this.grades.get(index1).grade;
            int grade2 = this.grades.get(index2).grade;
            return (grade1 + grade2) / 2f;
        }
    }

    public float getStandardDeviation() {
        float sum = 0;
        float average = this.getAverage();
        for (int i = 0; i < this.grades.size(); i++) {
            StudentGrade grade = this.grades.get(i);
            sum += Math.pow(grade.grade - average, 2);
        }

        float result = (float) Math.sqrt(sum / this.grades.size());
        return result;
    }
}
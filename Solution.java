import java.util.Arrays;
import java.util.Collections;

public class Solution {
    public static String[] integersToStrings(int[] numbers) {
        String[] returnArray = new String[numbers.length];
        for (int i = 0; i < numbers.length; i++) {
            returnArray[i] = Integer.toString(numbers[i]);
        }
        return returnArray;
    }

    public static int[] removeIndexFromArray(int[] array, int index) {
        int[] arrayToReturn = new int[array.length - 1];

        int counter = 0;
        for (int i = 0; i < array.length; i++) {
            if (i != index) {
                arrayToReturn[counter] = array[i];
                counter++;
            }
        }

        return arrayToReturn;
    }

    public static int solution(int[] l) {

        l = Arrays.stream(l).boxed().sorted(Collections.reverseOrder()).mapToInt(Integer::intValue).toArray();

        if (l.length == 0)
            return 0;

        int sum = 0;

        for (int number : l) {
            sum += number;
        }

        if (sum % 3 == 0) {
            String[] numbersS = integersToStrings(l);

            Arrays.sort(numbersS, Collections.reverseOrder());

            String result = "";

            for (String number : numbersS) {
                result = result + number;
            }

            return Integer.parseInt(result);
        } else {
            int[] solutions = new int[Integer.MAX_VALUE / 10000];

            int counter = 0;
            for (int i = 0; i < l.length; i++) {
                int[] aux = l.clone();

                l = removeIndexFromArray(l, i);

                int newSol = solution(l);

                if (newSol != 0) {
                    solutions[counter] = newSol;
                }

                l = aux;
            }

            Arrays.sort(solutions);

            if (solutions.length > 0) {
                int result = solutions[solutions.length - 1];
                return Math.max(0, result);
            } else
                return 0;
        }
    }

    public static void main(String[] args) {
        int[] case1 = { 1, 1, 1, 1 };
        int a = solution(case1);
        System.out.println(a);

        int[] case2 = { 3, 1, 4, 1 };
        int b = solution(case2);
        System.out.println(b);

        int[] case3 = { 3, 1, 4, 1, 5, 9 };
        int c = solution(case3);
        System.out.println(c);
    }
}
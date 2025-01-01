public class MaxValueFinder {

    public static int findMaxValue(int[] arr) {
        int maxValue = arr[0]; // Start by assuming the first element is the largest
        for (int i = 1; i < arr.length; i++) { // Loop through the rest of the array
            if (arr[i] > maxValue) { // If a larger value is found
                maxValue = arr[i]; // Update maxValue
            }
        }
        return maxValue; // Return the largest value
    }

    public static void main(String[] args) {
        int[] numbers = {3, 5, 7, 2, 8}; // Example array
        System.out.println("Maximum value: " + findMaxValue(numbers)); // Output: Maximum value: 8
    }
}

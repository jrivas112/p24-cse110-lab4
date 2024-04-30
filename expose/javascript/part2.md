1. In this case the program will just print the variable "i" correctly becasue "i" was decleared as an var variable, which can be called outside of its block.
2. This would not work because discountedPrice() takes in parameters and it wasn't given any.
3. it will print finalPrice since it was declared using var in the same scope.
4. it will return the array discounted, since it was created in the same scope as the return statement
5. this will cause an error because we are trying to use a variable that declared inside a block-scope 
6. This will cause an error because we are trying to access a variable that is outside of scope
7. this will print finalPrice fine because it was declared in the same scope
8. This will just return the array "discounted" since it was decleared in the same scope.
9. This will cause an error because i was decleared in the for loop
10. this will print the length of the array just fine since it was declared in the same scope.
11. the code will return discounted fine.
12. A: student.name, B: student["Grad Year"], C: Student.greeting(), D: student['Favorite Teacher'].name, E: student.courseLoad[0]
13. A: 32, B: 1, C: 3, D: 3null, E:4 , F: 0, G: 3undefined, H: NaN
14. A: true , B: false, C: true, D: false, E: false, F: true
15. compares two values for equality after performing coercion if necessary, === compared both the value and the type of the two things we are comparing.
17. This function will return the modify version of the array, it would return the array [2,4,6]. The way it works is by a callback function, dosomething() which we execute inside the .push() method. Once the the callback returns something, .push will add the value from the function to the array.
19. the output would be 1,3,4,2
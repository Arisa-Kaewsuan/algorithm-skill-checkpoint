/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer: Big O(n) เพราะ ใช้อัลกอริทึม lenear Search ที่วนลูป array 1 ลูป ถ้ามีข้อมูล n ตัว ก็ต้องวนลูป n ครั้ง 

*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer: Big O(log n) เพราะ ใช้อัลกอริทึม Binary Search ที่จะเช็คว่าค่าที่ต้องการหามากกว่าหรือน้อยกว่าค่าตรงกลาง แล้วเราก็จะลด scope ในการหาลงในทุกๆรอบ ทำให้แม้จะวนลูปเหมือน linear search แต่ก็เร็วกว่า


*/

/* 
Which function is more efficient and why?
Answer: findProductPrice เพราะมีการลด scope ในการหาลงในทุกๆรอบ ทำให้เร็วกว่า


*/

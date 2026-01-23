//  ******* Javascript Execution context**********//

// 3 Types of Javascript EC

// 1  Global EC       //i.e this
// 2  Function EC
// 3  Eval EC

// Phases of

// 1 Memory or Memory Creation or Creation  Phase
// 2 Execution Phase

// Memory creation phase
// => variables or declaration k liye space allocate hoti hai memory allocation hota hai


//  Execution Phase
// =>Mathematical function ko execute krta hai      //i.e +,-,/

let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

// step :1 global EC allocate in ->this

/* Step :2 Memery phase
  val1-> undefined
 val2 -> undefined
 add->defination
 result1->undefined
 result2->undefined   */

/* Step:3 execution phase
val<-10
 val<-5
 addNum ->new variable environment +exection thread  //G EC execution k baad me delete hota hai 
 result1=15
 result2=
 ->memory phase
 val1->undefined
 val2->undefined
 total->undefined
 ->exection phase
 num->10
 num2->5
 total->15   //return in G EC 
  

 NVE+thread->
 memory phase->
 val1->undefined
 val2->undefined
 total->undefined
 ->exection phase
 num->10
 num2->5
 total->15   //return in G EC 
*/



/*************** Call Stack***************** */


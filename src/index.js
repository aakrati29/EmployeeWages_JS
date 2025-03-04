const IS_PRESENT = 1; 

function checkEmployeeAttendance() {
    let attendance = Math.floor(Math.random() * 2); 
    return attendance === IS_PRESENT ? "Employee is Present" : "Employee is Absent";
}

console.log(checkEmployeeAttendance()); 
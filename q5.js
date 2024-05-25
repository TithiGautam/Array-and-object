const student = {
    Name:"Alice",
    Age:20,
    grade:"A",
    Stream:"cs",
    GPA:3.8,
    isEnrolled:true
};
for(const key in student){
    if(student.hasOwnProperty(key)){
        console.log("Property: " + key +"," + "value: " + student[key]);
    }
}
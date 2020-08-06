class parients{
    constructor(){
        this.fatherName="kalim";
    }
}
class child extends parients{
    constructor(name){
        super();
        this.name=name;
    }
    getFullName()
    {
      return  this.name+" "+this.fatherName;
    }
}

const student1=new child("jomir");
console.log(student1);
console.log(student1.getFullName());
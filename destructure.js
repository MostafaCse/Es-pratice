const person={name:"mostafa",id:161114, phone:191454555,address:"adam shari bari",friends:["kamal","jamal","rasel"]}
const {name,phone,salary}=person;
// const name=person.name;
// const phone=person.phone;
console.log(name,phone,salary);

const friends=['sakib khan','kamal','jamal','shope'];
const [cotoFriends,nextFriend,...restFriend]=friends;
console.log(cotoFriends,nextFriend);
console.log(restFriend);

const complexObject={
name:'abc',
info:{
    address:'adam shari bari',
    leader: 'pasa'
}
}

const {leader}=complexObject.info;
console.log(leader);
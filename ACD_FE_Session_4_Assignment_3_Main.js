
function Animal(eyes,type,legs)
{
    this.eyes=eyes;
    this.type=type;
    this.legs=legs;
    
    
}
function Rabbit(feature){
    this.feature=feature;
}
var genericAnimal=new Animal("true","terrestrial","4");
var rab=new Rabbit("Good Jumper");
rab.__proto__=genericAnimal;
alert(rab.eyes);
alert(rab.feature);

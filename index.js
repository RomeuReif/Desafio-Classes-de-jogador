class hero {
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }
    attack(){
        let hit = "";
        if(this.type === "mago"){
            hit = "magia";
        } else if(this.type === "guerreiro"){
            hit = "espada";
        } else if(this.type === "monge"){
            hit = "artes marciais";
        } else if (this.type === "ninja"){
            hit = "shuriken";
        }

        console.log(`o ${this.type} atacou usando ${hit}`);
    }
}

const teste1 = new hero("engel", 23, "mago");
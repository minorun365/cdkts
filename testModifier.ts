class Friend {
    protected firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class BestFriend extends Friend {
    super(firstName, lastName);

    changeName(){
        goro.firstName = "五郎"
    }

    introduce() {
       console.log(`私の名前は${goro.lastName}${goro.firstName}です。`)
    }
}

const goro = new Friend("四郎", "鈴木");
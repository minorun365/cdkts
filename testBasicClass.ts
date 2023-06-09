class Person {
    firstName?: string;
    lastName?: string;

    constructor(firstName = "名前", lastName = "苗字") {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet(){
        console.log(`私は${this.lastName} ${this.firstName}です。`);
    }
}

class Teacher extends Person {
    subject: string;

    constructor(subject: string, firstName?: string, lastName?: string) {
        super(firstName, lastName);
        this.subject = subject;
    }

    greet(){
        console.log(`私は${this.lastName} ${this.firstName}、${this.subject}の教師です。`)
    }
}

const hanako = new Teacher("国語", "花子", "山田");

hanako.greet();
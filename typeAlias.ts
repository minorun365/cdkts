type Staff = {
    firstName: string;
    lastName: string;
    jobTitle?: string;
}

const staff: Staff = {
    firstName: "太郎",
    lastName: "田中",
    jobTitle: "主任"
}

const boss: Staff = {
    firstName: "花子",
    lastName: "鈴木"
}

console.log(
    `${staff.jobTitle}である${staff.lastName} ${staff.firstName}の上司は` +
    `${boss.jobTitle}である${boss.lastName} ${boss.firstName}です。`
)
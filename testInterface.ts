interface Profile {
    firstName: string;
    lastName: string;
}

interface BusinessProfile extends Profile {
    companyName: string;
}

const taro: BusinessProfile = {firstName: "太郎", lastName: "田中", companyName: "AWS"};

console.log(
    `${taro.lastName}${taro.firstName}は${taro.companyName}所属です。`
)
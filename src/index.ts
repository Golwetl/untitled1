const enum EnumTest {
    VALUE1 = 1,
    VALUE2 = 2,
}

const test = (): string => {
    const abc = [EnumTest.VALUE1, EnumTest.VALUE2];
    if (abc[0] === EnumTest.VALUE1) {
        return "test11";
    }
    return "test2";
};

console.log(test());
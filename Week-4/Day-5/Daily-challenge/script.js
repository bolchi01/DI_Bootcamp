function anagram(strA, strB) {
    let a = Array.from(strA.replaceAll(" ", "").toLowerCase()).sort().join();
    let b = Array.from(strB.replaceAll(" ", "").toLowerCase()).sort().join();
    return a == b;
}

testOne = anagram("Hello World", "hello world");
console.log(testOne);
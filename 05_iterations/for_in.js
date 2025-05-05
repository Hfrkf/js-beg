const myObject={
    js:'javascript',
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject) {
    console.log(key);
    console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming=["js","cpp","rb","py"]
for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}

//for for-in there is no iterations for map operator
for (let index = 0; index < 10; index++) {
    const element = index;
    if(element === 5) {
        //console.log("5 is found in the array");
    }
    //console.log(element);
}

for(let i = 0; i <= 10; i++) {
    //const element = [i];
    for (let j = 0; j < 10; j++) {
        //console.log(`${j} in ${i} is found`);
    }
    //console.log(`${i} in ${i} is found`);
}


// without break and continue
for (let index = 0; index < 10; index++) {
    if (index === 5) {
        //console.log("5 is found in the array");
    }
    //console.log(index);
}

//with break and continue

for (let index = 0; index < 10; index++) {
    if (index === 5) {
        console.log("5 is found in the array");
        break;
    }
    console.log(index);
}

for (let index = 0; index < 10; index++) {
    if (index === 5) {
        console.log("5 is found in the array");
        continue;
    }
    console.log(index);
}
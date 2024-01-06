for (var f = 113; f <= 250; f += 9) {
    if (f % 2 == 0) {
        document.write(`<h1 style='color:red'>${f}</h1>`);
    }
    else if (f % 5 == 0) {
        document.write(`<h1 style='color:yellow'>${f}</h1>`);
    }

    else{
        document.write(`<h1 style='color:black'>${f}</h1>`);

    }

}
console.log(f)
function compare(x, y) {
    if (x > y) {
        alert("gia tri thu nhat lon hon gia tri thu hai")
    } else {
        total = x + y;
        return total;

    }
}
let total = null;
a = +prompt("nhat so thu nhat")
b = +prompt("nhap so thu hai")
compare(a,b);
document.write(total);
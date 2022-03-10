function get_coprimes(n, totient){
    let e = [];
    for (let i = 0; i < int(n / 2); i++){
        if (is_coprime(i, totient)){
            e.push(i);
        }
    }
    return e;
}

function gcd(x,y){
    while (y != 0){
        x, y = y, x%y;
    }
    return y;
}

function is_coprime(x,y){
    return gcd(x,y) == 1;
}
function gcd(x,y){
    while (y != 0){
        let t = y;
        y = x % y;
        x = t;
    }
    return x;
}

function is_coprime(x,y){
    return gcd(x,y) == 1;
}

function get_coprimes(n, totient){
    let e = [];
    for (let i = 0; i < int(n / 2); i++){
        if (is_coprime(i, totient)){
            e.push(i);
        }
    }
    return e;
}

function get_k(totient, e){
    let k = 1
    while (!Number.isInteger((k*totient+1)/e)){
        k+=1;
    }
    return k;
}
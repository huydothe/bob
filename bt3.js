function sum_even_numbers(){
    let total=0;
    for(let i=1; i<=20; i++){
        if( i%2 !== 0 ){
            total+=i;
        }
    }console.log(total)
}
sum_even_numbers();
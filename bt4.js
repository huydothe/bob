function max(){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }
    console.log('Giá trị lớn nhất là '+max);
}
let arr=[2,4,6,8,912,44,33,12,332,167,912,912];
max(arr);
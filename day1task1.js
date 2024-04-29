prompt=require(`prompt-sync`)();
num=prompt(`enter a number :`)
 sum=0
for(i=0;i<=num.length;i++){
    if(num[i]%2==1){
        sum+=Number(num[i])
    }
}
console.log(sum)
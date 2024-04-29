prompt=require(`prompt-sync`)();
num=prompt(`enter a number :`)
even=0
odd=0
for(i=0;i<num.length;i++){
  
  if(num[i]%2==0){
    
    even+=Number(num[i])
    
  }
  else if(num[i]%2==1){
    odd+=Number(num[i])
    
  }
}
console.log(even)

console.log(odd)

if(even>odd){console.log(`Even sum is big`)}
else{console.log(`odd sum is big`)}
const a = Number(prompt('A= '));
const b = Number(prompt('B= '));
const c = Number(prompt('C= '));
document.write('A='+ a +'<br>');
document.write('B='+ b +'<br>');
document.write('C='+ c +'<br>');

function sqrt (a,b,c){
         let x,x1,x2;
        // const d = (b*b)-(4*a*c);
        const d = disc(a,b,c);
        if(d>0){
                x1 = (-b+Math.sqrt(d))/(2*a);
                x2 = (-b-Math.sqrt(d))/(2*a);
                return 'X1= '+ x1+',X2= '+x2;
            }
        else if (d==0){
            x = -b/(2*a);
            return 'd=0. X= ' + x;
            } 
        else if (d<0){
            return 'd<0. Not result';
            }
}
function disc(a,b,c){
return  (b*b)-(4*a*c);
}
const result = sqrt(a,b,c);
document.write(result);

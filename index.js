// 1. WAYS TO PRINT IN JS
        // console.log("Hello World");
        // document.write("Hi");
        // alert("error");

        // 2. JS CONSOLE API
        // console.log("Hello World",4+6,"Another log");
        // console.warn("Warning");
        // console.error("error");

        //3. JS VARIABLES
        // variables-->Containers to store data values
        var number1=34;
        var number2=56;
        // console.log(number1+number2);

        // 4. Comments
            //Single line
            /* Multi Line */

        // 5. DATATYPES IN JS
            //string nd numbers
            var str1="STRING";
            var str2='string also';
            var num1=453;
            var num2=40.56;

            //objects
            var marks={
                ravi:34,
                shubham:45,
                rahul:100
            }
            // console.log(num1+num2);
            // console.log(marks);
            // console.log(marks.rahul);

            //booleans
            var a=true;
            var b=false;

            //undefined and null
            var und1=undefined;
            var und2;
            // console.log(und1);//returns undefined
            // console.log(und2);//returns undefined

            var n=null;
            // console.log(n);

            //arrays
            var arr=[1,2,"rahul",4,5];
            // console.log(arr);
            // console.log(arr[2]);
            /* 
            TWO TYPES OF DATATYPES IN JS:
            1. PRIMITIVE DT: undefined, null,number,string,boolean,symbol
            2. REFERENCE DT: arrays,objects
            */

        //6. OPERATORS
            //Arithmetic operators: +,-,*,/
            var x=3;
            var y=5;
            // console.log("The value of x+y is:",x+y);//operand-(x,y),operator->+
            
            //assigment operators
            var c=x;
            c+=2;
            // console.log(c);

            // //comparison oper.
            // console.log(x==y);
            // console.log(x<=y);

            // //logical and oper.
            // console.log(true && true);
            // console.log(true && false);
            // console.log(false && false);

            //logical or oper.
            // console.log(true || true);
            // console.log(true || false);
            // console.log(false || false);

            // logical not
            // console.log(!false);

        //7. FUNCTIONS
            function avg(a,b){
                return (a+b)/2;
            }
            c1=avg(4,6);
            c2=avg(10,20);
            // console.log(c1,c2);
        
        //8. CONDITIONALS IN JS
            var age=34;
            // if(age>18){
            //     console.log('You are an adult.');
            // }
            // else
            //     console.log("You are a kid.");

        //9. LOOPS IN JS
            var arr=[1,2,3,4,5,6,7];
            // console.log(arr);
            // for(var i=0;i<arr.length;i++){
            //     console.log(arr[i]);
            // }
            // arr.forEach(function(element){
            //     console.log(element);
            // })
            let j=0;//scope within a block.//memory management
            const ac=0;//never change.
            // ac++;//so wrong
            // while(j<arr.length){
            //     console.log(arr[j]);
            //     j++;
            // }
            // let i=10;
            // do{//atleast run once///j[10]=undefined
            //     console.log(arr[j]);
            // }while(j<arr.length)

        // 10. BREAK AND CONTINUE 
            // continue--next iteration
            // break--looping end
            // for(var i=0;i<arr.length;i++){
            //     // if(i==2){
            //     //     // break;//only print till 2
            //     //     // continue;//does not print arr[2]
            //     // }
            //     console.log(arr[i]);
            // }
        
        // 11.ARRAY METHODS
        let myarr=["Fan","Camera",34,null,true];
        //array methods
        // console.log(myarr.length);
        // myarr.pop();
        // console.log(myarr);
        // myarr.push("rahul");
        // console.log(myarr);
        // myarr.shift();
        // console.log(myarr);
        // console.log(myarr.unshift("rahul"));
        // console.log(myarr);

        // 12. STRING METHODS
        let string="Rahul is a student."
        // console.log(string.length);
        // console.log(string.indexOf("is"));
        // console.log(string.slice(7,14))
        
        // 13. JS DATES
            let mydate=new Date();
            // console.log(mydate);

        //14. DOM manipulation
        let ele = document.getElementById('click');
        // console.log(ele);

        let elecl=document.getElementsByClassName("container");
        // console.log(elecl);
        // elecl[0].style.background="yellow"
        elecl[0].classList.add("bg-primary");
        elecl[0].classList.add("text-success");
        // console.log(elecl[0].innerHTML);
        // console.log(elecl[0].innerText);
        
        tn=document.getElementsByTagName('div');
        console.log(tn); 
        createdElement=document.createElement('p');
        createdElement.innerText="This is a created para.";
        tn[0].appendChild(createdElement);

        createdElement2=document.createElement('b');
        createdElement2.innerText="This is a created bold.";
        tn[0].replaceChild(createdElement2,createdElement);
        
        // SELECTING USING QUERY
        sel=document.querySelector('.container')
        console.log(sel)
        
        sel=document.querySelectorAll('.container')
        console.log(sel)

        // 15.EVENTS IN JS
        // function clicked(){
        //     console.log("The button was clicked.")
        // }
        // window.onload=function(){
        //     console.log("The document was loaded.")
        // }
        // first.addEventListener('click',function(){
        //     document.querySelectorAll('.container')[1].innerHTML="<b>We have cliked on container</b>"
        //     console.log("clicked on container")
        // })
        // first.addEventListener('mouseover',function(){
        //     console.log("Mouse on container")
        // })
        // first.addEventListener('mouseout',function(){
        //     console.log("Mouse out of container")
        // })
        let prevHTML=document.querySelectorAll('.container')[1].innerHTML
        first.addEventListener('mouseup',function(){
            document.querySelectorAll('.container')[1].innerHTML=prevHTML;
            console.log("Mouse up container")
        })
        first.addEventListener('mousedown',function(){
            document.querySelectorAll('.container')[1].innerHTML="<b>We have cliked on container</b>"
            console.log("Mouse down of container")
        })

        //16. SET TIMEOUT AND SETINTERVAL
            // function summ(a,b){
            //     return a+b;
            // }
            //cam be written as:
            summ=(p,q)=>{
                return (p+q);
            }
            logkaro=()=>{
                console.log("I am log.")
            }
            setTimeout(logkaro,2000);//2000ms//run only once
           clr= setInterval(logkaro,2000);//run every 2 seconds
           clearInterval(clr);

        // 17. LOCAL STORAGE
            // localStorage.setItem('name','Rahul');
            // localStorage.getItem('name');
            // localStorage.clear()
            // localStorage.removeItem

        //JSON
        obj={name:"rahul",length:1}
        jso=JSON.stringify(obj);
        console.log(jso);
        parsed=JSON.parse(`{"name":"rahul","length":1}`)
        console.log(parsed);

        //TEMPLATE literals-backtics
        a=34;
        console.log("this is my ${a}");
        console.log(`this is my ${a}`);
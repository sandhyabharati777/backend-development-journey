// create krne ke liye hmme data chahiye hota h aur wo data hmm frontened se lete h using POST HTTP /**

let express = require("express");
let app = express();

app.use(express.json()); // these are api calls 
 // express ke andar kuch bhi add krne ke liye , we have a mehod calles use(), yha hmm middle ware ko add krr rhe h express ke andar

let users = [];
 // CREATE - POST , data create krna h to fronted se data lena hota h to take data from frontend , we have a HTTP method called POST   
// create
app.post("/create",(req,res)=>{ // POST method of http is used to receive data from frontend , and that data comes in req
    body = req.body;   // this "/create" is called api endpoint 
    users.push(body);
    res.send(users);
})

// read
app.get("/",(req,res)=>{  // READ operation happening here , data read krke, data bhej rha h frontend ko
     
    res.send(users);
});


// delete data 
app.delete("/delete/:id",(req,res)=>{ // id here dynamic parameter h
    
    let {id} = req.params; // req ke params me object aata h , upper id mentioned h, 
    // above i have destructure id from data
    // by default data comes in string in params , mean if we have give id as number in paramas id will come in string
  
    let userData = users.filter((elem)=>elem.id !==id);// tripple equal or unequal also check data type, 
    // so keep in mind elem.id and id data type should be same to compare 

    // can also use delete keyword of js to delete something

   





   
   res.send(users);
    

}); //

let port = 3000;
app.listen(port, ()=>{
    console.log(`server is running at port ${port}`);


});


// summary

//to send data to frontend - we use get method of http

/*To get data from fronted - we use post method of https

abb ye jo data aati h frontend se , 3 tarah se aati h
// abhi ke liye ye samjh o frontend se data 3 form me aa skti h, body me aa skta h,
params me aa skta h , ya query me aa skta h


1. inside body - 
2. inside params - eg fakestoreapi.com/products/4- yha jo last wali chij gyi h eg here is 4 , ye hote h params
3. in query - query tab hota h jbb hmm ? lgakar limit bhejte h ya && lgakar skip bhejte h

// jbb data body me aati h to post ka use krte h
// but params aur query ke liye kisi bhi method ka use krr skte h



*/

// to delete data from database , we have delete method 
// to update data from database we have put method 


// update 

app.put("/update/:id",(req,res)=>{
    // upadte logic in js 
    let {id} = req.params;
    let {name}  = req.body;
    let UpdatedUsers = users.map((val)=>{
        // we need to return explicitly in map if uses curly braces
        //  return val.id ===id ? {id,name:"Monu",marks : "100"}: val 

        // since we know updated data bhi hmm form ya frontend se hi lete h so line 81 jaise hmm update nhi krenge
        // hmm data updated body ke andar lenge 

        return val.id === id ?{...val,name}:val;

    });
   
    res.send( UpdatedUsers);


});



// difference between put and patch

// put - entire object is replaced 
// Patch - single entity inside object is replaced

/* 

    data travels between frontend and backend through api 
    aur data travel ya to JSON me hoga ya to text me hoga

*/

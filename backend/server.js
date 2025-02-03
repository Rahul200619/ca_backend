const express=require('express');
const app=express();
const port =3000;
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Username,Email and Password login page")
})

app.post('/login',(req,res)=>{
    const{username,email,password}=req.body;

    if(!username){
        return res.status(400).json({err:"Username cannot be empty."})
    }
    if(!email){
        return res.status(400).json({err:"Email cannot be empty."})
    }
    if(!password){
        return res.status(400).json({err:"Password length should be greater than 8 or lesser than or equal to 16."})
    }
    res.json({
        message:"Login success",
        data:{username,email,password}
    })
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
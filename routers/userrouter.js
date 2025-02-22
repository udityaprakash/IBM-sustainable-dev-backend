const router = require("express").Router();
const signup = require("../componnents/authentications/user/signup");
const login= require("../componnents/authentications/user/login");
const dashboard=require("../componnents/utils/user/dashboard");
const forgetpass=require("../componnents/authentications/user/forgetpass");
const event = require("../componnents/utils/admin/event");

//--user/signup
router.post('/signup',signup.post);
router.get('/signup',signup.get);
router.get('/signup/verifyotp/:email',signup.verifyotp);
router.post('/signup/verifyotp/:email',signup.checkotp);




//--user/login
router.post('/login',login.post);
router.get('/login',login.get);
router.get("/login/forgetpass",forgetpass.get_enteremail);
router.post("/login/forgetpass",forgetpass.post_enteremail);
router.post("/login/forgetpass/verification",forgetpass.post_otp_verification);
router.post("/login/forgetpass/verified",forgetpass.Set_password);


//--user/dashboard
router.get('/dashboard/:id',dashboard.get);

router.get('/latest-events',event.getEvents);

router.all("*",(req,res)=>{
    res.status(404).json({
        success:false,
        msg:"page not found/ api does'nt exist 😒."
    });
});



module.exports = router;
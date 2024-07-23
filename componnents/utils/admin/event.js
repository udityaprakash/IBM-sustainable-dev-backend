const eventschema = require("../../databasevariables/eventschema");

const event = {
    createEvent: async (req,res)=>{
        const {eventName,eventDescription,location,eventDate,eventImageUrl,eventStartTime, eventEndTime, registration, pricing }=req.body;
        try{
            const newEvent = new eventschema({
                eventName,
                eventDescription,
                location,
                eventDate,
                eventImageUrl,
                eventStartTime,
                eventEndTime,
                registration:{
                    start:registration.start ? registration.start : Date.now(),
                    end:registration.end,
                    price:registration.price ? registration.price : 0
                },
                pricing,
            });
            await newEvent.save();
            res.json({
                success:true,
                msg:"event created successfully😍"
            });
        }catch(err){
            res.json({
                success:false,
                error:err,
                msg:"something went wrong 🤷‍♂️"
            });
        }
    },
    getEvents : async (req,res)=>{
        try{
            const events = await eventschema.find();
            res.json({
                success:true,
                events
            });
        }catch(err){
            res.json({
                success:false,
                error:err,
                msg:"something went wrong 🤷‍♂️"
            });
        }
    },
}

module.exports = event;
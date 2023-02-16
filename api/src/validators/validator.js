module.exports = function validator(req,res,next) {    
    try {        
        if(req.method == "POST") {
            console.log(req.body);
            if(Object.keys(req.body).length !== 0) {
                const {name,difficulty,duration,season,countries} = req.body
                if (!name||!difficulty||!duration||!season||!countries) {
                    throw new Error("Missing data")
                } else next()
            } else throw new Error("Missing data")
        } else {
            next()
            return
        }       
    } catch (error) {
        res.status(400).send({error:error.message})
    }    
}

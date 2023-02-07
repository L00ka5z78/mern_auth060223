FRONTEND INSTALLED IN PUBLIC DIRECTORY BY MISTAKE. 


 "start-mongo": "cd /d D:/MongoDb/bin/ && mongod.exe",

 const maxAge = 3*24*60*60  // czas trwania token

const createToken = (id) => {
    return jwt.sign({id}, "super secret key actually whtever i want to write here", {
        expiresIn: maxAge
    })
}
//************      tworzysz token przypisany do id, podajesz secret key i czas wygasniecia *****
import Auth from './../storage/index'

export const  token_is_valid = async() => {
    // Method to check if token is valid
    // Return boolean
    let tokenOBJ = new Auth()
    let token = await tokenOBJ.getJWT()
    console.log('Pendiente token_is_valid (rest.js)')
    console.log(token)
    console.log('Pendiente token_is_valid (rest.js)')
    return true

}


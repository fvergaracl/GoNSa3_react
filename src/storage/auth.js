

import {encrypt, descrypt}  from './encypter'

export default class Auth {
    constructor(){
        console.log('Iniciando Auth.js')
    }

    async setJWT(newToken){
        localStorage.setItem('token', encrypt(newToken));
    }
    
    async getJWT(){
        let token = await descrypt(localStorage.getItem('token'))
        return token
    }

}
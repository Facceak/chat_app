import React from "react";

class API {
    private static URL: string = "http://localhost:8080";
    
    static async post(path: string, data: any){
        console.log(JSON.stringify(data));
        const response = await fetch(`${this.URL}${path}`,{
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                username: data.username,
                password: data.password
            })
        })
        return response.json();

    }

    static async get(path: string, data: any){

    }

    static async update(path: string, data: any){

    }
    
    static async delete(path: string, data: any){

    }
}

export default API;
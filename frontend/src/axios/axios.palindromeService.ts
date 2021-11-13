
import { FindThePalindromeRequest } from "@/models/FindThePalindromeRequest";
import axios from "axios";


export default {

    getPalindrome(req: FindThePalindromeRequest): Promise<string[]> {
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
                "Content-Type": "application/json",
            }
        }

        return axios.post("http://localhost:5000/api/palindromechecker", req, config).then(response => {
            return response.data
        }).catch(error => console.log(error));
    }
}

import axios from 'axios';

export const blogService = async(body)=>{
    console.log('Received',body);
    let res = await axios.get("https://content.thegovlab.com/items/blog/26278");
    console.log(res);
    return res;
}

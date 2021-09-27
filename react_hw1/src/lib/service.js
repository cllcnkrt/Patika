import axios from "axios";


async function getData(number){
    const data = await axios(`https://jsonplaceholder.typicode.com/users/${number}`)
    console.log(data)
}

export default getData
const express = require('express')
const app = express()

console.log("hello Nodejs ")

app.listen('3000', () => {
    console.log("Server running on port 3000");
})
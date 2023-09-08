// JavaScript Document

var person = {
    fname: ``,
    lname: ``,
    email: ``,
    phone: ``
}

var first = document.querySelector(`#first-name`)
var last = document.querySelector(`#last-name`)
var email = document.querySelector(`#email`)
var confirm_email = document.querySelector(`#confirm_email`)
var phone = document.querySelector(`#phone`)
var button = document.querySelector(`#submit`)
var span = document.querySelectorAll(`span`)
var p = document.querySelectorAll(`p`)

console.log(first)

button.addEventListener(`click`, check)

function check(){
    let pfirst = /^[A-Za-z][A-Z\-a-z]{1,}$/
    let pemail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    let pnumber = /^\d{10}$/
    var test = true
    for (let i=0; i<span.length; i++){
        span[i].innerHTML = ""
    }
    for (let i=0; i<p.length; i++){
        p[i].style.color = "black"
    }
    

    if (pfirst.test(first.value) === false){
        first.nextElementSibling.innerHTML = "Enter valid first name"
        first.nextElementSibling.style.color = "red"
        first.parentElement.style.color = "red"
        test = false
    }

    if (pfirst.test(last.value) === false){
        last.nextElementSibling.innerHTML = "Enter valid last name"
        last.nextElementSibling.style.color = "red"
        last.parentElement.style.color = "red"
        test = false
    }

    if (pemail.test(email.value) === false){
        email.nextElementSibling.innerHTML = "Enter valid email"
        email.nextElementSibling.style.color = "red"
        email.parentElement.style.color = "red"
        test = false
    }

    if (pemail.test(confirm_email.value) === false){
        confirm_email.nextElementSibling.innerHTML = "Enter valid email"
        confirm_email.nextElementSibling.style.color = "red"
        confirm_email.parentElement.style.color = "red"
        test = false
    }

    if (pnumber.test(phone.value) === false){
        phone.nextElementSibling.innerHTML = "Enter valid phone number. Enter just the 10 digit number"
        phone.nextElementSibling.style.color = "red"
        phone.parentElement.style.color = "red"
        test = false
    }

    if (email.value != confirm_email.value){
        confirm_email.nextElementSibling.innerHTML += " Emails have to match"
        confirm_email.nextElementSibling.style.color = "red"
        confirm_email.parentElement.style.color = "red"
        test = false
    }

    if (test === true)
    {
        person.fname = first.value
        person.lname = last.value
        person.email = email.value
        person.phone = phone.value

        document.getElementById(`form`).style.display= `none`
        document.getElementById(`confirmation`).style.display= `block`
        
        var message = person.fname + " " + person.lname + "<br>" + person.email + "<br>" + person.phone.substring(0,3) + "-" + person.phone.substring(3,6) + "-" + person.phone.substring(6)
        
        document.querySelector(`#info`).innerHTML = message

        
    }
}
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { getId } from "./practice";

//UI LOGIC

async function handleFormSubmission(e) {
    e.preventDefault();
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const identity = await getId(gender, age);
    const p = document.createElement("p");
    console.log(identity);
    p.append(identity.result.name.first_name);
    const body = document.querySelector("body");
    body.append(p);
}



document.querySelector("form").addEventListener("submit", handleFormSubmission);
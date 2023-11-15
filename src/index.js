import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { getId } from "./js/identity";
import { getPhoto } from "./js/photo";

//UI LOGIC

async function handleFormSubmission(e) {
    e.preventDefault();
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const identity = await getId(gender, age);
    console.log(identity);
    const photo = await getPhoto(gender);
    const state = document.createElement("h2");
    state.append(identity.result.address.state);
    const lastName = document.createElement("p");
    const firstName = document.createElement("p");
    const signature = document.createElement("p");
    const addressLine1 = document.createElement("p");
    const addressLine2 = document.createElement("p");
    const birthdate = document.createElement("p");
    const sex = document.createElement("p");
    const height = document.createElement("p");
    const weight = document.createElement("p");
    weight.append(identity.result.extras.weight.lbs);
    height.append(identity.result.extras.height.feet);
    sex.append(identity.result.gender);
    birthdate.append(identity.result.extras.birth_date);
    addressLine1.append(identity.result.address.street);
    addressLine2.append(identity.result.address.city + ", " + identity.result.address.state_alpha2 + " " + identity.result.address.zip);
    firstName.append(identity.result.name.first_name);
    signature.append(identity.result.name.first_name + " " + identity.result.name.last_name);
    const img = document.createElement("img");
    img.setAttribute("src", photo);
    lastName.append(identity.result.name.last_name);
    const body = document.querySelector("body");
    body.append(state, img, signature, lastName, firstName, addressLine1, addressLine2, birthdate, sex, height, weight);
}



document.querySelector("form").addEventListener("submit", handleFormSubmission);
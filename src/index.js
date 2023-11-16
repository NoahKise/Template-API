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
    const photo = await getPhoto(gender);
    const license = document.createElement("div");
    const col1 = document.createElement("div");
    col1.setAttribute("id", "col1");
    const col2 = document.createElement("div");
    col2.setAttribute("id", "col2");
    const col3 = document.createElement("div");
    col3.setAttribute("id", "col3");
    license.setAttribute("id", "license");
    const state = document.createElement("h2");
    state.append(identity.result.address.state);
    const lastName = document.createElement("p");
    const firstName = document.createElement("p");
    const signature = document.createElement("p");
    signature.setAttribute("id", "signature");
    const addressLine1 = document.createElement("p");
    const addressLine2 = document.createElement("p");
    const birthdate = document.createElement("p");
    const sex = document.createElement("p");
    const height = document.createElement("p");
    const weight = document.createElement("p");
    weight.append("WGT: " + identity.result.extras.weight.lbs);
    height.append("HGT: " + identity.result.extras.height.feet);
    sex.append("SEX: " + identity.result.gender);
    birthdate.append("DOB: " + identity.result.extras.birth_date);
    addressLine1.append(identity.result.address.street);
    addressLine2.append(identity.result.address.city + ", " + identity.result.address.state_alpha2 + " " + identity.result.address.zip);
    firstName.append(identity.result.name.first_name);
    signature.append(identity.result.name.first_name + " " + identity.result.name.last_name);
    const img = document.createElement("img");
    img.setAttribute("src", photo);
    lastName.append(identity.result.name.last_name);
    const body = document.querySelector("body");
    col1.append(state, img, signature);
    col2.append(lastName, firstName, addressLine1, addressLine2, birthdate);
    col3.append(sex, height, weight);
    license.append(col1, col2, col3);
    body.append(license);
}



document.querySelector("form").addEventListener("submit", handleFormSubmission);
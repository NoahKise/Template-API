import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { getId } from "./js/identity";
import { getPhoto } from "./js/photo";
import { getQuote } from "./js/simpsons";
import { getGif } from "./js/giphy";

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
    weight.append("WGT: " + identity.result.extras.weight.lbs.toUpperCase());
    height.append("HGT: " + identity.result.extras.height.feet);
    sex.append("SEX: " + identity.result.gender.toUpperCase());
    birthdate.append("DOB: " + identity.result.extras.birth_date.toUpperCase());
    addressLine1.append(identity.result.address.street.toUpperCase());
    addressLine2.append(identity.result.address.city.toUpperCase() + ", " + identity.result.address.state_alpha2 + " " + identity.result.address.zip);
    firstName.append(identity.result.name.first_name.toUpperCase());
    signature.append(identity.result.name.first_name + " " + identity.result.name.last_name);
    const img = document.createElement("img");
    img.setAttribute("src", photo);
    lastName.append(identity.result.name.last_name.toUpperCase() + ",");
    const resultDiv = document.getElementById("results");
    resultDiv.innerHTML = "";
    const seal = document.createElement("img");
    seal.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Great_Seal_of_the_United_States_%28obverse%29.svg/1024px-Great_Seal_of_the_United_States_%28obverse%29.svg.png");
    seal.setAttribute("id", "seal");
    col1.append(state, img, signature);
    col2.append(lastName, firstName, addressLine1, addressLine2);
    col3.append(seal, birthdate, sex, height, weight);
    license.append(col1, col2, col3);
    const backstory = document.createElement("p");
    backstory.setAttribute("id", "backstory");
    backstory.append("Your new name is " + identity.result.name.first_name + " " + identity.result.name.last_name + ". You were born on " + identity.result.extras.birth_date + ". If anyone asks, you live at " + identity.result.address.street + " in " + identity.result.address.city + ", " + identity.result.address.state + ". You are a " + identity.result.occupation.job + " at " + identity.result.occupation.company + ", and have been for 6 years. If you get into a scrape, your papers say your blood type is " + identity.result.extras.blood_type + ", so you'll have to tell the doc your real one. Vinny is waiting for you down at the pier with a " + identity.result.extras.favorite_color + " " + identity.result.extras.vehicle + ". If your cover gets blown, call " + identity.result.phone.phone_number + ". That number is for emergencies ONLY. Ok, enjoy your new life " + identity.result.name.first_name + "!");
    resultDiv.append(license, backstory);
}
async function handleCopSubmission(e) {
    e.preventDefault();
    if (document.getElementById("are-you-a-cop").value === "no") {
        document.getElementById("not-cop").removeAttribute("class");
        document.getElementById("cop").setAttribute("class", "hidden");
    } else {
        document.getElementById("copform").setAttribute("class", "hidden");
        const resultDiv = document.getElementById("results");
        resultDiv.innerHTML = "";
        const gif = await getGif();
        const simpQuote = await getQuote();
        const quoteDisplay = document.createElement("p");
        const gifDisplay = document.createElement("img");
        gifDisplay.setAttribute("id", "gifDisplay");
        gifDisplay.setAttribute("src", gif);
        quoteDisplay.setAttribute("id", "quoteDisplay");
        quoteDisplay.append('"' + simpQuote[0].quote + '"' + " -" + simpQuote[0].character);
        resultDiv.append(gifDisplay, quoteDisplay);
        

    }
}

document.getElementById("cop").addEventListener("submit", handleCopSubmission);
document.getElementById("identity").addEventListener("submit", handleFormSubmission);
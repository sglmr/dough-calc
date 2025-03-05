const usePreferment = document.getElementById("use-preferment-tf");
const prefermentSection = document.getElementById("preferment-section");
const flourFieldset = document.getElementById("flour-fieldset");
const ingredientFieldset = document.getElementById("ingredient-fieldset");
const liquidFieldset = document.getElementById("liquid-fieldset");


// Add an event listener to all of the default input elements that recalculates the recipe on input
document.getElementById("dough-ball-count").addEventListener("input", calculateRecipe);
document.getElementById("dough-ball-weight").addEventListener("input", calculateRecipe);
document.getElementById("dough-hydration-percent").addEventListener("input", calculateRecipe);
document.getElementById("prefermented-flour-percent").addEventListener("input", calculateRecipe);
document.getElementById("preferment-hydration").addEventListener("input", calculateRecipe);

// Add calculateRecipe on input change to flours
document.querySelectorAll(".flour-name").forEach(function (element) {
    element.addEventListener("input", calculateRecipe);
});
document.querySelectorAll(".flour-percent").forEach(function (element) {
    element.addEventListener("input", calculateRecipe);
});

// Add calculateRecipe on input change to liquids
document.querySelectorAll(".liquid-name").forEach(function (element) {
    element.addEventListener("input", calculateRecipe);
});
document.querySelectorAll(".liquid-percent").forEach(function (element) {
    element.addEventListener("input", calculateRecipe);
});

// Add calculateRecipe on input change to ingredients
document.querySelectorAll(".ingredient-name").forEach(function (element) {
    element.addEventListener("input", calculateRecipe);
});
document.querySelectorAll(".ingredient-percent").forEach(function (element) {
    element.addEventListener("input", calculateRecipe);
});



// Add an event listener to the prefermentTF checkbox
usePreferment.addEventListener("change", function () {
    // If the checkbox is checked, show the data; otherwise, hide it
    if (usePreferment.checked) {
        document.getElementById("prefermented-flour-percent").setAttribute("value", 15)
        document.getElementById("preferment-hydration").setAttribute("value", 100)
        prefermentSection.style.display = "block";
    } else {
        document.getElementById("prefermented-flour-percent").setAttribute("value", 0)
        document.getElementById("preferment-hydration").setAttribute("value", 0)
        prefermentSection.style.display = "none";
    }

    // Calculate recipe
    calculateRecipe();
});


// Make the add flour button add another flour div element
document.getElementById("add-flour").addEventListener("click", function () {
    // Create a new div element
    var newDiv = document.createElement("div");
    newDiv.className = "flour-record";

    // Create a new ingredient name input element
    var newNameInput = document.createElement("input");
    newNameInput.setAttribute("type", "text");
    newNameInput.value = "Flour";
    newNameInput.setAttribute("class", "flour-name");

    // Create a new ingredient amount % element
    var newAmountInput = document.createElement("input");
    newAmountInput.type = "number";
    newAmountInput.setAttribute("type", "number");
    newAmountInput.setAttribute("min", 0);
    newAmountInput.setAttribute("max", 100);
    newAmountInput.setAttribute("step", 1);
    newAmountInput.setAttribute("value", 0);
    newAmountInput.className = "flour-percent";
    newAmountInput.addEventListener("input", calculateRecipe);

    // Create a new delete button for the flour input
    var newDeleteButton = document.createElement("button");
    newDeleteButton.innerText = "delete";
    newDeleteButton.className = "delete-btn";

    // Attach an event listener to the delete button
    newDeleteButton.addEventListener("click", function (event) {
        // Get the parent div of the clicked button
        var parentDiv = event.target.parentElement;

        // Remove the parent div from the DOM
        parentDiv.remove();

        // Recalculate recipe
        calculateRecipe();
    });

    // Append the new input to the div element
    newDiv.appendChild(newNameInput);
    newDiv.appendChild(newAmountInput);
    newDiv.appendChild(newDeleteButton);

    // Append the new DIV element to the fieldset
    flourFieldset.appendChild(newDiv);

    // Recalculate recipe
    calculateRecipe();
});

// Make the add liquid button add another liquid div element
document.getElementById("add-liquid").addEventListener("click", function () {
    // Create a new div element
    var newDiv = document.createElement("div");
    newDiv.className = "liquid-record";

    // Create a new ingredient name input element
    var newNameInput = document.createElement("input");
    newNameInput.setAttribute("type", "text");
    newNameInput.setAttribute("value", "Liquid");
    newNameInput.setAttribute("class", "liquid-name");

    // Create a new ingredient amount % element
    var newAmountInput = document.createElement("input");
    newAmountInput.type = "number";
    newAmountInput.setAttribute("type", "number");
    newAmountInput.setAttribute("min", 0);
    newAmountInput.setAttribute("max", 100);
    newAmountInput.setAttribute("step", 1);
    newAmountInput.setAttribute("value", 0);
    newAmountInput.className = "liquid-percent"
    newAmountInput.addEventListener("input", calculateRecipe);

    // Create a new delete button for the input
    var newDeleteButton = document.createElement("button");
    newDeleteButton.innerText = "delete";
    newDeleteButton.className = "delete-btn";

    // Attach an event listener to the delete button
    newDeleteButton.addEventListener("click", function (event) {
        // Get the parent div of the clicked button
        var parentDiv = event.target.parentElement;

        // Remove the parent div from the DOM
        parentDiv.remove();

        // Recalculate recipe
        calculateRecipe();
    });

    // Append the new input to the div element
    newDiv.appendChild(newNameInput);
    newDiv.appendChild(newAmountInput);
    newDiv.appendChild(newDeleteButton);

    // Append the new DIV element to the fieldset
    liquidFieldset.appendChild(newDiv);

    // Recalculate recipe
    calculateRecipe();
});


// Make the add ingredient button add another ingredient div element
document.getElementById("add-ingredient").addEventListener("click", function () {
    // Create a new div element
    var newDiv = document.createElement("div");
    newDiv.className = "ingredient-record";

    // Create a new ingredient name input element
    var newNameInput = document.createElement("input");
    newNameInput.setAttribute("type", "text");
    newNameInput.setAttribute("class", "ingredient-name");
    newNameInput.setAttribute("value", "Ingredient");

    // Create a new ingredient amount % element
    var newAmountInput = document.createElement("input");
    newAmountInput.type = "number";
    newAmountInput.setAttribute("type", "number");
    newAmountInput.setAttribute("min", 0);
    newAmountInput.setAttribute("max", 100);
    newAmountInput.setAttribute("step", 1);
    newAmountInput.setAttribute("value", 0);
    newAmountInput.className = "ingredient-percent";
    newAmountInput.addEventListener("input", calculateRecipe);

    // Create a new delete button for the ingredient input
    var newDeleteButton = document.createElement("button");
    newDeleteButton.innerText = "delete";
    newDeleteButton.className = "delete-btn";

    // Attach an event listener to the delete button
    newDeleteButton.addEventListener("click", function (event) {
        // Get the parent div of the clicked button
        var parentDiv = event.target.parentElement;

        // Remove the parent div from the DOM
        parentDiv.remove();

        // Recalculate recipe
        calculateRecipe();
    });

    // Append the new input to the div element
    newDiv.appendChild(newNameInput);
    newDiv.appendChild(newAmountInput);
    newDiv.appendChild(newDeleteButton);

    // Append the new DIV element to the fieldset
    ingredientFieldset.appendChild(newDiv);

    // Recalculate recipe
    calculateRecipe();
});

// A function to return the sum total of all the flour percents.
function totalFlourPercent() {
    let elements = document.querySelectorAll(".flour-percent");
    let sum = 0;

    // Iterate over the elements and add their values ot the sum.
    elements.forEach(function (element) {
        sum += parseFloat(element.value) || 0;
    });

    // Return the sum total.
    return sum;
}

// A function to validate the total of the flour percents.
function validateFlourPercent() {
    var sum = totalFlourPercent();
    var error = document.getElementById("flour-sum-error")

    console.debug("flour percent:", sum);

    if (sum != 100) {
        error.style.display = "block";
        console.warn("Total flour percent was:", sum)
    } else {
        error.style.display = "none";
    }
}

// A function to return the sum total of all of the liquid percents
function totalLiquidPercent() {
    var elements = document.querySelectorAll(".liquid-percent");
    var sum = 0;

    // Iterate over the elements and add their values to the sum
    elements.forEach(function (element) {
        // Convert the element value to a number and add it to the sum
        // If the element is not a number, convert to 0
        sum += parseFloat(element.value) || 0;
    });

    // return the total sum
    return sum;
}

// A function to validate the sum total of all of the liquid percents
function validateLiquidPercent() {
    var sum = totalLiquidPercent();
    var error = document.getElementById("liquid-sum-error");

    console.debug("liquid percent:", sum);

    if (sum > 100) {
        error.style.display = "block";
        console.warn("Total liquid percent was:", sum);
    } else {
        error.style.display = "none";
    }
}

// A function to return the sum total of all of the ingredient percents
function totalIngredientPercent() {
    var elements = document.querySelectorAll(".ingredient-percent");
    var sum = 0;

    // Iterate over the elements and add their values to the sum
    elements.forEach(function (element) {
        // Convert the element value to a number and add it to the sum
        // If the element is not a number, convert to 0
        sum += parseFloat(element.value) || 0;
    });

    // return the total sum
    return sum;
}

// A function to get all of the ingredient percents
// and return an html snippet with a summary of their percents.
function ingredientSummary() {
    console.debug("Getting recipe percents...")

    // Create a variable to store the recipe summary
    var recipeSummary = ""

    // Add the flour elements
    var flourElements = document.querySelectorAll(".flour-record");
    flourElements.forEach(function (element) {
        
        let elementName = element.querySelector(".flour-name").value
        let elementPercent = parseFloat(element.querySelector(".flour-percent").value) || 0.0;

        // Skip if the element weight is 0.0
        if (elementPercent === 0.0) {
            return;
        }

        // Append the flour item to the summary
        recipeSummary = `${recipeSummary} <br><strong>${elementName}: </strong> ${elementPercent}%`;

    });
    // End of flour elements

    // Add the liquid elements
    var liquidElements = document.querySelectorAll(".liquid-record");
    var doughHydrationPercent = parseFloat(document.getElementById("dough-hydration-percent").value) || 0.0;
    liquidElements.forEach(function (element) {
        
        let elementName = element.querySelector(".liquid-name").value
        let elementPercent = parseFloat(element.querySelector(".liquid-percent").value) || 0.0;


        // Skip if the element weight is 0.0
        if (elementPercent === 0.0) {
            return;
        }

        // Recaclulate percent relative to the total hydration
        elementPercent = doughHydrationPercent * elementPercent * .01

        // Append the water item to the summary
        recipeSummary = `${recipeSummary} <br><strong>${elementName}: </strong> ${elementPercent}%`;
    });
    // End of the liquid elements

    // Final Recipe Ingredients
    var ingredientElements = document.querySelectorAll(".ingredient-record");
    ingredientElements.forEach(function (element) {
        
        let elementName = element.querySelector(".ingredient-name").value
        let elementPercent = parseFloat(element.querySelector(".ingredient-percent").value) || 0;

        // Skip if the element weight is 0.0
        if (elementPercent === 0.0) {
            return;
        }

        // Append the water item to the summary
        recipeSummary = `${recipeSummary} <br><strong>${elementName}: </strong> ${elementPercent}%`;
    });

    return recipeSummary
}


// A function to recalculate the recipe
function calculateRecipe() {
    console.debug("Recalculating recipe...");

    // Run validations
    validateFlourPercent();
    validateLiquidPercent();

    // Calculate the total dough weight
    var doughBalls = parseFloat(document.getElementById("dough-ball-count").value) || 0.0;
    var doughBallWeight = parseFloat(document.getElementById("dough-ball-weight").value) || 0.0;
    var totalDoughWeight = doughBalls * doughBallWeight;
    console.info(doughBalls, "dough balls x", doughBallWeight, "grams =", totalDoughWeight);

    // Find the total ingredient percent
    var doughHydrationPercent = parseFloat(document.getElementById("dough-hydration-percent").value) || 0.0;
    var totalPercents = 100.0 + doughHydrationPercent + totalIngredientPercent();
    console.debug("total percents:", totalPercents)
    var totalFlourWeight = 100.0 * totalDoughWeight / totalPercents;
    var totalLiquidWeight = (doughHydrationPercent / 100.0) * totalFlourWeight;
    console.debug("total flour weight: ", totalFlourWeight, ", total liquid weight: ", totalLiquidWeight);
    

    // Calculate preferment weights
    var prefermentedFlourPercent = parseFloat(document.getElementById("prefermented-flour-percent").value) || 0.0;
    var prefermentHydration = parseFloat(document.getElementById("preferment-hydration").value) || 0.0;
    console.debug("preferment flour %:", prefermentedFlourPercent, ", preferment hydration:", prefermentHydration);

    var prefermentFlourWeight = totalFlourWeight * (prefermentedFlourPercent / 100.0);
    var prefermentWaterWeight = prefermentFlourWeight * (prefermentHydration / 100.0);
    var preferementTotalWeight = prefermentWaterWeight + prefermentFlourWeight;
    console.info("total preferment:", preferementTotalWeight, "; flour:", prefermentFlourWeight, ", water:", prefermentWaterWeight);

    // Clear out all the child elements from the final recipe to refresh it
    var recipeElement = document.getElementById("final-recipe");
    while (recipeElement.firstChild) {
        recipeElement.removeChild(recipeElement.firstChild);
    };

    // Final Recipe Summary
    recipeElement.innerHTML += `<header><h2>Dough Recipe</h2></header>`;
    recipeElement.innerHTML += `  <p>
                                <strong>Dough: </strong> ${doughBalls} ball(s) x ${doughBallWeight} = ${totalDoughWeight}
                                <br>
                                <strong>Hydration: </strong> ${doughHydrationPercent}%
                                <br>
                                <strong>Prefermented Flour: </strong>${usePreferment.checked ? prefermentedFlourPercent + '%' : 'None'}
                                <br>
                                ${ingredientSummary()} 
                            </p>`;

    // Final Recipe Preferments                            
    if (preferementTotalWeight > 0) {
        recipeElement.innerHTML += `  <p>
                                    <h3>Preferment</h3>
                                    <span>Flour: ${prefermentFlourWeight.toFixed(2)}</span>
                                    <br>
                                    <span>Water: ${prefermentFlourWeight.toFixed(2)}</span>
                                    <br>
                                    <span><strong>${preferementTotalWeight.toFixed(0)}</strong> of preferment in final mix</span>
                                </p>`;
    };

    
    // Final Recipe Flour
    recipeElement.innerHTML += `<p><h3>Flour(s)</h3>`;
    var flourElements = document.querySelectorAll(".flour-record");
    var first = true;
    flourElements.forEach(function (element) {
        
        let elementName = element.querySelector(".flour-name").value
        let elementPercent = parseFloat(element.querySelector(".flour-percent").value) || 0.0;
        let elementWeight = totalFlourWeight * (elementPercent / totalFlourPercent());

        // Skip if the element weight is 0.0
        if (elementPercent === 0.0) {
            return;
        }

        if (first && usePreferment.checked) {
            recipeElement.innerHTML += `<div>${elementWeight.toFixed(2)} - ${prefermentFlourWeight.toFixed(2)} = <strong>${(elementWeight-prefermentFlourWeight).toFixed(2)}</strong> of ${elementName}</div>`;
            first = false;
        } else {
            recipeElement.innerHTML += `<div><strong>${elementWeight.toFixed(2)}</strong> of ${elementName}</div>`;
        }

    });
    recipeElement.innerHTML +=`</p>`;


    // Final Recipe Liquid
    recipeElement.innerHTML += `<p><h3>Liquid(s)</h3>`;
    var liquidElements = document.querySelectorAll(".liquid-record");
    var first = true;
    liquidElements.forEach(function (element) {
        
        let elementName = element.querySelector(".liquid-name").value
        let elementPercent = parseFloat(element.querySelector(".liquid-percent").value) || 0.0;
        let elementWeight = totalLiquidWeight * (elementPercent / totalLiquidPercent());

        // Skip if the element weight is 0.0
        if (elementPercent === 0.0) {
            return;
        }

        if (first && usePreferment.checked) {
            recipeElement.innerHTML += `<div>${elementWeight.toFixed(2)} - ${prefermentWaterWeight.toFixed(2)} = <strong>${(elementWeight-prefermentWaterWeight).toFixed(2)}</strong> of ${elementName}</div>`;
            first = false;
        } else {
            recipeElement.innerHTML += `<div><strong>${elementWeight.toFixed(2)}</strong> of ${elementName}</div>`;
        }

    });
    recipeElement.innerHTML +=`</p>`;


    // Final Recipe Ingredients
    recipeElement.innerHTML += `<p><h3>Ingredients(s)</h3>`;
    var ingredientElements = document.querySelectorAll(".ingredient-record");
    ingredientElements.forEach(function (element) {
        
        let elementName = element.querySelector(".ingredient-name").value
        let elementPercent = parseFloat(element.querySelector(".ingredient-percent").value) || 0;
        let elementWeight = totalDoughWeight * (elementPercent / totalPercents);

        // Skip if the element weight is 0.0
        if (elementPercent === 0.0) {
            return;
        }

        recipeElement.innerHTML += `<div><strong>${elementWeight.toFixed(2)}</strong> of ${elementName}</div>`;
    });
    recipeElement.innerHTML +=`</p>`;
    

    // TODO: longterm - add some way to store the recipe in the querystring of the url so that they can be shared
    //  An example of this is: https://bread.chainring.xyz

}



calculateRecipe();
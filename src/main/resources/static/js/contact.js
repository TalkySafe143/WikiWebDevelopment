// dark:border-red-500
const successPrefix = '<svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/></svg>'
const errorPrefix = '<svg class="w-3.5 h-3.5 me-2 text-red-500 dark:text-red-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/></svg>'
/**
 * Caracters Counters
 * 
 * count-email
 * count-firstName
 * count-secondName
 * 
 * Inputs
 * 
 * in-email
 * in-firstName
 * in-secondName
 * in-semester
 * 
 * Email validations
 * 
 * 100-chars
 * atCharacter
 * dotCharacter
 * latinCharacters
 * capitalCharacters
 * 
 */ 


// Alerts texts
// Email

const hundredChars = [document.querySelector(".hundred-chars"), document.querySelector(".hundred-chars").innerHTML];
hundredChars[0].innerHTML = errorPrefix + hundredChars[1];

const atCharacter = [document.querySelector(".atCharacter"), document.querySelector(".atCharacter").innerHTML];
atCharacter[0].innerHTML = errorPrefix + atCharacter[1];

const dotCharacter = [document.querySelector(".dotCharacter"), document.querySelector(".dotCharacter").innerHTML];
dotCharacter[0].innerHTML = errorPrefix + dotCharacter[1];

const latinCharacters = [document.querySelector(".latinCharacters"), document.querySelector(".latinCharacters").innerHTML];
latinCharacters[0].innerHTML = errorPrefix + latinCharacters[1];

const capitalCharacters = [document.querySelector(".capitalCharacters"), document.querySelector(".capitalCharacters").innerHTML];
capitalCharacters[0].innerHTML = errorPrefix + capitalCharacters[1];

const noSpace = [document.querySelector(".noSpace"), document.querySelector(".noSpace").innerHTML];
noSpace[0].innerHTML = errorPrefix + noSpace[1]


// First name

const hundredCharsFirstName = [document.querySelector(".hundred-chars-first-name"), document.querySelector(".hundred-chars-first-name").innerHTML]
hundredCharsFirstName[0].innerHTML = errorPrefix + hundredCharsFirstName[1]


// Second name

const hundredCharsSecondName = [document.querySelector(".hundred-chars-second-name"), document.querySelector(".hundred-chars-second-name").innerHTML]
hundredCharsSecondName[0].innerHTML = errorPrefix + hundredCharsSecondName[1]


// Semester

const semesterValidator = [document.querySelector(".semester-validator"), document.querySelector(".semester-validator").innerHTML]
semesterValidator[0].innerHTML = errorPrefix + semesterValidator[1]


// Inputs
const inEmail = document.querySelector(".in-email");
const inFirstName = document.querySelector(".in-firstName");
const inSecondName = document.querySelector(".in-secondName");
const inSemester = document.querySelector(".in-semester");

// Caracters Counters

const countEmail = document.querySelector(".count-email");
const countFirstName = document.querySelector(".count-firstName");
const countSecondName = document.querySelector(".count-secondName");

// Check
const check = new Array(4);
const contactForm = document.querySelector(".contact-form");

// Email Validations
/**
 * Obligatorio, 100 caracteres. , 
 * que tenga el caracter ‘@’ y después de ese caracter por lo menos un punto
 * no debe tener espacios
 * nada de caracteres espaciales como tildes, ñ, todo debe estar escrito en mayúsculas.
 */
inEmail.addEventListener('input', e => {
    countEmail.innerHTML = `${e.target.value.length}/100`
    let ok = true
    if (e.target.value.length > 100) {
        ok = false;
        hundredChars[0].innerHTML = errorPrefix + hundredChars[1];
    } else {
        hundredChars[0].innerHTML = successPrefix + hundredChars[1];
    }

    if (!e.target.value.includes("@")) {
        ok = false;
        atCharacter[0].innerHTML = errorPrefix + atCharacter[1];
    } else {
        atCharacter[0].innerHTML = successPrefix + atCharacter[1];
        let pos = e.target.value.search("@");
        const suffix = e.target.value.substring(pos, e.target.value.length)
        if (!suffix.includes(".")) {
            ok = false;
            dotCharacter[0].innerHTML = errorPrefix + dotCharacter[1];
        } else {
            dotCharacter[0].innerHTML = successPrefix + dotCharacter[1];
        }
    }

    if (e.target.value.search(" ") != -1) {
        ok = false;
        noSpace[0].innerHTML = errorPrefix + noSpace[1]
    } else {
        noSpace[0].innerHTML = successPrefix + noSpace[1]
    }

    let okSpecial = true 
    for (let i = 0; i < e.target.value.length; i++) {
        let ascii = e.target.value.charCodeAt(i);
        if ((ascii < 65 || ascii > 90) && (ascii != 46 && ascii != 64)) {
            ok = false;
            okSpecial = false
            latinCharacters[0].innerHTML = errorPrefix + latinCharacters[1];
            capitalCharacters[0].innerHTML = errorPrefix + capitalCharacters[1];
            break;
        }
    }

    if (okSpecial) {
        latinCharacters[0].innerHTML = successPrefix + latinCharacters[1];
        capitalCharacters[0].innerHTML = successPrefix + capitalCharacters[1];
    }

    if (!ok) {
        inEmail.classList.remove("dark:border-green-600")
        inEmail.classList.add("dark:border-red-500")
    } else {
        inEmail.classList.add("dark:border-green-600")
        inEmail.classList.remove("dark:border-red-500")
    }

    check[0] = ok
});


inFirstName.addEventListener('input', e => {
    countFirstName.innerHTML = `${e.target.value.length}/100`
    let ok = true
    
    if (e.target.value.length > 100) {
        ok = false;
        hundredCharsFirstName[0].innerHTML = errorPrefix + hundredCharsFirstName[1]
    } else {
        hundredCharsFirstName[0].innerHTML = successPrefix + hundredCharsFirstName[1]
    }

    if (!ok) {
        inFirstName.classList.remove("dark:border-green-600")
        inFirstName.classList.add("dark:border-red-500")
    } else {
        inFirstName.classList.add("dark:border-green-600")
        inFirstName.classList.remove("dark:border-red-500")
    }

    check[1] = ok
});

inSecondName.addEventListener('input', e => {
    countSecondName.innerHTML = `${e.target.value.length}/100`
    let ok = true
    if (e.target.value.length > 100) {
        ok = false;
        hundredCharsSecondName[0].innerHTML = errorPrefix + hundredCharsSecondName[1]
    } else {
        hundredCharsSecondName[0].innerHTML = successPrefix + hundredCharsSecondName[1]
    }

    if (!ok) {
        inSecondName.classList.remove("dark:border-green-600")
        inSecondName.classList.add("dark:border-red-500")
    } else {
        inSecondName.classList.add("dark:border-green-600")
        inSecondName.classList.remove("dark:border-red-500")
    }

    check[2] = ok
});

inSemester.addEventListener('input', e => {
    let ok = true
    if (e.target.value < 0 || e.target.value > 16) {
        ok = false;
        semesterValidator[0].innerHTML = errorPrefix + semesterValidator[1]
    } else {
        semesterValidator[0].innerHTML = successPrefix + semesterValidator[1]
    }

    if (!ok) {
        inSemester.classList.remove("dark:border-green-600")
        inSemester.classList.add("dark:border-red-500")
    } else {
        inSemester.classList.add("dark:border-green-600")
        inSemester.classList.remove("dark:border-red-500")
    }

    check[3] = ok
});

contactForm.onsubmit = function() {
    return !check.includes(false);
}
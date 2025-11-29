const dialog1 = document.getElementById("errorDialog1");

document.getElementById("btnSubmit1").addEventListener("click", () => {
  const name = document.getElementById("nameInput1").value.trim();

  if (name === "") {
    dialog1.showModal();
  }
});

document.getElementById("closeError1").onclick = () => dialog1.close();



const dialog2 = document.getElementById("errorDialog2");

document.getElementById("btnCheck2").addEventListener("click", () => {
  const num = Number(document.getElementById("numInput2").value);

  if (num < 0) {
    dialog2.showModal();
  }
});

document.getElementById("closeError2").onclick = () => dialog2.close();




const dialog3 = document.getElementById("errorDialog3");

document.getElementById("btnRun3").onclick = () => {
  try {
    let x = y + 10; 
  } catch (e) {
    document.getElementById("errorMessage3").innerText = e.toString();
    dialog3.showModal();
  }
};

document.getElementById("closeError3").onclick = () => dialog3.close();




const dialog4 = document.getElementById("errorDialog4");

document.getElementById("btnLoad4").onclick = async () => {
  try {
    await fetch("http://wrong-url.com");
  } catch (err) {
    dialog4.showModal();
  }
};

document.getElementById("closeError4").onclick = () => dialog4.close();




const dialog5 = document.getElementById("errorDialog5");

document.getElementById("btnAuto5").onclick = () => {
  dialog5.showModal();
  setTimeout(() => {
    dialog5.close();
  }, 3000);
};



const dialog6 = document.getElementById("errorDialog6");

document.getElementById("btnValidate6").onclick = () => {
  const email = document.getElementById("email6").value.trim();
  const pass = document.getElementById("password6").value;
  const age = Number(document.getElementById("age6").value);
  const errors = [];

  if (email === "") errors.push("Email is required");
  if (pass.length < 6) errors.push("Password must be at least 6 characters");
  if (age < 18) errors.push("Age must be 18 or older");

  if (errors.length > 0) {
    const ul = document.getElementById("errorList6");
    ul.innerHTML = "";

    errors.forEach(err => {
      const li = document.createElement("li");
      li.textContent = err;
      ul.appendChild(li);
    });

    dialog6.showModal();
  }
};

document.getElementById("closeError6").onclick = () => dialog6.close();

async function newFormHandler(event) {
  event.preventDefault();
  const brand = document.querySelector("#brand").value;
  const campaign = document.querySelector("#campaign").value;
  const ba_name = document.querySelector("#ba_name").value;
  const location = document.querySelector("#location").value;

  const response = await fetch(`/api/demo`, {
    method: "POST",
    body: JSON.stringify({
      brand,
      campaign,
      ba_name,
      location,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add demo");
  }
}

document
  .querySelector(".new-dish-form")
  .addEventListener("submit", newFormHandler);

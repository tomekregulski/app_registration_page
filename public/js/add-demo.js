async function newFormHandler(event) {
  event.preventDefault();
  const brand = document.querySelector("#dish_name").value;
  const campaign = document.querySelector("#description").value;
  const ba_name = document.querySelector("#guest_name").value;
  // const location = document.querySelector("#has_nuts:checked") ? true : false;

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

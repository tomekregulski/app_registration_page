async function editFormHandler(event) {
  event.preventDefault();
  const brand = document.querySelector("#dish_name").value;
  const campaign = document.querySelector("#description").value;
  const ba_name = document.querySelector("#guest_name").value;

  // const location = document.querySelector("#has_nuts:checked") ? true : false;

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/demo/${id}`, {
    method: "PUT",
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
    document.location.replace(`/demo/${id}`);
  } else {
    alert("Failed to edit demo");
  }
}

document
  .querySelector(".edit-dish-form")
  .addEventListener("submit", editFormHandler);

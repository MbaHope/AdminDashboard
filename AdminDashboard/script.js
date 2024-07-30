
const chart = document.querySelector("#chart").getContext("2d");

// Creating a new chart instance
new Chart(chart, {
  type: "bar",

  data: {
    labels: ["America","England","Nigeria","Ghana","China","Uganda","Australia","Bermingham","Cotre voir","Tanzania","Germany","Kuwait"],

    datasets: [
      {
        label: "BTC",
        data: [
          33576, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116,
          61004,
        ],
        borderWidth: 3,
      },
      {
        label: "ETH",
        data: [
          31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832,
          36844, 61004,
        ],
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// show or hide sidebar
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  sidebar.style.display = "block";
  console.log(menuBtn);
});


closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
})

// Change theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle('dark-theme');

  themeBtn.querySelector('i:bx bxs-sun').classList.toggle('active');
  themeBtn.querySelector('i:bx bxs-moon').classList.toggle('active');
})

document.getElementById("toggleButton").addEventListener("click", function() {
    var dropdown = document.getElementById("dropdownOptions");
  
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  });
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeColor() {
    const headerTitle = document.querySelector('.header-title');
    headerTitle.style.color = getRandomColor();
  }
  
  setInterval(changeColor, 5000); // Mengganti warna setiap 5 detik


  const data = {};
const ctx = document.getElementById("voteChart").getContext("2d");

function vote() {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.toLowerCase();

    if (name.trim() === "") {
        alert("Please enter a valid name.");
        return;
    }

    data[name] = data[name] ? data[name] + 1 : 1;
    updateChart();
    nameInput.value = "";
}

function updateChart() {
    const labels = Object.keys(data);
    const values = Object.values(data);

    const chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Votes",
                data: values,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

  
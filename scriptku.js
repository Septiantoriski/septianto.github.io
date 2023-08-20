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
  
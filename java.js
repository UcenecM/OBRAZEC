document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("ime").value.trim();
    if (name === "") {
      Swal.fire({
        icon: 'error',
        title: 'Napaka!',
        text: 'Prosim, vpišite svoje ime.'
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Super!',
        text: 'Ime je bilo vnešeno.'
      });
    }
  });
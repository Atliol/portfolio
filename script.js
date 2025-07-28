// Bootstrap form validation
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          event.preventDefault();
          alert("Thank you for contacting me!");
          form.reset();
        }
        form.classList.add('was-validated')
      }, false)
    })
})();

    // JavaScript to ensure only one video plays at a time
    const videos = document.querySelectorAll('video');

    videos.forEach((video) => {
      video.addEventListener('play', () => {
        // Pause all other videos
        videos.forEach((otherVideo) => {
          if (otherVideo !== video) {
            otherVideo.pause();
          }
        });
      });
    });
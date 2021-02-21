const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_shcx5xa';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Submited';
      alert('Response recorded!');
    }, (err) => {
      btn.value = 'Submited';
      alert(JSON.stringify(err));
    });
});
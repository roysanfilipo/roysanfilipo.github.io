$(() => {

  // Rupaul carousel images and buttons

  

  // Generating dragqueen based on inputting a number  between 0 and 139
$('form').on('submit', (event) => {

    event.preventDefault();

    const userInput = $('input[type="number"]').val();

    $.ajax(
      {
        url:'http://www.nokeynoshade.party/api/queens/all'
      }

    ).then(
        (data) => {
          console.log(data[userInput].name);
          $('#name').html(data[userInput].name);
          $('#image').attr('src', data[userInput].image_url);
          $('#quote').html(data[userInput].quote);
        },
        (error) => {
          console.log(error);
        }
      )
    })
  })

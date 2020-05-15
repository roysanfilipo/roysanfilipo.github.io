$(() => {
// $('form').on('submit', (event) => {
//
//     event.preventDefault();
//
//     const userInput = $('input[type="number"]').val();

    $.ajax(
      {
        url:'http://www.nokeynoshade.party/api/queens/all'
      }

    ).then(
        (data) => {
          console.log(data);
          // $('#name').html(data.name);
          // $('#image').html(data.image_url);
          // $('#quote').html(data.quote);
        },
        (error) => {
          console.log(error);
        }
      )
    })
  // })

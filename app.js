$(() => {

  // Rupaul carousel images and buttons

// image counter
  let currentImage = 0;

  const numOfImages = $('.carousel-images').children().length -1;

  // make the next image button work
  $('.next').on('click', () => {
    $('.carousel-images').children().eq(currentImage).css('display', 'none')
    if (currentImage < numOfImages) {
      currentImage ++;
    } else {
      currentImage = 0;
    }
    $('.carousel-images').children().eq(currentImage).css('display', 'block')
  })

  // make the previous  image button work
  $('.previous').on('click', () => {
      $('.carousel-images').children().eq(currentImage).css('display', 'none')
      if(currentImage > 0) {
        currentImage--;
      } else {
        currentImage = numOfImages;
      }
      $('.carousel-images').children().eq(currentImage).css('display', 'block')
    })

  // Generating dragqueen based on inputting a number  between 0 and 139



  // when you click submit on the form
$('form').on('submit', (event) => {

// prevent the page from re-loading
    event.preventDefault();

// declaring userInput and setting it to a numerical value
    $('.output').css('display', 'block');
    const userInput = $('input[type="number"]').val();

    // tried to just make whatever they input a random value between 0 and 139... 
    // const userInput = $(Math.floor(Math.random() * 139)).val()

// pulling from the Rupaul's dragrace API link
    $.ajax(
      {
        url:'https://www.nokeynoshade.party/api/queens/all'
      }

// pulling a drag queen's name, image, and quote from the Rupaul API when a user subits the
// index number in the array of dragqueen object

    ).then(
        (data) => {
          console.log(data[userInput].name);
          console.log(data[userInput].quote);
          $('#name').html(data[userInput].name);
          $('#image').attr('src', data[userInput].image_url);

          if ((data[userInput].quote) === "") {
            $('quote').text('I have nothing to say to you...');
          } else {
            $('#quote').html(data[userInput].quote);
          }
        },
        (error) => {
          console.log(error);
        }
      )
    })
  })

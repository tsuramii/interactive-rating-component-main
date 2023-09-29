document.addEventListener("DOMContentLoaded", () => {
    let selectedValue = 1;
    const totalRating = 5;
    const inputList = Array.from({ length: totalRating }, (_, i) => `
        
    <input type="radio" id="rating${i + 1}" class="peer/rating${i + 1} hidden" name="rating" value="${i + 1}">
    <label for="rating${i + 1}" class="peer-checked/rating${i + 1}:bg-lightgrey peer-checked/rating${i + 1}:text-white h-10 w-10 bg-mediumgrey/10 rounded-full flex justify-center items-center mt-1 hover:text-white hover:bg-orange transition-colors">${i + 1}</label>
     
    `).join('\n');

    const ratingList = document.getElementById('ratingList');
    ratingList.innerHTML = inputList;

    const ratingButtons = document.querySelectorAll('input[name="rating"]');
    ratingButtons.forEach((ratingButton) => {
        ratingButton.addEventListener('change', () => {
            if (ratingButton.checked) {
                selectedValue = ratingButton.value;
            }
        });
    });

    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackButton = document.getElementById('feedbackButton');
    feedbackButton.addEventListener('click', () => {
        feedbackForm.classList.add('opacity-0');
        setTimeout(() => {
        feedbackForm.classList.remove('opacity-0');
        feedbackForm.innerHTML = `
        <div class="flex flex-col justify-center items-center">
         <img src="./images/illustration-thank-you.svg" alt="Thank you! ilustration" class="w-32 mt-3">
         <p class="text-orange bg-mediumgrey/10 rounded-2xl py-1 px-3 text-sm self-center my-5">You selected ${selectedValue} out of ${totalRating}</p>
         <h2 class="text-2xl">Thank You!</h2>
         <p class="text-center text-mediumgrey text-sm py-3"> We appreciate you taking the time to give a rating. If you ever need more support,
           don't hesitate to get in touch!</p>
         </div>
        `
        }, 200)

    })

});
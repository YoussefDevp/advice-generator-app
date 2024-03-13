async function displayAdvice() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      const advice = data.slip.advice; 
      const id = data.slip.id; 
      // Extracting the advice from the response
      
      const adviceHeading = document.getElementById('advice-heading');
      const adviceNumber = document.getElementById('adviceNumber')
      adviceHeading.textContent = advice;
      adviceNumber.textContent = id;
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  }

  displayAdvice();
const dieToss = document.querySelector("#dice");
const adviceId = document.querySelector("#advice-id");
const adviceText = document.querySelector("#advice-text");

dieToss.addEventListener("click", async () => {
  const apiUrl = "https://api.adviceslip.com/advice";

  const getAdvice = async () => {
    try {
      const response = await fetch(apiUrl);
      const advice = await response.json();
      // console.log(advice);

      adviceId.innerHTML = `Advice #${advice.slip.id}`;
      adviceText.innerHTML = `"${advice.slip.advice}"`;
    } catch (error) {
      console.error('Error fetching advice', error);
      adviceId.innerHTML = "Failed to fetch advice";
      adviceText.innerHTML = '"Check Your Internet Connection"';
    }
  };
  getAdvice();
});

// do NOT deploy this API key or upload onto Github
const API_KEY = "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";

const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", getMessage);

async function getMessage() {
  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello!" }],
      max_tokens: 100
    })
  };

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", options);
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error);
  }

}

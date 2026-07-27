

export async function chat(message: string) {

  const response = await fetch(
    "https://api.siliconflow.cn/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.LLM_API_KEY}`
      },
      body: JSON.stringify({
        model: 'Pro/zai-org/GLM-4.7',
        messages: [
          {
            role: "user",
            content: message
          }
        ]
      })
    }
  );


  const data = await response.json();

  return data.choices[0].message.content;
}
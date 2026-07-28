class SiliconFlowClient {
  private async request(body: Record<string, unknown>) {
   
    return await fetch("https://api.siliconflow.cn/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SILICONFLOW_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.SILTCONFLOW_MODEL_NAME,
        ...body
      })
    });
  }

  async chat(messages: []) {
    const response = await this.request({
        messages: messages
    })
    const result = await response.json()
    const content = result.choices[0].message.content
    return content
  }
}

export default SiliconFlowClient;

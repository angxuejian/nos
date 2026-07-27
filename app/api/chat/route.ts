import SiliconFlowClient from "@/lib/llm/siliconflow";



export async function POST(request: Request) {

    const body = await request.json()

    const { message } = body
    const client = new SiliconFlowClient();

    const result = await client.chat(message)
    return Response.json({ content: result })
}





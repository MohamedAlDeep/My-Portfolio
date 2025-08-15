import { single_blog } from "@/lib/airtable";

export async function POST(request: Request): Promise<Response>{
    const res = await request.json()
    
    const data = await single_blog(res.slug)
   
    return Response.json(data)

}


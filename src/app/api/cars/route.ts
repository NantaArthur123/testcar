import { supabase } from "@/lib/database/database";
import { NextResponse } from "next/server";

export async function GET() {
    const {data, error} = await supabase.from('cars').select('*');
    if (error) return NextResponse.json({error}, {status: 500})
        else{
    return NextResponse.json(data)
}
}

export async function POST(req: Request) {
    const body = await req.json();
    console.log(body)
    const {data, error} = await supabase.from('cars').insert([body]);
    if (error) return NextResponse.json({error}, {status: 500})
        else{
    return NextResponse.json(data)
}
}
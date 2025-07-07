import { supabase } from "@/lib/database/database";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: {params: {id: number}}) {
    const carID = await params.id;

    const { error } = await supabase.from('cars').delete().eq('car_id', carID)
    if (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }else {
        return NextResponse.json({message: "Car has been successfully destroyed"});
    }
}

export async function PATCH(req: Request, {params}: {params: {id:number}}) {
    const id = await params.id
    const body = await req.json()
    console.log(body)

    const {data, error} = await supabase.from("car").update(body).eq("car_id", id).select()
    if (error) return NextResponse.json({error},{status:500})
    return NextResponse.json(data)
    
}

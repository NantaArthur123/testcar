import { supabase } from "@/lib/database/database";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { param }: {param: {id: number}}) {
    const carID = param.id;

    const { error } = await supabase.from('cars').delete().eq('car_id', carID)
    if (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }else {
        return NextResponse.json({message: "Car has been successfully destroyed"});
    }
}

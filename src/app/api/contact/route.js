import Contact from "@/app/models/contact";
import dbConn from "@/app/utils/dbConn";
import { NextResponse } from "next/server";

export async function POST(req,res){
    try{
        const body = await req.json() ;
         dbConn() ;
        await Contact.create(body) ;
        return NextResponse.json({
            message:"Message sent successfully!" 
        },{
            status:200
        })
    }catch(e){
        return NextResponse.json(
            {message:"Server error, please try again!"},
            {status:500}
        )
    }
}
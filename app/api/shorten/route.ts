import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/db";
import {nanoid} from "nanoid";

export async function POST(request:NextRequest){
    const {url} = await request.json();

    const shortCode = nanoid(8);

    const shortenUrl = await prisma.url.create({
        data:{
            originUrl: url,
            shortCode

        }
    })

    return NextResponse.json({shortCode: shortenUrl.shortCode})
}
import { NextResponse } from "next/server";

export async function GET(request) {  
  try {
    const { searchParams } = new URL(request.url);
    const lon = searchParams.get("lon");
    const lat = searchParams.get("lat");
    const date = searchParams.get("date");
    const dim = searchParams.get("dim");
    console.log( lon , lat , date , dim);
    

    const response = await fetch(
      `${process.env.BACKEND_API_URL}?lon=${lon}&lat=${lat}&date=${date}&dim=${dim}&api_key=${process.env.API_KEY}`,
      { cache: "no-store" }
    );

    // Read the binary data from the response
    const imageBuffer = await response.arrayBuffer();

    // Return the binary data with appropriate hea
    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": "image/jpeg",                                                                    
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("Error fetching image:", err);
    return NextResponse.json(
      { message: "Fetching image failed" },
      { status: 500 }
    );
  }
}

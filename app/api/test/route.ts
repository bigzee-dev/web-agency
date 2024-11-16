import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // WHMCS API credentials and endpoint
  const apiIdentifier = process.env.WHMCS_API_IDENTIFIER;
  const apiSecret = process.env.WHMCS_API_SECRET;
  const whmcsUrl = "http://209.97.177.68/includes/api.php"; // Change to HTTPS in production

  const body = {
    action: "DomainWhois",
    identifier: "3P088mRyJSWv4TBZF7VuNepJUffFIVSB",
    secret: "J38LDmSGSVWLWMT9qm1oWcGOEvqRtPvP",
    domain: "example.com",
    responsetype: "json",
  };

  try {
    const response = await fetch(whmcsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(body as any).toString(),
    });

    if (!response.ok) {
      console.log("response not ok, dumbass");
      return NextResponse.error();
    }

    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

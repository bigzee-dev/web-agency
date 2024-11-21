import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();
    const { domain } = body;

    // Validate domain input
    if (!domain) {
      return NextResponse.json(
        { message: "Domain is required" },
        { status: 400 }
      );
    }

    // WHMCS API credentials and endpoint
    const apiIdentifier = process.env.WHMCS_API_IDENTIFIER;
    const apiSecret = process.env.WHMCS_API_SECRET;
    const whmcsUrl = "http://209.97.177.68/includes/api.php"; // Change to HTTPS in production

    // Make the API call using Axios with the request body as an object
    const response = await axios.post(
      whmcsUrl,
      {
        identifier: apiIdentifier,
        action: "DomainWhois",
        secret: apiSecret,
        domain: domain,
        responsetype: "json",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // This ensures the body is sent in URL-encoded format
        },
      }
    );
    console.log(response);
    const data = response.data;
    console.log(data);
    const { status } = data;

    // Handle WHMCS API response based on the status
    if (status === "available") {
      return NextResponse.json({
        available: true,
        message: `The domain ${domain} is available!`,
      });
    } else if (status === "unavailable") {
      return NextResponse.json({
        available: false,
        message: `The domain ${domain} is unavailable.`,
      });
    } else if (status === "error") {
      return NextResponse.json({
        available: false,
        message: "API is responding but there is an error",
      });
    } else {
      return NextResponse.json(
        { message: "Error checking domain availability" },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // Axios-specific error handling
      return NextResponse.json(
        { message: `An Axios error occurred: ${error.message}` },
        { status: 500 }
      );
    } else if (error instanceof Error) {
      // Generic error handling
      return NextResponse.json(
        { message: `An error occurred: ${error.message}` },
        { status: 500 }
      );
    } else {
      // Fallback for non-standard errors
      return NextResponse.json(
        { message: "An unexpected error occurred" },
        { status: 500 }
      );
    }
  }
}

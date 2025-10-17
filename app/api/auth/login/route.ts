import { NextResponse } from "next/server";

let mockDB: { username: string; password: string }[] = [
  { username: "test", password: "1234" },
];

export async function POST(req: Request) {
  const { username, password } = await req.json();
  const existingUser = mockDB.find(
    (user) => user.username === username && user.password === password
  );
  if (existingUser) {
    console.log("User logged in:", username);
    // Success → send status 200 and maybe a redirect URL
    return NextResponse.json({
      message: "Login successful",
      redirect: "/dashboard",
    });
  } else {
    console.log(" Login failed:", username);
    // Failure → send 401 Unauthorized
    return NextResponse.json(
      { message: "Invalid username or password" },
      { status: 401 }
    );
  }
}
// see all users (debug only)
export async function GET() {
  return NextResponse.json(mockDB);
}

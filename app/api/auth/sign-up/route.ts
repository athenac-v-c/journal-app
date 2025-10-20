import { NextResponse } from 'next/server'

let mockDB: { username: string; email:string; password: string }[] = []

export async function POST(req: Request) {
  const { username,email,password } = await req.json()
  const newUser = { username, email,password }
  mockDB.push(newUser)
  console.log('get a new user')
  return NextResponse.json({ message: 'saved', newUser:newUser })
}

export async function GET() {
  return NextResponse.json(mockDB)
}
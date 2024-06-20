import React from "react";

import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
 
export default function DeleteQuery(request: NextRequest) {
  const nextUrl = request.nextUrl
  nextUrl.searchParams.delete('register')
  return NextResponse.rewrite(nextUrl)
}
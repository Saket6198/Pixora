// import { NextResponse } from "next/server";
// import { auth } from "./src/server/auth"   // import auth from 
// export default auth((req) => {
//   console.log("🔥 Middleware running at", req.nextUrl.pathname);   
//     const url = req.nextUrl
//     const isAuthenticated = !!req.auth; 

//     if(isAuthenticated &&
//          req.nextUrl.pathname.startsWith("/login")
//         ||
//         req.nextUrl.pathname.startsWith("/register")
//     ){
//         return NextResponse.redirect(new URL("/dashboard", url));
//     }

//     if (!isAuthenticated) {
//         return NextResponse.redirect(new URL("/login", url));
//     }


// });

// export const config = {
//     matcher: ["/dashboard", "/dashboard/:path*"],
// }

// // import { NextResponse } from "next/server";

// // export default function middleware(req: any) {
// //     console.log("🔥 Middleware running at", req.nextUrl.pathname);
// //     return NextResponse.next();
// // }


import { auth } from "./src/server/auth/index";   // import auth from 

export const runtime = "edge";

export default auth((req) => {
    console.log("INSIDE MIDDLEWARE");
    console.log("req.auth:", req.auth); // <-- check if it's set    
    const isAuthenticated = !!req.auth; 

    if (!isAuthenticated) {
        const newUrl = new URL("/login", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }
});

export const config = {
    matcher: ["/dashboard", "/dashboard/:path*"],
}
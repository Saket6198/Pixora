"use client";

import { signout } from "../actions/auth";

export default function Page(){
    return (
        <div>
            <p>This is a dashboard</p>
            <button onClick={() => signout()}>Sign Out </button>
        </div>
    );
}
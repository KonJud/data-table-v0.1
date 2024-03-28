import React from "react"

import { Payment, columns } from "@/app/payments/columns";
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "489e1d42",
            amount: 125,
            status: "processing",
            email: "example@gmail.com",
        },
        {
            id: "480e1d42",
            amount: 185,
            status: "processing",
            email: "example2@gmail.com",
        },
        {
            id: "479e1d42",
            amount: 225,
            status: "pending",
            email: "example3@gmail.com",
        },
        {
            id: "489f1d42",
            amount: 300,
            status: "processing",
            email: "example4@gmail.com",
        },
        {
            id: "4832e1d42",
            amount: 125,
            status: "processing",
            email: "example5@gmail.com",
        },
        {
            id: "489e1c42",
            amount: 200,
            status: "pending",
            email: "exampl6e@gmail.com",
        },
        {
            id: "4209e1d42",
            amount: 555,
            status: "pending",
            email: "example7@gmail.com",
        },
        {
            id: "489ed1d42",
            amount: 125,
            status: "processing",
            email: "example8@gmail.com",
        },
        {
            id: "47d9e1d42",
            amount: 125,
            status: "processing",
            email: "example9@gmail.com",
        },
        {
            id: "189e1d42",
            amount: 1000,
            status: "pending",
            email: "example10@gmail.com",
        },
        {
            id: "4854e1d42",
            amount: 125,
            status: "processing",
            email: "example11@gmail.com",
        },
    ]
}

export default async function Page () {
    const data = await getData()
    
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
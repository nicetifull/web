"use client";
import React from "react";
import { Input } from "@nextui-org/react";

export default function Form() {
  return (
    <>
       <Input
         
          radius="sm"
          type="email"
          label="Email"
          placeholder="Enter your email"
          defaultValue="junior@nextui.org"
          className="max-w-[220px]"
        />
    </>
  );
}

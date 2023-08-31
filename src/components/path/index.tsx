"use client";
import React from "react";
import { usePathname } from "next/navigation";

export const currentPath = (): string => {
    const path = usePathname();
    const pathArr = path.split("/");
    return pathArr[pathArr.length - 1];
};

export const getPathSegments = (): string[] => {
    const path = usePathname();
    const pathArr = path.split("/");
    return pathArr;
};
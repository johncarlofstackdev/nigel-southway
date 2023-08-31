"use client";
import React from "react";
import Link from "next/link";
import { currentPath, getPathSegments } from "@/components/path";

interface breadcrumbsProps {
    styles: any
};

const Breadcrumbs: React.FC<breadcrumbsProps> = ({ styles }) => {
    const pathSegments = getPathSegments();

    // === By Default Home does contain 2 array Empty String
    if(!pathSegments[0] && !pathSegments[1]){
        // if did then pop the last inxex of the array
        pathSegments.pop();
    }

    return (
        <div className={styles.breadcrumbs}>
            <ul>
                {pathSegments.map((value, i) => (
                    <li key={i}>{!value ? "Home" : value}</li>
                ))}
            </ul>
        </div>
    );
}

export default Breadcrumbs;
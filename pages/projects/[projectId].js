import React, {useEffect, useState} from 'react';
import DefaultLayout from "../../components/DefaultLayout";
import {useRouter} from "next/router";

export default function ProjectCardPage() {

    const router = useRouter();

    return (
        <DefaultLayout>
            <h1>One Project</h1>

            <p>
                direct get projectId from router - <b>{router.query.projectId}</b>
            </p>
        </DefaultLayout>
    );
}

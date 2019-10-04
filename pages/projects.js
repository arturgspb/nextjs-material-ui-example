import React, {useEffect, useState} from 'react';
import Router from 'next/router'
import DefaultLayout from "../components/DefaultLayout";
import SimpleTable from "../components/project/SimpleTable";

export default function ProjectsPage() {

    return (
        <DefaultLayout>
            <h1>Projects page</h1>

            <SimpleTable />
        </DefaultLayout>
    );
}

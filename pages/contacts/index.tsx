import Head from 'next/head'
import Link from "next/link";
import {GetStaticProps} from "next";
import {ContactType} from "../../types/types";
import { FC } from 'react';

type ContactsTypeProps = {
    contacts: Array<ContactType>
}

export const getStaticProps:GetStaticProps = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()

        if(!data) {
            return {
                notFound: true
            }
        }

        return {
            props: {contacts: data}
        }
}

const Contacts:FC<ContactsTypeProps> = ({contacts}) => {

    return(
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <h1>Contacts:</h1>
            <ul>
                {contacts && contacts.map(({id, name}) => <li key={id}><Link key={id} href={`/contacts/${id}`}>{name}</Link></li>)}
            </ul>
        </>
    )
}

export default Contacts

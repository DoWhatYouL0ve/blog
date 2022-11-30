import {ContactType} from "../types/types";
import {FC} from "react";

type ContactInfoPropsType = {
    contact: ContactType
}

const ContactInfo: FC<ContactInfoPropsType> = ({contact}) => {

    const {name, email, address} = contact || {}
    const {street, suite, city, zipcode} = address || {}

    if(!contact) {
        return <h1>Sorry, there is no information about this user</h1>
    }

    return (
        <>
            <h1>{name}</h1>
            <div>
                <strong>Email: </strong> {email}
            </div>
            <div>
                <strong>Address: </strong> {`${street}, ${suite}, ${city}, ${zipcode}`}
            </div>
        </>
    )
}

export default ContactInfo
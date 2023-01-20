export default function Counter() {

    const handleChange = (name, newValue) => {
        const error = validateInput(name, newValue);
        dispatch({
            key: name,
            payload: { newValue, error }
        });
        }

    return (
        <>
        <form>
            <PersonalDetails />
            <AddressDetails />
            <ContactDetails />
            <SubmitForm />
        </form>      
        </>
    )
}
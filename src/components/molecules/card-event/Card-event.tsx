
export const CardEvent = (event: any) => {
    const {title, user, notes} = event.event
    
    return (
        <>
            <strong>{ title }</strong>
            <span> - { user?.name }</span>
        </>
    )
}

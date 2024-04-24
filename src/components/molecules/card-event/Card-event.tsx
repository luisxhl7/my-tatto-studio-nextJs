import './Card-event.scss';

export const CardEvent = (event: any) => {
    const {title, appointmentType} = event.event
    
    return (
        <div className="card-event">
            <strong>{ appointmentType }</strong>
            <span>{ title }</span>
        </div>
    )
}

import './IncidentCard.css'

const IncidentCard = ({ incident }) => {
  return (
    <div className="incident-card-cmp">
      <p>título: {incident.title}</p>
      <p>descripción: {incident.description}</p>
      <p>fecha de creación: {incident.created_at}</p>
      <p>ubicación: {incident.location}</p>
      <p>bloque: {incident.block}</p>
      <p>edificio: {incident.building}</p>
      <p>departamento: {incident.department}</p>
      <p>prioridad: {incident.priority}</p>
      <p>estado: {incident.status}</p>
      <p>tipo: {incident.type}</p>
      <p>responsable: {incident.userId}</p>
      <p>archivado: {incident.archived}</p>
    </div>
  )
}

IncidentCard.propTypes = null

export default IncidentCard
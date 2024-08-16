import IncidentCard from './IncidentCard'
import './IncidentLane.css'

const IncidentLane = ({ incidents }) => {
  return (
    <div className="incidents-lane">
      {incidents.map((incident) => (
        <IncidentCard key={incident.incidentId} incident={incident} />
      ))}
    </div>
  )
}

IncidentLane.propTypes = null

export default IncidentLane
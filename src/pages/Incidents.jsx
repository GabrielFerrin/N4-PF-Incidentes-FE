import './Incidents.css'
import { useContext, useEffect, useRef, useState } from "react"
import { DataContext } from "../context/DataContext"
import { useMutation } from 'react-query'
import IncidentLane from '../components/IncidentLane'
import { useNavigate } from 'react-router'

const Incidents = () => {
  const { subUser, getIncidentsReq } = useContext(DataContext)
  const [incidents, setIncidents] = useState([])
  const [width, setWidth] = useState(0)
  const [selected, setSelected] = useState(1)
  const navigate = useNavigate()
  const container = useRef(null)

  const handleResize = () => {
    if (container.current) {
      const rect = container.current.getBoundingClientRect()
      setWidth(rect.width)
    }
  }

  useEffect(() => {
    if (container.current) {
      handleResize()
      const currentContainer = container.current
      const resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(currentContainer)
      return () => {
        if (currentContainer) { resizeObserver.unobserve(currentContainer) }
        resizeObserver.disconnect()
      };
    }
  }, []);


  useEffect(() => {
    if (Object.keys(subUser).length !== 0) {
      getIncidents.mutate(subUser.token)
    }
    // eslint-disable-next-line
  }, [subUser])

  const getIncidents = useMutation(getIncidentsReq, {
    onSuccess: (data) => {
      if (data.success) {
        setIncidents(data.incidents)
      } else {
        navigate('/dashboard/users')
      }
    },
    onError: () => {
      navigate('/dashboard/users')
    }
  })

  return (
    <div className="incidents-cmp">
      <h1>Incidents</h1>
      {width < 850 && (
        <div className="incidents-header">
          <p onClick={() => setSelected(1)}>Abiertas</p>
          <p onClick={() => setSelected(2)}>En progreso</p>
          <p onClick={() => setSelected(3)}>Completadas</p>
        </div>
      )}
      <div ref={container} className="cards-incidents">
        <IncidentLane incidents={incidents} />
        <IncidentLane incidents={incidents} />
        <IncidentLane incidents={incidents} />
      </div>
    </div>
  )
}

export default Incidents

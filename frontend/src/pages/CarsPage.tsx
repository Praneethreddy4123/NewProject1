import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CarsPage.css'

interface Car {
  id: string
  make: string
  model: string
  year: number
  pricePerDay: number
  imageUrl: string
  available: boolean
}

function CarsPage() {
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockCars: Car[] = [
      {
        id: '1',
        make: 'Toyota',
        model: 'Camry',
        year: 2023,
        pricePerDay: 50,
        imageUrl: '🚗',
        available: true
      },
      {
        id: '2',
        make: 'Honda',
        model: 'Civic',
        year: 2023,
        pricePerDay: 45,
        imageUrl: '🚙',
        available: true
      },
      {
        id: '3',
        make: 'Ford',
        model: 'Mustang',
        year: 2023,
        pricePerDay: 80,
        imageUrl: '🏎️',
        available: false
      }
    ]
    setCars(mockCars)
    setLoading(false)
  }, [])

  if (loading) return <div className="container"><p>Loading cars...</p></div>
  if (error) return <div className="container"><p className="error">{error}</p></div>

  return (
    <div className="cars-page">
      <div className="container">
        <h1>Available Cars</h1>
        <div className="cars-grid">
          {cars.map(car => (
            <div key={car.id} className="car-card">
              <div className="car-image">{car.imageUrl}</div>
              <div className="car-info">
                <h3>{car.year} {car.make} {car.model}</h3>
                <p className="price">${car.pricePerDay} per day</p>
                <p className={`availability ${car.available ? 'available' : 'unavailable'}`}>
                  {car.available ? 'Available' : 'Not Available'}
                </p>
                <Link 
                  to={`/cars/${car.id}`} 
                  className={`btn btn-small ${!car.available ? 'disabled' : ''}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarsPage
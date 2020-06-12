import React, {useState} from 'react'
import axios from 'axios'

const SmurfForm = () => {
    const [newSmurf, setNewSmurf] = useState()

    const handleChange =e => {
        e.preventDefault()
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        axios.post('http://localhost:3333/smurfs')
        .then(res => {
        setNewSmurf(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }

      return (
          <form onSubmit={handleSubmit}>
              <div>
                  <h2>Welcome a New Smurf to the Village!</h2>
              </div>

              <label> Name:
                  <input
                  type='text'
                  name='name'
                  value={newSmurf.name}
                  onChange={handleChange}>
                  </input>
              </label>
              
              <label> Age:
                  <input
                  type='text'
                  name='age'
                  value={newSmurf.age}
                  onChange={handleChange}>
                  </input>
              </label>

              <label> Height:
                  <input
                  type='text'
                  name='name'
                  value={newSmurf.height}
                  onChange={handleChange}>
                  </input>
              </label>

              <button >Add Smurf</button>

          </form>
      )
}

export default SmurfForm
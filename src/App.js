import React, { useState, useEffect } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'

const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

const App = () => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [value, setValue] = useState('random person');
  const [title, setTitle] = useState('name');

  const getPerson = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];

    const { phone, email } = person
    const { large: image } = person.picture
    const { password } = person.login
    const { first, last } = person.name
    const { dob: { age }, } = person
    const { street: { number, name }, } = person.location

    const newPerson = {
      image,
      phone,
      age,
      email,
      password,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    }
    setPerson(newPerson)
    setLoading(false)
    setTitle('name')
    setValue(newPerson.name)

  }
  //set getPerson
  useEffect(() => {
    getPerson()
  }, [])

  const handleValue = (e) => {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label
      setTitle(newValue)
      setValue(person[newValue])
    }
  }
  return (
    <div>
      <div>
        <img src={(person && person.image) || defaultImage} alt='random user' />
        <p>My {title} is</p>
        <p>{value}</p>
      </div>

      <div>
        <button className="icon" data-label='name' onMouseOver={handleValue}>
          <FaUser />
        </button>
        <button className="icon" data-label='email' onMouseOver={handleValue}>
          <FaEnvelopeOpen />
        </button>
        <button className="icon" data-label='age' onMouseOver={handleValue}>
          <FaCalendarTimes />
        </button>
        <button className="icon" data-label='street' onMouseOver={handleValue}>
          <FaMap />
        </button>
        <button className="icon" data-label='phone' onMouseOver={handleValue}>
          <FaPhone />
        </button>
        <button className="icon" data-label='password' onMouseOver={handleValue}>
          <FaLock />
        </button>
      </div>

      <button onClick={getPerson}>
        {loading ? 'loading' : 'random user'}
      </button>
    </div>
  );
};

export default App;
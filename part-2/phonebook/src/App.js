import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", phone: 21314 }]);
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim().length === 0 || phoneNumber.trim().length === 0) {
      alert("Please, add a valid name and phone number");
      return;
    }

    let nameExists =
      persons?.filter((person) => person.name === newName).length > 0;
    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons([...persons, { name: newName, phone: phoneNumber }]);
    setNewName("");
    setPhoneNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: 
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          number: 
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons?.map((person) => (
        <p key={person.phone}>{person.name} {person.phone}</p>
      ))}
    </div>
  );
};

export default App;

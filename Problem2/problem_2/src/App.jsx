import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const fetchRandomUser = async () => {
    try {
      const randomId = Math.floor(Math.random() * 83) + 1;
      const response = await axios.get(`https://swapi.dev/api/people/${randomId}`);
      const user = response.data;
      const newUser = {
        name: user.name,
      };
      setUsers((prevUsers) => [...prevUsers, newUser]);
    } catch (error) {
      console.error('Error fetching random user:', error);
    }
  };
  const deleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        <h3 className="text-2xl font-semibold text-center mb-4 text-blue-600">Star Wars Characters</h3>
        <div className="text-center mb-4">
          <button
            onClick={fetchRandomUser}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add Record
          </button>
        </div>
        <div className="space-y-4">
          {users.map((user, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200">
              <span className="text-lg text-gray-700">{user.name}</span>
              <button
                onClick={() => deleteUser(index)}
                className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  
export default App;

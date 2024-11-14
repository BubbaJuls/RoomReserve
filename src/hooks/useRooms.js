import { useState, useEffect } from 'react';
import { api } from '../api';

const useRooms = () => {
  const [roomData, setRoomData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await api.get('/rooms'); // Fetch rooms from the backend
        setRoomData(response.data);
      } catch (error) {
        setError('Failed to fetch room data');
        console.error('Failed to fetch room data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoomData();
  }, []); // Empty dependency array ensures this runs once on mount

  return { roomData, loading, error };
};

export default useRooms;

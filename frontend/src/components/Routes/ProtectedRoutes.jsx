import { StoriesContext } from '@/context/StoriesContext';
import { useAuthContext } from '@/hooks/useAuthContext'
import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { baseUrl } from '../../../Url';

function ProtectedRoutes({ children }) {
    const { user, isLoading, token } = useAuthContext();
    const { dispatch } = useContext(StoriesContext);
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        if (isLoading) return;
        if (!user) return;

        const fetchStories = async () => {
            try {
                const response = await fetch(`${baseUrl}/api/kahani/all-stories`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                })
                    
                if (!response) {
                    throw new Error('Failed to fetch stories');
                }

                const result = await response.json();
                
                const AllstoriesArray = result['all_stories'];
                
                dispatch({ type: 'SET_STORIES', payload: AllstoriesArray });
                setFetched(true); // Set fetched to true to avoid future fetches
            } catch (error) {
                console.error('Error fetching stories:', error);
            }
        };

        if (token && !fetched) {
            fetchStories();
        }

    }, [user, isLoading, fetched, dispatch]);



    if (isLoading) {
        return <div>Is Loading</div>;
    }

    if (!user) {
        return <Navigate to={'/'} />;
    }

    return children;
}

export default ProtectedRoutes

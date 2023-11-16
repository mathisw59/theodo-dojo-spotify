const apiToken: string = 'Bearer BQBkKlrYWmtwp65T6ofkeLLKt8OG8RThFjMaX2q6xnKjkGw_JN7OjbRfTDqfEt77lCOZJQ3kjDp_NkCGXRXP8xtPOAh-s0X_SZSeu6LKaSgGPJvohCYt0ErU2bHaZIftVxa5YYXJkJcZje-6xJtUj1LP_q_ri1p9K5x6QfPsWKqag_tXtLQYmzqOBuZniGrWLi4n';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };

  return data.items;
};
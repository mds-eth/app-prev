async function requestFaker(method, route, params) {

  try {

    const response = await fetch(`http://localhost:8080/${route}`, {
      method,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('[@auth-token]')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });

    return response;
  } catch (error) {
    return false;
  }
}

export default requestFaker;
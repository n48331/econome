function getData(): Promise<any> {
    return fetch('https://script.google.com/macros/s/AKfycbxddHy83wqbXKy6ErTwg6GbV6gzlujl7nkezOmFggt1ahgxpdP1Lb0JyJGNb8k018uY/exec')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Do something with the data here
            return data; // Return the data
        })
        .catch(error => {
            console.error('Error:', error);
            throw error; // Throw the error to be caught by the caller
        });
}

export { getData}
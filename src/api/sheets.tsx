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
function postData(name: string, amount: number, date: string): Promise<any> {
    const data = {
        Name: name,
        Amount: amount,
        Date: date
    };
    const formData = new FormData();
    formData.append("Name", data.Name);
    formData.append("Amount", data.Amount.toString());
    formData.append("Date", data.Date);
    console.log(formData );

    return fetch('https://script.google.com/macros/s/AKfycbxddHy83wqbXKy6ErTwg6GbV6gzlujl7nkezOmFggt1ahgxpdP1Lb0JyJGNb8k018uY/exec', {
        method: 'POST',
        body: formData,
        
    })
        .then(response => {
          console.log(response);
          
        })
        .catch(error => {
            console.error('Error:', error);
            throw error; // Throw the error to be caught by the caller
        });
}

export { getData, postData };


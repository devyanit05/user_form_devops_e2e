document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    console.log('Form submitted with data:', { name, email, age });

    try {
        const response = await fetch('http://backend_host:5000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, age }),
        });

        const data = await response.json();
        console.log('Response from server:', data);

        if (response.ok) {
            alert('User created successfully');
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('Error during fetch:', error);
        alert('An error occurred while creating the user');
    }
});
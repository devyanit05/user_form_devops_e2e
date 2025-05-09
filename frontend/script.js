const backendUrl = window?.env?.BACKEND_URL || 'http://localhost:5000';

// submit form data to backend
document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    console.log('Form submitted with data:', { name, email, age });

    try {
        const response = await fetch(`${backendUrl}/api/users`, {
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

// fetch all user on clicking view all users button
document.getElementById('viewUsers').addEventListener('click', async () => {
    try {
        const response = await fetch(`${backendUrl}/api/users`);
        const data = await response.json();
        console.log('All users:', data);

        if (response.ok) {
            const userTableBody = document.querySelector('#userTable tbody');

            userTableBody.innerHTML = '';
            data.forEach(user => {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${user.name}</td><td>${user.email}</td><td>${user.age}</td>`;
                userTableBody.appendChild(tr);
            });
            alert('Users fetched successfully');
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('Error during fetch:', error);
        alert('An error occurred while fetching users', error);
    }
});
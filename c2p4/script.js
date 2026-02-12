async function fetchData() {
    const loading = document.getElementById("loading");
    const dataBody = document.getElementById("dataBody");

    try {
        loading.style.display = "block";

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const users = await response.json();

        dataBody.innerHTML = "";

        users.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            `;
            dataBody.appendChild(row);
        });

    } catch (error) {
        alert("Error fetching data");
        console.error(error);
    } finally {
        loading.style.display = "none";
    }
}

fetchData();

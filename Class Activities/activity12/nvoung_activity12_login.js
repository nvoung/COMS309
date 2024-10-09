
async function fetchUser() {
    document.getElementById("loginuser").innerHTML = `Authenticating...`;
    return new Promise((resolve, reject) => {
        fetch("./nvoung_Challenge_fetchuser_login_Async_Await.json")
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

function login(users, userInput, passwordInput) {
    if (users.user === userInput && users.passwords === passwordInput) {
        document.getElementById("loginuser").innerHTML = "user and password correct";
    } else {
        document.getElementById("loginuser").innerHTML = "user and password incorrect";
    }
}

async function useAdmin(userInput, passwordInput) {
    try {
        const users = await fetchUser();
        login(users, userInput, passwordInput);
    } catch (error) {
        document.getElementById("loginuser").innerHTML = "Authentication failed";
    }
}

document.getElementById("loginButton").addEventListener("click", (event) => {
    event.preventDefault();

    const userInput = document.getElementById("userInput").value;
    const passwordInput = document.getElementById("passwordInput").value;
    useAdmin(userInput, passwordInput);
});
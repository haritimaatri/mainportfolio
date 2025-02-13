document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById('theme-toggle');
    const body = document.body;
    const emoji = document.getElementById('emoji');

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark-mode') {
        body.classList.add('dark-mode');
        toggle.checked = true;
        emoji.textContent = '🌙';
    }

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            emoji.textContent = '🌙';
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
            emoji.textContent = '🌞';
        }
    });

    // Chat Simulation
    const messages = [
        "👋 Hi there! How can I assist you today?",
        "I specialize in web development and cybersecurity! 🔒",
        "Feel free to check out my projects below! 🚀"
    ];

    let index = 0;

    function displayMessage() {
        if (index < messages.length) {
            let msgElement = document.createElement("div");
            msgElement.classList.add("message", "bot");
            msgElement.textContent = messages[index];
            chatBox.appendChild(msgElement);
            chatBox.scrollTop = chatBox.scrollHeight;
            index++;
            setTimeout(displayMessage, 2000);
        }
    }

    setTimeout(displayMessage, 1000);

    document.getElementById("chat-input").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            let userMsg = event.target.value.trim();
            if (userMsg) {
                let userElement = document.createElement("div");
                userElement.classList.add("message", "user");
                userElement.textContent = userMsg;
                chatBox.appendChild(userElement);
                chatBox.scrollTop = chatBox.scrollHeight;
                event.target.value = "";
                setTimeout(displayMessage, 1000);
            }
        }
    });
});

'use strict';

const usernamePage = document.querySelector('#username-page');
const chatPage = document.querySelector('#chat-page');
const usernameForm = document.querySelector('#usernameForm');
const messageForm = document.querySelector('#messageForm');
const messageInput = document.querySelector('#message');
const messageArea = document.querySelector('#messageArea');
const connectingElement = document.querySelector('.connecting');

let stompClient;
let username;

const colors = [
    '#2196F3', '#32c787', '#00BCD4', '#ff5652',
    '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
];

// Connexion WebSocket
function connect(event) {
    event.preventDefault();
    username = document.querySelector('#name').value.trim();

    if (username) {
        usernamePage.classList.add('hidden');
        chatPage.classList.remove('hidden');

        const socket = new SockJS('/ws');
        stompClient = Stomp.over(socket);

        stompClient.connect({}, () => {
            // On souscrit directement au topic pour recevoir les messages
            stompClient.subscribe('/topic/public', onMessageReceived);
            connectingElement.classList.add('hidden');
        }, onError);
    }
}

// Envoi d'un message
function sendMessage(event) {
    event.preventDefault();
    const messageContent = messageInput.value.trim();

    if (messageContent && stompClient) {
        const chatMessage = {
            sender: username,
            content: messageContent,
            type: 'CHAT' // On garde le type CHAT, mais on ignore JOIN/LEAVE côté serveur
        };
        stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage));
        messageInput.value = '';
    }
}

// Réception des messages (simplifiée : seulement CHAT)
function onMessageReceived(payload) {
    const message = JSON.parse(payload.body);

    // On ignore les messages de type JOIN/LEAVE
    if (message.type !== 'CHAT') return;

    const messageElement = document.createElement('li');
    messageElement.classList.add('chat-message');

    // Avatar avec couleur basée sur le nom
    const avatarElement = document.createElement('div');
    avatarElement.textContent = message.sender[0];
    avatarElement.style.backgroundColor = getAvatarColor(message.sender);
    messageElement.appendChild(avatarElement);

    // Nom de l'expéditeur
    const usernameElement = document.createElement('span');
    usernameElement.textContent = message.sender;
    messageElement.appendChild(usernameElement);

    // Contenu du message
    const textElement = document.createElement('p');
    textElement.textContent = message.content;
    messageElement.appendChild(textElement);

    messageArea.appendChild(messageElement);
    messageArea.scrollTop = messageArea.scrollHeight;
}

// Génère une couleur pour l'avatar (inchangé)
function getAvatarColor(sender) {
    let hash = 0;
    for (let i = 0; i < sender.length; i++) {
        hash = 31 * hash + sender.charCodeAt(i);
    }
    return colors[Math.abs(hash % colors.length)];
}

// Gestion des erreurs (inchangé)
function onError(error) {
    connectingElement.textContent = 'Erreur de connexion. Rafraîchissez la page.';
    connectingElement.style.color = 'red';
}

// Événements
usernameForm.addEventListener('submit', connect, true);
messageForm.addEventListener('submit', sendMessage, true);
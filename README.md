# MessageProjet - Projet de Messagerie en Temps Réel

## Description
MessageProjet est une application de messagerie en temps réel développée avec Spring Boot et WebSocket. Elle permet aux utilisateurs d'échanger des messages instantanément dans une interface conviviale.

## Fonctionnalités principales
- 🔄 Communication en temps réel via WebSocket
- 📨 Envoi et réception de messages instantanés
- 👥 Affichage des notifications (connexion/déconnexion des utilisateurs)
- � Interface utilisateur responsive

## Structure du projet
```
MessageProjet/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/bilel/messageprojet/
│   │   │       ├── chat/                  # Composants liés au chat
│   │   │       │   ├── ChatController.java   # Contrôleur pour les messages
│   │   │       │   ├── ChatMessage.java      # Modèle de message
│   │   │       │   └── MessageType.java      # Types de messages
│   │   │       ├── config/
│   │   │       │   └── WebSocketConfig.java  # Configuration WebSocket
│   │   │       └── MessageProjetApplication.java # Classe principale
│   │   └── resources/
│   │       ├── static/                   # Ressources statiques
│   │       │   ├── css/                  # Feuilles de style
│   │       │   └── js/
│   │       │       └── main.js           # Script principal front-end
│   │       ├── templates/                # Templates HTML
│   │       └── application.properties    # Configuration de l'application
│   └── test/                             # Tests unitaires
├── target/                               # Fichiers compilés
├── pom.xml                               # Configuration Maven
└── ...                                   # Autres fichiers de configuration
```

## Technologies utilisées
- **Backend**:
  - Spring Boot
  - WebSocket (STOMP)
- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript
- **Outils**:
  - Maven
  - Git

## Prérequis
- JDK 11+
- Maven 3.6+
- Navigateur web moderne

## Installation et exécution
1. Cloner le dépôt:
   ```bash
   git clone [URL_DU_DEPOT]
   ```
2. Se placer dans le répertoire du projet:
   ```bash
   cd MessageProjet
   ```
3. Compiler et exécuter avec Maven:
   ```bash
   mvn spring-boot:run
   ```
4. Accéder à l'application dans votre navigateur:
   ```
   http://localhost:8080
   ```

## Contribution
Les contributions sont les bienvenues! Merci de suivre ces étapes:
1. Forker le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalite`)
3. Committer vos changements (`git commit -m 'Ajout d'une super fonctionnalité'`)
4. Pousser vers la branche (`git push origin feature/ma-fonctionnalite`)
5. Ouvrir une Pull Request

## Licence
Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## Auteur
captainharissa - Bilel BEN SAID

---

✨ Profitez de MessageProjet! ✨

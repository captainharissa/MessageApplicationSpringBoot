package com.bilel.messageprojet.chat;

public class ChatMessage {
    private MessageType type;
    private String content;
    private String sender;

    // Constructeurs


    public ChatMessage(MessageType type, String content, String sender) {
        this.type = type;
        this.content = content;
        this.sender = sender;
    }

    // Builder
    public static ChatMessageBuilder builder() {
        return new ChatMessageBuilder();
    }

    // Getters
    public MessageType getType() {
        return type;
    }

    public String getContent() {
        return content;
    }

    public String getSender() {
        return sender;
    }

    // Setters
    public void setType(MessageType type) {
        this.type = type;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    // Builder class
    public static class ChatMessageBuilder {
        private MessageType type;
        private String content;
        private String sender;

        ChatMessageBuilder() {
        }

        public ChatMessageBuilder type(MessageType type) {
            this.type = type;
            return this;
        }

        public ChatMessageBuilder content(String content) {
            this.content = content;
            return this;
        }

        public ChatMessageBuilder sender(String sender) {
            this.sender = sender;
            return this;
        }

        public ChatMessage build() {
            return new ChatMessage(type, content, sender);
        }
    }
}

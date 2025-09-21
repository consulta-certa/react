// WatsonChat.tsx
import React from 'react';
import { WebChatContainer, setEnableDebug } from '@ibm-watson/assistant-web-chat-react';

const webChatOptions = {
  integrationID: 'aa86954f-4b74-47ca-b5d1-96b96262d81e',
  region: 'us-south',
  serviceInstanceID: 'd61db492-76f5-4eae-97da-0bd20514cee2',
  // subscriptionID: 'opcional para planos enterprise'
};

setEnableDebug(true); // Ativa logs de depuração (opcional)

const WatsonChat: React.FC = () => {
  return <WebChatContainer config={webChatOptions} />;
};

export default WatsonChat;
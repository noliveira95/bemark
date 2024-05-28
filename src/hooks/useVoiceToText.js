import { useState, useRef, useEffect } from 'react';

const useVoiceToText = (options = {}) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      console.error('Browser not supported');
      return;
    }
    recognitionRef.current = new window.webkitSpeechRecognition();
    const recognition = recognitionRef.current;
    recognition.interimResults = options.interimResults || true;
    recognition.lang = options.lang || 'en-US';
    recognition.continuous = options.continuous || false;

    if ('webkitSpeechGrammarList' in window) {
      const grammar =
        '#JSGF V1.0; grammar punctuation; public <punc> = . | , | ? | ! | ; | : ;';
      const speechRecognitionList = new window.webkitSpeechGrammarList();
      speechRecognitionList.addFromString(grammar);
      recognition.grammars = speechRecognitionList;
    }

    recognition.onresult = (e) => {
      let text = '';
      let i = 0;
      for (i; i < e.results.length; i++) {
        text += e.results[i][0].transcript;
        setTranscript(text);
      }
    };

    recognition.onerror = (e) =>
      console.error('Speech recognition error', e.error);

    recognition.onend = () => {
      setIsListening(false);
      setTranscript('');
    };

    return () => recognition.stop();
  }, [
    options.continuous,
    options.grammar,
    options.interimResults,
    options.lang,
  ]);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  return { isListening, transcript, startListening, stopListening };
};

export default useVoiceToText;

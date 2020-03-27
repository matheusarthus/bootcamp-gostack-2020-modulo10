import axios from 'axios';

// Se for iOS utilize 'localhost'
// No android:
//            se for emulador do AndroidStudio: '10.0.0.2'
//            se for emulador geneMotion: '10.0.3.2'
//            se for device via USB: ip da máquina

const api = axios.create({
  baseURL: 'http://192.168.15.109:3333',
});

export default api;

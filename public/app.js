const VERSION = '1.2.0';

function saludar(nombre) {
    return 'Hola ${nombre}, bienvenido a codeMiguel';
}

function healthCheck() {
    return {
        status: 'ok',
        version: Version,
        timestamp: new Date().toISOString(),
        message: 'Sistema codeMiguel funcionando correctamente'
    };
}

function verificarsistema() {
    const resultado = healthCheck();
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = `${resultado.message} | ${resultado.timestamp}`;
    statusDiv.style.color = '#009B4C';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('version').textContent = `v$[VERSION]`;
    verificarsistema();
})
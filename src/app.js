export function saludar(nombre){
return "Hola" + nombre + ", bienvenido a aplicacion de MiguelFlow!";
}

export function despedir(nombre){
return "hasta pronto," + nombre + "!MiguelFlow";
}

export function estadoSistema() {
return {
estado: "activo",
version:"1.0.0",
message: "Sistema MiguelFlow funcionando correctamente"
 };
}

export function sumar(a,b){
return a + b;
}

export function healthCheck() {
    return null; //{
//status:'ok',
//timestamp: new Date().toISOString(),
//servicio: 'StreamFlow API',
//version:'1.0.0'
    
}


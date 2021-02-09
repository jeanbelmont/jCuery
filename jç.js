/*!
 * jÇuery JavaScript Library v0.0.1
 * https://github.com/jeanbelmont/jCuery
 * ES version 2018
 * Çopyright ç
 * Sin licencia para usarse sin mi permiso
 *
 * Date: 2021-09-02T06:41z
 */

// Quick Selector al estilo jQuery utilizo el caracter 'ç' para que no haya conflicto
const ç = _ => { let º = document.querySelectorAll(_); return º.length > 1 ? º : º[0] };

// Coloca varios atributos a un elemento HTML
// toma dos parametros 1=elemento que vamos a modificar 2=objeto con todos los atributos que queremos
// ejemplo: setAttributes(elem, {"src": "http://example.com/imagen.png", "width": "200", "height": "100" ...});
const setAttributes = (elem, attrs) => {
   for (let key in attrs) {
      elem.setAttribute(key, attrs[key]);
   }
}

// regresa la url del sitio, toma dos parametros 'string' y boolean por omision el boolean es false
// si el boolean es true regresa la url + ruta completa
// tomemos como ejemplo http://dominio.com/ruta/actual
// site_url();  http://dominio.com
// site_url('?foo=bar');  http://dominio.com?foo=bar 
// site_url('?foo=bar', true);  http://dominio.com/ruta/actual?foo=bar 
// site_url(null, true);  http://dominio.com/ruta/actual
const site_url = (str, bool) => {
   Object.is(bool, true) ? bool = window.location.href : bool = window.location.origin;
   if (typeof str !== 'string') str = '';
   return bool + str;
}

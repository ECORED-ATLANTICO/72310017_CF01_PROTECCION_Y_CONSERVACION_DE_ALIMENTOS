(function(e){function a(a){for(var i,n,s=a[0],c=a[1],l=a[2],d=0,u=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,l||[]),o()}function o(){for(var e,a=0;a<t.length;a++){for(var o=t[a],i=!0,n=1;n<o.length;n++){var s=o[n];0!==r[s]&&(i=!1)}i&&(t.splice(a--,1),e=c(c.s=o[0]))}return e}var i={},n={app:0},r={app:0},t=[];function s(e){return c.p+"js/"+({actividad:"actividad",intro:"intro",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"ce4d8b3c",intro:"57d3ddcd",sintesis:"71ce6831",tema1:"c6730265",tema2:"b531f3e3",tema3:"b0bbb267"}[e]+".js"}function c(a){if(i[a])return i[a].exports;var o=i[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var a=[],o={actividad:1};n[e]?a.push(n[e]):0!==n[e]&&o[e]&&a.push(n[e]=new Promise((function(a,o){for(var i="css/"+({actividad:"actividad",intro:"intro",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"2f1ec4d4",intro:"31d6cfe0",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=c.p+i,t=document.getElementsByTagName("link"),s=0;s<t.length;s++){var l=t[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===r))return a()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===i||d===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=i,delete n[e],m.parentNode.removeChild(m),o(t)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){n[e]=0})));var i=r[e];if(0!==i)if(i)a.push(i[2]);else{var t=new Promise((function(a,o){i=r[e]=[a,o]}));a.push(i[2]=t);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var o=r[e];if(0!==o){if(o){var i=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",u.name="ChunkLoadError",u.type=i,u.request=n,o[1](u)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},c.m=e,c.c=i,c.d=function(e,a,o){c.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,a){if(1&a&&(e=c(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)c.d(o,i,function(a){return e[a]}.bind(null,i));return o},c.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(a,"a",a),a},c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;t.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"046d":function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-6.a0d9acd5.svg"},1430:function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);var i=o("2b0e"),n=function(){var e=this,a=e._self._c;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},r=[],t={name:"App",data:()=>({menuOpen:!1}),computed:{menuState(){return this.$store.getters.isMenuOpen}},mounted(){this.$aos.init({offset:100})}},s=t,c=o("2877"),l=Object(c["a"])(s,n,r,!1,null,null,null),d=l.exports,u=o("8c4f"),m=o("8237"),p=o("e844"),g=o("32d3"),f=o("b154"),b=o("0a9a"),v=o("58f7");i["a"].use(u["a"]);const h=new u["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:()=>o.e("intro").then(o.bind(null,"5167"))},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:()=>o.e("tema1").then(o.bind(null,"02c8"))},{path:"tema2",name:"tema2",component:()=>o.e("tema2").then(o.bind(null,"fd11"))},{path:"tema3",name:"tema3",component:()=>o.e("tema3").then(o.bind(null,"eb46"))}]},{path:"/actividad",name:"actividad",component:()=>o.e("actividad").then(o.bind(null,"4298"))},{path:"/glosario",name:"glosario",component:g["a"]},{path:"/complementario",name:"complementario",component:v["a"]},{path:"/referencias",name:"referencias",component:f["a"]},{path:"/sintesis",name:"sintesis",component:()=>o.e("sintesis").then(o.bind(null,"15a3"))},{path:"/creditos",name:"creditos",component:b["a"]}],scrollBehavior(e,a){if(e.hash){const o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise(e=>{setTimeout(()=>{e(o)},500)})}setTimeout(()=>{window.scrollTo({left:0,top:0,behavior:"auto"})},100)}});var y=h,A=o("2f62");i["a"].use(A["a"]);var C=new A["a"].Store({state:{loading:0,menuOpen:!1},getters:{isLoading:e=>!!e.loading,isMenuOpen:e=>e.menuOpen},mutations:{toggleMenu(e,a){e.menuOpen=a},increment(e){e.loading++},decrease(e){e.loading--}},actions:{toggleMenu({commit:e},a){e("toggleMenu",a)},increment({commit:e}){e("increment")},decrease({commit:e}){e("decrease")}}}),w=o("9ea5"),q={global:{Name:"Seguridad alimentaria y buenas prácticas de manufactura",Description:"La clasificación de los alimentos es clave para su uso adecuado, conservación y prevención de su deterioro o contaminación. Comprender los peligros que afectan la seguridad alimentaria, como los factores que causan su deterioro, permite identificar las mejores prácticas para un manejo adecuado de la cadena alimentaria, desde la producción hasta el consumo, asegurando la inocuidad y calidad de los alimentos.",imagenBannerPrincipal:o("74b5"),fondoBannerPrincipal:o("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:o("71f8")},{clases:["banner-principal-decorativo-2"],imagen:o("8f04")},{clases:["banner-principal-decorativo-3"],imagen:o("7d72")},{clases:["banner-principal-decorativo-4"],imagen:o("f53d")},{clases:["banner-principal-decorativo-5"],imagen:o("b400")},{clases:["banner-principal-decorativo-6"],imagen:o("046d")},{clases:["banner-principal-decorativo-7"],imagen:o("a7b2")},{clases:["banner-principal-decorativo-8"],imagen:o("eb56")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Fundamentos de la seguridad alimentaria",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Conceptos básicos de higiene y seguridad alimentaria",hash:"t_1_1"},{numero:"1.2",titulo:"Clasificación de los alimentos",hash:"t_1_2"},{numero:"1.3",titulo:"Factores que influyen en la calidad e inocuidad de los alimentos",hash:"t_1_3"}]},{nombreRuta:"tema2",numero:"2",titulo:"Buenas prácticas de manipulación y preservación de alimentos",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Historia de las Buenas Prácticas de Manufactura (BPM)",hash:"t_2_1"},{numero:"2.2",titulo:"Principios de las BPM",hash:"t_2_2"}]},{nombreRuta:"tema3",numero:"3",titulo:"Prevención y control del deterioro de los alimentos",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Buenas prácticas de preservación",hash:"t_3_1"},{numero:"3.2",titulo:"Recomendaciones generales",hash:"t_3_2"},{numero:"3.3",titulo:"Control de plagas",hash:"t_3_3"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/CF1_72310017_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Fundamentos de la seguridad alimentaria.",referencia:"INVIMA. Dirección de alimentos y bebidas. (2015). Manual de Inspección, Vigilancia y Control Sanitario de Alimentos y Bebidas basado en riesgo para las entidades territoriales de Salud.",tipo:"Manual.",descarga:"/downloads/21857-DOC-20181009.pdf"},{tema:"Buenas prácticas de manipulación y preservación de alimentos.",referencia:"Ministerio de salud, Colombia. (2013). Resolución 2674 de 2013.",tipo:"Resolución oficial.",descarga:"/downloads/2674.pdf"},{tema:"Buenas prácticas de manipulación y preservación de alimentos.",referencia:"Rodríguez Gómez, J. M. (s.f.). Consecuencias higiénicas de la alteración de los alimentos.",tipo:"Capítulo de libro.",descarga:"/downloads/Consecuencia_Higienica_Alteracion_Alimentos_2012.pdf"},{tema:"Prevención y control del deterioro de alimentos.",referencia:"In food quality. Education and culture. (s.f.). Microorganismos y alimentos.",tipo:"Artículo.",descarga:"/downloads/3.Microorganismos_y_alimentos.pdf"}],glosario:[{termino:"Actividad acuosa (AW)",significado:"Es la cantidad de agua disponible en un alimento necesaria para el crecimiento y proliferación de microorganismos."},{termino:"Alimento",significado:"todo producto natural o artificial, elaborado o no, que ingerido aporta al organismo humano los nutrientes y la energía necesaria para el desarrollo de los procesos biológicos. Se entienden incluidas en la presente definición las bebidas no alcohólicas y aquellas sustancias con que se sazonan algunos comestibles, y que se conocen con el nombre genérico de especias."},{termino:"Alimento adulterado",significado:"es aquel: <br> a) al cual se le ha sustraído parte de los elementos constituyentes, reemplazándolos o no por otras sustancias; <br> b) que haya sido adicionado con sustancias no autorizadas; <br> c) que haya sido sometido a tratamientos que disimulen u oculten sus condiciones originales; y <br> d) que por deficiencias en su calidad normal hayan sido disimuladas u ocultadas en forma fraudulenta, sus condiciones originales."},{termino:"Alimento alterado",significado:"alimento que sufre modificación o degradación, parcial o total, de los constituyentes que le son propios, por agentes físicos, químicos o biológicos. Se incluye, pero no se limita a: <br> a) el cual se encuentre por fuera de su vida útil; <br> b) no esté siendo almacenado bajo las condiciones necesarias para evitar su alteración."},{termino:"Alimento contaminado",significado:"alimento que presenta o contiene agentes y/o sustancias extrañas de cualquier naturaleza en cantidades superiores a las permitidas en las normas nacionales, o en su defecto en normas reconocidas internacionalmente."},{termino:"Alimento de mayor riesgo en salud pública",significado:"los alimentos que pueden contener microorganismos patógenos y favorecer la formación de toxinas o el crecimiento de microorganismos patógenos, y alimentos que pueden contener productos químicos nocivos."},{termino:"Alimento de menor riesgo en salud pública",significado:"los alimentos que tienen poca probabilidad de contener microorganismos patógenos y normalmente no favorecen su crecimiento debido a las características de los alimentos y los alimentos que probablemente no contienen productos químicos nocivos."},{termino:"Alimento derivado de un organismo genéticamente modificado (OGM)",significado:"alimento derivado en su totalidad o en una parte de un organismo genéticamente modificado."},{termino:"Alimento de riesgo medio en salud pública",significado:"los alimentos que pueden contener microorganismos patógenos, pero normalmente no favorecen su crecimiento debido a las características del alimento o alimentos que es poco probable que contengan microorganismos patógenos debido al tipo de alimento o procesamiento del mismo, pero que pueden apoyar la formación de toxinas o el crecimiento de microorganismos patógenos."},{termino:"Alimento fraudulento",significado:"es aquel que: <br> a) se le designe o expenda con nombre o calificativo distinto al que le corresponde; <br> b) su envase, rótulo o etiqueta contenga diseño o declaración ambigua, falsa o que pueda inducir o producir engaño o confusión respecto de su composición intrínseca y uso; <br> c) no proceda de sus verdaderos fabricantes o importadores declarados en el rótulo o que tenga la apariencia y caracteres generales de un producto legítimo, protegido o no por marca registrada y que se denomine como este, sin serlo; <br> d) aquel producto que de acuerdo a su riesgo y a lo contemplado en la presente resolución, requiera de registro, permiso o notificación sanitaria y sea comercializado, publicitado o promocionado como un alimento, sin que cuente con el respectivo registro, permiso o notificación sanitaria."},{termino:"Alimento perecedero",significado:"el alimento que, en razón de su composición, características fisicoquímicas y biológicas, pueda experimentar alteración de diversa naturaleza en un tiempo determinado y que, por lo tanto, exige condiciones especiales de proceso, conservación, almacenamiento, transporte y expendio."},{termino:"Desinfección - descontaminación",significado:"es el tratamiento físico-químico o biológico aplicado a las superficies limpias en contacto con el alimento con el fin de destruir las células vegetativas de los microorganismos que pueden ocasionar riesgos para la salud pública y reducir substancialmente el número de otros microorganismos indeseables, sin que dicho tratamiento afecte adversamente la calidad e inocuidad del alimento."},{termino:"Higiene de los alimentos",significado:"son el conjunto de medidas preventivas necesarias para garantizar la seguridad, limpieza y calidad de los alimentos en cualquier etapa de su manejo."},{termino:"Infestación",significado:"es la presencia y multiplicación de plagas que pueden contaminar o deteriorar los alimentos y/o materias primas."},{termino:"Limpieza",significado:"es el proceso o la operación de eliminación de residuos de alimentos u otras materias extrañas o indeseables."},{termino:"Manipulador de alimentos",significado:"es toda persona que interviene directamente, aunque sea en forma ocasional, en actividades de fabricación, procesamiento, preparación, envase, almacenamiento, transporte y expendio de alimentos."}],referencias:[{referencia:"Bello Gutiérrez, J. (2000). Ciencia bromatológica (1ª ed.). Díaz de Santos.",link:""},{referencia:"Consejería de Empleo y Desarrollo Tecnológico. (s.f.). Manipulación de alimentos (Manual común) [archivo PDF]. Junta de Andalucía.",link:"https://www.juntadeandalucia.es/export/drupaljda/1337165363Manipuladores_de_alimentos.pdf"},{referencia:"Education and Culture Lifelong Learning Programme, Leonardo Da Vinci. (s.f.). Microorganismos y alimentos [archivo PDF].",link:"http://www.epralima.com/infoodquality/materiais_espanhol/Manuais/3.Microorganismos_y_alimentos.pdf"},{referencia:"Organización Mundial de la Salud. (2015). Principios generales de higiene de los alimentos del Codex.",link:"https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B1-1969%252FCXC_001s.pdf"},{referencia:"Ministerio de Salud y Protección Social. (2013). Resolución 2674 de 2013. Por la cual se establecen los requisitos sanitarios. 22 de julio de 2013.",link:""},{referencia:"Rodríguez, J. M. (s.f.). Consecuencias higiénicas de la alteración de los alimentos. Departamento de Nutrición, Bromatología y Tecnología de los Alimentos, Facultad de Veterinaria, Universidad Complutense de Madrid.",link:"http://www.aeemt.net/contenidos_socios/Recursos/Documentos_interes/Consecuencia_Higienica_Alteracion_Alimentos_2012.pdf"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Responsable del Ecosistema de Recursos Educativos Digitales (RED)",centro:"Dirección General"},{nombre:"Miguel de Jesús Paredes Maestre",cargo:"Responsable de la Línea de Producción",centro:"Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Ángela Rocío Báez León",cargo:"Experta temática ",centro:"Centro de Desarrollo Agropecuario y Agroindustrial - Regional Boyacá"},{nombre:"Yuri Alexandra Báez Roldán",cargo:"Asesora pedagógica",centro:"Centro de Desarrollo Agropecuario y Agroindustrial - Regional Boyacá"},{nombre:"Diana Corredor Ruíz",cargo:"Experta temática",centro:"Centro de Formación de Talento Humano en Salud - Regional Distrito Capital"},{nombre:"Janet Lucía Villalba Triana",cargo:"Asesora pedagógica",centro:"Centro de Desarrollo Agropecuario y Agroindustrial - Regional Boyacá"},{nombre:"Zulma Yurany Vianchá Rodríguez",cargo:"Líder línea de producción",centro:"Centro de Desarrollo Agropecuario y Agroindustrial - Regional Boyacá"},{nombre:"Jairo Valencia Ebratt",cargo:"Evaluador instruccional",centro:"Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Eulises Orduz Amezquita",cargo:"Diseñador <em>web</em>",centro:"Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico"},{nombre:"Liborio De Jesús Castañeda Valencia",cargo:"Desarrollador <em>full stack junior</em>",centro:"Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico"},{nombre:"Carmen Alicia Martinez Torres",cargo:"Animador y producción audiovisual",centro:"Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Carolina Coca Salazar",cargo:"Evaluador para contenidos inclusivos y accesibles",centro:"Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico"},{nombre:"Luz Karime Amaya Cabra",cargo:"Evaluador para contenidos inclusivos y accesibles",centro:"Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico"},{nombre:"Juan Carlos Cardona Acosta",cargo:"Validador de recursos educativos digitales",centro:"Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico"},{nombre:"Jairo Luis Valencia Ebratt",cargo:"Validador de recursos educativos digitales",centro:"Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}};o("a3a0");const D=o("9224");i["a"].use(w["a"],{config:q,packageJson:D}),new i["a"]({router:y,store:C,render:e=>e(d)}).$mount("#app")},"5ccd":function(e,a,o){e.exports=o.p+"img/audio.058779f0.svg"},"71f8":function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-1.04e7992e.svg"},"74b5":function(e,a,o){e.exports=o.p+"img/banner-princiapal.8cde6fcb.png"},"7a82":function(e,a,o){e.exports=o.p+"img/aumentar.4890ae42.svg"},"7d72":function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-3.fb0841f1.svg"},"8f04":function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-2.6becb468.svg"},9224:function(e){e.exports=JSON.parse('{"name":"SENA-2025","version":"1.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^6.5.1","@popperjs/core":"^2.11.8","aos":"^2.3.4","bootstrap":"^5.3.2","font-awesome":"^4.7.0","ecored-pkg-fliz":"0.0.4","vue":"^2.7.14","vue-router":"^3.6.5","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.19","@vue/cli-plugin-eslint":"^4.5.19","@vue/cli-plugin-router":"^4.5.19","@vue/cli-plugin-vuex":"^4.5.19","@vue/cli-service":"^4.5.19","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.7.14"}}')},a3a0:function(e,a,o){},a724:function(e,a,o){e.exports=o.p+"img/reducir.68fb49e8.svg"},a7b2:function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-7.ebf535b6.svg"},b400:function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-5.3cc20c86.svg"},ce7c:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.740eb889.png"},e1f5:function(e,a,o){e.exports=o.p+"img/creditos-cc.4836eb56.svg"},eb56:function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-8.32ae44f5.svg"},ef52:function(e,a,o){e.exports=o.p+"img/creditos-img.689712e2.svg"},f034:function(e,a,o){e.exports=o.p+"img/pause.8df843e4.svg"},f53d:function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-4.277c384c.svg"},f5ad:function(e,a,o){e.exports=o.p+"img/logo-sena.47d29d11.svg"}});
//# sourceMappingURL=app.e5694b5d.js.map
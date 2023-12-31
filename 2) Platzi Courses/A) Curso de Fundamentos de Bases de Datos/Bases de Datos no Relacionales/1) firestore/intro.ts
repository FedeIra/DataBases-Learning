/*
!FIREBASE(FIRESTORE)

Firebase (Firestore). Es una plataforma muy utilizada para el desarrollo de aplicaciones web y aplicaciones móviles.
Como usa un conjunto de herramientas multiplataforma es compatible con grandes plataformas, como IOS, Android, aplicaciones web, Unity y C++. Es muy recomendable para desarrollos.

Firestore es una base de datos no relacional, basada en documentos. Es una base de datos orientada a documentos, que se basa en colecciones y documentos.

* Jerarquía de datos en Firestore:

1) Base de datos: va a contener todos los datos.
2) Colecciones: son grupos de documentos.
3) Documentos: son objetos que contienen los datos. Es la información que queremos guardar. Se guarda en un formato similar al json.


El modelo de datos es más cercano al mundo real en las bases de datos no relacionales. Es más fácil de entender y de trabajar.

*Top level collections: colecciones que tenemos de inmediato en un proyecto.

Tipos de datos en Firestore:

*String: Cualquier tipo de valor alfanumérico

*Number: Soporta enteros y flotantes.

*Boolenan: Los clásicos valores True y False

*Map: Permite agregar un documento dentro de otro. Es el equivalente a un objeto en javascript.

*Array: Permite agregar un conjunto de datos (soporte multi type) sin nombre e identificador.

*Null: Indica que no se ha definido un valor.

*Timestamp: Permite almacenar fechas (guarda el año, mes, día y hora).

*Geopoint: Guarda una localización geográfica (coordenadas latitud-longitud).

*Reference: Permite referencia un documento (relaciona dos documentos, no importa su colección).


Un top level collection se utilizaria para relaciones de tipo “agregacion”. Mientras que una sub collection se utilizaria para relaciones tipo “composicion”.

Por ejemplo:

Tenemos Estudiantes, Cursos y Notas. Los estudiantes tiene cursos y los cursos tiene estudiantes. Si se elimina un curso los estudiantes no deben ser eliminados. Lo mismo si se elimina un estudiante los cursos no deben ser elimiandos. Esto es una relacion de agregacion. Aqui se usaria top level collection para estudiantes y cursos.

Los estudiantes tienen notas y las notas pertenecen a un estudiante. Si se elimina un estudiante, tiene sentido eliminar las notas. Esto es una relacion de composicion. Aqui se usarian las subcollections. El estudiante tendría una subcollection de notas.

Las bases de datos no relacionales están pensadas para mantener el estado de tu aplicación y no para realizar queries.

!Colecciones y subcolecciones:
Emplear colecciones de nivel cero para entidades fuertes, que mas adelante se empleen para realizar busquedas exhaustivas.
Emplear subcolecciones para entidades débiles, que solo permitan plasmar información relacionada, pero que dicha data no sea una fuente de consulta primaria para nuestra aplicación.

Dentro de las bases de datos relacionales tenemos diferentes niveles de datos. En primer lugar tenemos las Bases de Datos o Esquemas como repositorios donde vivirán los datos que nos interesa guardar. Dentro del esquema existen las Tablas que provienen del concepto de entidades; y a su vez dentro de las tablas tenemos las tuplas o renglones.

Cuando trabajamos con bases de datos basadas en documentos como Firestore, aún existe la figura de la base de datos, sin embargo cambiaremos las tablas en favor de las colecciones y las tuplas en lugar de los documentos.

Recuerda:

Tabla -> Colección

Tupla -> Documento

Dentro de las Colecciones existen 2 grandes tipos. Las Top level collection o colecciones de nivel superior y las subcollections o subcolecciones. Estas últimas viven únicamente dentro de un documento padre.

¿Cómo saber cuál escoger?

Para determinar si tu colección debe ser top level o subcolección no hay una regla escrita en piedra y más bien tiene que ver con el caso de uso en particular y con la experiencia que hayas ganado como desarrollador.

Lo cierto es que no hay una sola forma de estructurar nuestra DB basada en documentos, y por tanto no existe una respuesta correcta, sin embargo a continuación te ofrezco un par de reglas guía que puedes utilizar para transformar tu proyecto que ya trabajaste en bases de datos relacionales en un proyecto no relacional.

Regla 1. Piensa en la vista de tu aplicación

La primera pista que te puedo dar es que pienses en un inicio en la manera en que los datos serán extraídos. En el caso de una aplicación, la mejor forma de pensarlo es en términos de las vistas que vas a mostrar a un momento determinado en la aplicación.

Es decir, al armar la estructura en la base de datos que sea un espejo o que al menos contenga todos los datos necesarios para llenar las necesidades que tiene nuestra parte visual en la aplicación.

En el caso de Platziblog por ejemplo si tienes una vista de un blog post individual, generalmente conviene mostrar además de los datos inherentes al post como el contenido, datos adicionales como las etiquetas que tiene o por ejemplo el autor (o autores si es colaborativo), en este caso tal vez convenga guardar estas dos “entidades” (autores y etiquetas) como subcolecciones de cada documento blog post.

Regla 2. La colección tiene vida propia

Esta regla se refiere a que la excepción a la regla 1 es cuando tenemos un caso en que la “entidad” que tiene necesidad de vivir y modificarse constantemente de manera independiente a las otras colecciones. Por ejemplo en Platziblog podemos en el ejemplo anterior hacer una excepción a autores porque nos conviene tenerlas como top level collection en el sentido que se añadan, borren, cambien o listen los usuarios sin depender del blog post.

Experimenta aplicando estas dos reglas a un proyecto que ya conozcas en una base de datos relacional y trata de convertirla en un proyecto de Firestore y comentanos los retos a los que te enfrentaste.
*/

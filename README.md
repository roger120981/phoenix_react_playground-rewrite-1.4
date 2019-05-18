# Phoenix+React+TypeScript+Sass

> Un simple proyecto que *actualmente funciona*.

## Una breve nota

Phoenix 1.4 actualmente funciona con  [Webpack](https://webpack.js.org/) por defecto, una herramienta que para el manejo de assets es extremadamete poderosa

## ¿Qué contiene este repo? 

Este repo contiene una aplicación basada en  [Phoenix](http://www.phoenixframework.org/) que se integra con Reactjs como librería frontend. Contiene un pequeño ejemplo que demuestra como consume los datos enviados en formato JSON.

Para este ejemplo decidimos usar [TypeScript](https://www.typescriptlang.org). TypeScript es un dialecto de Microsoft que extiende las características básicas de javascript, extremadamente poderosa y permite detectar errores en tiempo de compilación. 

## Requerimientos

* [Node.js](https://nodejs.org/en) (v8+)
* [Elixir](https://elixir-lang.org/install.html) (v1.6+)
* [Yarn](https://yarnpkg.com/en/docs/install) - Opcional. Usted puede usar  `npm` si lo desea.

## Guía rápida

Para instalar dependencias y arrancar el proyecto:

* Instala las dependencias de elixir con  `mix deps.get`.
* `cd` al directorio  `assets/` y ejecuta  `yarn` (o `npm install`) para instalar las dependencias de nodejs.
* Modifica la cofiguración de su base de datos en  `config/` acorde a sus necesidades.
* Crea y migra la base de datos con  `mix ecto.setup` (automáticamente ejecuta los comandos `mix ecto.create`, `mix ecto.migrate` y `mix run priv/repo/seeds.exs` en ese orden)

Para arrancar el servidor Phoenix:

* Arranca el endpoint de Phoenix con  `mix phx.server`

Ahora puede visitar [`localhost:4000`](http://localhost:4000) en el navegador de su preferencia.

Si está listo para desplegar en producción, Por favor  [lea la guía de despliegue oficial](http://www.phoenixframework.org/docs/deployment).

## Lea más sobre Phoenix

  * Sitio oficial: http://www.phoenixframework.org/
  * Guías: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix
  * Listas de correos: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix

---

Contácteme en Twitter  [roger120981](https://twitter.com/roger120981) si usted tiene preguntas.
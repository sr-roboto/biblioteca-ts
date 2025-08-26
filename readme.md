# Actividad Práctica - Programación Orientada a Objetos con TypeScript

## ¿Qué diferencia existe entre extends y implements en TypeScript?

La diferencia principal es que la palabra implements se utiliza para que una
clase cumple con las condiciones que le da un contrato en este caso una
interface, luego la palabra extends tiene varios usos se puede utilizar como
restriccion o limitar el ambito de un tipo, pero mayormente utilizada para
indicar que una clase hereda los atributos y metodos de otra, es decir que la
clas1 EXTIENDE a la clase2 heradando asi sus propiedades

## ¿Qué ventajas ofrece el tipado fuerte en funciones y clases?

Las ventajas que encuentro es que permite la deteccion temprana de errores,
ademas de seguir una estructura clara y concisa nos obliga a seguir un cierto
estandar que debemos cumplir facilitando la comprension del codigo no solo para
nosotros si no para otros desarroladores que quisieran colaborar con nosotros

## ¿Qué significa que una clase sea abstracta?

La principal diferencia de una clase de abstracta, es que en esta misma no se
puede instanciar objetos en ella, sirve como una plantilla para poder generar
otras clases, heredando asi sus metodos y atributos de la misma clase abstracta

## ¿Por qué conviene usar getters y setters para el encapsulamiento?

Los getters y setters nos sirven para tener el total control de del acceso y
modificacion de los datos de un objeto, permitiendo proteger partes criticas de
una clase

## Ejemplificar cómo tipar

### Una función con parámetros obligatorios y opcionales

```ts
function x(a: number, b?: number);
```

### Una función que devuelve una Promise

```ts
function z(): Promise<String>;
```

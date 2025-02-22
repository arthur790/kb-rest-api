# Configuración de proyecto BackEnd
A continuación se describen los pasos a seguir para levantar la rest api de manera local

Stack utilizado:

    - NodeJS
    - Express
    - PosgreSQL
## Configurar variables de Docker:
Edita el archivo docker-compose.yml y define la contraseña y usuario de BD:

`POSTGRES_USER` define el usuario, por defecto es kb-admin

`POSTGRES_PASSWORD` define la contraseña, por defecto es 4lp<!r0o2

## Levantar la BD
Para crear la base de datos, las tablas y usuario
abre una terminal en el directorio raiz del proyecto y ejecutar el siguiente comando:


```sh
	docker-compose up -d
```

## Configurar variables de NodeJS

crear un archivo .env a partir del archivo .example.env y define las siguientes variables:

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `PORT` | `string` | **Required**. Puerto del api rest |
| `SECRETORPRIVATEKEY` | `string` | **Required**. Define un secreto para la generación de tokens |
| `DB_USER` | `string` | **Required**. El nombre de usuario de BD, |
| `DB_PASSWORD` | `string` | **Required**. El password de la BD |
| `DB_NAME` | `string` | **Required**. El nombre de la base de datos |
| `DB_HOST` | `string` | **Required**. El host, puedes indicar localhost |
| `DB_PORT` | `number` | **Required**. El puerto de la BD |

**Nota:** los datos de la BD por defecto se encuentran en el archivo docker-compose.yml

## Instalación
Ejecutar en el directorio raiz el siguiente comando:

```bash
  npm install 
```

## Ejecutar proyecto de manera local
Ejecutar el siguiente comando:

```bash
  npm start 
```

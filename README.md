# interacting with postgres from node

ensure postgres is running

```
$ docker ps
```

or if running as a service in ubuntu

```
$ sudo service postgres status
```

## create a database

```
> CREATE DATABASE bookhunt
```

## create a table

```
CREATE TABLE novels
(
  id serial primary KEY,
  title text,
  createdat TIMESTAMPTZ,
  updatedat TIMESTAMPTZ
);
```

## insert

```
INSERT INTO novels
(name, createdAt, updatedAt)
VALUES
("Harry Potter", "2022-12-26T06:37:45.977Z", "2022-12-26T06:37:45.977Z");
```

## read

```
select * from novels where id=1;
```

## update

```
update novels set name="Harry Potter 2" where id =1;
```

## delete

```
delete from novels where id =1;
```


## Setup for the project

```
cp .env.example .env
npm i
```

## Cli

```
node cli
```

## Server

```
node server
```

dev

```
npm run dev
```
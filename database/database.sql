create database ng_games_bd;
use ng_games_bd;

create table game(
id Int (11) not null auto_increment primary key,
title varchar(180),
description varchar(255),
image varchar(255),

created_at timestamp default current_timesamp 
);

DESCRIBE games;

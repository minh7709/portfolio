
import aws from '../app/assets/svg/skills/aws.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import css from '../app/assets/svg/skills/css.svg';
import django from '../app/assets/svg/skills/django.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import fastapi from '../app/assets/svg/skills/fastapi.svg';
import git from '../app/assets/svg/skills/git.svg';
import html from '../app/assets/svg/skills/html.svg';
import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import laravel from '../app/assets/svg/skills/Laravel.svg';
import linux from '../app/assets/svg/skills/linux.svg';
import markdown from '../app/assets/svg/skills/markdown.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nginx from '../app/assets/svg/skills/nginx.svg';
import php from '../app/assets/svg/skills/php.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import react from '../app/assets/svg/skills/react.svg';
import redis from '../app/assets/svg/skills/Redis.svg';
import spring from '../app/assets/svg/skills/Spring.svg';
import sqlite from '../app/assets/svg/skills/sqlite.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import vitejs from '../app/assets/svg/skills/vitejs.svg';

const skillIcons = {
  aws,
  bootstrap,
  css,
  django,
  docker,
  fastapi,
  git,
  html,
  java,
  javascript,
  laravel,
  linux,
  markdown,
  mongodb: mongoDB,
  mysql,
  nginx,
  php,
  postgresql,
  react,
  redis,
  spring,
  sqlite,
  tailwind,
  vitejs,
};

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase().trim();

  return skillIcons[skillID];
};

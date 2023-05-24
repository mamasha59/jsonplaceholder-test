import Layout from "../Layout/Layout";
import ListGroup from 'react-bootstrap/ListGroup';

const AboutMe = () => {
  return (
    <Layout>
      <ListGroup className="w-100" as="ul">
        <ListGroup.Item as="li" active>
            Привет, меня зовут Алексей.
        </ListGroup.Item>
        <ListGroup.Item as="li">
            Мой стек это: React/Next(hooks), Tailwind, БЭМ, Typescipt, Redux Toolkit/RTQ/Saga. <br /> Делаю пет проекты и выкладываю их на гитхаб. <br />
            Разные подходы к написанию Css стилей. <br />
            Из последнего я написал интернет магазин, задеплоил его - https://online-shopping-main.vercel.app/, апи писал на Graphql, сам проект на NextJs. <br />
            Хороший английский.
        </ListGroup.Item>
        <ListGroup.Item as="li">
            Мой сайт портфолио - https://portfolio-eta-eight-47.vercel.app/ <br />
            NextJs React React Hooks Tailwind Redux Toolkit
        </ListGroup.Item>
        <ListGroup.Item as="li">
            Готов выполнить тестовое задание.
            Могу работать как самозанятый.</ListGroup.Item>
        <ListGroup.Item as="li" active>
            GitHub - https://github.com/mamasha59.
        </ListGroup.Item>
        <ListGroup.Item as="li">
          В январе 2021 года я начал обучаться на курсах ЯндексПрактикум, по направлению front-end разработчик. На курсах я активно изучал верстку, работу с макетами figma, настраивал логику сайта. Затрагивали back-end для front-end разработчиков.
          В основном изучал JavaScripr и React.
          На финальной работе был стек - Html/Css/JavaScript/React/Node/Express, и база данных Mongoose NoSql.
        </ListGroup.Item>
        <ListGroup.Item as="li" active>
        Самостоятельно разработал: <br />
          1. клон Facebook, с ограниченным функционалом(только добавление поста в ленту), использовал Firebase от Гугл для базы данных и аутентицикации ползователя. <br />
          2. клон Netflix, использовал Api MoviesDB, в этом проекте я сам написал бекенд с аутентификацией на Node Js\ExpressJs в связке с Mongoose. Для css я использовал Tailwind Css, для хранилища Redux Toolkit. <br />
          3. Онлайн магазин на NextJs, апи на GtaphQl, front-end Apollo. <br />
           Все работы выложил на гитхаб.
        </ListGroup.Item>
      </ListGroup>
    </Layout>
  )
};

export default AboutMe;

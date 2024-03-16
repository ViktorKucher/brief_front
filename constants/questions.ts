import { QuestionListType } from "@/types/form";
import { truncate } from "fs/promises";

export const createQuestionBlank = (brief_content: any) => {
  const { questions } = listQuestion.reduce((arr, item) => {
    arr.questions.push(...item.questions);
    return arr;
  });
  return questions.map((item: { question: any; name: string | number }) => {
    return { question: item.question, answer: brief_content[item.name] };
  });
};
export const listQuestion: QuestionListType[] = [
  {
    name_block: "Спосіб зв'язку",
    questions: [
      {
        name: "name_customer",
        question: "Вкажіть, як ми можемо до Вас звертатися",
        type: "text",
        required: true,
      },
      {
        name: "phone_customer",
        question: "Номер телефону",
        type: "tel",
        required: true,
      },
      {
        name: "messager_customer",
        question:
          "Зручний спосіб зв'язку: e-mail або будь-який месенджер (Skype, Viber, Telegram, WhatsApp)",
        type: "text",
        required: false,
      },
      {
        name: "time_to_speak",
        question: "Зручний період для спілкування",
        type: "text",
        required: false,
      },
    ],
  },
  {
    name_block: "Загальні відомості",
    questions: [
      {
        name: "name_project",
        question: "Назва Вашого проекту",
        type: "text",
        required: true,
      },
      {
        name: "unique_selling_proposition",
        question: "Яку головну ціль має виконувати сайт ?",
        type: "radio",
        variants: {
          elements: [
            "Надання інформації про компанію та послуги",
            "Генерація потенційних клієнтів",
            "Використання як вітрини для товарів",
            "Організація подій",
            "Прямі продажі",
          ],
          add_different_question: true,
        },
        required: true,
      },
    ],
  },
  {
    name_block: "Цільова аудиторія вашого сайту",
    questions: [
      {
        name: "project_clients",
        question:
          "Які групи споживачів користуватимуться Вашим продуктом найчастіше?",
        type: "text",
        required: true,
      },
      {
        name: "info_project_clients",
        question:
          "Опишіть їх за наступними параметрами або у вільній формі (насамперед опишіть найчисленнішу групу – ядро цільової аудиторії):",
        type: "text",
        required: false,
      },
    ],
  },
  {
    name_block: "Навіщо потрібен сайт вашої компанії?",
    questions: [
      {
        name: "why_site_need",
        question: "Навіщо Ваш сайт потрібен споживачеві?",
        type: "text",
        required: true,
      },
      {
        name: "type_site",
        question: "Чи Ваш продукт є звичним для споживача?",
        type: "radio",
        required: false,
        variants: {
          elements: [
            "Продукт інноваційний та споживача необхідний привчити для його споживання.",
            "Продукт звичний, але має покращення щодо конкуруючих.",
            "Продукт не відрізняється від конкурентів, він такий самий.",
          ],
          add_different_question: true,
        },
      },
      {
        name: "type_buy_project",
        question:
          "Якою покупкою є Ваш продукт для споживача: простий чи складний? (Вкажіть ланцюжок дій споживача від бажання купити продукт даної категорії до безпосередньо придбання товару)",
        type: "text",
        required: false,
      },
    ],
  },
  {
    name_block: "Сегменти конкурентів",
    questions: [
      {
        name: "opponents",
        question: "Вкажіть сайти ваших прямих конкурентів",
        type: "text",
        required: false,
      },
      {
        name: "opponents_details",
        question: "Вкажіть їх переваги та недоліки?",
        type: "text",
        required: false,
      },
    ],
  },
  {
    name_block: "Масштаб інтересів",
    questions: [
      {
        name: "geolocation",
        question: "Вкажіть на яку геолокацію буде спрямовано Ваш продукт",
        type: "radio",
        required: false,
        variants: {
          elements: ["Міжнародний", "Федеральний", "Регіональний", "Місцевий"],
          add_different_question: false,
        },
      },
    ],
  },
  {
    name_block: "Важливі питання для оцінки вартості та термінів",
    questions: [
      {
        name: "shortTask",
        question: "Що потрібно зробити (коротке завдання)?",
        type: "radio",
        variants: {
          elements: [
            "Сайт з нуля",
            "Доопрацювання вже існуючого сайту",
            "Зміна структури сайту",
            "Ребрендинг",
          ],
          add_different_question: true,
        },
        required: true,
      },
      {
        name: "needsAllSite",
        question:
          "Вам необхідна повна розробка сайту (дизайн, верстка + програмування)?",
        type: "radio",
        variants: { elements: ["Так", "Ні"], add_different_question: true },
        required: false,
      },
      {
        name: "hostingNeed",
        question: "Чи потрібний Вам хостинг для нового сайту?",
        type: "radio",
        variants: { elements: ["Так", "Ні"], add_different_question: true },
        required: false,
      },
      {
        name: "domainNeed",
        question: "Чи потрібний Вам домен для нового сайту?",
        type: "radio",
        variants: { elements: ["Так", "Ні"], add_different_question: true },
        required: false,
      },
      {
        name: "typeSite",
        question: "Тип сайту",
        type: "radio",
        required: true,
        variants: {
          elements: [
            "Landing Page",
            "Промо-сайт",
            "Сайт візитка",
            "Корпоративний/Каталог",
            "Інтернет магазин",
            "Портал",
          ],
          add_different_question: true,
        },
      },
      {
        name: "uiSite",
        question: "Бажаний стиль сайту",
        type: "radio",
        required: true,
        variants: {
          elements: [
            "Європейський",
            "Мінімалістичний",
            "Діловий",
            "Креативний",
            "Портальний",
          ],
          add_different_question: true,
        },
      },
      {
        name: "logo",
        question: "Чи є у Вас логотип/фірмовий стиль?",
        type: "radio",
        required: false,
        variants: { elements: ["Так", "Ні"], add_different_question: true },
      },
      {
        name: "dataEnd",
        question: " Чи є побажання щодо термінів? ",
        type: "text",
        required: false,
      },
      {
        name: "money",
        question: " Який бюджет ? ",
        type: "text",
        required: false,
      },
      {
        name: "structureSite",
        question: "Опишіть можливу структуру сайту?",
        type: "checkbox",
        required: true,
        variants: {
          elements: ["Головна", "Про нас", "Послуги", "Каталог", "Новини"],
          add_different_question: true,
        },
      },
      {
        name: "languages",
        question: "Ваш сайт має бути однією мовою чи потрібна багатомовність?",
        type: "radio",
        variants: {
          elements: ["Одна мова", "Багатомовність"],
          add_different_question: true,
        },
        required: true,
      },
    ],
  },
  {
    name_block: "Додаткові питання",
    questions: [
      {
        name: "content",
        type: "radio",
        required: false,
        question:
          "Чи потрібно наповнення сайту контентом ? ",
        variants: { elements: ["Так", "Ні"], add_different_question: true },
      },
      {
        name: "seo",
        question: " Чи плануєте Ви просувати сайт (SEO, SMM, РРС)? ",
        type: "radio",
        required: false,
        variants: { elements: ["Так", "Ні"], add_different_question: true },
      },
      {
        name: "different",
        required: false,
        question: "Ваші коментарі, запитання, побажання ?",
        type: "text",
      },
    ],
  },
];

import { QuestionListType } from "@/types/form";

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
      },
      { name: "phone_customer", question: "Номер телефону", type: "tel" },
      {
        name: "messager_customer",
        question:
          "Зручний спосіб зв'язку: e-mail або будь-який месенджер (Skype, Viber, Telegram, WhatsApp)",
        type: "text",
      },
      {
        name: "time_to_speak",
        question: "Зручний період для спілкування",
        type: "text",
      },
    ],
  },
  {
    name_block: "Загальні відомості",
    questions: [
      {
        name: "name_project",
        question: "Назва Вашого проекту (існуючий чи майбутній)",
        type: "text",
      },
      {
        name: "idea_project",
        question: "Суть бренду (основна ідея чи місія Вашого продукту)",
        type: "text",
      },
      {
        name: "unique_selling_proposition",
        question: "Унікальна торгова пропозиція (УТП) товару",
        type: "text",
      },
      {
        name: "value_of_the_product",
        question: "Назвіть щонайменше три основні цінності продукту",
        type: "text",
      },
      {
        name: "benefit_value_of_the_product",
        question:
          "Яку вигоду споживачеві дає кожна з наведених вище цінностей?",
        type: "text",
      },
    ],
  },
  {
    name_block: "Цільова аудиторія вашого сайту",
    questions: [
      {
        name: "project_clients",
        question:
          " Які групи споживачів користуватимуться Вашим продуктом найчастіше?",
        type: "text",
      },
      {
        name: "info_project_clients",
        question:
          "Опишіть їх за наступними параметрами або у вільній формі (насамперед опишіть найчисленнішу групу – ядро цільової аудиторії):",
        type: "number",
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
      },
      {
        name: "time_use_site",
        question:
          "Коли і як споживач користуватиметься Вашим сайтом найчастіше?",
        type: "text",
      },
      {
        name: "type_site",
        question: "Чи Ваш продукт є звичним для споживача?",
        type: "radio",
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
      },
    ],
  },
  {
    name_block: "Сегменти конкурентів",
    questions: [
      {
        name: "opponents",
        question:
          "Сайти конкурентів (Вкажіть щонайменше три посилання на сайти Ваших конкурентів):",
        type: "text",
      },
      {
        name: "opponents_details",
        question:
          "По можливості, опишіть 3 Ваші основні конкуренти за наступними параметрами:назва; сильні сторони конкурента щодо Вашого продукту/бренду; слабкі сторони конкурента щодо Вашого продукту/бренду; позиціонування та УТП конкурента; цінності товару/бренду конкурента; як довго конкурент знаходиться на ринку; частка у % споживання продукту конкурента щодо всього обсягу ринку",
        type: "number",
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
        question:
          "Опишіть коротко завдання. Що потрібно зробити? (Сайт з нуля; доопрацювання вже існуючого сайту; зміна структури сайту або ребрендинг тощо)",
        type: "text",
      },
      {
        name: "hostingNeed",
        question: "Чи потрібний Вам хостинг для нового сайту?",
        type: "radio",
        variants: { elements: ["Так", "Ні"], add_different_question: true },
      },
      {
        name: "domainNeed",
        question: "Чи потрібний Вам домен для нового сайту?",
        type: "radio",
        variants: { elements: ["Так", "Ні"], add_different_question: true },
      },
      {
        name: "needsAllSite",
        question:
          "Вам необхідна повна розробка сайту (дизайн, верстка + програмування) чи лише частина?",
        type: "text",
      },
      {
        name: "typeSite",
        question: "Тип сайту",
        type: "radio",
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
        variants: { elements: ["Так", "Ні"], add_different_question: true },
      },
      {
        name: "dataEnd",
        question: " Чи є побажання щодо термінів? ",
        type: "text",
      },
      {
        name: "money",
        question: " Який бюджет ? ",
        type: "text",
      },
      {
        name: "structureSite",
        question: "Опишіть можливу структуру сайту?",
        type: "checkbox",
        variants: {
          elements: ["Головна", "Про нас", "Послуги", "Каталог", "Новини"],
          add_different_question: true,
        },
      },
      {
        name: "languages",
        question: "Мовні версії сайту",
        type: "text",
      },
    ],
  },
  {
    name_block:
      "Додаткові питання",
    questions: [
      {
        name: "content",
        type: "radio",
        question:'Чи потрібно наповнення сайту контентом, чи Ви робитимете це самостійно? ',
        variants: { elements: ["Так", "Ні"], add_different_question: true },
      },
      {name:'seo',question:' Чи плануєте Ви просувати сайт (SEO, SMM, РРС)? ',type:'radio',variants:{elements:['Так','Ні'],add_different_question:true}},
      {name:'different',question:'Ваші коментарі, запитання, побажання ?',type:'text'}
    ],
  },
];

// Переклади сайту для i18next. Ключі збігаються з атрибутами data-i18n в index.html.
// Щоб змінити текст або додати мову, достатньо редагувати цей файл.
const resources = {
  uk: { translation: {
    "gauge": {
      "t1": "Глибина",
      "t2": "м,"
    },
    "hero": {
      "a1": "Мікс світів",
      "t1": "Мікс",
      "t2": "світів",
      "t3": "Кібернетика і океанографія",
      "t4": "Океан — найбільша природна система планети. Кібернетика — наука про те, як системи відчувають, вирішують і керують собою. Разом вони дають машини, які слухають глибини, і моделі, що передбачають рух моря.",
      "t5": "Зануритися"
    },
    "stats": {
      "t1": "поверхні Землі займає океан",
      "t2": "3700 м",
      "t3": "середня глибина океану",
      "t4": "1500 м/с",
      "t5": "швидкість звуку у воді",
      "t6": "4000",
      "t7": "автономних поплавців Argo",
      "t8": "10 935 м",
      "t9": "глибина Маріанського жолоба"
    },
    "worlds": {
      "t1": "Два світи, які не мали б пересіктися, на перший погляд",
      "t2": "Кібернетика",
      "t3": "Наука про керування та зв’язок у живих організмах, машинах і суспільстві. Термін запровадив Норберт Вінер у книзі 1948 року.",
      "t4": "Світ чітких сигналів, алгоритмів і контролю.",
      "t5": "Океанографія",
      "t6": "Наука про Світовий океан: його фізику, хімію, життя й геологію дна. Океан займає близько 71% поверхні Землі й містить переважну частину води планети.",
      "t7": "Світ течій, тиску, солоності й непередбачуваності.",
      "t8": "Слово «кібернетика» походить від грецького κυβερνήτης —",
      "t9": "кермувальник",
      "t10": ". Наука про керування почалася з моря."
    },
    "descent": {
      "t1": "Занурення: де зустрічаються світи",
      "t2": "Чим глибше, тим менше людини і тим більше автоматики. Кожен рівень океану має свого кібернетичного помічника.",
      "t3": "0–200 м",
      "t4": "Сонячна зона",
      "t5": "Тут океан обмінюється теплом і вуглекислим газом з атмосферою. Він поглинає приблизно 90% надлишкового тепла від потепління клімату.",
      "t6": "Кібернетика:",
      "t7": "супутникова альтиметрія вимірює висоту поверхні океану з точністю до сантиметрів, а дані йдуть у кліматичні моделі.",
      "t8": "200–1000 м",
      "t9": "Сутінкова зона",
      "t10": "Світла майже немає, проте щоночі тут відбувається одна з найбільших міграцій на планеті: тварини піднімаються до поверхні, а на світанку повертаються вглиб.",
      "t11": "Кібернетика:",
      "t12": "підводні планери (глайдери) змінюють плавучість і «ковзають» траєкторією, а регулятор із зворотним зв’язком тримає курс місяцями.",
      "t13": "до 2000 м",
      "t14": "Темна зона",
      "t15": "Радіохвилі у воді швидко згасають, тому зв’язок тут акустичний. Звук рухається у воді майже вп’ятеро швидше, ніж у повітрі.",
      "t16": "Кібернетика:",
      "t17": "поплавці Argo щодесять днів занурюються до 2000 м, вимірюють температуру та солоність і передають дані, коли виринають.",
      "t18": "до 10 935 м",
      "t19": "Жолоби",
      "t20": "На дні Маріанського жолоба тиск перевищує 1000 атмосфер. Людині туди майже не потрапити, зате можуть апарати.",
      "t21": "Кібернетика:",
      "t22": "автономні підводні апарати ухвалюють рішення самі, бо зв’язок із поверхнею повільний і ненадійний."
    },
    "lab": {
      "t1": "Мікс-лабораторія",
      "t2": "Торкнись океанського поняття, щоб побачити його кібернетичного двійника."
    },
    "facts": {
      "t1": "Цікаві факти",
      "t2": "Український слід у кібернетиці",
      "t3": "Віктор Глушков заснував київську школу кібернетики. Інститут кібернетики імені В. М. Глушкова працює в Києві й нині.",
      "t4": "Чорне море як лабораторія",
      "t5": "Це найбільший у світі морський басейн із сірководневою зоною: нижче приблизно 150–200 м кисню майже немає. Ідеальне місце для випробування датчиків і моделей."
    },
    "footer": {
      "t1": "Мікс світів: об’єднай непоєднуване.",
      "t2": "Автор: Грицишин Михайло Володимирович"
    },
    "meta": {
      "title": "Мікс світів: кібернетика та океанографія | CreDiCo"
    },
    "js": {
      "ocean": "Океан",
      "hint": "Натисни, щоб побачити пару",
      "cyber": "Кібернетика",
      "zones": [
        "сонячна зона",
        "сутінкова зона",
        "темна зона",
        "безодня",
        "жолоби"
      ],
      "locale": "uk-UA",
      "pairs": [
        [
          "Течія Гольфстрім",
          "Потік даних",
          "Обидва переносять енергію й інформацію на великі відстані."
        ],
        [
          "Термохалінна циркуляція",
          "Контур зворотного зв’язку",
          "Зміни температури й солоності запускають ланцюг реакцій, що стабілізує або розхитує систему."
        ],
        [
          "Косяк риб",
          "Рій роботів",
          "Кількох простих правил досить, щоб рухатися узгоджено без командира."
        ],
        [
          "Ехолокація",
          "Сенсор",
          "Надіслати сигнал, прийняти відлуння, оцінити світ навколо."
        ],
        [
          "Екосистема",
          "Мережа",
          "Вузли пов’язані: збій в одному відгукується в інших."
        ],
        [
          "Хвиля",
          "Сигнал",
          "Амплітуда, частота й шум: та сама мова фізики."
        ]
      ]
    }
  } },
  en: { translation: {
    "gauge": {
      "t1": "Depth",
      "t2": "m,"
    },
    "hero": {
      "a1": "Mix of Worlds",
      "t1": "Mix of",
      "t2": "Worlds",
      "t3": "Cybernetics and oceanography: unite the incompatible",
      "t4": "The ocean is the largest natural system on the planet. Cybernetics is the science of how systems sense, decide and steer themselves. Together they give us machines that listen to the deep and models that predict where the sea is heading.",
      "t5": "Dive in"
    },
    "stats": {
      "t1": "of Earth’s surface is ocean",
      "t2": "3,700 m",
      "t3": "average ocean depth",
      "t4": "1,500 m/s",
      "t5": "speed of sound in seawater",
      "t6": "≈4,000",
      "t7": "autonomous Argo floats",
      "t8": "10,935 m",
      "t9": "depth of the Mariana Trench"
    },
    "worlds": {
      "t1": "Two worlds that were never meant to meet, on first glance",
      "t2": "Cybernetics",
      "t3": "The science of control and communication in living organisms, machines and society. The term was introduced by Norbert Wiener in his 1948 book.",
      "t4": "A world of clear signals, algorithms and control.",
      "t5": "Oceanography",
      "t6": "The science of the World Ocean: its physics, chemistry, life and seafloor geology. The ocean covers about 71% of Earth’s surface and holds most of the planet’s water.",
      "t7": "A world of currents, pressure, salinity and unpredictability.",
      "t8": "The word “cybernetics” comes from the Greek κυβερνήτης, meaning",
      "t9": "helmsman",
      "t10": ". The science of control began at sea."
    },
    "descent": {
      "t1": "The descent: where the worlds meet",
      "t2": "The deeper you go, the less human presence and the more automation. Every layer of the ocean has its own cybernetic helper.",
      "t3": "0–200 m",
      "t4": "Sunlit zone",
      "t5": "Here the ocean exchanges heat and carbon dioxide with the atmosphere. It absorbs roughly 90% of the excess heat caused by global warming.",
      "t6": "Cybernetics:",
      "t7": "satellite altimetry measures the height of the ocean surface to within centimeters, and the data feeds climate models.",
      "t8": "200–1,000 m",
      "t9": "Twilight zone",
      "t10": "There is almost no light, yet every night one of the largest migrations on Earth happens here: animals rise toward the surface and sink back at dawn.",
      "t11": "Cybernetics:",
      "t12": "underwater gliders change their buoyancy and “glide” along a path, while a feedback controller holds the course for months.",
      "t13": "to 2,000 m",
      "t14": "Dark zone",
      "t15": "Radio waves fade quickly in water, so communication here is acoustic. Sound travels through water almost five times faster than through air.",
      "t16": "Cybernetics:",
      "t17": "Argo floats dive to 2,000 m every ten days, measure temperature and salinity, and transmit the data when they surface.",
      "t18": "to 10,935 m",
      "t19": "Trenches",
      "t20": "At the bottom of the Mariana Trench the pressure exceeds 1,000 atmospheres. People rarely get there, but machines can.",
      "t21": "Cybernetics:",
      "t22": "autonomous underwater vehicles make decisions on their own, because the link to the surface is slow and unreliable."
    },
    "lab": {
      "t1": "The mix lab",
      "t2": "Tap an ocean concept to reveal its cybernetic twin."
    },
    "facts": {
      "t1": "Interesting facts",
      "t2": "Ukraine’s mark on cybernetics",
      "t3": "Viktor Glushkov founded the Kyiv school of cybernetics. The V. M. Glushkov Institute of Cybernetics still works in Kyiv today.",
      "t4": "The Black Sea as a lab",
      "t5": "It is the largest marine basin in the world with a hydrogen sulfide zone: below roughly 150–200 m there is almost no oxygen. A natural testbed for sensors and models."
    },
    "footer": {
      "t1": "Mix of Worlds: unite the incompatible.",
      "t2": "Author: Mykhailo Volodymyrovych Hrytsyn"
    },
    "meta": {
      "title": "Mix of Worlds: Cybernetics and Oceanography | CreDiCo"
    },
    "js": {
      "ocean": "Ocean",
      "hint": "Tap to reveal the match",
      "cyber": "Cybernetics",
      "zones": [
        "sunlit zone",
        "twilight zone",
        "dark zone",
        "abyss",
        "trenches"
      ],
      "locale": "en-US",
      "pairs": [
        [
          "Gulf Stream",
          "Data flow",
          "Both carry energy and information across great distances."
        ],
        [
          "Thermohaline circulation",
          "Feedback loop",
          "Changes in temperature and salinity trigger a chain reaction that stabilizes or shakes the system."
        ],
        [
          "School of fish",
          "Robot swarm",
          "A few simple rules are enough to move in sync without a leader."
        ],
        [
          "Echolocation",
          "Sensor",
          "Send a signal, catch the echo, estimate the world around you."
        ],
        [
          "Ecosystem",
          "Network",
          "Nodes are linked: a failure in one echoes through the others."
        ],
        [
          "Wave",
          "Signal",
          "Amplitude, frequency and noise: the same language of physics."
        ]
      ]
    }
  } }
};

Це додаток створений для розрахунку курсів валют за даними Націщнального банку
України. Зроблений за допомоги React, react-router-dom (для можливого розширення
функціоналу додатка), axios (get-запит на актуальні дані курсів від НБУ),
emotion/styled (стилі).

Для розрахунку взаємопов'язаних розрахунків курсів за базу була створена
формула: (Q2 _ rate2) / rate1 = (Q1 _ rate1) / rate2, де: Q - це кілкість
валюти, введена у відповідний інпут, rate - це валюта, за курсом якої рахується
ціна.

У додатку можна обрати 3 валюти, але за допомогою цієї формули можна додати
необмежену кількість валют для розрахунку і результати будуть розраховані
коректно.

Також в основному компоненті HomePage, при створенні масиву необхідних об'єктів
створюється додатковий об'єкт для обробки даних по гривні, так як НБУ не надає
цих даних. в цьому об'єкті rate дорівнює 1 (завжди), та дата вираховаєть на
сьогодення.

Дякую Вам за можливість зробити це тестове завдання!

Зі сподіванням на подальше спілкування, Ваш Олексій Хомяков!

This application was created to calculate currency rates based on data from the
National Bank of Ukraine. Built with React, react-router-dom (for possible
extension application functionality), axios (get-request for current course data
from the NBU), emotion/styled (styles).

For the calculation of interrelated rate calculations for the base was created
formula: (Q2 _ rate2) / rate1 = (Q1 _ rate1) / rate2, where: Q is the quantity
of the currency entered in the corresponding input, rate is the currency at
which the rate is calculated price.

In the application you can choose 3 currencies, but with the help of this
formula you can add unlimited currencies to calculate and the results will be
calculated correctly.

Also in the main HomePage component, when creating an array of necessary objects
an additional facility is being created for hryvnia data processing, as the NBU
does not provide it these data. in this object rate is equal to 1 (always), and
the date is calculated on today

Thank you for the opportunity to do this test task!

With hope for further communication, Yours Oleksii Khomiakov!

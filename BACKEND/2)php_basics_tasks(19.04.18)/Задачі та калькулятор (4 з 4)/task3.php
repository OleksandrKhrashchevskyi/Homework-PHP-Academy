Пример задачи
Условие: Найти гравитационное ускорение, сообщаемое Юпитером своему второму галилеевому спутнику Европе,
находящемуся от планеты на среднем расстоянии 670,9·103 км. Масса Юпитера в 318 раз больше
земной массы, а средний радиус Земли равен 6371 км.

Дано: Обозначим данные из условия задачи:
спутник, r = 670,9·10^3 км;
Юпитер, M = 318;
Земля, k = 6371 км.
где g0 = 9,81 м/с2 — ускорение свободного падения на поверхности Земли.



<?php

$options = getopt('r:m:k');

$r = $options['r'];
$m = $options['m'];
$k = $options['k'];

define ('EARTH_GRAVITY', 9.8065);

$Q = (EARTH_GRAVITY * $m) / ($r * $r);

    echo $Q;



<?php
// фун-я добавляет цифру 2 к переданной строке, это для примера :)
function checkName($temp) {
    return $temp . '2';
}

//sleep(3); // задержка в 3 сек
//echo $_SERVER['REMOTE_ADDR']; // возвращаем адрес клиента

// конвертируем данные полученные через POST запрос в виде JSONа в php массив для дальнейшей обработки
//$_POST = json_decode(file_get_contents('php://input'), true); // можно так, и далее работать как с обычным массивом $_POST
//$json = json_decode(file_get_contents('php://input')); // в $json будет объект, доступ будет таким $json->user_name (главное, чтобы пробелов в названиях полей не было!)
$json = json_decode(file_get_contents('php://input'), true); // в $json будет ассоциативный массив, доступ будет таким $json['user_name']

// устанавливаем заголовок для ответа. говорим, что это JSON в UTF-8
// до этого места ничего выводить нельзя! <<---------- !!!
header('Content-Type: application/json; charset=utf-8');
// а после можно :)

// вывод массива в удобном виде
// echo '<pre>';
// var_dump($json);
// echo '</pre>';

// пример массива для конвертации обратно в JSON и последующего вывода (=отправки)
// $response = [
//     'status' => 'ok',
//     'name'   => $name
// ];
$response = [];

// здесь может быть код, который что-то делает с массивом $json['имя_поля'], например:
if ($json['user_name']) {
    $response = [
        'status' => 'ok',
        'name'   => checkName($json['user_name'])
    ];
} else {
    $response = [
        'status' => 'error',
        'name'   => 'noname'
    ];
}

// выводим результат обратно
// JSON_UNESCAPED_UNICODE нужен, чтобы кириллицу нормально возвращал
//echo json_encode($json, JSON_UNESCAPED_UNICODE); // выводим тот же массив, что получили

// или другой массив, который был создан в процессе обработки данных (например $response)
echo json_encode($response, JSON_UNESCAPED_UNICODE);
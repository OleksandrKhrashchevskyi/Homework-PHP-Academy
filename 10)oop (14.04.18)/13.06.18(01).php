<?php

// Описать класс человек с публичными полями - имя и возраст. Создать
// несколько обьктов этого класса и присвоить им значения
// Например - Вася 22, Оля 21 ..

	class Human {
        public $name;
        public $age;

        public function __toString() {
            return $this->name.', '.$this->age.' years old<br />';
        }
    }

	$human1 = new Human;
	$human1->name = 'Vasia';
	$human1->age = 22;
	echo $human1;

	$human2 = new Human;
	$human2->name = 'Olga';
	$human2->age = 21;
	echo $human2;

?>
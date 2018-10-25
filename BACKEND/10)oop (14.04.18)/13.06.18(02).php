<?php

// Описать класс человек как выше, но поля сделать закрытыми(протектид), и сделать
// публичные методы для доступа к закрытым
//полям - setName($newName) getName() setAge($newAge) getAge()
//Создать пару обьектов и задать значения.

	class HUMAN {
		protected $name;
		protected $age;



		public function setName ($name) {
			$this->name = $name;
		}
		public function getName () {
			return $this->name;
		}

		public function setAge ($age) {
			$this->age = $age;
		}
		public function getAge () {
			return $this->age;
		}


		public function __toString() {
			return $this->getName().', '.$this->getAge().' years old<br />';
		}
	}

	$human1 = new Human;
	$human1->setName('Oleg');
	$human1->setAge(44);
	echo $human1;

	$human2 = new Human;
	$human2->setName('Nataly');
	$human2->setAge(32);
	echo $human2;




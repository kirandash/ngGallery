import { Injectable } from '@angular/core';

@Injectable()

export class ImageService{
	visibleImages = [];
	getImages(){
		return this.visibleImages = IMAGES.slice(0);
		// Function to create a copy of Images array slicing from 0 to end
	}
	getImage(id: number){
		// get image from the IMAGES array with id passed in
		return IMAGES.slice(0).find(image => image.id == id)
	}
}

const IMAGES = [
	{"id": 1, "category": "shoes", "caption": "Just Do It!", "url": "assets/img/shoes_01.jpg"},
	{"id": 2, "category": "shoes", "caption": "Just Do It!", "url": "assets/img/shoes_02.jpg"},
	{"id": 3, "category": "shoes", "caption": "Just Do It!", "url": "assets/img/shoes_03.jpg"},
	{"id": 4, "category": "shoes", "caption": "Just Do It!", "url": "assets/img/shoes_04.jpg"},
	{"id": 5, "category": "pen", "caption": "Write your future", "url": "assets/img/pen_01.jpg"},
	{"id": 6, "category": "pen", "caption": "Write your future", "url": "assets/img/pen_02.jpg"},
	{"id": 7, "category": "pen", "caption": "Write your future", "url": "assets/img/pen_03.jpg"},
	{"id": 8, "category": "pen", "caption": "Write your future", "url": "assets/img/pen_04.jpg"},
	{"id": 9, "category": "gym", "caption": "Work hard play hard", "url": "assets/img/gym_01.jpg"},
	{"id": 10, "category": "gym", "caption": "Work hard play hard", "url": "assets/img/gym_02.jpg"},
	{"id": 11, "category": "gym", "caption": "Work hard play hard", "url": "assets/img/gym_03.jpg"},
	{"id": 12, "category": "gym", "caption": "Work hard play hard", "url": "assets/img/gym_04.jpg"},
	{"id": 13, "category": "fruits", "caption": "Fruits are healthy", "url": "assets/img/fruits_01.jpg"},
	{"id": 14, "category": "fruits", "caption": "Fruits are healthy", "url": "assets/img/fruits_02.jpg"},
	{"id": 15, "category": "fruits", "caption": "Fruits are healthy", "url": "assets/img/fruits_03.jpg"},
	{"id": 16, "category": "fruits", "caption": "Fruits are healthy", "url": "assets/img/fruits_04.jpg"}
]
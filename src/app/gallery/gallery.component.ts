import { Component, OnChanges, Input } from '@angular/core';
// OnChanges is a lifecycle hook which is triggered when something in or GalleryComponent changes
import { ImageService } from '../image/shared/image.service';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnChanges {
	title = 'Recent Photos';
	@Input() filterBy?: string = 'all'; // For gallery filter, create an input filterBy of type string
	visibleImages: any[] = [];

	constructor(private imageService: ImageService){
		this.visibleImages = this.imageService.getImages();
	}

	ngOnChanges() {
		this.visibleImages = this.imageService.getImages();
	}
}
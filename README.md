# Gallery

node -v

tsc -v

ng -v

mkdir ng-gallery

cd ng-gallery

ng new gallery

cd gallery

ng serve

npm install ng2-bootstrap bootstrap --save (Deprecated npm install ngx-bootstrap bootstrap --save)

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

Add AlertModule to imports

Add "../node_modules/bootstrap/dist/css/bootstrap.min.css" to styles in angular-cli.json

Restart with ng server

cd src/app

mkdir navbar

touch navbar.component.html navbar.component.css navbar.component.ts

cd src/app

mkdir gallery

touch gallery.component.html gallery.component.css gallery.component.ts

touch image-detail.component.ts image-detail.component.html image-detail.component.css

## Move file to Production
 ng build --prod
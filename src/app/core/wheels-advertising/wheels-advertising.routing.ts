import { Route } from '@angular/router';

const wheelAdvertisingInfo = {
	path : 'bussiness',
	name: 'Negocios'
};

export { wheelAdvertisingInfo }

export const wheelAdvertisingRouting: Route = {
	path: wheelAdvertisingInfo.path,
	loadChildren: () => import('./wheels-advertising.routes'),
}



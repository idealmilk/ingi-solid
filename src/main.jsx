import { createApp } from 'solid-utils';
import { MetaProvider } from 'solid-meta';
import { CarbonIntensityProvider } from './context/carbonIntensity';

import { App } from './App';
import './styles/index.css';

const app = createApp(App);

app.use(MetaProvider);
app.use(CarbonIntensityProvider);

app.mount('#app');

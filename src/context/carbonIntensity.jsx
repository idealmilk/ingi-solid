import {
  createSignal,
  createContext,
  createResource,
  createEffect,
  useContext,
} from 'solid-js';

const now = new Date();

const eightHoursAhead = new Date(
  new Date().setTime(now.getTime() + 16 * 60 * 60 * 1000)
);

const fetchCarbonIntensity = async () =>
  (
    await fetch(
      `https://api.carbonintensity.org.uk/regional/intensity/${now.toISOString()}/${eightHoursAhead.toISOString()}/regionid/13`
    )
  ).json();

const CarbonIntensityContext = createContext();

export function CarbonIntensityProvider(props) {
  const [carbonIntensity, setCarbonIntensity] = createSignal({
      index: 'high',
      forecast: 140,
    }),
    store = [carbonIntensity, setCarbonIntensity];

  const [fetchedCarbonIntensity] = createResource(fetchCarbonIntensity);
  createEffect(() => {
    if (!fetchedCarbonIntensity.loading) {
      setCarbonIntensity(fetchedCarbonIntensity().data.data[0].intensity);
    }
  });

  return (
    <CarbonIntensityContext.Provider value={store}>
      {props.children}
    </CarbonIntensityContext.Provider>
  );
}

export function useCarbonIntensity() {
  return useContext(CarbonIntensityContext);
}

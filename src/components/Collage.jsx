import { createEffect } from 'solid-js';

import { Haps } from './../assets/portraits';

import './Collage.css';

export default function Collage() {
  createEffect(() => {
    $('#ripple').ripples({
      resolution: 512,
      dropRadius: 10,
      perturbance: 0.04,
    });
  });

  return (
    <div class='collage'>
      <div
        id='ripple'
        className='collage-img'
        style={`background: url(${Haps}) left top / cover;`}
      />
    </div>
  );
}

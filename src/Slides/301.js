import React from 'react';
import { Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import { CollectionSvg, GridSvg, ListSvg, TableSvg } from '../Components/BuildingBlocks';

 const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={1} exact>
      <div>
        <h2>List</h2>
        <ListSvg />
      </div>
    </Step>
    <Step index={2} exact>
      <div>
        <h2>Table</h2>
        <TableSvg />
      </div>
    </Step>
    <Step index={3} exact>
      <div>
        <h2>Grid</h2>
        <GridSvg />
      </div>
    </Step>
    <Step index={4} maxIndex={6}>
      <div>
        <ul>
          <li>What about data that isn't linear (eg Pinterest layout, Gantt chart)?</li>
          <Step index={5}><li>Can we even window this type of data?</li></Step>
        </ul>
        <Step index={6}>
          <div>
            <h2>Collection</h2>
            <CollectionSvg />
          </div>
        </Step>
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'The building blocks';

export default slide;

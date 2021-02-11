import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Table, TableDefinition, TableProps } from '../../components/Table/Table';

import dataset from './iris_data.json';


dataset.map((d, i) => ({ ...d, key: i }));

type IrisData =
  { class: string;
    petallength: number;
    petalwidth: number;
    sepallength: number;
    sepalwidth: number; };

const definition: TableDefinition<IrisData> = {
  columns: {
    class:       { label: 'Class' },
    petallength: { label: 'Petal (length)' },
    petalwidth:  { label: 'Petal (width)'  },
    sepallength: { label: 'Sepal (length)' },
    sepalwidth:  { label: 'Sepal (width)'  }
  }
};

const Template: Story<TableProps<IrisData>> = args => (
  <Table
    {...args}
    definition={definition}
    rowKey={r => (r as any).key}
    rows={dataset} />
);


export default { title: 'Components/Table', component: Table } as Meta;

export const Default = Template.bind({});

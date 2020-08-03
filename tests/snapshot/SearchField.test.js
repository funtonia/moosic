import React from 'react';
import SearchField from '../../src/components/SearchField';
import renderer from 'react-test-renderer';

it('SearchField renders correctly', () => {
  const tree = renderer.create(
    <SearchField/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
import React from 'react'
import { shallow } from 'enzyme';
import {campaignList} from '../../components/campaignList'
import campaigns from '../fixtures/expenses'

test('should render CampaignList with campaigns', () => {
  const wrapper = shallow(<ExpenseList campaigns=(campaigns)/>)
  expect(wrapper).toMatchSnapshot();
})

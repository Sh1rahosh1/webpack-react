import { shallow, mount } from 'enzyme';
import Test1 from './index'
import React from 'react';


describe('load page', () => {
    let subject;
    it('should map snapshot', () => {
        subject = shallow(<Test1 />)
        expect(subject).toMatchSnapshot()
    })

    it('should change state when click button', () => {
        subject = mount(<Test1 />);
        subject.find('Button').at(0).simulate('click');
        subject.find('Button').at(1).simulate('click');
        expect(subject.find('.testDiv').at(0).text()).toEqual('3')
        subject.debug();
        expect(subject.state().count).toEqual(3)
    })
})

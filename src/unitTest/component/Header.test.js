import { shallow } from "enzyme";
import Header from '../../component/header/Header'
import { findByTestAttr } from "../../Utility/index";

const setUp =()=>{
    const component = shallow(<Header />);
    return component;
}

describe('Header component',()=>{
    let component;
    beforeEach(()=>{
        component=setUp()
    })

    it('should render without error',()=>{
        const wrapper = findByTestAttr(component, 'header')
        expect(wrapper.length).toBe(1)
    })

    it('should render logo',()=>{
        const wrapper = findByTestAttr(component, "logo");
        expect(wrapper.length).toBe(1)
    })

    it('should render nav menu',()=>{
        const wrapper = findByTestAttr(component,'header__dropDown')
        expect(wrapper.length).toBe(6)
    })
})
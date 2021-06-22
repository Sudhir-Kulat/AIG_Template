import React from 'react'
import {shallow} from 'enzyme'
import Breadcrumb from '../../component/breadcrumb/BreadCrumb'
import {findByTestAttr, checkProps} from '../../Utility/index'

const setUp=(props={})=>{
    const component = shallow(<Breadcrumb {...props} />)
    return component; 
}

describe('BreadCrumb component',()=>{

    describe('should not throw warning',()=>{
        const expectedProps = { heading: "some heading", label: "test lable" };
        const propsErr = checkProps(Breadcrumb,expectedProps)
        expect(propsErr).toBeUndefined();
    })

    describe('When having props',()=>{
        let wrapper;
        beforeEach(()=>{
            const props={
                heading:'some heading',
                label:'test lable'
            }
            wrapper = setUp(props)
        })

        it('should render without error',()=>{
            const component = findByTestAttr(wrapper, 'breadCrumb')
            expect(component.length).toBe(1)
        })
    })  

    describe('When having no props',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp()
        })

        it('should not render',()=>{
            const component = findByTestAttr(wrapper, 'breadCrumb')
            expect(component.length).toBe(0)
        })
    })
})



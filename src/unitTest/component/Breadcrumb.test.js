import React from 'react'
import {shallow} from 'enzyme'
import Breadcrumb from '../../component/breadcrumb/BreadCrumb'
import {findByTestAttr} from '../../Utility/index'
import PropTypes from 'prop-types'

const setUp=(props={})=>{
    const component = shallow(<Breadcrumb {...props} />)
    return component; 
}

describe('BreadCrumb component',()=>{

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



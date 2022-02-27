

describe('Profile', () => {
    
    it('data entry in input', () => {
        const isShow = useSelector((state) => state.isShow);
        const component = render(<input checked={isShow}/>)

        const inputProfile = component.checkValidity(isShow);

        expect(inputProfile).toEqual('true');
    });
});

    
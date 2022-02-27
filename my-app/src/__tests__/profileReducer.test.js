import { profileReducer } from "./store/profile/reducer";

discribe('state profileReducer tests', () => {
    it('returns state if TOGGLE_SHOW_PROFILE true', () => {
        const expected = 'falce';
        const received = profileReducer([]);

        expect(received).toEqual(expected);
    });
});
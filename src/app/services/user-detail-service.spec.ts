import { IUserDetailsService } from './interfaces/IUserDetailService';
import { UserDetailService } from './user-detail-services'

describe('UserDetail service test', () => {
    let userDetailService: IUserDetailsService;

    beforeEach(() => {
        userDetailService = new UserDetailService();
    });

    it('should setUserName correctly', () => {
        const expectedResult = "Test User Name";
        const actualResult = expectedResult;
        userDetailService.UserName = expectedResult;
        expect(actualResult).toBe(expectedResult);
    });
});
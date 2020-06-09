describe('changeHandler', () => {
    it('event handler is constructed cash tendered is 0 amount due is 5', () => {
        let newChange = new ChangeHandler(5);
        expect(newChange.amountDue).toBe(5);
        expect(newChange.cashTendered).toBe(0);
    })
    it('insert quarter adds 25, dime adds 10, nickel adds 5, penny adds 1', () => {
        // arrange
        let insertChange = new ChangeHandler(10);
        // act & assert
        insertChange.insertCoin('quarter');
        expect(insertChange.cashTendered).toBe(25);
        insertChange.insertCoin('dime');
        expect(insertChange.cashTendered).toBe(35);
        insertChange.insertCoin('nickel');
        expect(insertChange.cashTendered).toBe(40);
        insertChange.insertCoin('penny');
        expect(insertChange.cashTendered).toBe(41);
    })
    it('isPaymentSufficient returns true if more than amountDue', () => {
        // arrange
        let moreAmount = new ChangeHandler(10);
        // act
        moreAmount.insertCoin('quarter');
        let isPaymentSufficient = moreAmount.isPaymentSufficient();
        // moreAmount.cashTendered = 11;
        // assert
        expect(isPaymentSufficient).toBeTruthy();
    })
    it('isPaymentSufficient returns false if less than amountDue', () => {
        // arrange 
        let lessAmount = new ChangeHandler(10);
        // act
        lessAmount.cashTendered = 7;
        let isPaymentSufficient = lessAmount.isPaymentSufficient();
        // assert
        expect(isPaymentSufficient).not.toBeTruthy();
    })
    it('isPaymentSufficient returns true if equal to amountDue', () => {
        // arrange 
        let lessAmount = new ChangeHandler(10);
        // act
        lessAmount.cashTendered = 7;
        let isPaymentSufficient = lessAmount.isPaymentSufficient();
        // assert
        expect(isPaymentSufficient).not.toBeTruthy();
    })
    it('returns 32 change: 1 quarter, 0 dime, 1 nickel, 1 penny', () => { 
        // arrange
        let changeAmount = new ChangeHandler(50);
        // act
        changeAmount.cashTendered = 82;
        const change = changeAmount.giveChange();
        // assert
        expect(changeAmount.cashTendered).toBe(82);
        expect(change.quarters).toBe(1);
        expect(change.dimes).toBe(0);
        expect(change.nickels).toBe(1);
        expect(change.pennies).toBe(2);
    })
    it('returns 10 change: 0 quarter, 1 dime, 0 nickel, 0 penny', () => { 
        // arrange
        let changeAmount = new ChangeHandler(10);
        // act
        changeAmount.cashTendered = 20;
        const change = changeAmount.giveChange();
        // assert 
        expect(changeAmount.cashTendered).toBe(20);
        expect(change.quarters).toBe(0);
        expect(change.dimes).toBe(1);
        expect(change.nickels).toBe(0);
        expect(change.pennies).toBe(0);
    })
    it('returns 27 change: 1 quarter, 0 dime, 0 nickel, 2 penny', () => { 
        // arrange
        let changeAmount = new ChangeHandler(30);
        // act
        changeAmount.cashTendered = 57;
        const change = changeAmount.giveChange();
        // assert 
        expect(changeAmount.cashTendered).toBe(57);
        expect(change.quarters).toBe(1);
        expect(change.dimes).toBe(0);
        expect(change.nickels).toBe(0);
        expect(change.pennies).toBe(2);
    })
    it('returns 68 change: 2 quarter, 1 dime, 1 nickel, 3 penny', () => { 
        // arrange
        let changeAmount = new ChangeHandler(60);
        // act
        changeAmount.cashTendered = 128;
        const change = changeAmount.giveChange();
        // assert 
        expect(changeAmount.cashTendered).toBe(128);
        expect(change.quarters).toBe(2);
        expect(change.dimes).toBe(1);
        expect(change.nickels).toBe(1);
        expect(change.pennies).toBe(3);
    })
})

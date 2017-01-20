var fizzbuzz = require('../app/fizzbuzz');
describe('fizzbuzz', function () {

    describe('check', function () {
        it('should return one number as a string', function () {

            var checkOne = fizzbuzz.check(1);
            expect(checkOne).toBe('1');

        });

        it('should return two number as a string', function () {

            var checkOne = fizzbuzz.check(2);
            expect(checkOne).toBe('2');

        });

        it('should fizz when number is 3', function () {

            var checkOne = fizzbuzz.check(3);
            expect(checkOne).toBe('Fizz');

        });

        it('should buzz when number is 5', function () {

            var checkOne = fizzbuzz.check(5);
            expect(checkOne).toBe('Buzz');


        });

        it('should fizz when number is 6', function () {

            var checkOne = fizzbuzz.check(6);
            expect(checkOne).toBe('Fizz');

        });

        it('should buzz when number is 10', function () {

            var checkOne = fizzbuzz.check(10);
            expect(checkOne).toBe('Buzz');

        });

        it('should fizzbuzz when number is 15', function () {

            var checkOne = fizzbuzz.check(15);
            expect(checkOne).toBe('FizzBuzz');

        });
    })

});
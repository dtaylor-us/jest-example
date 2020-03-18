const filterByTerm = require('./src/filterByTerm');

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 3, url: "https://www.link3.dev" }];
        const uri_results = [{id: 1, url: "https://www.url1.dev"}, {id: 2, url: "https://www.url2.dev"}]

        expect(filterByTerm(input, "link")).toEqual(output);
        expect(filterByTerm(input, "LINK")).toEqual(output); // New test
        expect(filterByTerm(input, "uRl")).toEqual(uri_results); // New test
        expect((input) => {
            filterByTerm(input, undefined)
        }).toThrowError('searchTerm cannot be empty');
        expect(() => {
            filterByTerm([], "link")
        }).toThrowError('inputArr cannot be empty');
        expect(() => {
            filterByTerm(undefined, "link")
        }).toThrowError('Cannot read property \'length\' of undefined');
    });
});
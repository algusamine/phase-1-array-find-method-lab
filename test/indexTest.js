
describe('superbowlWin(record)', function () {
  const record = [
    { year: "1978", result: "N/A"},
    { year: "1977", result: "N/A"},
    { year: "1971", result: "N/A"},
    { year: "1970", result: "N/A"},
    { year: "1969", result: "W"},
    { year: "1968", result: "N/A"},
    { year: "1967", result: "N/A"},
    { year: "1966", result: "L"},
    { year: "1965", result: "N/A"},
    { year: "1964", result: "N/A"},
    { year: "1963", result: "N/A"},
    { year: "1962", result: "N/A"},
    { year: "1961", result: "N/A"},
    { year: "1960", result: "N/A"}
  ]

  it('returns a year the KC Chiefs won the superbowl', function () {
    expect(superbowlWin(record)).to.equal('1969');
  });

  it('returns undefined if the record has no win objects', function() {
    const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
    expect(superbowlWin(sadReality)).to.equal(undefined)
  });
});



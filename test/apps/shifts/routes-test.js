describe('Shifts', function() {
  describe('GET /shifts', function() {
    it('returns all active shifts');
    it('returns 200 okay');
  });

  describe('POST /shifts', function() {
    describe('with valid parameters', function() {
      it('creates a shift using the body parameters');
      it('returns 201 created');
      it('returns the shift URI on the location header');
    });

    describe('with invalid parameters', function() {
      it('does NOT create a shift');
      it('returns 422 unprocessable entity');
      it('returns an error message');
    });
  });
});

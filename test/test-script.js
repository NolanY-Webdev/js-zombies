var expect = chai.expect;
var should = chai.should();

describe('Item', function() {
  it('should be a class', function() {
    expect(Item).to.be.to.be.to.be.to.be.to.be.to.to.be.be.to.be.be.a('function');

  });
  it('should have a name', function() {
    var book = new Item('book');
    book.name.should.equal('book');
  });
});

describe('Weapon', function() {
  it('should be a class', function() {
    expect(Weapon).to.be.a('function');
  });
  it('should extend item', function() {
    var crossbow = new Weapon('yo crossbow', 9001);
    expect(crossbow).to.be.instanceOf(Item);
  });
  it('should have damage property', function() {
    var crossbow = new Weapon('yo crossbow', 9001);
    expect(crossbow).to.have.property('damage');
  });
});

describe('Food', function() {
  var pocky = new Food('pocky', 2304857892347);
  it('should be a class', function() {
    expect(Food).to.be.a('function');
  });
  it('should extend item', function() {
    expect(pocky).to.be.instanceOf(Item);
  });
  it('should have energy property', function() {
    expect(pocky).to.have.property('energy');
  });
});

describe('Player', function() {

  var bob = new Player('bob', 4, 3, 1);

  it('should be a class', function() {
    expect(Player).to.be.a('function');
  });
  it('should have a name', function() {
    expect(bob).to.have.property('name');
  });
  it('should have health', function() {
    expect(bob).to.have.property('health');
  });
  it('should have strength', function() {
    expect(bob).to.have.property('strength');
  });
  it('should have speed', function() {
    expect(bob).to.have.property('speed');
  });
  it('should be alive', function() {
    bob.isAlive.should.equal(true);
  });
  it('should be unequipped', function() {
    expect(bob).to.have.property('equipped').equal(false);
  });
});


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
  var bob;

  beforeEach(function () {
    bob = new Player('bob', 4, 3, 1);
  });

  it('should be a class', function() {
    expect(Player).to.be.a('function');
  });
  it('should have a name', function() {
    expect(bob).to.have.property('name');
    expect(bob.name).to.equal('bob');
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
  it('should not be an asshole', function () {
    expect(bob).to.not.have.property('asshole');
  });

  describe('getPack', function() {
    it('should be a function returning an array', function() {
      expect(bob.getPack).to.be.a('function');
      expect(bob.getPack()).to.deep.equal([]);
    });
  });
  describe('getMaxHealth', function() {
    it('should be a function returning max player HP', function() {
      expect(bob.getMaxHealth).to.be.a('function');
      expect(bob.getMaxHealth()).to.equal(4);
    });
  });

  describe('checkPack', function() {
    it('should be a function', function() {
      expect(bob.checkPack).to.be.a('function');

      //cannot perform other tests due to sinon requirement for console log check
    });
  });
  describe('takeItem', function() {
    it('should be a function', function() {
      expect(bob.takeItem).to.be.a('function');
    });
    it('should not allow more than three items in bag', function() {
      var pocky = new Food('pocky', 2304857892347);
      bob.takeItem(pocky);
      bob.takeItem(pocky);
      bob.takeItem(pocky);
      expect(bob.takeItem(pocky)).to.equal(false);
    });
  });
  describe('discardItem', function() {
    it('should be a function', function() {
      expect(bob.discardItem).to.be.a('function');
    });
    it('should remove an item from the bag', function() {
      var pocky = new Food('pocky', 2304857892347);
      bob.takeItem(pocky);
      bob.takeItem(pocky);
      bob.discardItem(pocky);
      expect(bob.getPack()).to.be.length(1);
    });
  });
  describe('equip', function() {
    it('should be a function', function() {
      expect(bob.equip).to.be.a('function');
    });
  });
  describe('eat', function() {
    it('should be a function', function() {
      expect(bob.eat).to.be.a('function');
    });
  });
  describe('useItem', function() {
    it('should be a function', function() {
      expect(bob.useItem).to.be.a('function');
    });
  });
  describe('equippedWith', function() {
    it('should be a function', function() {
      expect(bob.equippedWith).to.be.a('function');
    });
  });
});


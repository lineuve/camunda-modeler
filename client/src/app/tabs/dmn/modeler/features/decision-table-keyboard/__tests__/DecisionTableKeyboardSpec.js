import DecisionTableKeyboard from '../DecisionTableKeyboard';

/* global sinon */

describe('DecisionTableKeyboard', function() {

  it('should pass correct locals to injector#invoke', function() {

    // given
    const injectorStub = sinon.stub({ invoke() {} });
    const decisionTable = { _container: '_container' };

    // when
    const module = new DecisionTableKeyboard(injectorStub, decisionTable);

    // then
    expect(module).to.exist;
    expect(injectorStub.invoke).to.be.calledOnce;

    const locals = injectorStub.invoke.getCall(0).args[2];

    expect(locals).to.have.property('config.keyboard')
      .which.has.property('bindTo').eql(decisionTable._container);
  });

});


const mCases = Symbol('cases');
const mHandlers = Symbol('handlers');

export default class HttpCaser {

  constructor({ cases, handlers }){

    Object.assign(this, {
      [mCases]: cases,
      [mHandlers]: handlers 
    });

  }

}
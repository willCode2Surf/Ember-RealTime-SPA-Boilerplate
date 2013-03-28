/**
 * @author dustin brown (@willcode2surf) http://willcode2surf.com
 */

// I USE LAWNCHAIR because it closely mirrors the bucket system that RIAK has on the backend
require("/stores/lawnchair_adapter");


App.Store = DS.Store.extend({
	revision: 12,
	adapter: DS.LawnchairAdapter.create()
});

App.store = DS.Store.create({
	revision: 12,
	//adapter: DS.FixtureAdapter
	adapter: DS.LawnchairAdapter.create()
});

// specify if certain routes use different adapters, testobjects use fixture data for example
//App.Store.registerAdapter('MySweetEmberApp.TestObject', DS.FixtureAdapter);


const hProtocol = 'https';
const hHostname = 'test.com';
const hPort = '876';
const hPath = 'hawkular/metrics';
const instanceSettings = {
  url: `${hProtocol}://${hHostname}:${hPort}/${hPath}`,
  jsonData: {
    tenant: 'test-tenant'
  }
};

export function expectRequest(request, verb, path) {
    expect(request.method).to.equal(verb);
    expect(request.headers).to.have.property('Hawkular-Tenant', instanceSettings.jsonData.tenant);
    expect(request.url).to.equal(`${instanceSettings.url}/${path}`);
}

export function expectRequestWithTenant(request, verb, path, tenant) {
    expect(request.method).to.equal(verb);
    expect(request.headers).to.have.property('Hawkular-Tenant', tenant);
    expect(request.url).to.equal(`${instanceSettings.url}/${path}`);
}

export function getSettings() {
  return instanceSettings;
}

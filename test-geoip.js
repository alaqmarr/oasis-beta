const geoip = require('geoip-lite');

const ip = '207.97.227.239'; // GitHub IP
const geo = geoip.lookup(ip);

console.log('Testing IP:', ip);
console.log('Geo Result:', geo);

if (geo && geo.country === 'US') {
  console.log('SUCCESS: GeoIP lookup is working.');
} else {
  console.log('FAILURE: GeoIP lookup failed.');
}

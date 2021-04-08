/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dns = {};
  if (!domains) return dns;

  function parserDomains(url) {
    const res = [];
    const lastdns = url
      .split('.')
      .reverse()
      .reduce((acum, curr) => {
        res.push(`.${acum}`);
        return `${acum}.${curr}`;
      });
    res.push(`.${lastdns}`);

    return res;
  }

  domains.forEach((doman) => {
    const parse = parserDomains(doman);
    parse.forEach((item) => {
      if (dns[item] === undefined) {
        dns[item] = 1;
      } else {
        dns[item] += 1;
      }
    });
  });

  return dns;
}

module.exports = getDNSStats;

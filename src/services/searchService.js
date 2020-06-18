import FakeSearchAPI from '../fake-api/search'

const CACHE_KEY = 'P_CACHED_SEARCH';
export default (function() {

  var cachedSearchStore = loadCache();

  async function cachedSearch(keyword, cache = true) {
    keyword = keyword.toLocaleLowerCase();
    let cachedResult = loadCachedByKey(keyword);
    if (cachedResult) {
      return cachedResult;
    } else {
      for (let key in cachedSearchStore) {
        if (key && keyword.startsWith(key)) {
          let tempResult = loadCachedByKey(key);
          tempResult = tempResult.filter(item => item.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase()))
          if (tempResult.length > 0) return tempResult;
        }
      }
    }

    const result = await FakeSearchAPI.search(keyword);
    if (cache) {
      saveCache(keyword, result)
    }

    return result;
  };

  function loadCache() {
    const cache = localStorage.getItem(CACHE_KEY);
    if (cache) {
      try {
        const obj = JSON.parse(cache);
        return obj;
      } catch {
        return {};
      }
    }
    return {}
  }

  function loadCachedByKey(key) {
    return cachedSearchStore[key];
  }

  function saveCache(key, data) {
    cachedSearchStore[key] = data;
    localStorage.setItem(CACHE_KEY, JSON.stringify(cachedSearchStore));
  }

  function clearCache() {
    cachedSearchStore = {};
    localStorage.removeItem(CACHE_KEY)
  }

  return {
    cachedSearch, loadCache, saveCache, loadCachedByKey, clearCache
  }

})();
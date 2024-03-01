export const Storage = {
  getSample(): any {
    let dataStr = window.localStorage['sample'];
    if (dataStr != null) {
      try {
        return JSON.parse(dataStr);
      } catch { }
    }
    return null;
  },
  setSample(value: any) {
    window.localStorage['sample'] = JSON.stringify(value);
  }
}
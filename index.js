function ExtractDomainName(url) {
  // Remove protocol (http, https) if it exists
  url = url.replace("http://", "").replace("https://", "").replace("www.", "");

  // Split by dots and return the first part
  return url.split(".")[0];
}

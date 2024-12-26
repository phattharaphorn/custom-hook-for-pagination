##  Custom Hook for Pagination
This is an example project that demonstrates how to implement pagination in a React app using a custom hook. The app fetches data from the `https://api.zippopotam.us/us/33162` API, which provides information about a specific US zip code. The app simulates pagination functionality by allowing the user to navigate through multiple pages of data.

### Features
- Custom pagination using a React hook (`usePagination`)
- Fetching zip code information from the `https://api.zippopotam.us/us/33162` API
- Simulated pagination with "Previous" and "Next" buttons to navigate through data pages
  
### Installation

1. Clone the repository:

```
https://github.com/phattharaphorn/custom-hook-for-pagination.git  
```

2. Install dependencies:

```
npm install
```

3. Run the app:

```
npm start
```

4. Open the browser at http://localhost:3000.
  
### How to Inspect API Responses
To view the responses from the API, you can open the Developer Tools in your browser and navigate to the Network tab:

1. Right-click anywhere on the page and select Inspect or press F12 (on most browsers).
   
2. Go to the Network tab.

3. Refresh the page or navigate through pages in the app.
   
4. Look for requests to the https://api.zippopotam.us/us/33162 API and click on them to see the response in the Response section.
   
This will allow you to see the data returned from the API, which includes information about the specific zip code.



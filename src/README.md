# Starting sequence
1st On the _tracks folder_ run the **react-native bundler** with: **npm start**
2nd On _track-server folder_ run the **express api** with: **npm run dev**
3rd On the _tracks folder_ run the **tunnel** with : **ngrok http 3000**
4th Replace the **baseURL** in the api>tracker.js file with the new URL from **ngrok**


====================
## Troubleshooting
**Unable to connect to mongoDB**
_Make sure that MondoDB still has your IP Address white listed_
**Unable to connect to api**
_Ensure that you have replaced the URI with the new one from ngrok_
**Tunnel service expired**
_restart ngrok_


=====================
## README usage notes
# Heading 1
## Heading 2
### Heading 3

**Bold**
_Italics_
**Combining Bold with _Italic_**
***All text Bold and Italic***
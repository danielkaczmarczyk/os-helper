#OS Helper

OS helper decode is a function that expands the data regarding classification codes for properties within UK that are a part of AddressBase database distributed by OS' Places API. Find more at (OS Places API docs)[https://apidocs.os.uk/]

To use it, simply import it and call `decode`, passing it your classification code. Example:

`npm install os-helper`

```
import osHelper from 'os-helper-encode';

console.log(osHelper.decode('ZW99LG'))

console output:
>>> 
{ Concatenated: 'ZW99LG',
  Class_Desc: 'Lych Gate',
  Primary_Code: 'Z',
  Secondary_Code: 'W',
  Tertiary_Code: '99',
  Quaternary_Code: 'LG',
  Primary_Desc: 'Object of Interest',
  Secondary_Desc: 'Place Of Worship',
  Tertiary_Desc: '',
  Quaternary_Desc: 'Lych Gate'
}
```

# imitatio
An image uploading server written in NodeJS for ShareX

## How to use
1. Clone this repository  
     `git clone git@github.com:JustinOleskii/imitatio.git`  
2. Install required dependencies  
`npm install`  
3. Copy the example .env file and modify it  
`cp .env.example .env`  
Example:
	```
	PORT=5000
	SECRET=Q2dm9Zfxd34meG9X
	FILE_NAME_SIZE=5
	```
4. Run the server!  
`node .`
5. Profit!

## Future Plans
 - [ ] Create front-end
 - [ ] Make gallery view (password-protected)
 - [ ] Add support for note uploading (consider merging project with [codesnip](https://github.com/JustinOleskii/codesnip))
This is in a directory with Demo picture of `c` and `x` working.

**PLEASE DO NOT CHANGE ANYTHING IN ```.hidden/```.

Also, ***PEASE DO NOT REPLACE THE REAL `$PREFIX/bin/uname` WITH THIS FAKE ```uname``` in the root of the repository.

instead, do this.

```bash
mkdir -p ~/fakebin
cd ~/fakebin
# download the uname file seprately.
curl -LO https://raw.githubusercontent.com/tanazd2/termux-utils/main/uname
chmod +x uname
```

# Cheatsheet

## ssh

Use specific private key to access server:
```
$ ssh -i C:\Users\Leo\.ssh\id_ed25519 -T git@github.com
```

Add public key to authorized_keys:
```
$ cat id_rsa.pub >> authorized_keys
```

## chmod

* ```---``` 0
* ```--x``` 1
* ```-w-``` 2
* ```-wx``` 3
* ```r--``` 4
* ```r-x``` 5
* ```rw-``` 6
* ```rwx``` 7

## sftp

Commands for remote server:
```
$ pwd
$ ls
$ cd
```

Commands for local machine:
```
$ lpwd
$ lls
$ lcd
```

Send a file test.txt to the remote servers current working directory:
```
$ put test.txt
```
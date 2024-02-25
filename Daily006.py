if __name__ == '__main__':
    n = int(input())
    stringn = ""
    if n >= 1 and n<= 150:
        for i in range (n):
            stringn += str(i+1)
    print(stringn)
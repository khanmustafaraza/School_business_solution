a= 6
print(a)
def sum():
    global a
    a=7
    b=8
    print(a+b)
    print("inside the function",a)
sum()

print("outside the function ",a)
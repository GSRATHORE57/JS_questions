#### Question 1
```java
class Test 
{
    public static void main(String [] args) 
    {
        Test p = new Test();
        p.start();
    }

    void start() 
    {
        boolean b1 = false;
        boolean b2 = fix(b1);
        System.out.println(b1 + " " + b2);
    }

    boolean fix(boolean b1) 
    {
        b1 = true;
        return b1;
    }
}
```
<hr/>

#### Question 2

```java
class PassS 
{
    public static void main(String [] args) 
    {
        PassS p = new PassS();
        p.start();
    }

    void start() 
    {
        String s1 = "slip";
        String s2 = fix(s1);
        System.out.println(s1 + " " + s2);
    }

    String fix(String s1) 
    {
        s1 = s1 + "stream";
        System.out.print(s1 + " ");
        return "stream";
    }
}
```

<hr/>


#### Question 3

```java

class Test 
{
    public static void main(String [] args) 
    {
        int x=20;
        String sup = (x < 15) ? "small" : (x < 22)? "tiny" : "huge";
        System.out.println(sup);
    }
}

```
<hr/>

#### Question 4

```java
class Test 
{
    static int s;
    public static void main(String [] args) 
    {
        Test p = new Test();
        p.start();
        System.out.println(s);
    }

    void start() 
    {
        int x = 7;
        twice(x);
        System.out.print(x + " ");
    }

    void twice(int x) 
    {
        x = x*2;
        s = x;
    }
}
```
<hr/>

#### Question 5

```java
class Test 
{
    public static void main(String [] args) 
    {
        int y = 10;
        int x = ++y + y-- + ++y;
        System.out.println(x);
    }
}
```
<hr />


#### Question 6


```java
class Test 
{
   public static void main(String [] args) 
    {
        int x= 0;
        int y= 0;
        for (int z = 0; z < 5; z++) 
        {
            if (( ++x > 2 ) && (++y > 2)) 
            {
                x++;
            }
        }
        System.out.println(x + " " + y);
    }
}
```
<hr/>

#### Question 7
```java
class Test {
    public static void main(String[] args)
    {
        for (int i = 0; i < 10; i++)
            int x = 10;
    }
}

```
<hr/>

#### Question 8
```java
class Test {
    public static void main(String[] args)
    {
        for (int i = 0, x = 3.145; i < 2; i++)
            System.out.println(i+x);
    }
}

```

#### Question 9
```java
class Test {
    public static void main(String[] args)
    {
        for (int i = 0, x = 3.145; i < 2; i++)
            System.out.println(i+x);
    }
}
```

#### Question 10
```java
class Test {
    public static void main(String[] args)
    {
        int i = 0;
        for (System.out.println("Hello, World"); i < 1; i++)
            System.out.println(++i);
    }
}
```

#### Question 11

Write a program to check if a number if a pallindrome. A number is a pallindrome if the reverse is equal to the number.

E.g. 121 -> when the digits of 121 are reverse, they again form 121.

121 -> Yes
122 -> No
143341 -> Yes

#### Question 12

Write a program to check if a number is a armstrong number. A positive integer is called an Armstrong number of order n if

abcd... = a^n + b^n + c^n + d^n + ...

For n=3, 153 = 1x1x1 + 5x5x5 + 3x3x3  // 153 is an Armstrong number.

#### Question 13



#### Question 14
```java
class Test {
    public static void main(String[] args)
    {
        do while(true)
          System.out.println("HELLO");
        while(false);
    }
}
```
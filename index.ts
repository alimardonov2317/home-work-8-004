
{
    // 1 masala
    class Student {
        constructor(public name: string, public age: number, public grade: string) {}
    
        getInfo(): string {
            return `Ism: ${this.name}, Yoshi: ${this.age}, Bahosi: ${this.grade}`;
        }
    }
    const student = new Student("Ali", 20, "A");
    console.log(student.getInfo());
}


{
    // 2 masala
    class BankAccount {
        constructor(public owner: string, public balance: number) {}
    
        deposit(amount: number): void {
            this.balance += amount;
            console.log(`Hisobga ${amount} qo'shildi. Joriy balans: ${this.balance}`);
        }
    
        pay(amount: number): void {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`Hisobdan ${amount} yechildi. Qolgan balans: ${this.balance}`);
            } else {
                console.log("Yetarli mablag' mavjud emas!");
            }
        }
    }
    
    const account = new BankAccount("Hasan", 1000);
    account.deposit(500);
    account.pay(300);

}

{
    // 3 masala
    class Circle {
        constructor(public radius: number) {}
    
        getArea(): number {
            return Math.PI * this.radius ** 2;
        }
    }
    
    const circle = new Circle(10);
    console.log(`Doiraning yuzasi: ${circle.getArea()}`);

}

{

    // 4 masala
    class Product {
        constructor(public name: string, public price: number) {}
    
        applyDiscount(percentage: number): void {
            this.price -= (this.price * percentage) / 100;
        }
    }
    
    const product = new Product("Laptop", 500);
    product.applyDiscount(20);
    console.log(`Chegirmadan keyingi narx: ${product.price}`);
}



{
    // 5 masala
    class Car {
        constructor(public brand: string, public model: string, public year: number) {}
    
        getCarInfo(): string {
            return `${this.brand} ${this.model} - ${this.year}`;
        }
    }
    
    const car = new Car("Toyota", "Corolla", 2022);
    console.log(car.getCarInfo());
}

{
    // 1 masala
    var Student = /** @class */ (function () {
        function Student(name, age, grade) {
            this.name = name;
            this.age = age;
            this.grade = grade;
        }
        Student.prototype.getInfo = function () {
            return "Ism: ".concat(this.name, ", Yoshi: ").concat(this.age, ", Bahosi: ").concat(this.grade);
        };
        return Student;
    }());
    var student = new Student("Ali", 20, "A");
    console.log(student.getInfo());
}
{
    // 2 masala
    var BankAccount = /** @class */ (function () {
        function BankAccount(owner, balance) {
            this.owner = owner;
            this.balance = balance;
        }
        BankAccount.prototype.deposit = function (amount) {
            this.balance += amount;
            console.log("Hisobga ".concat(amount, " qo'shildi. Joriy balans: ").concat(this.balance));
        };
        BankAccount.prototype.pay = function (amount) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log("Hisobdan ".concat(amount, " yechildi. Qolgan balans: ").concat(this.balance));
            }
            else {
                console.log("Yetarli mablag' mavjud emas!");
            }
        };
        return BankAccount;
    }());
    var account = new BankAccount("Hasan", 1000);
    account.deposit(500);
    account.pay(300);
}
{
    // masala
    var Circle = /** @class */ (function () {
        function Circle(radius) {
            this.radius = radius;
        }
        Circle.prototype.getArea = function () {
            return Math.PI * Math.pow(this.radius, 2);
        };
        return Circle;
    }());
    var circle = new Circle(10);
    console.log("Doiraning yuzasi: ".concat(circle.getArea()));
}
{
    // masala
    var Product = /** @class */ (function () {
        function Product(name, price) {
            this.name = name;
            this.price = price;
        }
        Product.prototype.applyDiscount = function (percentage) {
            this.price -= (this.price * percentage) / 100;
        };
        return Product;
    }());
    var product = new Product("Laptop", 500);
    product.applyDiscount(20);
    console.log("Chegirmadan keyingi narx: ".concat(product.price));
}
{
    // 5 masala
    var Car = /** @class */ (function () {
        function Car(brand, model, year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
        Car.prototype.getCarInfo = function () {
            return "".concat(this.brand, " ").concat(this.model, " - ").concat(this.year);
        };
        return Car;
    }());
    var car = new Car("Toyota", "Corolla", 2022);
    console.log(car.getCarInfo());
}

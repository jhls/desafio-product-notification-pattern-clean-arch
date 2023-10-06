import Product from "./product";

describe("Product unit tests",()=>{

    it("Should throw error when id is empty",() =>{
        expect(()=>{
            const  product = new Product("","Product1",100);
        }).toThrowError("product: Id is required");
    });

    it("Should throw error when name is empty",() =>{
        expect(()=>{
            const  product = new Product("123","",100);
        }).toThrowError("product: Name is required");
    });

    it("Should throw error when id and name are empty",() =>{
        expect(()=>{
            const  product = new Product("","",100);
        }).toThrowError("product: Id is required,product: Name is required");
    });


    it("Should throw error when price is less than zero",() =>{
        expect(()=>{
            const  product = new Product("123","Product1",-1);
        }).toThrowError("product: Price must be greater than zero");
    });

    it("Should change name",() =>{
        const  product = new Product("123","Product1",100);
        product.changeName("Product2");
        expect(product.name).toBe("Product2");
    });

    it("Should change price",() =>{
        const  product = new Product("123","Product1",100);
        product.changePrice(150);
        expect(product.price).toBe(150);
    });


});
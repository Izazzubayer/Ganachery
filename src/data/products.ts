export interface Product {
    id: string;
    name: string;
    category: string;
    price: string;
    image: string;
    badge?: string;
    variant: string;
    description: string;
    longDescription: string;
    ingredients: string;
    care: string;
}

export const products: Product[] = [
    {
        id: "artisanal-truffles",
        name: "Signature Truffle Box",
        category: "chocolates",
        price: "৳ 3,200",
        image: "/images/truffles-gift-box.jpg",
        badge: "Bestseller",
        variant: "25 Pieces · Assorted",
        description: "Hazelnut praline, soan papri, cream cheese — each truffle handmade with European-grade chocolate.",
        longDescription: "Our Signature Truffle Box is a curated journey through 25 handcrafted truffles. Featuring a delicate balance of classic European flavours and traditional Bangladeshi ingredients, each piece is enrobed in premium Belgian couverture chocolate and hand-finished with artisan detailing.",
        ingredients: "Belgian Couverture Chocolate (Dark, Milk, White), Heavy Cream, Local Wild Honey, Hazelnut Praline, Pistachio, Sea Salt, Edible Gold Leaf.",
        care: "Store in a cool, dry place between 16°C and 18°C. Best consumed within 14 days of purchase."
    },
    {
        id: "premium-medjool-dates",
        name: "Premium Medjool Dates",
        category: "dates",
        price: "৳ 2,800",
        image: "/images/gallery-6.jpg",
        badge: "New",
        variant: "20 Pieces · 4 Flavours",
        description: "Large Medjool dates adorned with Hazelnut Praline, Gur (Jaggery), Coconut & Sesame.",
        longDescription: "Sourced directly, our Premium Medjool Dates are renowned for their large size and caramel-like texture. We individually stuff each date with an array of luxurious fillings such as Salted Peanut Butter, Walnut White Chocolate, and traditional Gur & Sesame.",
        ingredients: "Premium Medjool Dates, Assorted Nuts (Walnut, Pecan, Pistachio, Almond), Hazelnut Praline, Jaggery (Gur), Desiccated Coconut.",
        care: "Keep refrigerated for up to 30 days. Serve at room temperature for the best texture."
    },
    {
        id: "petit-fours",
        name: "Petit Fours & Tarts",
        category: "patisserie",
        price: "৳ 1,500",
        image: "/images/gallery-2.jpg",
        variant: "Box of 12",
        description: "Strawberry tarts topped with mirror-glaze, lemon meringue rosettes.",
        longDescription: "Experience the delicate art of French pâtisserie paired with local warmth. This assortment of bite-sized elegance includes mirror-glazed berry tarts, crisp lemon meringue, and rich chocolate mousse cups.",
        ingredients: "Almond Flour, French Butter, Organic Pastry Flour, Fresh Seasonal Berries, Lemon Curd, Madagascar Vanilla Bean.",
        care: "Must be refrigerated. Best enjoyed within 2 days of delivery."
    },
    {
        id: "chocolate-strawberries",
        name: "Chocolate Strawberries",
        category: "seasonal",
        price: "৳ 1,200",
        image: "/images/chocolate-strawberries.jpg",
        badge: "Seasonal",
        variant: "12 Pieces",
        description: "Fresh, juicy strawberries enrobed in rich chocolate with hand-piped designs.",
        longDescription: "A fleeting luxury available only during the peak strawberry season. Hand-selected, extra-large strawberries are dipped entirely by hand into dark, milk, and white Belgian chocolate, then elegantly drizzled or rolled in crushed nuts.",
        ingredients: "Fresh Strawberries, Belgian Chocolate (70% Dark, 33% Milk, 28% White), Crushed Pistachios, Edible Rose Petals.",
        care: "Highly perishable. Keep refrigerated and consume within 24 hours of purchase."
    },
    {
        id: "dessert-selections",
        name: "Dessert Selections",
        category: "giftbox",
        price: "৳ 5,500",
        image: "/images/gallery-4.jpg",
        badge: "Bestseller",
        variant: "Flagship · Truffles, Dates & More",
        description: "Our flagship gift box. A curated journey through truffles, dates, brownies, and beyond.",
        longDescription: "The ultimate gifting experience. The Dessert Selections box is an opulent, multi-tiered presentation featuring the absolute best of Ganachery. Perfect for weddings, corporate VIP gifting, or making an unforgettable impression.",
        ingredients: "Assorted chocolates, stuffed dates, signature brownie bites, and macarons. (Contains nuts, dairy, and gluten).",
        care: "Store in a cool, dry place. Baked items consume within 3 days, chocolates within 14 days."
    },
    {
        id: "dates-brownie-box",
        name: "Dates & Brownie Box",
        category: "giftbox",
        price: "৳ 3,500",
        image: "/images/brownies-dates-box.jpg",
        variant: "Assorted · 18 Pieces",
        description: "A delightful mix of our signature stuffed dates and fudgy Belgian chocolate brownies.",
        longDescription: "When you can't decide between tradition and indulgence. Half of this luxury box is dedicated to our stuffed Medjool dates, while the other half features our famously dense, fudgy, sea-salt topped Belgian brownie squares.",
        ingredients: "Medjool Dates, Assorted Nuts, Dark Belgian Couverture, Unsalted Butter, Organic Eggs, Cocoa Powder.",
        care: "Store in an airtight container at room temperature for up to 5 days."
    },
    {
        id: "grand-assortment",
        name: "Grand Assortment",
        category: "giftbox",
        price: "৳ 4,800",
        image: "/images/brownies-strawberries-box.jpg",
        badge: "Limited",
        variant: "Strawberries · Brownies · Dates",
        description: "A vivid and vibrant assortment featuring strawberries, brownie bites, and dates.",
        longDescription: "Designed for sharing and celebrating. The Grand Assortment brings color and joy to any gathering. It features beautifully arranged chocolate-dipped strawberries, rich brownie squares, and premium stuffed dates in a premium display box.",
        ingredients: "Fresh Strawberries, Medjool Dates, Nuts, Belgian Chocolate, Premium Baking Ingredients.",
        care: "Keep refrigerated due to fresh strawberries. Consume within 24 hours."
    },
    {
        id: "artisan-chocolate-bars",
        name: "Artisan Chocolate Bars",
        category: "chocolates",
        price: "৳ 1,800",
        image: "/images/gallery-10.jpg",
        variant: "Set of 2 · Dark & Milk",
        description: "Hand-tempered, snap-perfect chocolate bars adorned with dried fruits and nuts.",
        longDescription: "Our Artisan Chocolate Bars are a testament to the tempering process. You will receive one 70% Dark Chocolate bar topped with sea salt and roasted almonds, and one 33% Milk Chocolate bar swirled with caramel and crushed pecans.",
        ingredients: "Cocoa Mass, Cocoa Butter, Sugar, Whole Milk Powder, Toasted Almonds, Pecans, Sea Salt.",
        care: "Store in a cool, dry place between 16°C and 18°C away from direct sunlight."
    },
    {
        id: "ramadan-collection",
        name: "Ramadan Collection",
        category: "seasonal",
        price: "৳ 4,200",
        image: "/images/gallery-14.jpg",
        badge: "Seasonal",
        variant: "Limited Edition · 30 Pieces",
        description: "A curated offering of premium Medjool dates, artisanal truffles, and festive assortments.",
        longDescription: "Our exclusive Ramadan Collection is designed to elevate your iftar table. Wrapped in beautiful, crescent-embossed packaging, this sprawling box includes our classic stuffed dates alongside Middle Eastern inspired truffles like Pistachio Rose and Cardamom Coffee.",
        ingredients: "Medjool Dates, Pistachios, Cardamom, Rose Water, Coffee Beans, Belgian Chocolate, Assorted Nuts.",
        care: "Store in a cool, dry place. Best consumed within 14 days."
    },
    {
        id: "basque-burnt-cheesecake",
        name: "Basque Burnt Cheesecake",
        category: "patisserie",
        price: "৳ 2,500",
        image: "/images/cheesecake.jpg",
        badge: "Bestseller",
        variant: "7 inch · Serves 8-10",
        description: "Caramelized exterior with a beautifully rich, melting creamy center.",
        longDescription: "A glorious contradiction of textures. Baked at high heat, our Basque Cheesecake develops a deeply caramelized, almost burnt exterior that yields perfectly to an incredibly soft, creamy, and rich vanilla-infused center.",
        ingredients: "Premium Cream Cheese, Heavy Cream, Organic Eggs, Sugar, Madagascar Vanilla Extract, Touch of Flour.",
        care: "Keep refrigerated. Let sit at room temperature for 20 minutes before serving for the best texture."
    },
    {
        id: "truffles-brownies",
        name: "Truffle & Brownie Duo",
        category: "giftbox",
        price: "৳ 3,000",
        image: "/images/assorted-truffles-brownies.jpg",
        variant: "12 Truffles · 8 Brownies",
        description: "The perfect pairing of delicate chocolate truffles and dense brownie squares.",
        longDescription: "A beautiful interplay between the refined elegance of hand-rolled truffles and the comforting richness of our signature brownies. Packaged in a sleek, dual-compartment box.",
        ingredients: "Belgian Chocolate, Organic Eggs, French Butter, Baking Flour, Assorted Nut Pralines, Heavy Cream.",
        care: "Store in a cool, dry place. Consume within 5 days for optimal freshness."
    },
    {
        id: "classic-dates-box",
        name: "Classic Date Box",
        category: "dates",
        price: "৳ 2,200",
        image: "/images/dates-gift-box.jpg",
        variant: "15 Pieces",
        description: "A smaller, elegant box of our finest stuffed Medjool dates for intimate gifting.",
        longDescription: "The Classic Date Box is the ideal small gift or personal indulgence. Fifteen perfectly sized Medjool dates come hand-stuffed with our most popular fillings, including Walnut White Chocolate and Pistachio Paste.",
        ingredients: "Premium Medjool Dates, Walnuts, Pistachios, White Chocolate, Dark Chocolate.",
        care: "Keep refrigerated. Bring to room temperature before serving."
    }
];

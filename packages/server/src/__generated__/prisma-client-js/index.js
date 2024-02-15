
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.ShopScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description'
};

exports.Prisma.ManufacturerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description'
};

exports.Prisma.ShopOnManufacturerScalarFieldEnum = {
  shopId: 'shopId',
  manufacturerId: 'manufacturerId'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description'
};

exports.Prisma.ManufacturerHandlingProductsScalarFieldEnum = {
  id: 'id',
  stock: 'stock',
  price: 'price',
  productId: 'productId',
  manufacturerId: 'manufacturerId'
};

exports.Prisma.ProductCategoryScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.ProductOnProductCategoryScalarFieldEnum = {
  productId: 'productId',
  categoryId: 'categoryId'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  shopId: 'shopId',
  manufacturerId: 'manufacturerId',
  approved: 'approved',
  orderAt: 'orderAt'
};

exports.Prisma.OrderItemScalarFieldEnum = {
  orderId: 'orderId',
  productId: 'productId',
  quantity: 'quantity'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};


exports.Prisma.ModelName = {
  Shop: 'Shop',
  Manufacturer: 'Manufacturer',
  ShopOnManufacturer: 'ShopOnManufacturer',
  Product: 'Product',
  ManufacturerHandlingProducts: 'ManufacturerHandlingProducts',
  ProductCategory: 'ProductCategory',
  ProductOnProductCategory: 'ProductOnProductCategory',
  Order: 'Order',
  OrderItem: 'OrderItem'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\Program\\GitHub\\gx-frontend-challenges\\packages\\server\\src\\__generated__\\prisma-client-js",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwNCi8vIGxlYXJuIG1vcmUgYWJvdXQgaXQgaW4gdGhlIGRvY3M6IGh0dHBzOi8vcHJpcy5seS9kL3ByaXNtYS1zY2hlbWENCg0KZ2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCAgID0gIi4uL3NyYy9fX2dlbmVyYXRlZF9fL3ByaXNtYS1jbGllbnQtanMiDQp9DQoNCmdlbmVyYXRvciBmYWJicmljYSB7DQogIHByb3ZpZGVyID0gInByaXNtYS1mYWJicmljYSINCn0NCg0KZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyID0gInNxbGl0ZSINCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpDQp9DQoNCi8vIOiyqeWjsuS8muekvg0KbW9kZWwgU2hvcCB7DQogIGlkICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpDQogIG5hbWUgICAgICAgICAgICAgICAgIFN0cmluZw0KICBkZXNjcmlwdGlvbiAgICAgICAgICBTdHJpbmcNCiAgcGFydG5lck1hbnVmYWN0dXJlcnMgU2hvcE9uTWFudWZhY3R1cmVyW10NCiAgb3JkZXJzICAgICAgICAgICAgICAgT3JkZXJbXQ0KfQ0KDQovLyDoo73pgKDkvJrnpL4NCm1vZGVsIE1hbnVmYWN0dXJlciB7DQogIGlkICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpDQogIG5hbWUgICAgICAgICAgICAgU3RyaW5nDQogIGRlc2NyaXB0aW9uICAgICAgU3RyaW5nDQogIGhhbmRsaW5nUHJvZHVjdHMgTWFudWZhY3R1cmVySGFuZGxpbmdQcm9kdWN0c1tdDQogIHBhcnRuZXJTaG9wcyAgICAgU2hvcE9uTWFudWZhY3R1cmVyW10NCiAgb3JkZXJzICAgICAgICAgICBPcmRlcltdDQp9DQoNCi8vIOiyqeWjsuS8muekvi3oo73pgKDkvJrnpL4g5Lit6ZaT44OG44O844OW44OrDQptb2RlbCBTaG9wT25NYW51ZmFjdHVyZXIgew0KICBzaG9wICAgICAgICAgICBTaG9wICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3Nob3BJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHNob3BJZCAgICAgICAgIFN0cmluZw0KICBtYW51ZmFjdHVyZXIgICBNYW51ZmFjdHVyZXIgQHJlbGF0aW9uKGZpZWxkczogW21hbnVmYWN0dXJlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgbWFudWZhY3R1cmVySWQgU3RyaW5nDQoNCiAgQEBpZChbc2hvcElkLCBtYW51ZmFjdHVyZXJJZF0pDQp9DQoNCi8vIOWVhuWTgQ0KbW9kZWwgUHJvZHVjdCB7DQogIGlkICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpDQogIG5hbWUgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgIEB1bmlxdWUNCiAgZGVzY3JpcHRpb24gICBTdHJpbmcNCiAgY2F0ZWdvcmllcyAgICBQcm9kdWN0T25Qcm9kdWN0Q2F0ZWdvcnlbXQ0KICBtYW51ZmFjdHVyZXJzIE1hbnVmYWN0dXJlckhhbmRsaW5nUHJvZHVjdHNbXQ0KICBvcmRlckl0ZW0gICAgIE9yZGVySXRlbVtdDQp9DQoNCi8vIOWPluOCiuaJseOBhOWVhuWTge+8iOijvemAoOS8muekvu+8iQ0KbW9kZWwgTWFudWZhY3R1cmVySGFuZGxpbmdQcm9kdWN0cyB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBzdG9jayAgICAgICAgICBJbnQNCiAgcHJpY2UgICAgICAgICAgSW50DQogIHByb2R1Y3QgICAgICAgIFByb2R1Y3QgICAgICBAcmVsYXRpb24oZmllbGRzOiBbcHJvZHVjdElkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgcHJvZHVjdElkICAgICAgU3RyaW5nDQogIG1hbnVmYWN0dXJlciAgIE1hbnVmYWN0dXJlciBAcmVsYXRpb24oZmllbGRzOiBbbWFudWZhY3R1cmVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBtYW51ZmFjdHVyZXJJZCBTdHJpbmcNCn0NCg0KLy8g5ZWG5ZOB44Kr44OG44K044OqDQptb2RlbCBQcm9kdWN0Q2F0ZWdvcnkgew0KICBpZCAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQ0KICBuYW1lICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICBAdW5pcXVlDQogIHByb2R1Y3RzIFByb2R1Y3RPblByb2R1Y3RDYXRlZ29yeVtdDQp9DQoNCi8vIOWVhuWTgS3llYblk4Hjgqvjg4bjgrTjg6og5Lit6ZaT44OG44O844OW44OrDQptb2RlbCBQcm9kdWN0T25Qcm9kdWN0Q2F0ZWdvcnkgew0KICBwcm9kdWN0ICAgIFByb2R1Y3QgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbcHJvZHVjdElkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgcHJvZHVjdElkICBTdHJpbmcNCiAgY2F0ZWdvcnkgICBQcm9kdWN0Q2F0ZWdvcnkgQHJlbGF0aW9uKGZpZWxkczogW2NhdGVnb3J5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBjYXRlZ29yeUlkIFN0cmluZw0KDQogIEBAaWQoW3Byb2R1Y3RJZCwgY2F0ZWdvcnlJZF0pDQp9DQoNCi8vIOeZuuazqOabuA0KbW9kZWwgT3JkZXIgew0KICBpZCAgICAgICAgICAgICBTdHJpbmcgICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkNCiAgc2hvcCAgICAgICAgICAgU2hvcCAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtzaG9wSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBzaG9wSWQgICAgICAgICBTdHJpbmcNCiAgbWFudWZhY3R1cmVyICAgTWFudWZhY3R1cmVyIEByZWxhdGlvbihmaWVsZHM6IFttYW51ZmFjdHVyZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIG1hbnVmYWN0dXJlcklkIFN0cmluZw0KICBpdGVtcyAgICAgICAgICBPcmRlckl0ZW1bXQ0KICBhcHByb3ZlZCAgICAgICBCb29sZWFuICAgICAgQGRlZmF1bHQoZmFsc2UpIC8vIOaJv+iqjea4iOOBv+OBi+OBqeOBhuOBiw0KICBvcmRlckF0ICAgICAgICBEYXRlVGltZSAgICAgQGRlZmF1bHQobm93KCkpIC8vIOeZuuazqOaXpQ0KfQ0KDQovLyDnmbrms6jmm7jjgqLjgqTjg4bjg6ANCm1vZGVsIE9yZGVySXRlbSB7DQogIG9yZGVyICAgICBPcmRlciAgIEByZWxhdGlvbihmaWVsZHM6IFtvcmRlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgb3JkZXJJZCAgIFN0cmluZw0KICBwcm9kdWN0ICAgUHJvZHVjdCBAcmVsYXRpb24oZmllbGRzOiBbcHJvZHVjdElkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgcHJvZHVjdElkIFN0cmluZw0KICBxdWFudGl0eSAgSW50IC8vIOWAi+aVsA0KDQogIEBAaWQoW3Byb2R1Y3RJZCwgb3JkZXJJZF0pDQp9DQo=",
  "inlineSchemaHash": "1da3fc855876d30a5714cf25620fb872634657c56ac058aea1c2b352366b2e59"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/__generated__/prisma-client-js",
    "__generated__/prisma-client-js",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Shop\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partnerManufacturers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShopOnManufacturer\",\"relationName\":\"ShopToShopOnManufacturer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Order\",\"relationName\":\"OrderToShop\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Manufacturer\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"handlingProducts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ManufacturerHandlingProducts\",\"relationName\":\"ManufacturerToManufacturerHandlingProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partnerShops\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShopOnManufacturer\",\"relationName\":\"ManufacturerToShopOnManufacturer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Order\",\"relationName\":\"ManufacturerToOrder\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ShopOnManufacturer\":{\"dbName\":null,\"fields\":[{\"name\":\"shop\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Shop\",\"relationName\":\"ShopToShopOnManufacturer\",\"relationFromFields\":[\"shopId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shopId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manufacturer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Manufacturer\",\"relationName\":\"ManufacturerToShopOnManufacturer\",\"relationFromFields\":[\"manufacturerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manufacturerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"shopId\",\"manufacturerId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Product\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categories\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductOnProductCategory\",\"relationName\":\"ProductToProductOnProductCategory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manufacturers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ManufacturerHandlingProducts\",\"relationName\":\"ManufacturerHandlingProductsToProduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderItem\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderItem\",\"relationName\":\"OrderItemToProduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ManufacturerHandlingProducts\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stock\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"ManufacturerHandlingProductsToProduct\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manufacturer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Manufacturer\",\"relationName\":\"ManufacturerToManufacturerHandlingProducts\",\"relationFromFields\":[\"manufacturerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manufacturerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductCategory\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductOnProductCategory\",\"relationName\":\"ProductCategoryToProductOnProductCategory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductOnProductCategory\":{\"dbName\":null,\"fields\":[{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"ProductToProductOnProductCategory\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductCategory\",\"relationName\":\"ProductCategoryToProductOnProductCategory\",\"relationFromFields\":[\"categoryId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"productId\",\"categoryId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Order\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shop\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Shop\",\"relationName\":\"OrderToShop\",\"relationFromFields\":[\"shopId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shopId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manufacturer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Manufacturer\",\"relationName\":\"ManufacturerToOrder\",\"relationFromFields\":[\"manufacturerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manufacturerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderItem\",\"relationName\":\"OrderToOrderItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"approved\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OrderItem\":{\"dbName\":null,\"fields\":[{\"name\":\"order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Order\",\"relationName\":\"OrderToOrderItem\",\"relationFromFields\":[\"orderId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"OrderItemToProduct\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"productId\",\"orderId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/__generated__/prisma-client-js/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/__generated__/prisma-client-js/schema.prisma")

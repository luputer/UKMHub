
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Mahasiswa
 * 
 */
export type Mahasiswa = $Result.DefaultSelection<Prisma.$MahasiswaPayload>
/**
 * Model Ukm
 * 
 */
export type Ukm = $Result.DefaultSelection<Prisma.$UkmPayload>
/**
 * Model AnggotaUKM
 * 
 */
export type AnggotaUKM = $Result.DefaultSelection<Prisma.$AnggotaUKMPayload>
/**
 * Model Todo
 * 
 */
export type Todo = $Result.DefaultSelection<Prisma.$TodoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mahasiswa`: Exposes CRUD operations for the **Mahasiswa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mahasiswas
    * const mahasiswas = await prisma.mahasiswa.findMany()
    * ```
    */
  get mahasiswa(): Prisma.MahasiswaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ukm`: Exposes CRUD operations for the **Ukm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ukms
    * const ukms = await prisma.ukm.findMany()
    * ```
    */
  get ukm(): Prisma.UkmDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.anggotaUKM`: Exposes CRUD operations for the **AnggotaUKM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnggotaUKMS
    * const anggotaUKMS = await prisma.anggotaUKM.findMany()
    * ```
    */
  get anggotaUKM(): Prisma.AnggotaUKMDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.todo`: Exposes CRUD operations for the **Todo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Todos
    * const todos = await prisma.todo.findMany()
    * ```
    */
  get todo(): Prisma.TodoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    Mahasiswa: 'Mahasiswa',
    Ukm: 'Ukm',
    AnggotaUKM: 'AnggotaUKM',
    Todo: 'Todo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "mahasiswa" | "ukm" | "anggotaUKM" | "todo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Mahasiswa: {
        payload: Prisma.$MahasiswaPayload<ExtArgs>
        fields: Prisma.MahasiswaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MahasiswaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MahasiswaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          findFirst: {
            args: Prisma.MahasiswaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MahasiswaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          findMany: {
            args: Prisma.MahasiswaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>[]
          }
          create: {
            args: Prisma.MahasiswaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          createMany: {
            args: Prisma.MahasiswaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MahasiswaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          update: {
            args: Prisma.MahasiswaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          deleteMany: {
            args: Prisma.MahasiswaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MahasiswaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MahasiswaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          aggregate: {
            args: Prisma.MahasiswaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMahasiswa>
          }
          groupBy: {
            args: Prisma.MahasiswaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MahasiswaCountArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaCountAggregateOutputType> | number
          }
        }
      }
      Ukm: {
        payload: Prisma.$UkmPayload<ExtArgs>
        fields: Prisma.UkmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UkmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UkmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UkmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UkmPayload>
          }
          findFirst: {
            args: Prisma.UkmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UkmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UkmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UkmPayload>
          }
          findMany: {
            args: Prisma.UkmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UkmPayload>[]
          }
          create: {
            args: Prisma.UkmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UkmPayload>
          }
          createMany: {
            args: Prisma.UkmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UkmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UkmPayload>
          }
          update: {
            args: Prisma.UkmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UkmPayload>
          }
          deleteMany: {
            args: Prisma.UkmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UkmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UkmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UkmPayload>
          }
          aggregate: {
            args: Prisma.UkmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUkm>
          }
          groupBy: {
            args: Prisma.UkmGroupByArgs<ExtArgs>
            result: $Utils.Optional<UkmGroupByOutputType>[]
          }
          count: {
            args: Prisma.UkmCountArgs<ExtArgs>
            result: $Utils.Optional<UkmCountAggregateOutputType> | number
          }
        }
      }
      AnggotaUKM: {
        payload: Prisma.$AnggotaUKMPayload<ExtArgs>
        fields: Prisma.AnggotaUKMFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnggotaUKMFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaUKMPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnggotaUKMFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaUKMPayload>
          }
          findFirst: {
            args: Prisma.AnggotaUKMFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaUKMPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnggotaUKMFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaUKMPayload>
          }
          findMany: {
            args: Prisma.AnggotaUKMFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaUKMPayload>[]
          }
          create: {
            args: Prisma.AnggotaUKMCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaUKMPayload>
          }
          createMany: {
            args: Prisma.AnggotaUKMCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AnggotaUKMDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaUKMPayload>
          }
          update: {
            args: Prisma.AnggotaUKMUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaUKMPayload>
          }
          deleteMany: {
            args: Prisma.AnggotaUKMDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnggotaUKMUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnggotaUKMUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnggotaUKMPayload>
          }
          aggregate: {
            args: Prisma.AnggotaUKMAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnggotaUKM>
          }
          groupBy: {
            args: Prisma.AnggotaUKMGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnggotaUKMGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnggotaUKMCountArgs<ExtArgs>
            result: $Utils.Optional<AnggotaUKMCountAggregateOutputType> | number
          }
        }
      }
      Todo: {
        payload: Prisma.$TodoPayload<ExtArgs>
        fields: Prisma.TodoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TodoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TodoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          findFirst: {
            args: Prisma.TodoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TodoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          findMany: {
            args: Prisma.TodoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>[]
          }
          create: {
            args: Prisma.TodoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          createMany: {
            args: Prisma.TodoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TodoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          update: {
            args: Prisma.TodoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          deleteMany: {
            args: Prisma.TodoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TodoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TodoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          aggregate: {
            args: Prisma.TodoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTodo>
          }
          groupBy: {
            args: Prisma.TodoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TodoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TodoCountArgs<ExtArgs>
            result: $Utils.Optional<TodoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    mahasiswa?: MahasiswaOmit
    ukm?: UkmOmit
    anggotaUKM?: AnggotaUKMOmit
    todo?: TodoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UkmCountOutputType
   */

  export type UkmCountOutputType = {
    paraAnggota: number
  }

  export type UkmCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paraAnggota?: boolean | UkmCountOutputTypeCountParaAnggotaArgs
  }

  // Custom InputTypes
  /**
   * UkmCountOutputType without action
   */
  export type UkmCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UkmCountOutputType
     */
    select?: UkmCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UkmCountOutputType without action
   */
  export type UkmCountOutputTypeCountParaAnggotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnggotaUKMWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Mahasiswa
   */

  export type AggregateMahasiswa = {
    _count: MahasiswaCountAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  export type MahasiswaMinAggregateOutputType = {
    id: string | null
    nim: string | null
    nama: string | null
    jurusan: string | null
    prodi: string | null
    registeredBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MahasiswaMaxAggregateOutputType = {
    id: string | null
    nim: string | null
    nama: string | null
    jurusan: string | null
    prodi: string | null
    registeredBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MahasiswaCountAggregateOutputType = {
    id: number
    nim: number
    nama: number
    jurusan: number
    prodi: number
    registeredBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MahasiswaMinAggregateInputType = {
    id?: true
    nim?: true
    nama?: true
    jurusan?: true
    prodi?: true
    registeredBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MahasiswaMaxAggregateInputType = {
    id?: true
    nim?: true
    nama?: true
    jurusan?: true
    prodi?: true
    registeredBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MahasiswaCountAggregateInputType = {
    id?: true
    nim?: true
    nama?: true
    jurusan?: true
    prodi?: true
    registeredBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MahasiswaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mahasiswa to aggregate.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mahasiswas
    **/
    _count?: true | MahasiswaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MahasiswaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MahasiswaMaxAggregateInputType
  }

  export type GetMahasiswaAggregateType<T extends MahasiswaAggregateArgs> = {
        [P in keyof T & keyof AggregateMahasiswa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMahasiswa[P]>
      : GetScalarType<T[P], AggregateMahasiswa[P]>
  }




  export type MahasiswaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MahasiswaWhereInput
    orderBy?: MahasiswaOrderByWithAggregationInput | MahasiswaOrderByWithAggregationInput[]
    by: MahasiswaScalarFieldEnum[] | MahasiswaScalarFieldEnum
    having?: MahasiswaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MahasiswaCountAggregateInputType | true
    _min?: MahasiswaMinAggregateInputType
    _max?: MahasiswaMaxAggregateInputType
  }

  export type MahasiswaGroupByOutputType = {
    id: string
    nim: string
    nama: string
    jurusan: string
    prodi: string
    registeredBy: string
    createdAt: Date
    updatedAt: Date
    _count: MahasiswaCountAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  type GetMahasiswaGroupByPayload<T extends MahasiswaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MahasiswaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MahasiswaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
            : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
        }
      >
    >


  export type MahasiswaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    nama?: boolean
    jurusan?: boolean
    prodi?: boolean
    registeredBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    keanggotaan?: boolean | Mahasiswa$keanggotaanArgs<ExtArgs>
  }, ExtArgs["result"]["mahasiswa"]>



  export type MahasiswaSelectScalar = {
    id?: boolean
    nim?: boolean
    nama?: boolean
    jurusan?: boolean
    prodi?: boolean
    registeredBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MahasiswaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nim" | "nama" | "jurusan" | "prodi" | "registeredBy" | "createdAt" | "updatedAt", ExtArgs["result"]["mahasiswa"]>
  export type MahasiswaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keanggotaan?: boolean | Mahasiswa$keanggotaanArgs<ExtArgs>
  }

  export type $MahasiswaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mahasiswa"
    objects: {
      keanggotaan: Prisma.$AnggotaUKMPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nim: string
      nama: string
      jurusan: string
      prodi: string
      registeredBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mahasiswa"]>
    composites: {}
  }

  type MahasiswaGetPayload<S extends boolean | null | undefined | MahasiswaDefaultArgs> = $Result.GetResult<Prisma.$MahasiswaPayload, S>

  type MahasiswaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MahasiswaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MahasiswaCountAggregateInputType | true
    }

  export interface MahasiswaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mahasiswa'], meta: { name: 'Mahasiswa' } }
    /**
     * Find zero or one Mahasiswa that matches the filter.
     * @param {MahasiswaFindUniqueArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MahasiswaFindUniqueArgs>(args: SelectSubset<T, MahasiswaFindUniqueArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mahasiswa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MahasiswaFindUniqueOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MahasiswaFindUniqueOrThrowArgs>(args: SelectSubset<T, MahasiswaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindFirstArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MahasiswaFindFirstArgs>(args?: SelectSubset<T, MahasiswaFindFirstArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindFirstOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MahasiswaFindFirstOrThrowArgs>(args?: SelectSubset<T, MahasiswaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mahasiswas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany()
     * 
     * // Get first 10 Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mahasiswaWithIdOnly = await prisma.mahasiswa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MahasiswaFindManyArgs>(args?: SelectSubset<T, MahasiswaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mahasiswa.
     * @param {MahasiswaCreateArgs} args - Arguments to create a Mahasiswa.
     * @example
     * // Create one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.create({
     *   data: {
     *     // ... data to create a Mahasiswa
     *   }
     * })
     * 
     */
    create<T extends MahasiswaCreateArgs>(args: SelectSubset<T, MahasiswaCreateArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mahasiswas.
     * @param {MahasiswaCreateManyArgs} args - Arguments to create many Mahasiswas.
     * @example
     * // Create many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MahasiswaCreateManyArgs>(args?: SelectSubset<T, MahasiswaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mahasiswa.
     * @param {MahasiswaDeleteArgs} args - Arguments to delete one Mahasiswa.
     * @example
     * // Delete one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.delete({
     *   where: {
     *     // ... filter to delete one Mahasiswa
     *   }
     * })
     * 
     */
    delete<T extends MahasiswaDeleteArgs>(args: SelectSubset<T, MahasiswaDeleteArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mahasiswa.
     * @param {MahasiswaUpdateArgs} args - Arguments to update one Mahasiswa.
     * @example
     * // Update one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MahasiswaUpdateArgs>(args: SelectSubset<T, MahasiswaUpdateArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mahasiswas.
     * @param {MahasiswaDeleteManyArgs} args - Arguments to filter Mahasiswas to delete.
     * @example
     * // Delete a few Mahasiswas
     * const { count } = await prisma.mahasiswa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MahasiswaDeleteManyArgs>(args?: SelectSubset<T, MahasiswaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MahasiswaUpdateManyArgs>(args: SelectSubset<T, MahasiswaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mahasiswa.
     * @param {MahasiswaUpsertArgs} args - Arguments to update or create a Mahasiswa.
     * @example
     * // Update or create a Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.upsert({
     *   create: {
     *     // ... data to create a Mahasiswa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mahasiswa we want to update
     *   }
     * })
     */
    upsert<T extends MahasiswaUpsertArgs>(args: SelectSubset<T, MahasiswaUpsertArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaCountArgs} args - Arguments to filter Mahasiswas to count.
     * @example
     * // Count the number of Mahasiswas
     * const count = await prisma.mahasiswa.count({
     *   where: {
     *     // ... the filter for the Mahasiswas we want to count
     *   }
     * })
    **/
    count<T extends MahasiswaCountArgs>(
      args?: Subset<T, MahasiswaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MahasiswaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MahasiswaAggregateArgs>(args: Subset<T, MahasiswaAggregateArgs>): Prisma.PrismaPromise<GetMahasiswaAggregateType<T>>

    /**
     * Group by Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MahasiswaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MahasiswaGroupByArgs['orderBy'] }
        : { orderBy?: MahasiswaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MahasiswaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMahasiswaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mahasiswa model
   */
  readonly fields: MahasiswaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mahasiswa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MahasiswaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    keanggotaan<T extends Mahasiswa$keanggotaanArgs<ExtArgs> = {}>(args?: Subset<T, Mahasiswa$keanggotaanArgs<ExtArgs>>): Prisma__AnggotaUKMClient<$Result.GetResult<Prisma.$AnggotaUKMPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mahasiswa model
   */
  interface MahasiswaFieldRefs {
    readonly id: FieldRef<"Mahasiswa", 'String'>
    readonly nim: FieldRef<"Mahasiswa", 'String'>
    readonly nama: FieldRef<"Mahasiswa", 'String'>
    readonly jurusan: FieldRef<"Mahasiswa", 'String'>
    readonly prodi: FieldRef<"Mahasiswa", 'String'>
    readonly registeredBy: FieldRef<"Mahasiswa", 'String'>
    readonly createdAt: FieldRef<"Mahasiswa", 'DateTime'>
    readonly updatedAt: FieldRef<"Mahasiswa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mahasiswa findUnique
   */
  export type MahasiswaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa findUniqueOrThrow
   */
  export type MahasiswaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa findFirst
   */
  export type MahasiswaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa findFirstOrThrow
   */
  export type MahasiswaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa findMany
   */
  export type MahasiswaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswas to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa create
   */
  export type MahasiswaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to create a Mahasiswa.
     */
    data: XOR<MahasiswaCreateInput, MahasiswaUncheckedCreateInput>
  }

  /**
   * Mahasiswa createMany
   */
  export type MahasiswaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mahasiswas.
     */
    data: MahasiswaCreateManyInput | MahasiswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mahasiswa update
   */
  export type MahasiswaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to update a Mahasiswa.
     */
    data: XOR<MahasiswaUpdateInput, MahasiswaUncheckedUpdateInput>
    /**
     * Choose, which Mahasiswa to update.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa updateMany
   */
  export type MahasiswaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mahasiswas.
     */
    data: XOR<MahasiswaUpdateManyMutationInput, MahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which Mahasiswas to update
     */
    where?: MahasiswaWhereInput
    /**
     * Limit how many Mahasiswas to update.
     */
    limit?: number
  }

  /**
   * Mahasiswa upsert
   */
  export type MahasiswaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The filter to search for the Mahasiswa to update in case it exists.
     */
    where: MahasiswaWhereUniqueInput
    /**
     * In case the Mahasiswa found by the `where` argument doesn't exist, create a new Mahasiswa with this data.
     */
    create: XOR<MahasiswaCreateInput, MahasiswaUncheckedCreateInput>
    /**
     * In case the Mahasiswa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MahasiswaUpdateInput, MahasiswaUncheckedUpdateInput>
  }

  /**
   * Mahasiswa delete
   */
  export type MahasiswaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter which Mahasiswa to delete.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa deleteMany
   */
  export type MahasiswaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mahasiswas to delete
     */
    where?: MahasiswaWhereInput
    /**
     * Limit how many Mahasiswas to delete.
     */
    limit?: number
  }

  /**
   * Mahasiswa.keanggotaan
   */
  export type Mahasiswa$keanggotaanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggotaUKM
     */
    select?: AnggotaUKMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnggotaUKM
     */
    omit?: AnggotaUKMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaUKMInclude<ExtArgs> | null
    where?: AnggotaUKMWhereInput
  }

  /**
   * Mahasiswa without action
   */
  export type MahasiswaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
  }


  /**
   * Model Ukm
   */

  export type AggregateUkm = {
    _count: UkmCountAggregateOutputType | null
    _min: UkmMinAggregateOutputType | null
    _max: UkmMaxAggregateOutputType | null
  }

  export type UkmMinAggregateOutputType = {
    id: string | null
    kodeUkm: string | null
    namaUkm: string | null
    deskripsi: string | null
    registeredBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UkmMaxAggregateOutputType = {
    id: string | null
    kodeUkm: string | null
    namaUkm: string | null
    deskripsi: string | null
    registeredBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UkmCountAggregateOutputType = {
    id: number
    kodeUkm: number
    namaUkm: number
    deskripsi: number
    registeredBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UkmMinAggregateInputType = {
    id?: true
    kodeUkm?: true
    namaUkm?: true
    deskripsi?: true
    registeredBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UkmMaxAggregateInputType = {
    id?: true
    kodeUkm?: true
    namaUkm?: true
    deskripsi?: true
    registeredBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UkmCountAggregateInputType = {
    id?: true
    kodeUkm?: true
    namaUkm?: true
    deskripsi?: true
    registeredBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UkmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ukm to aggregate.
     */
    where?: UkmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ukms to fetch.
     */
    orderBy?: UkmOrderByWithRelationInput | UkmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UkmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ukms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ukms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ukms
    **/
    _count?: true | UkmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UkmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UkmMaxAggregateInputType
  }

  export type GetUkmAggregateType<T extends UkmAggregateArgs> = {
        [P in keyof T & keyof AggregateUkm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUkm[P]>
      : GetScalarType<T[P], AggregateUkm[P]>
  }




  export type UkmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UkmWhereInput
    orderBy?: UkmOrderByWithAggregationInput | UkmOrderByWithAggregationInput[]
    by: UkmScalarFieldEnum[] | UkmScalarFieldEnum
    having?: UkmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UkmCountAggregateInputType | true
    _min?: UkmMinAggregateInputType
    _max?: UkmMaxAggregateInputType
  }

  export type UkmGroupByOutputType = {
    id: string
    kodeUkm: string
    namaUkm: string
    deskripsi: string | null
    registeredBy: string
    createdAt: Date
    updatedAt: Date
    _count: UkmCountAggregateOutputType | null
    _min: UkmMinAggregateOutputType | null
    _max: UkmMaxAggregateOutputType | null
  }

  type GetUkmGroupByPayload<T extends UkmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UkmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UkmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UkmGroupByOutputType[P]>
            : GetScalarType<T[P], UkmGroupByOutputType[P]>
        }
      >
    >


  export type UkmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeUkm?: boolean
    namaUkm?: boolean
    deskripsi?: boolean
    registeredBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paraAnggota?: boolean | Ukm$paraAnggotaArgs<ExtArgs>
    _count?: boolean | UkmCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ukm"]>



  export type UkmSelectScalar = {
    id?: boolean
    kodeUkm?: boolean
    namaUkm?: boolean
    deskripsi?: boolean
    registeredBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UkmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kodeUkm" | "namaUkm" | "deskripsi" | "registeredBy" | "createdAt" | "updatedAt", ExtArgs["result"]["ukm"]>
  export type UkmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paraAnggota?: boolean | Ukm$paraAnggotaArgs<ExtArgs>
    _count?: boolean | UkmCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UkmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ukm"
    objects: {
      paraAnggota: Prisma.$AnggotaUKMPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kodeUkm: string
      namaUkm: string
      deskripsi: string | null
      registeredBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ukm"]>
    composites: {}
  }

  type UkmGetPayload<S extends boolean | null | undefined | UkmDefaultArgs> = $Result.GetResult<Prisma.$UkmPayload, S>

  type UkmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UkmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UkmCountAggregateInputType | true
    }

  export interface UkmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ukm'], meta: { name: 'Ukm' } }
    /**
     * Find zero or one Ukm that matches the filter.
     * @param {UkmFindUniqueArgs} args - Arguments to find a Ukm
     * @example
     * // Get one Ukm
     * const ukm = await prisma.ukm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UkmFindUniqueArgs>(args: SelectSubset<T, UkmFindUniqueArgs<ExtArgs>>): Prisma__UkmClient<$Result.GetResult<Prisma.$UkmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ukm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UkmFindUniqueOrThrowArgs} args - Arguments to find a Ukm
     * @example
     * // Get one Ukm
     * const ukm = await prisma.ukm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UkmFindUniqueOrThrowArgs>(args: SelectSubset<T, UkmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UkmClient<$Result.GetResult<Prisma.$UkmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ukm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UkmFindFirstArgs} args - Arguments to find a Ukm
     * @example
     * // Get one Ukm
     * const ukm = await prisma.ukm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UkmFindFirstArgs>(args?: SelectSubset<T, UkmFindFirstArgs<ExtArgs>>): Prisma__UkmClient<$Result.GetResult<Prisma.$UkmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ukm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UkmFindFirstOrThrowArgs} args - Arguments to find a Ukm
     * @example
     * // Get one Ukm
     * const ukm = await prisma.ukm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UkmFindFirstOrThrowArgs>(args?: SelectSubset<T, UkmFindFirstOrThrowArgs<ExtArgs>>): Prisma__UkmClient<$Result.GetResult<Prisma.$UkmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ukms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UkmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ukms
     * const ukms = await prisma.ukm.findMany()
     * 
     * // Get first 10 Ukms
     * const ukms = await prisma.ukm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ukmWithIdOnly = await prisma.ukm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UkmFindManyArgs>(args?: SelectSubset<T, UkmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UkmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ukm.
     * @param {UkmCreateArgs} args - Arguments to create a Ukm.
     * @example
     * // Create one Ukm
     * const Ukm = await prisma.ukm.create({
     *   data: {
     *     // ... data to create a Ukm
     *   }
     * })
     * 
     */
    create<T extends UkmCreateArgs>(args: SelectSubset<T, UkmCreateArgs<ExtArgs>>): Prisma__UkmClient<$Result.GetResult<Prisma.$UkmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ukms.
     * @param {UkmCreateManyArgs} args - Arguments to create many Ukms.
     * @example
     * // Create many Ukms
     * const ukm = await prisma.ukm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UkmCreateManyArgs>(args?: SelectSubset<T, UkmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ukm.
     * @param {UkmDeleteArgs} args - Arguments to delete one Ukm.
     * @example
     * // Delete one Ukm
     * const Ukm = await prisma.ukm.delete({
     *   where: {
     *     // ... filter to delete one Ukm
     *   }
     * })
     * 
     */
    delete<T extends UkmDeleteArgs>(args: SelectSubset<T, UkmDeleteArgs<ExtArgs>>): Prisma__UkmClient<$Result.GetResult<Prisma.$UkmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ukm.
     * @param {UkmUpdateArgs} args - Arguments to update one Ukm.
     * @example
     * // Update one Ukm
     * const ukm = await prisma.ukm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UkmUpdateArgs>(args: SelectSubset<T, UkmUpdateArgs<ExtArgs>>): Prisma__UkmClient<$Result.GetResult<Prisma.$UkmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ukms.
     * @param {UkmDeleteManyArgs} args - Arguments to filter Ukms to delete.
     * @example
     * // Delete a few Ukms
     * const { count } = await prisma.ukm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UkmDeleteManyArgs>(args?: SelectSubset<T, UkmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ukms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UkmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ukms
     * const ukm = await prisma.ukm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UkmUpdateManyArgs>(args: SelectSubset<T, UkmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ukm.
     * @param {UkmUpsertArgs} args - Arguments to update or create a Ukm.
     * @example
     * // Update or create a Ukm
     * const ukm = await prisma.ukm.upsert({
     *   create: {
     *     // ... data to create a Ukm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ukm we want to update
     *   }
     * })
     */
    upsert<T extends UkmUpsertArgs>(args: SelectSubset<T, UkmUpsertArgs<ExtArgs>>): Prisma__UkmClient<$Result.GetResult<Prisma.$UkmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ukms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UkmCountArgs} args - Arguments to filter Ukms to count.
     * @example
     * // Count the number of Ukms
     * const count = await prisma.ukm.count({
     *   where: {
     *     // ... the filter for the Ukms we want to count
     *   }
     * })
    **/
    count<T extends UkmCountArgs>(
      args?: Subset<T, UkmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UkmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ukm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UkmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UkmAggregateArgs>(args: Subset<T, UkmAggregateArgs>): Prisma.PrismaPromise<GetUkmAggregateType<T>>

    /**
     * Group by Ukm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UkmGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UkmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UkmGroupByArgs['orderBy'] }
        : { orderBy?: UkmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UkmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUkmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ukm model
   */
  readonly fields: UkmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ukm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UkmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paraAnggota<T extends Ukm$paraAnggotaArgs<ExtArgs> = {}>(args?: Subset<T, Ukm$paraAnggotaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnggotaUKMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ukm model
   */
  interface UkmFieldRefs {
    readonly id: FieldRef<"Ukm", 'String'>
    readonly kodeUkm: FieldRef<"Ukm", 'String'>
    readonly namaUkm: FieldRef<"Ukm", 'String'>
    readonly deskripsi: FieldRef<"Ukm", 'String'>
    readonly registeredBy: FieldRef<"Ukm", 'String'>
    readonly createdAt: FieldRef<"Ukm", 'DateTime'>
    readonly updatedAt: FieldRef<"Ukm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ukm findUnique
   */
  export type UkmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ukm
     */
    select?: UkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ukm
     */
    omit?: UkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UkmInclude<ExtArgs> | null
    /**
     * Filter, which Ukm to fetch.
     */
    where: UkmWhereUniqueInput
  }

  /**
   * Ukm findUniqueOrThrow
   */
  export type UkmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ukm
     */
    select?: UkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ukm
     */
    omit?: UkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UkmInclude<ExtArgs> | null
    /**
     * Filter, which Ukm to fetch.
     */
    where: UkmWhereUniqueInput
  }

  /**
   * Ukm findFirst
   */
  export type UkmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ukm
     */
    select?: UkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ukm
     */
    omit?: UkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UkmInclude<ExtArgs> | null
    /**
     * Filter, which Ukm to fetch.
     */
    where?: UkmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ukms to fetch.
     */
    orderBy?: UkmOrderByWithRelationInput | UkmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ukms.
     */
    cursor?: UkmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ukms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ukms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ukms.
     */
    distinct?: UkmScalarFieldEnum | UkmScalarFieldEnum[]
  }

  /**
   * Ukm findFirstOrThrow
   */
  export type UkmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ukm
     */
    select?: UkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ukm
     */
    omit?: UkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UkmInclude<ExtArgs> | null
    /**
     * Filter, which Ukm to fetch.
     */
    where?: UkmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ukms to fetch.
     */
    orderBy?: UkmOrderByWithRelationInput | UkmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ukms.
     */
    cursor?: UkmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ukms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ukms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ukms.
     */
    distinct?: UkmScalarFieldEnum | UkmScalarFieldEnum[]
  }

  /**
   * Ukm findMany
   */
  export type UkmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ukm
     */
    select?: UkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ukm
     */
    omit?: UkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UkmInclude<ExtArgs> | null
    /**
     * Filter, which Ukms to fetch.
     */
    where?: UkmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ukms to fetch.
     */
    orderBy?: UkmOrderByWithRelationInput | UkmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ukms.
     */
    cursor?: UkmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ukms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ukms.
     */
    skip?: number
    distinct?: UkmScalarFieldEnum | UkmScalarFieldEnum[]
  }

  /**
   * Ukm create
   */
  export type UkmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ukm
     */
    select?: UkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ukm
     */
    omit?: UkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UkmInclude<ExtArgs> | null
    /**
     * The data needed to create a Ukm.
     */
    data: XOR<UkmCreateInput, UkmUncheckedCreateInput>
  }

  /**
   * Ukm createMany
   */
  export type UkmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ukms.
     */
    data: UkmCreateManyInput | UkmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ukm update
   */
  export type UkmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ukm
     */
    select?: UkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ukm
     */
    omit?: UkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UkmInclude<ExtArgs> | null
    /**
     * The data needed to update a Ukm.
     */
    data: XOR<UkmUpdateInput, UkmUncheckedUpdateInput>
    /**
     * Choose, which Ukm to update.
     */
    where: UkmWhereUniqueInput
  }

  /**
   * Ukm updateMany
   */
  export type UkmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ukms.
     */
    data: XOR<UkmUpdateManyMutationInput, UkmUncheckedUpdateManyInput>
    /**
     * Filter which Ukms to update
     */
    where?: UkmWhereInput
    /**
     * Limit how many Ukms to update.
     */
    limit?: number
  }

  /**
   * Ukm upsert
   */
  export type UkmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ukm
     */
    select?: UkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ukm
     */
    omit?: UkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UkmInclude<ExtArgs> | null
    /**
     * The filter to search for the Ukm to update in case it exists.
     */
    where: UkmWhereUniqueInput
    /**
     * In case the Ukm found by the `where` argument doesn't exist, create a new Ukm with this data.
     */
    create: XOR<UkmCreateInput, UkmUncheckedCreateInput>
    /**
     * In case the Ukm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UkmUpdateInput, UkmUncheckedUpdateInput>
  }

  /**
   * Ukm delete
   */
  export type UkmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ukm
     */
    select?: UkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ukm
     */
    omit?: UkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UkmInclude<ExtArgs> | null
    /**
     * Filter which Ukm to delete.
     */
    where: UkmWhereUniqueInput
  }

  /**
   * Ukm deleteMany
   */
  export type UkmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ukms to delete
     */
    where?: UkmWhereInput
    /**
     * Limit how many Ukms to delete.
     */
    limit?: number
  }

  /**
   * Ukm.paraAnggota
   */
  export type Ukm$paraAnggotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggotaUKM
     */
    select?: AnggotaUKMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnggotaUKM
     */
    omit?: AnggotaUKMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaUKMInclude<ExtArgs> | null
    where?: AnggotaUKMWhereInput
    orderBy?: AnggotaUKMOrderByWithRelationInput | AnggotaUKMOrderByWithRelationInput[]
    cursor?: AnggotaUKMWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnggotaUKMScalarFieldEnum | AnggotaUKMScalarFieldEnum[]
  }

  /**
   * Ukm without action
   */
  export type UkmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ukm
     */
    select?: UkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ukm
     */
    omit?: UkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UkmInclude<ExtArgs> | null
  }


  /**
   * Model AnggotaUKM
   */

  export type AggregateAnggotaUKM = {
    _count: AnggotaUKMCountAggregateOutputType | null
    _min: AnggotaUKMMinAggregateOutputType | null
    _max: AnggotaUKMMaxAggregateOutputType | null
  }

  export type AnggotaUKMMinAggregateOutputType = {
    id: string | null
    mahasiswaId: string | null
    ukmId: string | null
    approvedBy: string | null
    tanggalGabung: Date | null
  }

  export type AnggotaUKMMaxAggregateOutputType = {
    id: string | null
    mahasiswaId: string | null
    ukmId: string | null
    approvedBy: string | null
    tanggalGabung: Date | null
  }

  export type AnggotaUKMCountAggregateOutputType = {
    id: number
    mahasiswaId: number
    ukmId: number
    approvedBy: number
    tanggalGabung: number
    _all: number
  }


  export type AnggotaUKMMinAggregateInputType = {
    id?: true
    mahasiswaId?: true
    ukmId?: true
    approvedBy?: true
    tanggalGabung?: true
  }

  export type AnggotaUKMMaxAggregateInputType = {
    id?: true
    mahasiswaId?: true
    ukmId?: true
    approvedBy?: true
    tanggalGabung?: true
  }

  export type AnggotaUKMCountAggregateInputType = {
    id?: true
    mahasiswaId?: true
    ukmId?: true
    approvedBy?: true
    tanggalGabung?: true
    _all?: true
  }

  export type AnggotaUKMAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnggotaUKM to aggregate.
     */
    where?: AnggotaUKMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnggotaUKMS to fetch.
     */
    orderBy?: AnggotaUKMOrderByWithRelationInput | AnggotaUKMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnggotaUKMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnggotaUKMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnggotaUKMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnggotaUKMS
    **/
    _count?: true | AnggotaUKMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnggotaUKMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnggotaUKMMaxAggregateInputType
  }

  export type GetAnggotaUKMAggregateType<T extends AnggotaUKMAggregateArgs> = {
        [P in keyof T & keyof AggregateAnggotaUKM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnggotaUKM[P]>
      : GetScalarType<T[P], AggregateAnggotaUKM[P]>
  }




  export type AnggotaUKMGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnggotaUKMWhereInput
    orderBy?: AnggotaUKMOrderByWithAggregationInput | AnggotaUKMOrderByWithAggregationInput[]
    by: AnggotaUKMScalarFieldEnum[] | AnggotaUKMScalarFieldEnum
    having?: AnggotaUKMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnggotaUKMCountAggregateInputType | true
    _min?: AnggotaUKMMinAggregateInputType
    _max?: AnggotaUKMMaxAggregateInputType
  }

  export type AnggotaUKMGroupByOutputType = {
    id: string
    mahasiswaId: string
    ukmId: string
    approvedBy: string
    tanggalGabung: Date
    _count: AnggotaUKMCountAggregateOutputType | null
    _min: AnggotaUKMMinAggregateOutputType | null
    _max: AnggotaUKMMaxAggregateOutputType | null
  }

  type GetAnggotaUKMGroupByPayload<T extends AnggotaUKMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnggotaUKMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnggotaUKMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnggotaUKMGroupByOutputType[P]>
            : GetScalarType<T[P], AnggotaUKMGroupByOutputType[P]>
        }
      >
    >


  export type AnggotaUKMSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mahasiswaId?: boolean
    ukmId?: boolean
    approvedBy?: boolean
    tanggalGabung?: boolean
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    ukm?: boolean | UkmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anggotaUKM"]>



  export type AnggotaUKMSelectScalar = {
    id?: boolean
    mahasiswaId?: boolean
    ukmId?: boolean
    approvedBy?: boolean
    tanggalGabung?: boolean
  }

  export type AnggotaUKMOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mahasiswaId" | "ukmId" | "approvedBy" | "tanggalGabung", ExtArgs["result"]["anggotaUKM"]>
  export type AnggotaUKMInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    ukm?: boolean | UkmDefaultArgs<ExtArgs>
  }

  export type $AnggotaUKMPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnggotaUKM"
    objects: {
      mahasiswa: Prisma.$MahasiswaPayload<ExtArgs>
      ukm: Prisma.$UkmPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mahasiswaId: string
      ukmId: string
      approvedBy: string
      tanggalGabung: Date
    }, ExtArgs["result"]["anggotaUKM"]>
    composites: {}
  }

  type AnggotaUKMGetPayload<S extends boolean | null | undefined | AnggotaUKMDefaultArgs> = $Result.GetResult<Prisma.$AnggotaUKMPayload, S>

  type AnggotaUKMCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnggotaUKMFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnggotaUKMCountAggregateInputType | true
    }

  export interface AnggotaUKMDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnggotaUKM'], meta: { name: 'AnggotaUKM' } }
    /**
     * Find zero or one AnggotaUKM that matches the filter.
     * @param {AnggotaUKMFindUniqueArgs} args - Arguments to find a AnggotaUKM
     * @example
     * // Get one AnggotaUKM
     * const anggotaUKM = await prisma.anggotaUKM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnggotaUKMFindUniqueArgs>(args: SelectSubset<T, AnggotaUKMFindUniqueArgs<ExtArgs>>): Prisma__AnggotaUKMClient<$Result.GetResult<Prisma.$AnggotaUKMPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnggotaUKM that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnggotaUKMFindUniqueOrThrowArgs} args - Arguments to find a AnggotaUKM
     * @example
     * // Get one AnggotaUKM
     * const anggotaUKM = await prisma.anggotaUKM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnggotaUKMFindUniqueOrThrowArgs>(args: SelectSubset<T, AnggotaUKMFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnggotaUKMClient<$Result.GetResult<Prisma.$AnggotaUKMPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnggotaUKM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggotaUKMFindFirstArgs} args - Arguments to find a AnggotaUKM
     * @example
     * // Get one AnggotaUKM
     * const anggotaUKM = await prisma.anggotaUKM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnggotaUKMFindFirstArgs>(args?: SelectSubset<T, AnggotaUKMFindFirstArgs<ExtArgs>>): Prisma__AnggotaUKMClient<$Result.GetResult<Prisma.$AnggotaUKMPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnggotaUKM that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggotaUKMFindFirstOrThrowArgs} args - Arguments to find a AnggotaUKM
     * @example
     * // Get one AnggotaUKM
     * const anggotaUKM = await prisma.anggotaUKM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnggotaUKMFindFirstOrThrowArgs>(args?: SelectSubset<T, AnggotaUKMFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnggotaUKMClient<$Result.GetResult<Prisma.$AnggotaUKMPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnggotaUKMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggotaUKMFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnggotaUKMS
     * const anggotaUKMS = await prisma.anggotaUKM.findMany()
     * 
     * // Get first 10 AnggotaUKMS
     * const anggotaUKMS = await prisma.anggotaUKM.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const anggotaUKMWithIdOnly = await prisma.anggotaUKM.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnggotaUKMFindManyArgs>(args?: SelectSubset<T, AnggotaUKMFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnggotaUKMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnggotaUKM.
     * @param {AnggotaUKMCreateArgs} args - Arguments to create a AnggotaUKM.
     * @example
     * // Create one AnggotaUKM
     * const AnggotaUKM = await prisma.anggotaUKM.create({
     *   data: {
     *     // ... data to create a AnggotaUKM
     *   }
     * })
     * 
     */
    create<T extends AnggotaUKMCreateArgs>(args: SelectSubset<T, AnggotaUKMCreateArgs<ExtArgs>>): Prisma__AnggotaUKMClient<$Result.GetResult<Prisma.$AnggotaUKMPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnggotaUKMS.
     * @param {AnggotaUKMCreateManyArgs} args - Arguments to create many AnggotaUKMS.
     * @example
     * // Create many AnggotaUKMS
     * const anggotaUKM = await prisma.anggotaUKM.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnggotaUKMCreateManyArgs>(args?: SelectSubset<T, AnggotaUKMCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AnggotaUKM.
     * @param {AnggotaUKMDeleteArgs} args - Arguments to delete one AnggotaUKM.
     * @example
     * // Delete one AnggotaUKM
     * const AnggotaUKM = await prisma.anggotaUKM.delete({
     *   where: {
     *     // ... filter to delete one AnggotaUKM
     *   }
     * })
     * 
     */
    delete<T extends AnggotaUKMDeleteArgs>(args: SelectSubset<T, AnggotaUKMDeleteArgs<ExtArgs>>): Prisma__AnggotaUKMClient<$Result.GetResult<Prisma.$AnggotaUKMPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnggotaUKM.
     * @param {AnggotaUKMUpdateArgs} args - Arguments to update one AnggotaUKM.
     * @example
     * // Update one AnggotaUKM
     * const anggotaUKM = await prisma.anggotaUKM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnggotaUKMUpdateArgs>(args: SelectSubset<T, AnggotaUKMUpdateArgs<ExtArgs>>): Prisma__AnggotaUKMClient<$Result.GetResult<Prisma.$AnggotaUKMPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnggotaUKMS.
     * @param {AnggotaUKMDeleteManyArgs} args - Arguments to filter AnggotaUKMS to delete.
     * @example
     * // Delete a few AnggotaUKMS
     * const { count } = await prisma.anggotaUKM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnggotaUKMDeleteManyArgs>(args?: SelectSubset<T, AnggotaUKMDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnggotaUKMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggotaUKMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnggotaUKMS
     * const anggotaUKM = await prisma.anggotaUKM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnggotaUKMUpdateManyArgs>(args: SelectSubset<T, AnggotaUKMUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AnggotaUKM.
     * @param {AnggotaUKMUpsertArgs} args - Arguments to update or create a AnggotaUKM.
     * @example
     * // Update or create a AnggotaUKM
     * const anggotaUKM = await prisma.anggotaUKM.upsert({
     *   create: {
     *     // ... data to create a AnggotaUKM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnggotaUKM we want to update
     *   }
     * })
     */
    upsert<T extends AnggotaUKMUpsertArgs>(args: SelectSubset<T, AnggotaUKMUpsertArgs<ExtArgs>>): Prisma__AnggotaUKMClient<$Result.GetResult<Prisma.$AnggotaUKMPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnggotaUKMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggotaUKMCountArgs} args - Arguments to filter AnggotaUKMS to count.
     * @example
     * // Count the number of AnggotaUKMS
     * const count = await prisma.anggotaUKM.count({
     *   where: {
     *     // ... the filter for the AnggotaUKMS we want to count
     *   }
     * })
    **/
    count<T extends AnggotaUKMCountArgs>(
      args?: Subset<T, AnggotaUKMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnggotaUKMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnggotaUKM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggotaUKMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnggotaUKMAggregateArgs>(args: Subset<T, AnggotaUKMAggregateArgs>): Prisma.PrismaPromise<GetAnggotaUKMAggregateType<T>>

    /**
     * Group by AnggotaUKM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnggotaUKMGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnggotaUKMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnggotaUKMGroupByArgs['orderBy'] }
        : { orderBy?: AnggotaUKMGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnggotaUKMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnggotaUKMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnggotaUKM model
   */
  readonly fields: AnggotaUKMFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnggotaUKM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnggotaUKMClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends MahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MahasiswaDefaultArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ukm<T extends UkmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UkmDefaultArgs<ExtArgs>>): Prisma__UkmClient<$Result.GetResult<Prisma.$UkmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnggotaUKM model
   */
  interface AnggotaUKMFieldRefs {
    readonly id: FieldRef<"AnggotaUKM", 'String'>
    readonly mahasiswaId: FieldRef<"AnggotaUKM", 'String'>
    readonly ukmId: FieldRef<"AnggotaUKM", 'String'>
    readonly approvedBy: FieldRef<"AnggotaUKM", 'String'>
    readonly tanggalGabung: FieldRef<"AnggotaUKM", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnggotaUKM findUnique
   */
  export type AnggotaUKMFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggotaUKM
     */
    select?: AnggotaUKMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnggotaUKM
     */
    omit?: AnggotaUKMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaUKMInclude<ExtArgs> | null
    /**
     * Filter, which AnggotaUKM to fetch.
     */
    where: AnggotaUKMWhereUniqueInput
  }

  /**
   * AnggotaUKM findUniqueOrThrow
   */
  export type AnggotaUKMFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggotaUKM
     */
    select?: AnggotaUKMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnggotaUKM
     */
    omit?: AnggotaUKMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaUKMInclude<ExtArgs> | null
    /**
     * Filter, which AnggotaUKM to fetch.
     */
    where: AnggotaUKMWhereUniqueInput
  }

  /**
   * AnggotaUKM findFirst
   */
  export type AnggotaUKMFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggotaUKM
     */
    select?: AnggotaUKMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnggotaUKM
     */
    omit?: AnggotaUKMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaUKMInclude<ExtArgs> | null
    /**
     * Filter, which AnggotaUKM to fetch.
     */
    where?: AnggotaUKMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnggotaUKMS to fetch.
     */
    orderBy?: AnggotaUKMOrderByWithRelationInput | AnggotaUKMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnggotaUKMS.
     */
    cursor?: AnggotaUKMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnggotaUKMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnggotaUKMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnggotaUKMS.
     */
    distinct?: AnggotaUKMScalarFieldEnum | AnggotaUKMScalarFieldEnum[]
  }

  /**
   * AnggotaUKM findFirstOrThrow
   */
  export type AnggotaUKMFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggotaUKM
     */
    select?: AnggotaUKMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnggotaUKM
     */
    omit?: AnggotaUKMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaUKMInclude<ExtArgs> | null
    /**
     * Filter, which AnggotaUKM to fetch.
     */
    where?: AnggotaUKMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnggotaUKMS to fetch.
     */
    orderBy?: AnggotaUKMOrderByWithRelationInput | AnggotaUKMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnggotaUKMS.
     */
    cursor?: AnggotaUKMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnggotaUKMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnggotaUKMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnggotaUKMS.
     */
    distinct?: AnggotaUKMScalarFieldEnum | AnggotaUKMScalarFieldEnum[]
  }

  /**
   * AnggotaUKM findMany
   */
  export type AnggotaUKMFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggotaUKM
     */
    select?: AnggotaUKMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnggotaUKM
     */
    omit?: AnggotaUKMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaUKMInclude<ExtArgs> | null
    /**
     * Filter, which AnggotaUKMS to fetch.
     */
    where?: AnggotaUKMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnggotaUKMS to fetch.
     */
    orderBy?: AnggotaUKMOrderByWithRelationInput | AnggotaUKMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnggotaUKMS.
     */
    cursor?: AnggotaUKMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnggotaUKMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnggotaUKMS.
     */
    skip?: number
    distinct?: AnggotaUKMScalarFieldEnum | AnggotaUKMScalarFieldEnum[]
  }

  /**
   * AnggotaUKM create
   */
  export type AnggotaUKMCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggotaUKM
     */
    select?: AnggotaUKMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnggotaUKM
     */
    omit?: AnggotaUKMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaUKMInclude<ExtArgs> | null
    /**
     * The data needed to create a AnggotaUKM.
     */
    data: XOR<AnggotaUKMCreateInput, AnggotaUKMUncheckedCreateInput>
  }

  /**
   * AnggotaUKM createMany
   */
  export type AnggotaUKMCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnggotaUKMS.
     */
    data: AnggotaUKMCreateManyInput | AnggotaUKMCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnggotaUKM update
   */
  export type AnggotaUKMUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggotaUKM
     */
    select?: AnggotaUKMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnggotaUKM
     */
    omit?: AnggotaUKMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaUKMInclude<ExtArgs> | null
    /**
     * The data needed to update a AnggotaUKM.
     */
    data: XOR<AnggotaUKMUpdateInput, AnggotaUKMUncheckedUpdateInput>
    /**
     * Choose, which AnggotaUKM to update.
     */
    where: AnggotaUKMWhereUniqueInput
  }

  /**
   * AnggotaUKM updateMany
   */
  export type AnggotaUKMUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnggotaUKMS.
     */
    data: XOR<AnggotaUKMUpdateManyMutationInput, AnggotaUKMUncheckedUpdateManyInput>
    /**
     * Filter which AnggotaUKMS to update
     */
    where?: AnggotaUKMWhereInput
    /**
     * Limit how many AnggotaUKMS to update.
     */
    limit?: number
  }

  /**
   * AnggotaUKM upsert
   */
  export type AnggotaUKMUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggotaUKM
     */
    select?: AnggotaUKMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnggotaUKM
     */
    omit?: AnggotaUKMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaUKMInclude<ExtArgs> | null
    /**
     * The filter to search for the AnggotaUKM to update in case it exists.
     */
    where: AnggotaUKMWhereUniqueInput
    /**
     * In case the AnggotaUKM found by the `where` argument doesn't exist, create a new AnggotaUKM with this data.
     */
    create: XOR<AnggotaUKMCreateInput, AnggotaUKMUncheckedCreateInput>
    /**
     * In case the AnggotaUKM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnggotaUKMUpdateInput, AnggotaUKMUncheckedUpdateInput>
  }

  /**
   * AnggotaUKM delete
   */
  export type AnggotaUKMDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggotaUKM
     */
    select?: AnggotaUKMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnggotaUKM
     */
    omit?: AnggotaUKMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaUKMInclude<ExtArgs> | null
    /**
     * Filter which AnggotaUKM to delete.
     */
    where: AnggotaUKMWhereUniqueInput
  }

  /**
   * AnggotaUKM deleteMany
   */
  export type AnggotaUKMDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnggotaUKMS to delete
     */
    where?: AnggotaUKMWhereInput
    /**
     * Limit how many AnggotaUKMS to delete.
     */
    limit?: number
  }

  /**
   * AnggotaUKM without action
   */
  export type AnggotaUKMDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnggotaUKM
     */
    select?: AnggotaUKMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnggotaUKM
     */
    omit?: AnggotaUKMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnggotaUKMInclude<ExtArgs> | null
  }


  /**
   * Model Todo
   */

  export type AggregateTodo = {
    _count: TodoCountAggregateOutputType | null
    _avg: TodoAvgAggregateOutputType | null
    _sum: TodoSumAggregateOutputType | null
    _min: TodoMinAggregateOutputType | null
    _max: TodoMaxAggregateOutputType | null
  }

  export type TodoAvgAggregateOutputType = {
    id: number | null
  }

  export type TodoSumAggregateOutputType = {
    id: number | null
  }

  export type TodoMinAggregateOutputType = {
    id: number | null
    title: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodoMaxAggregateOutputType = {
    id: number | null
    title: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodoCountAggregateOutputType = {
    id: number
    title: number
    completed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TodoAvgAggregateInputType = {
    id?: true
  }

  export type TodoSumAggregateInputType = {
    id?: true
  }

  export type TodoMinAggregateInputType = {
    id?: true
    title?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodoMaxAggregateInputType = {
    id?: true
    title?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodoCountAggregateInputType = {
    id?: true
    title?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TodoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Todo to aggregate.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Todos
    **/
    _count?: true | TodoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TodoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TodoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodoMaxAggregateInputType
  }

  export type GetTodoAggregateType<T extends TodoAggregateArgs> = {
        [P in keyof T & keyof AggregateTodo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodo[P]>
      : GetScalarType<T[P], AggregateTodo[P]>
  }




  export type TodoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoWhereInput
    orderBy?: TodoOrderByWithAggregationInput | TodoOrderByWithAggregationInput[]
    by: TodoScalarFieldEnum[] | TodoScalarFieldEnum
    having?: TodoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodoCountAggregateInputType | true
    _avg?: TodoAvgAggregateInputType
    _sum?: TodoSumAggregateInputType
    _min?: TodoMinAggregateInputType
    _max?: TodoMaxAggregateInputType
  }

  export type TodoGroupByOutputType = {
    id: number
    title: string
    completed: boolean
    createdAt: Date
    updatedAt: Date
    _count: TodoCountAggregateOutputType | null
    _avg: TodoAvgAggregateOutputType | null
    _sum: TodoSumAggregateOutputType | null
    _min: TodoMinAggregateOutputType | null
    _max: TodoMaxAggregateOutputType | null
  }

  type GetTodoGroupByPayload<T extends TodoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TodoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodoGroupByOutputType[P]>
            : GetScalarType<T[P], TodoGroupByOutputType[P]>
        }
      >
    >


  export type TodoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["todo"]>



  export type TodoSelectScalar = {
    id?: boolean
    title?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TodoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "completed" | "createdAt" | "updatedAt", ExtArgs["result"]["todo"]>

  export type $TodoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Todo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      completed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["todo"]>
    composites: {}
  }

  type TodoGetPayload<S extends boolean | null | undefined | TodoDefaultArgs> = $Result.GetResult<Prisma.$TodoPayload, S>

  type TodoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TodoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TodoCountAggregateInputType | true
    }

  export interface TodoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Todo'], meta: { name: 'Todo' } }
    /**
     * Find zero or one Todo that matches the filter.
     * @param {TodoFindUniqueArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TodoFindUniqueArgs>(args: SelectSubset<T, TodoFindUniqueArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Todo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TodoFindUniqueOrThrowArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TodoFindUniqueOrThrowArgs>(args: SelectSubset<T, TodoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Todo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindFirstArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TodoFindFirstArgs>(args?: SelectSubset<T, TodoFindFirstArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Todo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindFirstOrThrowArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TodoFindFirstOrThrowArgs>(args?: SelectSubset<T, TodoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Todos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Todos
     * const todos = await prisma.todo.findMany()
     * 
     * // Get first 10 Todos
     * const todos = await prisma.todo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todoWithIdOnly = await prisma.todo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TodoFindManyArgs>(args?: SelectSubset<T, TodoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Todo.
     * @param {TodoCreateArgs} args - Arguments to create a Todo.
     * @example
     * // Create one Todo
     * const Todo = await prisma.todo.create({
     *   data: {
     *     // ... data to create a Todo
     *   }
     * })
     * 
     */
    create<T extends TodoCreateArgs>(args: SelectSubset<T, TodoCreateArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Todos.
     * @param {TodoCreateManyArgs} args - Arguments to create many Todos.
     * @example
     * // Create many Todos
     * const todo = await prisma.todo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TodoCreateManyArgs>(args?: SelectSubset<T, TodoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Todo.
     * @param {TodoDeleteArgs} args - Arguments to delete one Todo.
     * @example
     * // Delete one Todo
     * const Todo = await prisma.todo.delete({
     *   where: {
     *     // ... filter to delete one Todo
     *   }
     * })
     * 
     */
    delete<T extends TodoDeleteArgs>(args: SelectSubset<T, TodoDeleteArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Todo.
     * @param {TodoUpdateArgs} args - Arguments to update one Todo.
     * @example
     * // Update one Todo
     * const todo = await prisma.todo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TodoUpdateArgs>(args: SelectSubset<T, TodoUpdateArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Todos.
     * @param {TodoDeleteManyArgs} args - Arguments to filter Todos to delete.
     * @example
     * // Delete a few Todos
     * const { count } = await prisma.todo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TodoDeleteManyArgs>(args?: SelectSubset<T, TodoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Todos
     * const todo = await prisma.todo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TodoUpdateManyArgs>(args: SelectSubset<T, TodoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Todo.
     * @param {TodoUpsertArgs} args - Arguments to update or create a Todo.
     * @example
     * // Update or create a Todo
     * const todo = await prisma.todo.upsert({
     *   create: {
     *     // ... data to create a Todo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Todo we want to update
     *   }
     * })
     */
    upsert<T extends TodoUpsertArgs>(args: SelectSubset<T, TodoUpsertArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoCountArgs} args - Arguments to filter Todos to count.
     * @example
     * // Count the number of Todos
     * const count = await prisma.todo.count({
     *   where: {
     *     // ... the filter for the Todos we want to count
     *   }
     * })
    **/
    count<T extends TodoCountArgs>(
      args?: Subset<T, TodoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TodoAggregateArgs>(args: Subset<T, TodoAggregateArgs>): Prisma.PrismaPromise<GetTodoAggregateType<T>>

    /**
     * Group by Todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TodoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodoGroupByArgs['orderBy'] }
        : { orderBy?: TodoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Todo model
   */
  readonly fields: TodoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Todo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TodoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Todo model
   */
  interface TodoFieldRefs {
    readonly id: FieldRef<"Todo", 'Int'>
    readonly title: FieldRef<"Todo", 'String'>
    readonly completed: FieldRef<"Todo", 'Boolean'>
    readonly createdAt: FieldRef<"Todo", 'DateTime'>
    readonly updatedAt: FieldRef<"Todo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Todo findUnique
   */
  export type TodoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo findUniqueOrThrow
   */
  export type TodoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo findFirst
   */
  export type TodoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todos.
     */
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo findFirstOrThrow
   */
  export type TodoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todos.
     */
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo findMany
   */
  export type TodoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Filter, which Todos to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo create
   */
  export type TodoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * The data needed to create a Todo.
     */
    data: XOR<TodoCreateInput, TodoUncheckedCreateInput>
  }

  /**
   * Todo createMany
   */
  export type TodoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Todos.
     */
    data: TodoCreateManyInput | TodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Todo update
   */
  export type TodoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * The data needed to update a Todo.
     */
    data: XOR<TodoUpdateInput, TodoUncheckedUpdateInput>
    /**
     * Choose, which Todo to update.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo updateMany
   */
  export type TodoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Todos.
     */
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyInput>
    /**
     * Filter which Todos to update
     */
    where?: TodoWhereInput
    /**
     * Limit how many Todos to update.
     */
    limit?: number
  }

  /**
   * Todo upsert
   */
  export type TodoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * The filter to search for the Todo to update in case it exists.
     */
    where: TodoWhereUniqueInput
    /**
     * In case the Todo found by the `where` argument doesn't exist, create a new Todo with this data.
     */
    create: XOR<TodoCreateInput, TodoUncheckedCreateInput>
    /**
     * In case the Todo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TodoUpdateInput, TodoUncheckedUpdateInput>
  }

  /**
   * Todo delete
   */
  export type TodoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Filter which Todo to delete.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo deleteMany
   */
  export type TodoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Todos to delete
     */
    where?: TodoWhereInput
    /**
     * Limit how many Todos to delete.
     */
    limit?: number
  }

  /**
   * Todo without action
   */
  export type TodoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const MahasiswaScalarFieldEnum: {
    id: 'id',
    nim: 'nim',
    nama: 'nama',
    jurusan: 'jurusan',
    prodi: 'prodi',
    registeredBy: 'registeredBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MahasiswaScalarFieldEnum = (typeof MahasiswaScalarFieldEnum)[keyof typeof MahasiswaScalarFieldEnum]


  export const UkmScalarFieldEnum: {
    id: 'id',
    kodeUkm: 'kodeUkm',
    namaUkm: 'namaUkm',
    deskripsi: 'deskripsi',
    registeredBy: 'registeredBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UkmScalarFieldEnum = (typeof UkmScalarFieldEnum)[keyof typeof UkmScalarFieldEnum]


  export const AnggotaUKMScalarFieldEnum: {
    id: 'id',
    mahasiswaId: 'mahasiswaId',
    ukmId: 'ukmId',
    approvedBy: 'approvedBy',
    tanggalGabung: 'tanggalGabung'
  };

  export type AnggotaUKMScalarFieldEnum = (typeof AnggotaUKMScalarFieldEnum)[keyof typeof AnggotaUKMScalarFieldEnum]


  export const TodoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    completed: 'completed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TodoScalarFieldEnum = (typeof TodoScalarFieldEnum)[keyof typeof TodoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const AdminOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const MahasiswaOrderByRelevanceFieldEnum: {
    id: 'id',
    nim: 'nim',
    nama: 'nama',
    jurusan: 'jurusan',
    prodi: 'prodi',
    registeredBy: 'registeredBy'
  };

  export type MahasiswaOrderByRelevanceFieldEnum = (typeof MahasiswaOrderByRelevanceFieldEnum)[keyof typeof MahasiswaOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UkmOrderByRelevanceFieldEnum: {
    id: 'id',
    kodeUkm: 'kodeUkm',
    namaUkm: 'namaUkm',
    deskripsi: 'deskripsi',
    registeredBy: 'registeredBy'
  };

  export type UkmOrderByRelevanceFieldEnum = (typeof UkmOrderByRelevanceFieldEnum)[keyof typeof UkmOrderByRelevanceFieldEnum]


  export const AnggotaUKMOrderByRelevanceFieldEnum: {
    id: 'id',
    mahasiswaId: 'mahasiswaId',
    ukmId: 'ukmId',
    approvedBy: 'approvedBy'
  };

  export type AnggotaUKMOrderByRelevanceFieldEnum = (typeof AnggotaUKMOrderByRelevanceFieldEnum)[keyof typeof AnggotaUKMOrderByRelevanceFieldEnum]


  export const TodoOrderByRelevanceFieldEnum: {
    title: 'title'
  };

  export type TodoOrderByRelevanceFieldEnum = (typeof TodoOrderByRelevanceFieldEnum)[keyof typeof TodoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    username?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "username">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    username?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type MahasiswaWhereInput = {
    AND?: MahasiswaWhereInput | MahasiswaWhereInput[]
    OR?: MahasiswaWhereInput[]
    NOT?: MahasiswaWhereInput | MahasiswaWhereInput[]
    id?: StringFilter<"Mahasiswa"> | string
    nim?: StringFilter<"Mahasiswa"> | string
    nama?: StringFilter<"Mahasiswa"> | string
    jurusan?: StringFilter<"Mahasiswa"> | string
    prodi?: StringFilter<"Mahasiswa"> | string
    registeredBy?: StringFilter<"Mahasiswa"> | string
    createdAt?: DateTimeFilter<"Mahasiswa"> | Date | string
    updatedAt?: DateTimeFilter<"Mahasiswa"> | Date | string
    keanggotaan?: XOR<AnggotaUKMNullableScalarRelationFilter, AnggotaUKMWhereInput> | null
  }

  export type MahasiswaOrderByWithRelationInput = {
    id?: SortOrder
    nim?: SortOrder
    nama?: SortOrder
    jurusan?: SortOrder
    prodi?: SortOrder
    registeredBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    keanggotaan?: AnggotaUKMOrderByWithRelationInput
    _relevance?: MahasiswaOrderByRelevanceInput
  }

  export type MahasiswaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nim?: string
    AND?: MahasiswaWhereInput | MahasiswaWhereInput[]
    OR?: MahasiswaWhereInput[]
    NOT?: MahasiswaWhereInput | MahasiswaWhereInput[]
    nama?: StringFilter<"Mahasiswa"> | string
    jurusan?: StringFilter<"Mahasiswa"> | string
    prodi?: StringFilter<"Mahasiswa"> | string
    registeredBy?: StringFilter<"Mahasiswa"> | string
    createdAt?: DateTimeFilter<"Mahasiswa"> | Date | string
    updatedAt?: DateTimeFilter<"Mahasiswa"> | Date | string
    keanggotaan?: XOR<AnggotaUKMNullableScalarRelationFilter, AnggotaUKMWhereInput> | null
  }, "id" | "nim">

  export type MahasiswaOrderByWithAggregationInput = {
    id?: SortOrder
    nim?: SortOrder
    nama?: SortOrder
    jurusan?: SortOrder
    prodi?: SortOrder
    registeredBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MahasiswaCountOrderByAggregateInput
    _max?: MahasiswaMaxOrderByAggregateInput
    _min?: MahasiswaMinOrderByAggregateInput
  }

  export type MahasiswaScalarWhereWithAggregatesInput = {
    AND?: MahasiswaScalarWhereWithAggregatesInput | MahasiswaScalarWhereWithAggregatesInput[]
    OR?: MahasiswaScalarWhereWithAggregatesInput[]
    NOT?: MahasiswaScalarWhereWithAggregatesInput | MahasiswaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mahasiswa"> | string
    nim?: StringWithAggregatesFilter<"Mahasiswa"> | string
    nama?: StringWithAggregatesFilter<"Mahasiswa"> | string
    jurusan?: StringWithAggregatesFilter<"Mahasiswa"> | string
    prodi?: StringWithAggregatesFilter<"Mahasiswa"> | string
    registeredBy?: StringWithAggregatesFilter<"Mahasiswa"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Mahasiswa"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mahasiswa"> | Date | string
  }

  export type UkmWhereInput = {
    AND?: UkmWhereInput | UkmWhereInput[]
    OR?: UkmWhereInput[]
    NOT?: UkmWhereInput | UkmWhereInput[]
    id?: StringFilter<"Ukm"> | string
    kodeUkm?: StringFilter<"Ukm"> | string
    namaUkm?: StringFilter<"Ukm"> | string
    deskripsi?: StringNullableFilter<"Ukm"> | string | null
    registeredBy?: StringFilter<"Ukm"> | string
    createdAt?: DateTimeFilter<"Ukm"> | Date | string
    updatedAt?: DateTimeFilter<"Ukm"> | Date | string
    paraAnggota?: AnggotaUKMListRelationFilter
  }

  export type UkmOrderByWithRelationInput = {
    id?: SortOrder
    kodeUkm?: SortOrder
    namaUkm?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    registeredBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paraAnggota?: AnggotaUKMOrderByRelationAggregateInput
    _relevance?: UkmOrderByRelevanceInput
  }

  export type UkmWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    kodeUkm?: string
    namaUkm?: string
    AND?: UkmWhereInput | UkmWhereInput[]
    OR?: UkmWhereInput[]
    NOT?: UkmWhereInput | UkmWhereInput[]
    deskripsi?: StringNullableFilter<"Ukm"> | string | null
    registeredBy?: StringFilter<"Ukm"> | string
    createdAt?: DateTimeFilter<"Ukm"> | Date | string
    updatedAt?: DateTimeFilter<"Ukm"> | Date | string
    paraAnggota?: AnggotaUKMListRelationFilter
  }, "id" | "kodeUkm" | "namaUkm">

  export type UkmOrderByWithAggregationInput = {
    id?: SortOrder
    kodeUkm?: SortOrder
    namaUkm?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    registeredBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UkmCountOrderByAggregateInput
    _max?: UkmMaxOrderByAggregateInput
    _min?: UkmMinOrderByAggregateInput
  }

  export type UkmScalarWhereWithAggregatesInput = {
    AND?: UkmScalarWhereWithAggregatesInput | UkmScalarWhereWithAggregatesInput[]
    OR?: UkmScalarWhereWithAggregatesInput[]
    NOT?: UkmScalarWhereWithAggregatesInput | UkmScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ukm"> | string
    kodeUkm?: StringWithAggregatesFilter<"Ukm"> | string
    namaUkm?: StringWithAggregatesFilter<"Ukm"> | string
    deskripsi?: StringNullableWithAggregatesFilter<"Ukm"> | string | null
    registeredBy?: StringWithAggregatesFilter<"Ukm"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Ukm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ukm"> | Date | string
  }

  export type AnggotaUKMWhereInput = {
    AND?: AnggotaUKMWhereInput | AnggotaUKMWhereInput[]
    OR?: AnggotaUKMWhereInput[]
    NOT?: AnggotaUKMWhereInput | AnggotaUKMWhereInput[]
    id?: StringFilter<"AnggotaUKM"> | string
    mahasiswaId?: StringFilter<"AnggotaUKM"> | string
    ukmId?: StringFilter<"AnggotaUKM"> | string
    approvedBy?: StringFilter<"AnggotaUKM"> | string
    tanggalGabung?: DateTimeFilter<"AnggotaUKM"> | Date | string
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
    ukm?: XOR<UkmScalarRelationFilter, UkmWhereInput>
  }

  export type AnggotaUKMOrderByWithRelationInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    ukmId?: SortOrder
    approvedBy?: SortOrder
    tanggalGabung?: SortOrder
    mahasiswa?: MahasiswaOrderByWithRelationInput
    ukm?: UkmOrderByWithRelationInput
    _relevance?: AnggotaUKMOrderByRelevanceInput
  }

  export type AnggotaUKMWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mahasiswaId?: string
    AND?: AnggotaUKMWhereInput | AnggotaUKMWhereInput[]
    OR?: AnggotaUKMWhereInput[]
    NOT?: AnggotaUKMWhereInput | AnggotaUKMWhereInput[]
    ukmId?: StringFilter<"AnggotaUKM"> | string
    approvedBy?: StringFilter<"AnggotaUKM"> | string
    tanggalGabung?: DateTimeFilter<"AnggotaUKM"> | Date | string
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
    ukm?: XOR<UkmScalarRelationFilter, UkmWhereInput>
  }, "id" | "mahasiswaId">

  export type AnggotaUKMOrderByWithAggregationInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    ukmId?: SortOrder
    approvedBy?: SortOrder
    tanggalGabung?: SortOrder
    _count?: AnggotaUKMCountOrderByAggregateInput
    _max?: AnggotaUKMMaxOrderByAggregateInput
    _min?: AnggotaUKMMinOrderByAggregateInput
  }

  export type AnggotaUKMScalarWhereWithAggregatesInput = {
    AND?: AnggotaUKMScalarWhereWithAggregatesInput | AnggotaUKMScalarWhereWithAggregatesInput[]
    OR?: AnggotaUKMScalarWhereWithAggregatesInput[]
    NOT?: AnggotaUKMScalarWhereWithAggregatesInput | AnggotaUKMScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnggotaUKM"> | string
    mahasiswaId?: StringWithAggregatesFilter<"AnggotaUKM"> | string
    ukmId?: StringWithAggregatesFilter<"AnggotaUKM"> | string
    approvedBy?: StringWithAggregatesFilter<"AnggotaUKM"> | string
    tanggalGabung?: DateTimeWithAggregatesFilter<"AnggotaUKM"> | Date | string
  }

  export type TodoWhereInput = {
    AND?: TodoWhereInput | TodoWhereInput[]
    OR?: TodoWhereInput[]
    NOT?: TodoWhereInput | TodoWhereInput[]
    id?: IntFilter<"Todo"> | number
    title?: StringFilter<"Todo"> | string
    completed?: BoolFilter<"Todo"> | boolean
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeFilter<"Todo"> | Date | string
  }

  export type TodoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: TodoOrderByRelevanceInput
  }

  export type TodoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TodoWhereInput | TodoWhereInput[]
    OR?: TodoWhereInput[]
    NOT?: TodoWhereInput | TodoWhereInput[]
    title?: StringFilter<"Todo"> | string
    completed?: BoolFilter<"Todo"> | boolean
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeFilter<"Todo"> | Date | string
  }, "id">

  export type TodoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TodoCountOrderByAggregateInput
    _avg?: TodoAvgOrderByAggregateInput
    _max?: TodoMaxOrderByAggregateInput
    _min?: TodoMinOrderByAggregateInput
    _sum?: TodoSumOrderByAggregateInput
  }

  export type TodoScalarWhereWithAggregatesInput = {
    AND?: TodoScalarWhereWithAggregatesInput | TodoScalarWhereWithAggregatesInput[]
    OR?: TodoScalarWhereWithAggregatesInput[]
    NOT?: TodoScalarWhereWithAggregatesInput | TodoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Todo"> | number
    title?: StringWithAggregatesFilter<"Todo"> | string
    completed?: BoolWithAggregatesFilter<"Todo"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Todo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Todo"> | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaCreateInput = {
    id?: string
    nim: string
    nama: string
    jurusan: string
    prodi: string
    registeredBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    keanggotaan?: AnggotaUKMCreateNestedOneWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateInput = {
    id?: string
    nim: string
    nama: string
    jurusan: string
    prodi: string
    registeredBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    keanggotaan?: AnggotaUKMUncheckedCreateNestedOneWithoutMahasiswaInput
  }

  export type MahasiswaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    prodi?: StringFieldUpdateOperationsInput | string
    registeredBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keanggotaan?: AnggotaUKMUpdateOneWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    prodi?: StringFieldUpdateOperationsInput | string
    registeredBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keanggotaan?: AnggotaUKMUncheckedUpdateOneWithoutMahasiswaNestedInput
  }

  export type MahasiswaCreateManyInput = {
    id?: string
    nim: string
    nama: string
    jurusan: string
    prodi: string
    registeredBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MahasiswaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    prodi?: StringFieldUpdateOperationsInput | string
    registeredBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    prodi?: StringFieldUpdateOperationsInput | string
    registeredBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UkmCreateInput = {
    id?: string
    kodeUkm: string
    namaUkm: string
    deskripsi?: string | null
    registeredBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paraAnggota?: AnggotaUKMCreateNestedManyWithoutUkmInput
  }

  export type UkmUncheckedCreateInput = {
    id?: string
    kodeUkm: string
    namaUkm: string
    deskripsi?: string | null
    registeredBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paraAnggota?: AnggotaUKMUncheckedCreateNestedManyWithoutUkmInput
  }

  export type UkmUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeUkm?: StringFieldUpdateOperationsInput | string
    namaUkm?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    registeredBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paraAnggota?: AnggotaUKMUpdateManyWithoutUkmNestedInput
  }

  export type UkmUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeUkm?: StringFieldUpdateOperationsInput | string
    namaUkm?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    registeredBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paraAnggota?: AnggotaUKMUncheckedUpdateManyWithoutUkmNestedInput
  }

  export type UkmCreateManyInput = {
    id?: string
    kodeUkm: string
    namaUkm: string
    deskripsi?: string | null
    registeredBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UkmUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeUkm?: StringFieldUpdateOperationsInput | string
    namaUkm?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    registeredBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UkmUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeUkm?: StringFieldUpdateOperationsInput | string
    namaUkm?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    registeredBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnggotaUKMCreateInput = {
    id?: string
    approvedBy: string
    tanggalGabung?: Date | string
    mahasiswa: MahasiswaCreateNestedOneWithoutKeanggotaanInput
    ukm: UkmCreateNestedOneWithoutParaAnggotaInput
  }

  export type AnggotaUKMUncheckedCreateInput = {
    id?: string
    mahasiswaId: string
    ukmId: string
    approvedBy: string
    tanggalGabung?: Date | string
  }

  export type AnggotaUKMUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    tanggalGabung?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUpdateOneRequiredWithoutKeanggotaanNestedInput
    ukm?: UkmUpdateOneRequiredWithoutParaAnggotaNestedInput
  }

  export type AnggotaUKMUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    ukmId?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    tanggalGabung?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnggotaUKMCreateManyInput = {
    id?: string
    mahasiswaId: string
    ukmId: string
    approvedBy: string
    tanggalGabung?: Date | string
  }

  export type AnggotaUKMUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    tanggalGabung?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnggotaUKMUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    ukmId?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    tanggalGabung?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoCreateInput = {
    title: string
    completed?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type TodoUncheckedCreateInput = {
    id?: number
    title: string
    completed?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type TodoUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoCreateManyInput = {
    id?: number
    title: string
    completed?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type TodoUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AnggotaUKMNullableScalarRelationFilter = {
    is?: AnggotaUKMWhereInput | null
    isNot?: AnggotaUKMWhereInput | null
  }

  export type MahasiswaOrderByRelevanceInput = {
    fields: MahasiswaOrderByRelevanceFieldEnum | MahasiswaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MahasiswaCountOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    nama?: SortOrder
    jurusan?: SortOrder
    prodi?: SortOrder
    registeredBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MahasiswaMaxOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    nama?: SortOrder
    jurusan?: SortOrder
    prodi?: SortOrder
    registeredBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MahasiswaMinOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    nama?: SortOrder
    jurusan?: SortOrder
    prodi?: SortOrder
    registeredBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AnggotaUKMListRelationFilter = {
    every?: AnggotaUKMWhereInput
    some?: AnggotaUKMWhereInput
    none?: AnggotaUKMWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnggotaUKMOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UkmOrderByRelevanceInput = {
    fields: UkmOrderByRelevanceFieldEnum | UkmOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UkmCountOrderByAggregateInput = {
    id?: SortOrder
    kodeUkm?: SortOrder
    namaUkm?: SortOrder
    deskripsi?: SortOrder
    registeredBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UkmMaxOrderByAggregateInput = {
    id?: SortOrder
    kodeUkm?: SortOrder
    namaUkm?: SortOrder
    deskripsi?: SortOrder
    registeredBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UkmMinOrderByAggregateInput = {
    id?: SortOrder
    kodeUkm?: SortOrder
    namaUkm?: SortOrder
    deskripsi?: SortOrder
    registeredBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MahasiswaScalarRelationFilter = {
    is?: MahasiswaWhereInput
    isNot?: MahasiswaWhereInput
  }

  export type UkmScalarRelationFilter = {
    is?: UkmWhereInput
    isNot?: UkmWhereInput
  }

  export type AnggotaUKMOrderByRelevanceInput = {
    fields: AnggotaUKMOrderByRelevanceFieldEnum | AnggotaUKMOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AnggotaUKMCountOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    ukmId?: SortOrder
    approvedBy?: SortOrder
    tanggalGabung?: SortOrder
  }

  export type AnggotaUKMMaxOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    ukmId?: SortOrder
    approvedBy?: SortOrder
    tanggalGabung?: SortOrder
  }

  export type AnggotaUKMMinOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    ukmId?: SortOrder
    approvedBy?: SortOrder
    tanggalGabung?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TodoOrderByRelevanceInput = {
    fields: TodoOrderByRelevanceFieldEnum | TodoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TodoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TodoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AnggotaUKMCreateNestedOneWithoutMahasiswaInput = {
    create?: XOR<AnggotaUKMCreateWithoutMahasiswaInput, AnggotaUKMUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: AnggotaUKMCreateOrConnectWithoutMahasiswaInput
    connect?: AnggotaUKMWhereUniqueInput
  }

  export type AnggotaUKMUncheckedCreateNestedOneWithoutMahasiswaInput = {
    create?: XOR<AnggotaUKMCreateWithoutMahasiswaInput, AnggotaUKMUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: AnggotaUKMCreateOrConnectWithoutMahasiswaInput
    connect?: AnggotaUKMWhereUniqueInput
  }

  export type AnggotaUKMUpdateOneWithoutMahasiswaNestedInput = {
    create?: XOR<AnggotaUKMCreateWithoutMahasiswaInput, AnggotaUKMUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: AnggotaUKMCreateOrConnectWithoutMahasiswaInput
    upsert?: AnggotaUKMUpsertWithoutMahasiswaInput
    disconnect?: AnggotaUKMWhereInput | boolean
    delete?: AnggotaUKMWhereInput | boolean
    connect?: AnggotaUKMWhereUniqueInput
    update?: XOR<XOR<AnggotaUKMUpdateToOneWithWhereWithoutMahasiswaInput, AnggotaUKMUpdateWithoutMahasiswaInput>, AnggotaUKMUncheckedUpdateWithoutMahasiswaInput>
  }

  export type AnggotaUKMUncheckedUpdateOneWithoutMahasiswaNestedInput = {
    create?: XOR<AnggotaUKMCreateWithoutMahasiswaInput, AnggotaUKMUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: AnggotaUKMCreateOrConnectWithoutMahasiswaInput
    upsert?: AnggotaUKMUpsertWithoutMahasiswaInput
    disconnect?: AnggotaUKMWhereInput | boolean
    delete?: AnggotaUKMWhereInput | boolean
    connect?: AnggotaUKMWhereUniqueInput
    update?: XOR<XOR<AnggotaUKMUpdateToOneWithWhereWithoutMahasiswaInput, AnggotaUKMUpdateWithoutMahasiswaInput>, AnggotaUKMUncheckedUpdateWithoutMahasiswaInput>
  }

  export type AnggotaUKMCreateNestedManyWithoutUkmInput = {
    create?: XOR<AnggotaUKMCreateWithoutUkmInput, AnggotaUKMUncheckedCreateWithoutUkmInput> | AnggotaUKMCreateWithoutUkmInput[] | AnggotaUKMUncheckedCreateWithoutUkmInput[]
    connectOrCreate?: AnggotaUKMCreateOrConnectWithoutUkmInput | AnggotaUKMCreateOrConnectWithoutUkmInput[]
    createMany?: AnggotaUKMCreateManyUkmInputEnvelope
    connect?: AnggotaUKMWhereUniqueInput | AnggotaUKMWhereUniqueInput[]
  }

  export type AnggotaUKMUncheckedCreateNestedManyWithoutUkmInput = {
    create?: XOR<AnggotaUKMCreateWithoutUkmInput, AnggotaUKMUncheckedCreateWithoutUkmInput> | AnggotaUKMCreateWithoutUkmInput[] | AnggotaUKMUncheckedCreateWithoutUkmInput[]
    connectOrCreate?: AnggotaUKMCreateOrConnectWithoutUkmInput | AnggotaUKMCreateOrConnectWithoutUkmInput[]
    createMany?: AnggotaUKMCreateManyUkmInputEnvelope
    connect?: AnggotaUKMWhereUniqueInput | AnggotaUKMWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AnggotaUKMUpdateManyWithoutUkmNestedInput = {
    create?: XOR<AnggotaUKMCreateWithoutUkmInput, AnggotaUKMUncheckedCreateWithoutUkmInput> | AnggotaUKMCreateWithoutUkmInput[] | AnggotaUKMUncheckedCreateWithoutUkmInput[]
    connectOrCreate?: AnggotaUKMCreateOrConnectWithoutUkmInput | AnggotaUKMCreateOrConnectWithoutUkmInput[]
    upsert?: AnggotaUKMUpsertWithWhereUniqueWithoutUkmInput | AnggotaUKMUpsertWithWhereUniqueWithoutUkmInput[]
    createMany?: AnggotaUKMCreateManyUkmInputEnvelope
    set?: AnggotaUKMWhereUniqueInput | AnggotaUKMWhereUniqueInput[]
    disconnect?: AnggotaUKMWhereUniqueInput | AnggotaUKMWhereUniqueInput[]
    delete?: AnggotaUKMWhereUniqueInput | AnggotaUKMWhereUniqueInput[]
    connect?: AnggotaUKMWhereUniqueInput | AnggotaUKMWhereUniqueInput[]
    update?: AnggotaUKMUpdateWithWhereUniqueWithoutUkmInput | AnggotaUKMUpdateWithWhereUniqueWithoutUkmInput[]
    updateMany?: AnggotaUKMUpdateManyWithWhereWithoutUkmInput | AnggotaUKMUpdateManyWithWhereWithoutUkmInput[]
    deleteMany?: AnggotaUKMScalarWhereInput | AnggotaUKMScalarWhereInput[]
  }

  export type AnggotaUKMUncheckedUpdateManyWithoutUkmNestedInput = {
    create?: XOR<AnggotaUKMCreateWithoutUkmInput, AnggotaUKMUncheckedCreateWithoutUkmInput> | AnggotaUKMCreateWithoutUkmInput[] | AnggotaUKMUncheckedCreateWithoutUkmInput[]
    connectOrCreate?: AnggotaUKMCreateOrConnectWithoutUkmInput | AnggotaUKMCreateOrConnectWithoutUkmInput[]
    upsert?: AnggotaUKMUpsertWithWhereUniqueWithoutUkmInput | AnggotaUKMUpsertWithWhereUniqueWithoutUkmInput[]
    createMany?: AnggotaUKMCreateManyUkmInputEnvelope
    set?: AnggotaUKMWhereUniqueInput | AnggotaUKMWhereUniqueInput[]
    disconnect?: AnggotaUKMWhereUniqueInput | AnggotaUKMWhereUniqueInput[]
    delete?: AnggotaUKMWhereUniqueInput | AnggotaUKMWhereUniqueInput[]
    connect?: AnggotaUKMWhereUniqueInput | AnggotaUKMWhereUniqueInput[]
    update?: AnggotaUKMUpdateWithWhereUniqueWithoutUkmInput | AnggotaUKMUpdateWithWhereUniqueWithoutUkmInput[]
    updateMany?: AnggotaUKMUpdateManyWithWhereWithoutUkmInput | AnggotaUKMUpdateManyWithWhereWithoutUkmInput[]
    deleteMany?: AnggotaUKMScalarWhereInput | AnggotaUKMScalarWhereInput[]
  }

  export type MahasiswaCreateNestedOneWithoutKeanggotaanInput = {
    create?: XOR<MahasiswaCreateWithoutKeanggotaanInput, MahasiswaUncheckedCreateWithoutKeanggotaanInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutKeanggotaanInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type UkmCreateNestedOneWithoutParaAnggotaInput = {
    create?: XOR<UkmCreateWithoutParaAnggotaInput, UkmUncheckedCreateWithoutParaAnggotaInput>
    connectOrCreate?: UkmCreateOrConnectWithoutParaAnggotaInput
    connect?: UkmWhereUniqueInput
  }

  export type MahasiswaUpdateOneRequiredWithoutKeanggotaanNestedInput = {
    create?: XOR<MahasiswaCreateWithoutKeanggotaanInput, MahasiswaUncheckedCreateWithoutKeanggotaanInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutKeanggotaanInput
    upsert?: MahasiswaUpsertWithoutKeanggotaanInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<XOR<MahasiswaUpdateToOneWithWhereWithoutKeanggotaanInput, MahasiswaUpdateWithoutKeanggotaanInput>, MahasiswaUncheckedUpdateWithoutKeanggotaanInput>
  }

  export type UkmUpdateOneRequiredWithoutParaAnggotaNestedInput = {
    create?: XOR<UkmCreateWithoutParaAnggotaInput, UkmUncheckedCreateWithoutParaAnggotaInput>
    connectOrCreate?: UkmCreateOrConnectWithoutParaAnggotaInput
    upsert?: UkmUpsertWithoutParaAnggotaInput
    connect?: UkmWhereUniqueInput
    update?: XOR<XOR<UkmUpdateToOneWithWhereWithoutParaAnggotaInput, UkmUpdateWithoutParaAnggotaInput>, UkmUncheckedUpdateWithoutParaAnggotaInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AnggotaUKMCreateWithoutMahasiswaInput = {
    id?: string
    approvedBy: string
    tanggalGabung?: Date | string
    ukm: UkmCreateNestedOneWithoutParaAnggotaInput
  }

  export type AnggotaUKMUncheckedCreateWithoutMahasiswaInput = {
    id?: string
    ukmId: string
    approvedBy: string
    tanggalGabung?: Date | string
  }

  export type AnggotaUKMCreateOrConnectWithoutMahasiswaInput = {
    where: AnggotaUKMWhereUniqueInput
    create: XOR<AnggotaUKMCreateWithoutMahasiswaInput, AnggotaUKMUncheckedCreateWithoutMahasiswaInput>
  }

  export type AnggotaUKMUpsertWithoutMahasiswaInput = {
    update: XOR<AnggotaUKMUpdateWithoutMahasiswaInput, AnggotaUKMUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<AnggotaUKMCreateWithoutMahasiswaInput, AnggotaUKMUncheckedCreateWithoutMahasiswaInput>
    where?: AnggotaUKMWhereInput
  }

  export type AnggotaUKMUpdateToOneWithWhereWithoutMahasiswaInput = {
    where?: AnggotaUKMWhereInput
    data: XOR<AnggotaUKMUpdateWithoutMahasiswaInput, AnggotaUKMUncheckedUpdateWithoutMahasiswaInput>
  }

  export type AnggotaUKMUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    tanggalGabung?: DateTimeFieldUpdateOperationsInput | Date | string
    ukm?: UkmUpdateOneRequiredWithoutParaAnggotaNestedInput
  }

  export type AnggotaUKMUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    ukmId?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    tanggalGabung?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnggotaUKMCreateWithoutUkmInput = {
    id?: string
    approvedBy: string
    tanggalGabung?: Date | string
    mahasiswa: MahasiswaCreateNestedOneWithoutKeanggotaanInput
  }

  export type AnggotaUKMUncheckedCreateWithoutUkmInput = {
    id?: string
    mahasiswaId: string
    approvedBy: string
    tanggalGabung?: Date | string
  }

  export type AnggotaUKMCreateOrConnectWithoutUkmInput = {
    where: AnggotaUKMWhereUniqueInput
    create: XOR<AnggotaUKMCreateWithoutUkmInput, AnggotaUKMUncheckedCreateWithoutUkmInput>
  }

  export type AnggotaUKMCreateManyUkmInputEnvelope = {
    data: AnggotaUKMCreateManyUkmInput | AnggotaUKMCreateManyUkmInput[]
    skipDuplicates?: boolean
  }

  export type AnggotaUKMUpsertWithWhereUniqueWithoutUkmInput = {
    where: AnggotaUKMWhereUniqueInput
    update: XOR<AnggotaUKMUpdateWithoutUkmInput, AnggotaUKMUncheckedUpdateWithoutUkmInput>
    create: XOR<AnggotaUKMCreateWithoutUkmInput, AnggotaUKMUncheckedCreateWithoutUkmInput>
  }

  export type AnggotaUKMUpdateWithWhereUniqueWithoutUkmInput = {
    where: AnggotaUKMWhereUniqueInput
    data: XOR<AnggotaUKMUpdateWithoutUkmInput, AnggotaUKMUncheckedUpdateWithoutUkmInput>
  }

  export type AnggotaUKMUpdateManyWithWhereWithoutUkmInput = {
    where: AnggotaUKMScalarWhereInput
    data: XOR<AnggotaUKMUpdateManyMutationInput, AnggotaUKMUncheckedUpdateManyWithoutUkmInput>
  }

  export type AnggotaUKMScalarWhereInput = {
    AND?: AnggotaUKMScalarWhereInput | AnggotaUKMScalarWhereInput[]
    OR?: AnggotaUKMScalarWhereInput[]
    NOT?: AnggotaUKMScalarWhereInput | AnggotaUKMScalarWhereInput[]
    id?: StringFilter<"AnggotaUKM"> | string
    mahasiswaId?: StringFilter<"AnggotaUKM"> | string
    ukmId?: StringFilter<"AnggotaUKM"> | string
    approvedBy?: StringFilter<"AnggotaUKM"> | string
    tanggalGabung?: DateTimeFilter<"AnggotaUKM"> | Date | string
  }

  export type MahasiswaCreateWithoutKeanggotaanInput = {
    id?: string
    nim: string
    nama: string
    jurusan: string
    prodi: string
    registeredBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MahasiswaUncheckedCreateWithoutKeanggotaanInput = {
    id?: string
    nim: string
    nama: string
    jurusan: string
    prodi: string
    registeredBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MahasiswaCreateOrConnectWithoutKeanggotaanInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutKeanggotaanInput, MahasiswaUncheckedCreateWithoutKeanggotaanInput>
  }

  export type UkmCreateWithoutParaAnggotaInput = {
    id?: string
    kodeUkm: string
    namaUkm: string
    deskripsi?: string | null
    registeredBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UkmUncheckedCreateWithoutParaAnggotaInput = {
    id?: string
    kodeUkm: string
    namaUkm: string
    deskripsi?: string | null
    registeredBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UkmCreateOrConnectWithoutParaAnggotaInput = {
    where: UkmWhereUniqueInput
    create: XOR<UkmCreateWithoutParaAnggotaInput, UkmUncheckedCreateWithoutParaAnggotaInput>
  }

  export type MahasiswaUpsertWithoutKeanggotaanInput = {
    update: XOR<MahasiswaUpdateWithoutKeanggotaanInput, MahasiswaUncheckedUpdateWithoutKeanggotaanInput>
    create: XOR<MahasiswaCreateWithoutKeanggotaanInput, MahasiswaUncheckedCreateWithoutKeanggotaanInput>
    where?: MahasiswaWhereInput
  }

  export type MahasiswaUpdateToOneWithWhereWithoutKeanggotaanInput = {
    where?: MahasiswaWhereInput
    data: XOR<MahasiswaUpdateWithoutKeanggotaanInput, MahasiswaUncheckedUpdateWithoutKeanggotaanInput>
  }

  export type MahasiswaUpdateWithoutKeanggotaanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    prodi?: StringFieldUpdateOperationsInput | string
    registeredBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaUncheckedUpdateWithoutKeanggotaanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    prodi?: StringFieldUpdateOperationsInput | string
    registeredBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UkmUpsertWithoutParaAnggotaInput = {
    update: XOR<UkmUpdateWithoutParaAnggotaInput, UkmUncheckedUpdateWithoutParaAnggotaInput>
    create: XOR<UkmCreateWithoutParaAnggotaInput, UkmUncheckedCreateWithoutParaAnggotaInput>
    where?: UkmWhereInput
  }

  export type UkmUpdateToOneWithWhereWithoutParaAnggotaInput = {
    where?: UkmWhereInput
    data: XOR<UkmUpdateWithoutParaAnggotaInput, UkmUncheckedUpdateWithoutParaAnggotaInput>
  }

  export type UkmUpdateWithoutParaAnggotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeUkm?: StringFieldUpdateOperationsInput | string
    namaUkm?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    registeredBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UkmUncheckedUpdateWithoutParaAnggotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeUkm?: StringFieldUpdateOperationsInput | string
    namaUkm?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    registeredBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnggotaUKMCreateManyUkmInput = {
    id?: string
    mahasiswaId: string
    approvedBy: string
    tanggalGabung?: Date | string
  }

  export type AnggotaUKMUpdateWithoutUkmInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    tanggalGabung?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUpdateOneRequiredWithoutKeanggotaanNestedInput
  }

  export type AnggotaUKMUncheckedUpdateWithoutUkmInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    tanggalGabung?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnggotaUKMUncheckedUpdateManyWithoutUkmInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    tanggalGabung?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

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
 * Model operation_logs
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type operation_logs = $Result.DefaultSelection<Prisma.$operation_logsPayload>
/**
 * Model payment_orders
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type payment_orders = $Result.DefaultSelection<Prisma.$payment_ordersPayload>
/**
 * Model user_play_logs
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type user_play_logs = $Result.DefaultSelection<Prisma.$user_play_logsPayload>
/**
 * Model users
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model private_play_logs
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type private_play_logs = $Result.DefaultSelection<Prisma.$private_play_logsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Operation_logs
 * const operation_logs = await prisma.operation_logs.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Operation_logs
   * const operation_logs = await prisma.operation_logs.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.operation_logs`: Exposes CRUD operations for the **operation_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operation_logs
    * const operation_logs = await prisma.operation_logs.findMany()
    * ```
    */
  get operation_logs(): Prisma.operation_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment_orders`: Exposes CRUD operations for the **payment_orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payment_orders
    * const payment_orders = await prisma.payment_orders.findMany()
    * ```
    */
  get payment_orders(): Prisma.payment_ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_play_logs`: Exposes CRUD operations for the **user_play_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_play_logs
    * const user_play_logs = await prisma.user_play_logs.findMany()
    * ```
    */
  get user_play_logs(): Prisma.user_play_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.private_play_logs`: Exposes CRUD operations for the **private_play_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Private_play_logs
    * const private_play_logs = await prisma.private_play_logs.findMany()
    * ```
    */
  get private_play_logs(): Prisma.private_play_logsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    operation_logs: 'operation_logs',
    payment_orders: 'payment_orders',
    user_play_logs: 'user_play_logs',
    users: 'users',
    private_play_logs: 'private_play_logs'
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
      modelProps: "operation_logs" | "payment_orders" | "user_play_logs" | "users" | "private_play_logs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      operation_logs: {
        payload: Prisma.$operation_logsPayload<ExtArgs>
        fields: Prisma.operation_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.operation_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.operation_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logsPayload>
          }
          findFirst: {
            args: Prisma.operation_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.operation_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logsPayload>
          }
          findMany: {
            args: Prisma.operation_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logsPayload>[]
          }
          create: {
            args: Prisma.operation_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logsPayload>
          }
          createMany: {
            args: Prisma.operation_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.operation_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logsPayload>[]
          }
          delete: {
            args: Prisma.operation_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logsPayload>
          }
          update: {
            args: Prisma.operation_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logsPayload>
          }
          deleteMany: {
            args: Prisma.operation_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.operation_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.operation_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logsPayload>[]
          }
          upsert: {
            args: Prisma.operation_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operation_logsPayload>
          }
          aggregate: {
            args: Prisma.Operation_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperation_logs>
          }
          groupBy: {
            args: Prisma.operation_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Operation_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.operation_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Operation_logsCountAggregateOutputType> | number
          }
        }
      }
      payment_orders: {
        payload: Prisma.$payment_ordersPayload<ExtArgs>
        fields: Prisma.payment_ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.payment_ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.payment_ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_ordersPayload>
          }
          findFirst: {
            args: Prisma.payment_ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.payment_ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_ordersPayload>
          }
          findMany: {
            args: Prisma.payment_ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_ordersPayload>[]
          }
          create: {
            args: Prisma.payment_ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_ordersPayload>
          }
          createMany: {
            args: Prisma.payment_ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.payment_ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_ordersPayload>[]
          }
          delete: {
            args: Prisma.payment_ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_ordersPayload>
          }
          update: {
            args: Prisma.payment_ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_ordersPayload>
          }
          deleteMany: {
            args: Prisma.payment_ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.payment_ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.payment_ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_ordersPayload>[]
          }
          upsert: {
            args: Prisma.payment_ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_ordersPayload>
          }
          aggregate: {
            args: Prisma.Payment_ordersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment_orders>
          }
          groupBy: {
            args: Prisma.payment_ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Payment_ordersGroupByOutputType>[]
          }
          count: {
            args: Prisma.payment_ordersCountArgs<ExtArgs>
            result: $Utils.Optional<Payment_ordersCountAggregateOutputType> | number
          }
        }
      }
      user_play_logs: {
        payload: Prisma.$user_play_logsPayload<ExtArgs>
        fields: Prisma.user_play_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_play_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_play_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_play_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_play_logsPayload>
          }
          findFirst: {
            args: Prisma.user_play_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_play_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_play_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_play_logsPayload>
          }
          findMany: {
            args: Prisma.user_play_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_play_logsPayload>[]
          }
          create: {
            args: Prisma.user_play_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_play_logsPayload>
          }
          createMany: {
            args: Prisma.user_play_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_play_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_play_logsPayload>[]
          }
          delete: {
            args: Prisma.user_play_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_play_logsPayload>
          }
          update: {
            args: Prisma.user_play_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_play_logsPayload>
          }
          deleteMany: {
            args: Prisma.user_play_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_play_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_play_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_play_logsPayload>[]
          }
          upsert: {
            args: Prisma.user_play_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_play_logsPayload>
          }
          aggregate: {
            args: Prisma.User_play_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_play_logs>
          }
          groupBy: {
            args: Prisma.user_play_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_play_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_play_logsCountArgs<ExtArgs>
            result: $Utils.Optional<User_play_logsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      private_play_logs: {
        payload: Prisma.$private_play_logsPayload<ExtArgs>
        fields: Prisma.private_play_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.private_play_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_play_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.private_play_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_play_logsPayload>
          }
          findFirst: {
            args: Prisma.private_play_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_play_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.private_play_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_play_logsPayload>
          }
          findMany: {
            args: Prisma.private_play_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_play_logsPayload>[]
          }
          create: {
            args: Prisma.private_play_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_play_logsPayload>
          }
          createMany: {
            args: Prisma.private_play_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.private_play_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_play_logsPayload>[]
          }
          delete: {
            args: Prisma.private_play_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_play_logsPayload>
          }
          update: {
            args: Prisma.private_play_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_play_logsPayload>
          }
          deleteMany: {
            args: Prisma.private_play_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.private_play_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.private_play_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_play_logsPayload>[]
          }
          upsert: {
            args: Prisma.private_play_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$private_play_logsPayload>
          }
          aggregate: {
            args: Prisma.Private_play_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrivate_play_logs>
          }
          groupBy: {
            args: Prisma.private_play_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Private_play_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.private_play_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Private_play_logsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    operation_logs?: operation_logsOmit
    payment_orders?: payment_ordersOmit
    user_play_logs?: user_play_logsOmit
    users?: usersOmit
    private_play_logs?: private_play_logsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model operation_logs
   */

  export type AggregateOperation_logs = {
    _count: Operation_logsCountAggregateOutputType | null
    _min: Operation_logsMinAggregateOutputType | null
    _max: Operation_logsMaxAggregateOutputType | null
  }

  export type Operation_logsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    qq_number: string | null
    operation: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Operation_logsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    qq_number: string | null
    operation: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Operation_logsCountAggregateOutputType = {
    id: number
    user_id: number
    qq_number: number
    operation: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Operation_logsMinAggregateInputType = {
    id?: true
    user_id?: true
    qq_number?: true
    operation?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Operation_logsMaxAggregateInputType = {
    id?: true
    user_id?: true
    qq_number?: true
    operation?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Operation_logsCountAggregateInputType = {
    id?: true
    user_id?: true
    qq_number?: true
    operation?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Operation_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operation_logs to aggregate.
     */
    where?: operation_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operation_logs to fetch.
     */
    orderBy?: operation_logsOrderByWithRelationInput | operation_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: operation_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operation_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operation_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned operation_logs
    **/
    _count?: true | Operation_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Operation_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Operation_logsMaxAggregateInputType
  }

  export type GetOperation_logsAggregateType<T extends Operation_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateOperation_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperation_logs[P]>
      : GetScalarType<T[P], AggregateOperation_logs[P]>
  }




  export type operation_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operation_logsWhereInput
    orderBy?: operation_logsOrderByWithAggregationInput | operation_logsOrderByWithAggregationInput[]
    by: Operation_logsScalarFieldEnum[] | Operation_logsScalarFieldEnum
    having?: operation_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Operation_logsCountAggregateInputType | true
    _min?: Operation_logsMinAggregateInputType
    _max?: Operation_logsMaxAggregateInputType
  }

  export type Operation_logsGroupByOutputType = {
    id: string
    user_id: string
    qq_number: string
    operation: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: Operation_logsCountAggregateOutputType | null
    _min: Operation_logsMinAggregateOutputType | null
    _max: Operation_logsMaxAggregateOutputType | null
  }

  type GetOperation_logsGroupByPayload<T extends operation_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Operation_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Operation_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Operation_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Operation_logsGroupByOutputType[P]>
        }
      >
    >


  export type operation_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    qq_number?: boolean
    operation?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["operation_logs"]>

  export type operation_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    qq_number?: boolean
    operation?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["operation_logs"]>

  export type operation_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    qq_number?: boolean
    operation?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["operation_logs"]>

  export type operation_logsSelectScalar = {
    id?: boolean
    user_id?: boolean
    qq_number?: boolean
    operation?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type operation_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "qq_number" | "operation" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["operation_logs"]>

  export type $operation_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "operation_logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      qq_number: string
      operation: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["operation_logs"]>
    composites: {}
  }

  type operation_logsGetPayload<S extends boolean | null | undefined | operation_logsDefaultArgs> = $Result.GetResult<Prisma.$operation_logsPayload, S>

  type operation_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<operation_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Operation_logsCountAggregateInputType | true
    }

  export interface operation_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['operation_logs'], meta: { name: 'operation_logs' } }
    /**
     * Find zero or one Operation_logs that matches the filter.
     * @param {operation_logsFindUniqueArgs} args - Arguments to find a Operation_logs
     * @example
     * // Get one Operation_logs
     * const operation_logs = await prisma.operation_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends operation_logsFindUniqueArgs>(args: SelectSubset<T, operation_logsFindUniqueArgs<ExtArgs>>): Prisma__operation_logsClient<$Result.GetResult<Prisma.$operation_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operation_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {operation_logsFindUniqueOrThrowArgs} args - Arguments to find a Operation_logs
     * @example
     * // Get one Operation_logs
     * const operation_logs = await prisma.operation_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends operation_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, operation_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__operation_logsClient<$Result.GetResult<Prisma.$operation_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operation_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operation_logsFindFirstArgs} args - Arguments to find a Operation_logs
     * @example
     * // Get one Operation_logs
     * const operation_logs = await prisma.operation_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends operation_logsFindFirstArgs>(args?: SelectSubset<T, operation_logsFindFirstArgs<ExtArgs>>): Prisma__operation_logsClient<$Result.GetResult<Prisma.$operation_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operation_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operation_logsFindFirstOrThrowArgs} args - Arguments to find a Operation_logs
     * @example
     * // Get one Operation_logs
     * const operation_logs = await prisma.operation_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends operation_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, operation_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__operation_logsClient<$Result.GetResult<Prisma.$operation_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operation_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operation_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operation_logs
     * const operation_logs = await prisma.operation_logs.findMany()
     * 
     * // Get first 10 Operation_logs
     * const operation_logs = await prisma.operation_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operation_logsWithIdOnly = await prisma.operation_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends operation_logsFindManyArgs>(args?: SelectSubset<T, operation_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operation_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operation_logs.
     * @param {operation_logsCreateArgs} args - Arguments to create a Operation_logs.
     * @example
     * // Create one Operation_logs
     * const Operation_logs = await prisma.operation_logs.create({
     *   data: {
     *     // ... data to create a Operation_logs
     *   }
     * })
     * 
     */
    create<T extends operation_logsCreateArgs>(args: SelectSubset<T, operation_logsCreateArgs<ExtArgs>>): Prisma__operation_logsClient<$Result.GetResult<Prisma.$operation_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operation_logs.
     * @param {operation_logsCreateManyArgs} args - Arguments to create many Operation_logs.
     * @example
     * // Create many Operation_logs
     * const operation_logs = await prisma.operation_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends operation_logsCreateManyArgs>(args?: SelectSubset<T, operation_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operation_logs and returns the data saved in the database.
     * @param {operation_logsCreateManyAndReturnArgs} args - Arguments to create many Operation_logs.
     * @example
     * // Create many Operation_logs
     * const operation_logs = await prisma.operation_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operation_logs and only return the `id`
     * const operation_logsWithIdOnly = await prisma.operation_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends operation_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, operation_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operation_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Operation_logs.
     * @param {operation_logsDeleteArgs} args - Arguments to delete one Operation_logs.
     * @example
     * // Delete one Operation_logs
     * const Operation_logs = await prisma.operation_logs.delete({
     *   where: {
     *     // ... filter to delete one Operation_logs
     *   }
     * })
     * 
     */
    delete<T extends operation_logsDeleteArgs>(args: SelectSubset<T, operation_logsDeleteArgs<ExtArgs>>): Prisma__operation_logsClient<$Result.GetResult<Prisma.$operation_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operation_logs.
     * @param {operation_logsUpdateArgs} args - Arguments to update one Operation_logs.
     * @example
     * // Update one Operation_logs
     * const operation_logs = await prisma.operation_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends operation_logsUpdateArgs>(args: SelectSubset<T, operation_logsUpdateArgs<ExtArgs>>): Prisma__operation_logsClient<$Result.GetResult<Prisma.$operation_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operation_logs.
     * @param {operation_logsDeleteManyArgs} args - Arguments to filter Operation_logs to delete.
     * @example
     * // Delete a few Operation_logs
     * const { count } = await prisma.operation_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends operation_logsDeleteManyArgs>(args?: SelectSubset<T, operation_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operation_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operation_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operation_logs
     * const operation_logs = await prisma.operation_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends operation_logsUpdateManyArgs>(args: SelectSubset<T, operation_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operation_logs and returns the data updated in the database.
     * @param {operation_logsUpdateManyAndReturnArgs} args - Arguments to update many Operation_logs.
     * @example
     * // Update many Operation_logs
     * const operation_logs = await prisma.operation_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Operation_logs and only return the `id`
     * const operation_logsWithIdOnly = await prisma.operation_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends operation_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, operation_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operation_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Operation_logs.
     * @param {operation_logsUpsertArgs} args - Arguments to update or create a Operation_logs.
     * @example
     * // Update or create a Operation_logs
     * const operation_logs = await prisma.operation_logs.upsert({
     *   create: {
     *     // ... data to create a Operation_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operation_logs we want to update
     *   }
     * })
     */
    upsert<T extends operation_logsUpsertArgs>(args: SelectSubset<T, operation_logsUpsertArgs<ExtArgs>>): Prisma__operation_logsClient<$Result.GetResult<Prisma.$operation_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operation_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operation_logsCountArgs} args - Arguments to filter Operation_logs to count.
     * @example
     * // Count the number of Operation_logs
     * const count = await prisma.operation_logs.count({
     *   where: {
     *     // ... the filter for the Operation_logs we want to count
     *   }
     * })
    **/
    count<T extends operation_logsCountArgs>(
      args?: Subset<T, operation_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Operation_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operation_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operation_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Operation_logsAggregateArgs>(args: Subset<T, Operation_logsAggregateArgs>): Prisma.PrismaPromise<GetOperation_logsAggregateType<T>>

    /**
     * Group by Operation_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operation_logsGroupByArgs} args - Group by arguments.
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
      T extends operation_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: operation_logsGroupByArgs['orderBy'] }
        : { orderBy?: operation_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, operation_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperation_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the operation_logs model
   */
  readonly fields: operation_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for operation_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__operation_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the operation_logs model
   */
  interface operation_logsFieldRefs {
    readonly id: FieldRef<"operation_logs", 'String'>
    readonly user_id: FieldRef<"operation_logs", 'String'>
    readonly qq_number: FieldRef<"operation_logs", 'String'>
    readonly operation: FieldRef<"operation_logs", 'String'>
    readonly created_at: FieldRef<"operation_logs", 'DateTime'>
    readonly updated_at: FieldRef<"operation_logs", 'DateTime'>
    readonly deleted_at: FieldRef<"operation_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * operation_logs findUnique
   */
  export type operation_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_logs
     */
    select?: operation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_logs
     */
    omit?: operation_logsOmit<ExtArgs> | null
    /**
     * Filter, which operation_logs to fetch.
     */
    where: operation_logsWhereUniqueInput
  }

  /**
   * operation_logs findUniqueOrThrow
   */
  export type operation_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_logs
     */
    select?: operation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_logs
     */
    omit?: operation_logsOmit<ExtArgs> | null
    /**
     * Filter, which operation_logs to fetch.
     */
    where: operation_logsWhereUniqueInput
  }

  /**
   * operation_logs findFirst
   */
  export type operation_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_logs
     */
    select?: operation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_logs
     */
    omit?: operation_logsOmit<ExtArgs> | null
    /**
     * Filter, which operation_logs to fetch.
     */
    where?: operation_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operation_logs to fetch.
     */
    orderBy?: operation_logsOrderByWithRelationInput | operation_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operation_logs.
     */
    cursor?: operation_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operation_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operation_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operation_logs.
     */
    distinct?: Operation_logsScalarFieldEnum | Operation_logsScalarFieldEnum[]
  }

  /**
   * operation_logs findFirstOrThrow
   */
  export type operation_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_logs
     */
    select?: operation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_logs
     */
    omit?: operation_logsOmit<ExtArgs> | null
    /**
     * Filter, which operation_logs to fetch.
     */
    where?: operation_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operation_logs to fetch.
     */
    orderBy?: operation_logsOrderByWithRelationInput | operation_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operation_logs.
     */
    cursor?: operation_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operation_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operation_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operation_logs.
     */
    distinct?: Operation_logsScalarFieldEnum | Operation_logsScalarFieldEnum[]
  }

  /**
   * operation_logs findMany
   */
  export type operation_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_logs
     */
    select?: operation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_logs
     */
    omit?: operation_logsOmit<ExtArgs> | null
    /**
     * Filter, which operation_logs to fetch.
     */
    where?: operation_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operation_logs to fetch.
     */
    orderBy?: operation_logsOrderByWithRelationInput | operation_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing operation_logs.
     */
    cursor?: operation_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operation_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operation_logs.
     */
    skip?: number
    distinct?: Operation_logsScalarFieldEnum | Operation_logsScalarFieldEnum[]
  }

  /**
   * operation_logs create
   */
  export type operation_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_logs
     */
    select?: operation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_logs
     */
    omit?: operation_logsOmit<ExtArgs> | null
    /**
     * The data needed to create a operation_logs.
     */
    data: XOR<operation_logsCreateInput, operation_logsUncheckedCreateInput>
  }

  /**
   * operation_logs createMany
   */
  export type operation_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many operation_logs.
     */
    data: operation_logsCreateManyInput | operation_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * operation_logs createManyAndReturn
   */
  export type operation_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_logs
     */
    select?: operation_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the operation_logs
     */
    omit?: operation_logsOmit<ExtArgs> | null
    /**
     * The data used to create many operation_logs.
     */
    data: operation_logsCreateManyInput | operation_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * operation_logs update
   */
  export type operation_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_logs
     */
    select?: operation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_logs
     */
    omit?: operation_logsOmit<ExtArgs> | null
    /**
     * The data needed to update a operation_logs.
     */
    data: XOR<operation_logsUpdateInput, operation_logsUncheckedUpdateInput>
    /**
     * Choose, which operation_logs to update.
     */
    where: operation_logsWhereUniqueInput
  }

  /**
   * operation_logs updateMany
   */
  export type operation_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update operation_logs.
     */
    data: XOR<operation_logsUpdateManyMutationInput, operation_logsUncheckedUpdateManyInput>
    /**
     * Filter which operation_logs to update
     */
    where?: operation_logsWhereInput
    /**
     * Limit how many operation_logs to update.
     */
    limit?: number
  }

  /**
   * operation_logs updateManyAndReturn
   */
  export type operation_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_logs
     */
    select?: operation_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the operation_logs
     */
    omit?: operation_logsOmit<ExtArgs> | null
    /**
     * The data used to update operation_logs.
     */
    data: XOR<operation_logsUpdateManyMutationInput, operation_logsUncheckedUpdateManyInput>
    /**
     * Filter which operation_logs to update
     */
    where?: operation_logsWhereInput
    /**
     * Limit how many operation_logs to update.
     */
    limit?: number
  }

  /**
   * operation_logs upsert
   */
  export type operation_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_logs
     */
    select?: operation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_logs
     */
    omit?: operation_logsOmit<ExtArgs> | null
    /**
     * The filter to search for the operation_logs to update in case it exists.
     */
    where: operation_logsWhereUniqueInput
    /**
     * In case the operation_logs found by the `where` argument doesn't exist, create a new operation_logs with this data.
     */
    create: XOR<operation_logsCreateInput, operation_logsUncheckedCreateInput>
    /**
     * In case the operation_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<operation_logsUpdateInput, operation_logsUncheckedUpdateInput>
  }

  /**
   * operation_logs delete
   */
  export type operation_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_logs
     */
    select?: operation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_logs
     */
    omit?: operation_logsOmit<ExtArgs> | null
    /**
     * Filter which operation_logs to delete.
     */
    where: operation_logsWhereUniqueInput
  }

  /**
   * operation_logs deleteMany
   */
  export type operation_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operation_logs to delete
     */
    where?: operation_logsWhereInput
    /**
     * Limit how many operation_logs to delete.
     */
    limit?: number
  }

  /**
   * operation_logs without action
   */
  export type operation_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operation_logs
     */
    select?: operation_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operation_logs
     */
    omit?: operation_logsOmit<ExtArgs> | null
  }


  /**
   * Model payment_orders
   */

  export type AggregatePayment_orders = {
    _count: Payment_ordersCountAggregateOutputType | null
    _avg: Payment_ordersAvgAggregateOutputType | null
    _sum: Payment_ordersSumAggregateOutputType | null
    _min: Payment_ordersMinAggregateOutputType | null
    _max: Payment_ordersMaxAggregateOutputType | null
  }

  export type Payment_ordersAvgAggregateOutputType = {
    channel: number | null
    amount: Decimal | null
    status: number | null
  }

  export type Payment_ordersSumAggregateOutputType = {
    channel: number | null
    amount: Decimal | null
    status: number | null
  }

  export type Payment_ordersMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    qq_number: string | null
    out_trade_no: string | null
    channel: number | null
    amount: Decimal | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Payment_ordersMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    qq_number: string | null
    out_trade_no: string | null
    channel: number | null
    amount: Decimal | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Payment_ordersCountAggregateOutputType = {
    id: number
    user_id: number
    qq_number: number
    out_trade_no: number
    channel: number
    amount: number
    status: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Payment_ordersAvgAggregateInputType = {
    channel?: true
    amount?: true
    status?: true
  }

  export type Payment_ordersSumAggregateInputType = {
    channel?: true
    amount?: true
    status?: true
  }

  export type Payment_ordersMinAggregateInputType = {
    id?: true
    user_id?: true
    qq_number?: true
    out_trade_no?: true
    channel?: true
    amount?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Payment_ordersMaxAggregateInputType = {
    id?: true
    user_id?: true
    qq_number?: true
    out_trade_no?: true
    channel?: true
    amount?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Payment_ordersCountAggregateInputType = {
    id?: true
    user_id?: true
    qq_number?: true
    out_trade_no?: true
    channel?: true
    amount?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Payment_ordersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_orders to aggregate.
     */
    where?: payment_ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_orders to fetch.
     */
    orderBy?: payment_ordersOrderByWithRelationInput | payment_ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: payment_ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payment_orders
    **/
    _count?: true | Payment_ordersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Payment_ordersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Payment_ordersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Payment_ordersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Payment_ordersMaxAggregateInputType
  }

  export type GetPayment_ordersAggregateType<T extends Payment_ordersAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment_orders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment_orders[P]>
      : GetScalarType<T[P], AggregatePayment_orders[P]>
  }




  export type payment_ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_ordersWhereInput
    orderBy?: payment_ordersOrderByWithAggregationInput | payment_ordersOrderByWithAggregationInput[]
    by: Payment_ordersScalarFieldEnum[] | Payment_ordersScalarFieldEnum
    having?: payment_ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Payment_ordersCountAggregateInputType | true
    _avg?: Payment_ordersAvgAggregateInputType
    _sum?: Payment_ordersSumAggregateInputType
    _min?: Payment_ordersMinAggregateInputType
    _max?: Payment_ordersMaxAggregateInputType
  }

  export type Payment_ordersGroupByOutputType = {
    id: string
    user_id: string
    qq_number: string
    out_trade_no: string
    channel: number
    amount: Decimal
    status: number
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: Payment_ordersCountAggregateOutputType | null
    _avg: Payment_ordersAvgAggregateOutputType | null
    _sum: Payment_ordersSumAggregateOutputType | null
    _min: Payment_ordersMinAggregateOutputType | null
    _max: Payment_ordersMaxAggregateOutputType | null
  }

  type GetPayment_ordersGroupByPayload<T extends payment_ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Payment_ordersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Payment_ordersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Payment_ordersGroupByOutputType[P]>
            : GetScalarType<T[P], Payment_ordersGroupByOutputType[P]>
        }
      >
    >


  export type payment_ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    qq_number?: boolean
    out_trade_no?: boolean
    channel?: boolean
    amount?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["payment_orders"]>

  export type payment_ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    qq_number?: boolean
    out_trade_no?: boolean
    channel?: boolean
    amount?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["payment_orders"]>

  export type payment_ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    qq_number?: boolean
    out_trade_no?: boolean
    channel?: boolean
    amount?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["payment_orders"]>

  export type payment_ordersSelectScalar = {
    id?: boolean
    user_id?: boolean
    qq_number?: boolean
    out_trade_no?: boolean
    channel?: boolean
    amount?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type payment_ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "qq_number" | "out_trade_no" | "channel" | "amount" | "status" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["payment_orders"]>

  export type $payment_ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment_orders"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      qq_number: string
      out_trade_no: string
      channel: number
      amount: Prisma.Decimal
      status: number
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["payment_orders"]>
    composites: {}
  }

  type payment_ordersGetPayload<S extends boolean | null | undefined | payment_ordersDefaultArgs> = $Result.GetResult<Prisma.$payment_ordersPayload, S>

  type payment_ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<payment_ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Payment_ordersCountAggregateInputType | true
    }

  export interface payment_ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment_orders'], meta: { name: 'payment_orders' } }
    /**
     * Find zero or one Payment_orders that matches the filter.
     * @param {payment_ordersFindUniqueArgs} args - Arguments to find a Payment_orders
     * @example
     * // Get one Payment_orders
     * const payment_orders = await prisma.payment_orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends payment_ordersFindUniqueArgs>(args: SelectSubset<T, payment_ordersFindUniqueArgs<ExtArgs>>): Prisma__payment_ordersClient<$Result.GetResult<Prisma.$payment_ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment_orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {payment_ordersFindUniqueOrThrowArgs} args - Arguments to find a Payment_orders
     * @example
     * // Get one Payment_orders
     * const payment_orders = await prisma.payment_orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends payment_ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, payment_ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__payment_ordersClient<$Result.GetResult<Prisma.$payment_ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment_orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_ordersFindFirstArgs} args - Arguments to find a Payment_orders
     * @example
     * // Get one Payment_orders
     * const payment_orders = await prisma.payment_orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends payment_ordersFindFirstArgs>(args?: SelectSubset<T, payment_ordersFindFirstArgs<ExtArgs>>): Prisma__payment_ordersClient<$Result.GetResult<Prisma.$payment_ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment_orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_ordersFindFirstOrThrowArgs} args - Arguments to find a Payment_orders
     * @example
     * // Get one Payment_orders
     * const payment_orders = await prisma.payment_orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends payment_ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, payment_ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__payment_ordersClient<$Result.GetResult<Prisma.$payment_ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payment_orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payment_orders
     * const payment_orders = await prisma.payment_orders.findMany()
     * 
     * // Get first 10 Payment_orders
     * const payment_orders = await prisma.payment_orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payment_ordersWithIdOnly = await prisma.payment_orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends payment_ordersFindManyArgs>(args?: SelectSubset<T, payment_ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment_orders.
     * @param {payment_ordersCreateArgs} args - Arguments to create a Payment_orders.
     * @example
     * // Create one Payment_orders
     * const Payment_orders = await prisma.payment_orders.create({
     *   data: {
     *     // ... data to create a Payment_orders
     *   }
     * })
     * 
     */
    create<T extends payment_ordersCreateArgs>(args: SelectSubset<T, payment_ordersCreateArgs<ExtArgs>>): Prisma__payment_ordersClient<$Result.GetResult<Prisma.$payment_ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payment_orders.
     * @param {payment_ordersCreateManyArgs} args - Arguments to create many Payment_orders.
     * @example
     * // Create many Payment_orders
     * const payment_orders = await prisma.payment_orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends payment_ordersCreateManyArgs>(args?: SelectSubset<T, payment_ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payment_orders and returns the data saved in the database.
     * @param {payment_ordersCreateManyAndReturnArgs} args - Arguments to create many Payment_orders.
     * @example
     * // Create many Payment_orders
     * const payment_orders = await prisma.payment_orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payment_orders and only return the `id`
     * const payment_ordersWithIdOnly = await prisma.payment_orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends payment_ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, payment_ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment_orders.
     * @param {payment_ordersDeleteArgs} args - Arguments to delete one Payment_orders.
     * @example
     * // Delete one Payment_orders
     * const Payment_orders = await prisma.payment_orders.delete({
     *   where: {
     *     // ... filter to delete one Payment_orders
     *   }
     * })
     * 
     */
    delete<T extends payment_ordersDeleteArgs>(args: SelectSubset<T, payment_ordersDeleteArgs<ExtArgs>>): Prisma__payment_ordersClient<$Result.GetResult<Prisma.$payment_ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment_orders.
     * @param {payment_ordersUpdateArgs} args - Arguments to update one Payment_orders.
     * @example
     * // Update one Payment_orders
     * const payment_orders = await prisma.payment_orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends payment_ordersUpdateArgs>(args: SelectSubset<T, payment_ordersUpdateArgs<ExtArgs>>): Prisma__payment_ordersClient<$Result.GetResult<Prisma.$payment_ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payment_orders.
     * @param {payment_ordersDeleteManyArgs} args - Arguments to filter Payment_orders to delete.
     * @example
     * // Delete a few Payment_orders
     * const { count } = await prisma.payment_orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends payment_ordersDeleteManyArgs>(args?: SelectSubset<T, payment_ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payment_orders
     * const payment_orders = await prisma.payment_orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends payment_ordersUpdateManyArgs>(args: SelectSubset<T, payment_ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_orders and returns the data updated in the database.
     * @param {payment_ordersUpdateManyAndReturnArgs} args - Arguments to update many Payment_orders.
     * @example
     * // Update many Payment_orders
     * const payment_orders = await prisma.payment_orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payment_orders and only return the `id`
     * const payment_ordersWithIdOnly = await prisma.payment_orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends payment_ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, payment_ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment_orders.
     * @param {payment_ordersUpsertArgs} args - Arguments to update or create a Payment_orders.
     * @example
     * // Update or create a Payment_orders
     * const payment_orders = await prisma.payment_orders.upsert({
     *   create: {
     *     // ... data to create a Payment_orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment_orders we want to update
     *   }
     * })
     */
    upsert<T extends payment_ordersUpsertArgs>(args: SelectSubset<T, payment_ordersUpsertArgs<ExtArgs>>): Prisma__payment_ordersClient<$Result.GetResult<Prisma.$payment_ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payment_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_ordersCountArgs} args - Arguments to filter Payment_orders to count.
     * @example
     * // Count the number of Payment_orders
     * const count = await prisma.payment_orders.count({
     *   where: {
     *     // ... the filter for the Payment_orders we want to count
     *   }
     * })
    **/
    count<T extends payment_ordersCountArgs>(
      args?: Subset<T, payment_ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Payment_ordersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_ordersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Payment_ordersAggregateArgs>(args: Subset<T, Payment_ordersAggregateArgs>): Prisma.PrismaPromise<GetPayment_ordersAggregateType<T>>

    /**
     * Group by Payment_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_ordersGroupByArgs} args - Group by arguments.
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
      T extends payment_ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: payment_ordersGroupByArgs['orderBy'] }
        : { orderBy?: payment_ordersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, payment_ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayment_ordersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment_orders model
   */
  readonly fields: payment_ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment_orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__payment_ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the payment_orders model
   */
  interface payment_ordersFieldRefs {
    readonly id: FieldRef<"payment_orders", 'String'>
    readonly user_id: FieldRef<"payment_orders", 'String'>
    readonly qq_number: FieldRef<"payment_orders", 'String'>
    readonly out_trade_no: FieldRef<"payment_orders", 'String'>
    readonly channel: FieldRef<"payment_orders", 'Int'>
    readonly amount: FieldRef<"payment_orders", 'Decimal'>
    readonly status: FieldRef<"payment_orders", 'Int'>
    readonly created_at: FieldRef<"payment_orders", 'DateTime'>
    readonly updated_at: FieldRef<"payment_orders", 'DateTime'>
    readonly deleted_at: FieldRef<"payment_orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payment_orders findUnique
   */
  export type payment_ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_orders
     */
    select?: payment_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_orders
     */
    omit?: payment_ordersOmit<ExtArgs> | null
    /**
     * Filter, which payment_orders to fetch.
     */
    where: payment_ordersWhereUniqueInput
  }

  /**
   * payment_orders findUniqueOrThrow
   */
  export type payment_ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_orders
     */
    select?: payment_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_orders
     */
    omit?: payment_ordersOmit<ExtArgs> | null
    /**
     * Filter, which payment_orders to fetch.
     */
    where: payment_ordersWhereUniqueInput
  }

  /**
   * payment_orders findFirst
   */
  export type payment_ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_orders
     */
    select?: payment_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_orders
     */
    omit?: payment_ordersOmit<ExtArgs> | null
    /**
     * Filter, which payment_orders to fetch.
     */
    where?: payment_ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_orders to fetch.
     */
    orderBy?: payment_ordersOrderByWithRelationInput | payment_ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_orders.
     */
    cursor?: payment_ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_orders.
     */
    distinct?: Payment_ordersScalarFieldEnum | Payment_ordersScalarFieldEnum[]
  }

  /**
   * payment_orders findFirstOrThrow
   */
  export type payment_ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_orders
     */
    select?: payment_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_orders
     */
    omit?: payment_ordersOmit<ExtArgs> | null
    /**
     * Filter, which payment_orders to fetch.
     */
    where?: payment_ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_orders to fetch.
     */
    orderBy?: payment_ordersOrderByWithRelationInput | payment_ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_orders.
     */
    cursor?: payment_ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_orders.
     */
    distinct?: Payment_ordersScalarFieldEnum | Payment_ordersScalarFieldEnum[]
  }

  /**
   * payment_orders findMany
   */
  export type payment_ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_orders
     */
    select?: payment_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_orders
     */
    omit?: payment_ordersOmit<ExtArgs> | null
    /**
     * Filter, which payment_orders to fetch.
     */
    where?: payment_ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_orders to fetch.
     */
    orderBy?: payment_ordersOrderByWithRelationInput | payment_ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payment_orders.
     */
    cursor?: payment_ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_orders.
     */
    skip?: number
    distinct?: Payment_ordersScalarFieldEnum | Payment_ordersScalarFieldEnum[]
  }

  /**
   * payment_orders create
   */
  export type payment_ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_orders
     */
    select?: payment_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_orders
     */
    omit?: payment_ordersOmit<ExtArgs> | null
    /**
     * The data needed to create a payment_orders.
     */
    data: XOR<payment_ordersCreateInput, payment_ordersUncheckedCreateInput>
  }

  /**
   * payment_orders createMany
   */
  export type payment_ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payment_orders.
     */
    data: payment_ordersCreateManyInput | payment_ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment_orders createManyAndReturn
   */
  export type payment_ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_orders
     */
    select?: payment_ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment_orders
     */
    omit?: payment_ordersOmit<ExtArgs> | null
    /**
     * The data used to create many payment_orders.
     */
    data: payment_ordersCreateManyInput | payment_ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment_orders update
   */
  export type payment_ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_orders
     */
    select?: payment_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_orders
     */
    omit?: payment_ordersOmit<ExtArgs> | null
    /**
     * The data needed to update a payment_orders.
     */
    data: XOR<payment_ordersUpdateInput, payment_ordersUncheckedUpdateInput>
    /**
     * Choose, which payment_orders to update.
     */
    where: payment_ordersWhereUniqueInput
  }

  /**
   * payment_orders updateMany
   */
  export type payment_ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payment_orders.
     */
    data: XOR<payment_ordersUpdateManyMutationInput, payment_ordersUncheckedUpdateManyInput>
    /**
     * Filter which payment_orders to update
     */
    where?: payment_ordersWhereInput
    /**
     * Limit how many payment_orders to update.
     */
    limit?: number
  }

  /**
   * payment_orders updateManyAndReturn
   */
  export type payment_ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_orders
     */
    select?: payment_ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment_orders
     */
    omit?: payment_ordersOmit<ExtArgs> | null
    /**
     * The data used to update payment_orders.
     */
    data: XOR<payment_ordersUpdateManyMutationInput, payment_ordersUncheckedUpdateManyInput>
    /**
     * Filter which payment_orders to update
     */
    where?: payment_ordersWhereInput
    /**
     * Limit how many payment_orders to update.
     */
    limit?: number
  }

  /**
   * payment_orders upsert
   */
  export type payment_ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_orders
     */
    select?: payment_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_orders
     */
    omit?: payment_ordersOmit<ExtArgs> | null
    /**
     * The filter to search for the payment_orders to update in case it exists.
     */
    where: payment_ordersWhereUniqueInput
    /**
     * In case the payment_orders found by the `where` argument doesn't exist, create a new payment_orders with this data.
     */
    create: XOR<payment_ordersCreateInput, payment_ordersUncheckedCreateInput>
    /**
     * In case the payment_orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<payment_ordersUpdateInput, payment_ordersUncheckedUpdateInput>
  }

  /**
   * payment_orders delete
   */
  export type payment_ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_orders
     */
    select?: payment_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_orders
     */
    omit?: payment_ordersOmit<ExtArgs> | null
    /**
     * Filter which payment_orders to delete.
     */
    where: payment_ordersWhereUniqueInput
  }

  /**
   * payment_orders deleteMany
   */
  export type payment_ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_orders to delete
     */
    where?: payment_ordersWhereInput
    /**
     * Limit how many payment_orders to delete.
     */
    limit?: number
  }

  /**
   * payment_orders without action
   */
  export type payment_ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_orders
     */
    select?: payment_ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_orders
     */
    omit?: payment_ordersOmit<ExtArgs> | null
  }


  /**
   * Model user_play_logs
   */

  export type AggregateUser_play_logs = {
    _count: User_play_logsCountAggregateOutputType | null
    _avg: User_play_logsAvgAggregateOutputType | null
    _sum: User_play_logsSumAggregateOutputType | null
    _min: User_play_logsMinAggregateOutputType | null
    _max: User_play_logsMaxAggregateOutputType | null
  }

  export type User_play_logsAvgAggregateOutputType = {
    status: number | null
    break_duration: number | null
    uno_duration: number | null
  }

  export type User_play_logsSumAggregateOutputType = {
    status: number | null
    break_duration: number | null
    uno_duration: number | null
  }

  export type User_play_logsMinAggregateOutputType = {
    id: string | null
    qq_number: string | null
    status: number | null
    start_time: Date | null
    end_time: Date | null
    break_at: Date | null
    break_duration: number | null
    uno_at: Date | null
    uno_duration: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type User_play_logsMaxAggregateOutputType = {
    id: string | null
    qq_number: string | null
    status: number | null
    start_time: Date | null
    end_time: Date | null
    break_at: Date | null
    break_duration: number | null
    uno_at: Date | null
    uno_duration: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type User_play_logsCountAggregateOutputType = {
    id: number
    qq_number: number
    status: number
    start_time: number
    end_time: number
    break_at: number
    break_duration: number
    uno_at: number
    uno_duration: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type User_play_logsAvgAggregateInputType = {
    status?: true
    break_duration?: true
    uno_duration?: true
  }

  export type User_play_logsSumAggregateInputType = {
    status?: true
    break_duration?: true
    uno_duration?: true
  }

  export type User_play_logsMinAggregateInputType = {
    id?: true
    qq_number?: true
    status?: true
    start_time?: true
    end_time?: true
    break_at?: true
    break_duration?: true
    uno_at?: true
    uno_duration?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type User_play_logsMaxAggregateInputType = {
    id?: true
    qq_number?: true
    status?: true
    start_time?: true
    end_time?: true
    break_at?: true
    break_duration?: true
    uno_at?: true
    uno_duration?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type User_play_logsCountAggregateInputType = {
    id?: true
    qq_number?: true
    status?: true
    start_time?: true
    end_time?: true
    break_at?: true
    break_duration?: true
    uno_at?: true
    uno_duration?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type User_play_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_play_logs to aggregate.
     */
    where?: user_play_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_play_logs to fetch.
     */
    orderBy?: user_play_logsOrderByWithRelationInput | user_play_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_play_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_play_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_play_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_play_logs
    **/
    _count?: true | User_play_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_play_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_play_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_play_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_play_logsMaxAggregateInputType
  }

  export type GetUser_play_logsAggregateType<T extends User_play_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_play_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_play_logs[P]>
      : GetScalarType<T[P], AggregateUser_play_logs[P]>
  }




  export type user_play_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_play_logsWhereInput
    orderBy?: user_play_logsOrderByWithAggregationInput | user_play_logsOrderByWithAggregationInput[]
    by: User_play_logsScalarFieldEnum[] | User_play_logsScalarFieldEnum
    having?: user_play_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_play_logsCountAggregateInputType | true
    _avg?: User_play_logsAvgAggregateInputType
    _sum?: User_play_logsSumAggregateInputType
    _min?: User_play_logsMinAggregateInputType
    _max?: User_play_logsMaxAggregateInputType
  }

  export type User_play_logsGroupByOutputType = {
    id: string
    qq_number: string
    status: number
    start_time: Date
    end_time: Date | null
    break_at: Date | null
    break_duration: number
    uno_at: Date | null
    uno_duration: number
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: User_play_logsCountAggregateOutputType | null
    _avg: User_play_logsAvgAggregateOutputType | null
    _sum: User_play_logsSumAggregateOutputType | null
    _min: User_play_logsMinAggregateOutputType | null
    _max: User_play_logsMaxAggregateOutputType | null
  }

  type GetUser_play_logsGroupByPayload<T extends user_play_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_play_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_play_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_play_logsGroupByOutputType[P]>
            : GetScalarType<T[P], User_play_logsGroupByOutputType[P]>
        }
      >
    >


  export type user_play_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qq_number?: boolean
    status?: boolean
    start_time?: boolean
    end_time?: boolean
    break_at?: boolean
    break_duration?: boolean
    uno_at?: boolean
    uno_duration?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["user_play_logs"]>

  export type user_play_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qq_number?: boolean
    status?: boolean
    start_time?: boolean
    end_time?: boolean
    break_at?: boolean
    break_duration?: boolean
    uno_at?: boolean
    uno_duration?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["user_play_logs"]>

  export type user_play_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qq_number?: boolean
    status?: boolean
    start_time?: boolean
    end_time?: boolean
    break_at?: boolean
    break_duration?: boolean
    uno_at?: boolean
    uno_duration?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["user_play_logs"]>

  export type user_play_logsSelectScalar = {
    id?: boolean
    qq_number?: boolean
    status?: boolean
    start_time?: boolean
    end_time?: boolean
    break_at?: boolean
    break_duration?: boolean
    uno_at?: boolean
    uno_duration?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type user_play_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "qq_number" | "status" | "start_time" | "end_time" | "break_at" | "break_duration" | "uno_at" | "uno_duration" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["user_play_logs"]>

  export type $user_play_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_play_logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      qq_number: string
      status: number
      start_time: Date
      end_time: Date | null
      break_at: Date | null
      break_duration: number
      uno_at: Date | null
      uno_duration: number
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["user_play_logs"]>
    composites: {}
  }

  type user_play_logsGetPayload<S extends boolean | null | undefined | user_play_logsDefaultArgs> = $Result.GetResult<Prisma.$user_play_logsPayload, S>

  type user_play_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_play_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_play_logsCountAggregateInputType | true
    }

  export interface user_play_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_play_logs'], meta: { name: 'user_play_logs' } }
    /**
     * Find zero or one User_play_logs that matches the filter.
     * @param {user_play_logsFindUniqueArgs} args - Arguments to find a User_play_logs
     * @example
     * // Get one User_play_logs
     * const user_play_logs = await prisma.user_play_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_play_logsFindUniqueArgs>(args: SelectSubset<T, user_play_logsFindUniqueArgs<ExtArgs>>): Prisma__user_play_logsClient<$Result.GetResult<Prisma.$user_play_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_play_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_play_logsFindUniqueOrThrowArgs} args - Arguments to find a User_play_logs
     * @example
     * // Get one User_play_logs
     * const user_play_logs = await prisma.user_play_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_play_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_play_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_play_logsClient<$Result.GetResult<Prisma.$user_play_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_play_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_play_logsFindFirstArgs} args - Arguments to find a User_play_logs
     * @example
     * // Get one User_play_logs
     * const user_play_logs = await prisma.user_play_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_play_logsFindFirstArgs>(args?: SelectSubset<T, user_play_logsFindFirstArgs<ExtArgs>>): Prisma__user_play_logsClient<$Result.GetResult<Prisma.$user_play_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_play_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_play_logsFindFirstOrThrowArgs} args - Arguments to find a User_play_logs
     * @example
     * // Get one User_play_logs
     * const user_play_logs = await prisma.user_play_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_play_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_play_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_play_logsClient<$Result.GetResult<Prisma.$user_play_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_play_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_play_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_play_logs
     * const user_play_logs = await prisma.user_play_logs.findMany()
     * 
     * // Get first 10 User_play_logs
     * const user_play_logs = await prisma.user_play_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_play_logsWithIdOnly = await prisma.user_play_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_play_logsFindManyArgs>(args?: SelectSubset<T, user_play_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_play_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_play_logs.
     * @param {user_play_logsCreateArgs} args - Arguments to create a User_play_logs.
     * @example
     * // Create one User_play_logs
     * const User_play_logs = await prisma.user_play_logs.create({
     *   data: {
     *     // ... data to create a User_play_logs
     *   }
     * })
     * 
     */
    create<T extends user_play_logsCreateArgs>(args: SelectSubset<T, user_play_logsCreateArgs<ExtArgs>>): Prisma__user_play_logsClient<$Result.GetResult<Prisma.$user_play_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_play_logs.
     * @param {user_play_logsCreateManyArgs} args - Arguments to create many User_play_logs.
     * @example
     * // Create many User_play_logs
     * const user_play_logs = await prisma.user_play_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_play_logsCreateManyArgs>(args?: SelectSubset<T, user_play_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_play_logs and returns the data saved in the database.
     * @param {user_play_logsCreateManyAndReturnArgs} args - Arguments to create many User_play_logs.
     * @example
     * // Create many User_play_logs
     * const user_play_logs = await prisma.user_play_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_play_logs and only return the `id`
     * const user_play_logsWithIdOnly = await prisma.user_play_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_play_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, user_play_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_play_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_play_logs.
     * @param {user_play_logsDeleteArgs} args - Arguments to delete one User_play_logs.
     * @example
     * // Delete one User_play_logs
     * const User_play_logs = await prisma.user_play_logs.delete({
     *   where: {
     *     // ... filter to delete one User_play_logs
     *   }
     * })
     * 
     */
    delete<T extends user_play_logsDeleteArgs>(args: SelectSubset<T, user_play_logsDeleteArgs<ExtArgs>>): Prisma__user_play_logsClient<$Result.GetResult<Prisma.$user_play_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_play_logs.
     * @param {user_play_logsUpdateArgs} args - Arguments to update one User_play_logs.
     * @example
     * // Update one User_play_logs
     * const user_play_logs = await prisma.user_play_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_play_logsUpdateArgs>(args: SelectSubset<T, user_play_logsUpdateArgs<ExtArgs>>): Prisma__user_play_logsClient<$Result.GetResult<Prisma.$user_play_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_play_logs.
     * @param {user_play_logsDeleteManyArgs} args - Arguments to filter User_play_logs to delete.
     * @example
     * // Delete a few User_play_logs
     * const { count } = await prisma.user_play_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_play_logsDeleteManyArgs>(args?: SelectSubset<T, user_play_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_play_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_play_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_play_logs
     * const user_play_logs = await prisma.user_play_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_play_logsUpdateManyArgs>(args: SelectSubset<T, user_play_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_play_logs and returns the data updated in the database.
     * @param {user_play_logsUpdateManyAndReturnArgs} args - Arguments to update many User_play_logs.
     * @example
     * // Update many User_play_logs
     * const user_play_logs = await prisma.user_play_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_play_logs and only return the `id`
     * const user_play_logsWithIdOnly = await prisma.user_play_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_play_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, user_play_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_play_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_play_logs.
     * @param {user_play_logsUpsertArgs} args - Arguments to update or create a User_play_logs.
     * @example
     * // Update or create a User_play_logs
     * const user_play_logs = await prisma.user_play_logs.upsert({
     *   create: {
     *     // ... data to create a User_play_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_play_logs we want to update
     *   }
     * })
     */
    upsert<T extends user_play_logsUpsertArgs>(args: SelectSubset<T, user_play_logsUpsertArgs<ExtArgs>>): Prisma__user_play_logsClient<$Result.GetResult<Prisma.$user_play_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_play_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_play_logsCountArgs} args - Arguments to filter User_play_logs to count.
     * @example
     * // Count the number of User_play_logs
     * const count = await prisma.user_play_logs.count({
     *   where: {
     *     // ... the filter for the User_play_logs we want to count
     *   }
     * })
    **/
    count<T extends user_play_logsCountArgs>(
      args?: Subset<T, user_play_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_play_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_play_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_play_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_play_logsAggregateArgs>(args: Subset<T, User_play_logsAggregateArgs>): Prisma.PrismaPromise<GetUser_play_logsAggregateType<T>>

    /**
     * Group by User_play_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_play_logsGroupByArgs} args - Group by arguments.
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
      T extends user_play_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_play_logsGroupByArgs['orderBy'] }
        : { orderBy?: user_play_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_play_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_play_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_play_logs model
   */
  readonly fields: user_play_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_play_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_play_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the user_play_logs model
   */
  interface user_play_logsFieldRefs {
    readonly id: FieldRef<"user_play_logs", 'String'>
    readonly qq_number: FieldRef<"user_play_logs", 'String'>
    readonly status: FieldRef<"user_play_logs", 'Int'>
    readonly start_time: FieldRef<"user_play_logs", 'DateTime'>
    readonly end_time: FieldRef<"user_play_logs", 'DateTime'>
    readonly break_at: FieldRef<"user_play_logs", 'DateTime'>
    readonly break_duration: FieldRef<"user_play_logs", 'Int'>
    readonly uno_at: FieldRef<"user_play_logs", 'DateTime'>
    readonly uno_duration: FieldRef<"user_play_logs", 'Int'>
    readonly created_at: FieldRef<"user_play_logs", 'DateTime'>
    readonly updated_at: FieldRef<"user_play_logs", 'DateTime'>
    readonly deleted_at: FieldRef<"user_play_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_play_logs findUnique
   */
  export type user_play_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_play_logs
     */
    select?: user_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_play_logs
     */
    omit?: user_play_logsOmit<ExtArgs> | null
    /**
     * Filter, which user_play_logs to fetch.
     */
    where: user_play_logsWhereUniqueInput
  }

  /**
   * user_play_logs findUniqueOrThrow
   */
  export type user_play_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_play_logs
     */
    select?: user_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_play_logs
     */
    omit?: user_play_logsOmit<ExtArgs> | null
    /**
     * Filter, which user_play_logs to fetch.
     */
    where: user_play_logsWhereUniqueInput
  }

  /**
   * user_play_logs findFirst
   */
  export type user_play_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_play_logs
     */
    select?: user_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_play_logs
     */
    omit?: user_play_logsOmit<ExtArgs> | null
    /**
     * Filter, which user_play_logs to fetch.
     */
    where?: user_play_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_play_logs to fetch.
     */
    orderBy?: user_play_logsOrderByWithRelationInput | user_play_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_play_logs.
     */
    cursor?: user_play_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_play_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_play_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_play_logs.
     */
    distinct?: User_play_logsScalarFieldEnum | User_play_logsScalarFieldEnum[]
  }

  /**
   * user_play_logs findFirstOrThrow
   */
  export type user_play_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_play_logs
     */
    select?: user_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_play_logs
     */
    omit?: user_play_logsOmit<ExtArgs> | null
    /**
     * Filter, which user_play_logs to fetch.
     */
    where?: user_play_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_play_logs to fetch.
     */
    orderBy?: user_play_logsOrderByWithRelationInput | user_play_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_play_logs.
     */
    cursor?: user_play_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_play_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_play_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_play_logs.
     */
    distinct?: User_play_logsScalarFieldEnum | User_play_logsScalarFieldEnum[]
  }

  /**
   * user_play_logs findMany
   */
  export type user_play_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_play_logs
     */
    select?: user_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_play_logs
     */
    omit?: user_play_logsOmit<ExtArgs> | null
    /**
     * Filter, which user_play_logs to fetch.
     */
    where?: user_play_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_play_logs to fetch.
     */
    orderBy?: user_play_logsOrderByWithRelationInput | user_play_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_play_logs.
     */
    cursor?: user_play_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_play_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_play_logs.
     */
    skip?: number
    distinct?: User_play_logsScalarFieldEnum | User_play_logsScalarFieldEnum[]
  }

  /**
   * user_play_logs create
   */
  export type user_play_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_play_logs
     */
    select?: user_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_play_logs
     */
    omit?: user_play_logsOmit<ExtArgs> | null
    /**
     * The data needed to create a user_play_logs.
     */
    data: XOR<user_play_logsCreateInput, user_play_logsUncheckedCreateInput>
  }

  /**
   * user_play_logs createMany
   */
  export type user_play_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_play_logs.
     */
    data: user_play_logsCreateManyInput | user_play_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_play_logs createManyAndReturn
   */
  export type user_play_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_play_logs
     */
    select?: user_play_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_play_logs
     */
    omit?: user_play_logsOmit<ExtArgs> | null
    /**
     * The data used to create many user_play_logs.
     */
    data: user_play_logsCreateManyInput | user_play_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_play_logs update
   */
  export type user_play_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_play_logs
     */
    select?: user_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_play_logs
     */
    omit?: user_play_logsOmit<ExtArgs> | null
    /**
     * The data needed to update a user_play_logs.
     */
    data: XOR<user_play_logsUpdateInput, user_play_logsUncheckedUpdateInput>
    /**
     * Choose, which user_play_logs to update.
     */
    where: user_play_logsWhereUniqueInput
  }

  /**
   * user_play_logs updateMany
   */
  export type user_play_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_play_logs.
     */
    data: XOR<user_play_logsUpdateManyMutationInput, user_play_logsUncheckedUpdateManyInput>
    /**
     * Filter which user_play_logs to update
     */
    where?: user_play_logsWhereInput
    /**
     * Limit how many user_play_logs to update.
     */
    limit?: number
  }

  /**
   * user_play_logs updateManyAndReturn
   */
  export type user_play_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_play_logs
     */
    select?: user_play_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_play_logs
     */
    omit?: user_play_logsOmit<ExtArgs> | null
    /**
     * The data used to update user_play_logs.
     */
    data: XOR<user_play_logsUpdateManyMutationInput, user_play_logsUncheckedUpdateManyInput>
    /**
     * Filter which user_play_logs to update
     */
    where?: user_play_logsWhereInput
    /**
     * Limit how many user_play_logs to update.
     */
    limit?: number
  }

  /**
   * user_play_logs upsert
   */
  export type user_play_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_play_logs
     */
    select?: user_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_play_logs
     */
    omit?: user_play_logsOmit<ExtArgs> | null
    /**
     * The filter to search for the user_play_logs to update in case it exists.
     */
    where: user_play_logsWhereUniqueInput
    /**
     * In case the user_play_logs found by the `where` argument doesn't exist, create a new user_play_logs with this data.
     */
    create: XOR<user_play_logsCreateInput, user_play_logsUncheckedCreateInput>
    /**
     * In case the user_play_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_play_logsUpdateInput, user_play_logsUncheckedUpdateInput>
  }

  /**
   * user_play_logs delete
   */
  export type user_play_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_play_logs
     */
    select?: user_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_play_logs
     */
    omit?: user_play_logsOmit<ExtArgs> | null
    /**
     * Filter which user_play_logs to delete.
     */
    where: user_play_logsWhereUniqueInput
  }

  /**
   * user_play_logs deleteMany
   */
  export type user_play_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_play_logs to delete
     */
    where?: user_play_logsWhereInput
    /**
     * Limit how many user_play_logs to delete.
     */
    limit?: number
  }

  /**
   * user_play_logs without action
   */
  export type user_play_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_play_logs
     */
    select?: user_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_play_logs
     */
    omit?: user_play_logsOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    status: number | null
    discount: Decimal | null
    total_time: number | null
    total_amount: Decimal | null
    play_count: number | null
  }

  export type UsersSumAggregateOutputType = {
    status: number | null
    discount: Decimal | null
    total_time: bigint | null
    total_amount: Decimal | null
    play_count: bigint | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    qq_number: string | null
    nick_name: string | null
    role: string | null
    status_expire_time: Date | null
    status: number | null
    source: string | null
    invited_by: string | null
    discount: Decimal | null
    total_time: bigint | null
    total_amount: Decimal | null
    play_count: bigint | null
    last_come_time: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    qq_number: string | null
    nick_name: string | null
    role: string | null
    status_expire_time: Date | null
    status: number | null
    source: string | null
    invited_by: string | null
    discount: Decimal | null
    total_time: bigint | null
    total_amount: Decimal | null
    play_count: bigint | null
    last_come_time: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    qq_number: number
    nick_name: number
    role: number
    status_expire_time: number
    status: number
    source: number
    invited_by: number
    discount: number
    total_time: number
    total_amount: number
    play_count: number
    last_come_time: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    status?: true
    discount?: true
    total_time?: true
    total_amount?: true
    play_count?: true
  }

  export type UsersSumAggregateInputType = {
    status?: true
    discount?: true
    total_time?: true
    total_amount?: true
    play_count?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    qq_number?: true
    nick_name?: true
    role?: true
    status_expire_time?: true
    status?: true
    source?: true
    invited_by?: true
    discount?: true
    total_time?: true
    total_amount?: true
    play_count?: true
    last_come_time?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    qq_number?: true
    nick_name?: true
    role?: true
    status_expire_time?: true
    status?: true
    source?: true
    invited_by?: true
    discount?: true
    total_time?: true
    total_amount?: true
    play_count?: true
    last_come_time?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    qq_number?: true
    nick_name?: true
    role?: true
    status_expire_time?: true
    status?: true
    source?: true
    invited_by?: true
    discount?: true
    total_time?: true
    total_amount?: true
    play_count?: true
    last_come_time?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    qq_number: string
    nick_name: string
    role: string
    status_expire_time: Date
    status: number
    source: string
    invited_by: string
    discount: Decimal
    total_time: bigint
    total_amount: Decimal
    play_count: bigint
    last_come_time: Date | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qq_number?: boolean
    nick_name?: boolean
    role?: boolean
    status_expire_time?: boolean
    status?: boolean
    source?: boolean
    invited_by?: boolean
    discount?: boolean
    total_time?: boolean
    total_amount?: boolean
    play_count?: boolean
    last_come_time?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qq_number?: boolean
    nick_name?: boolean
    role?: boolean
    status_expire_time?: boolean
    status?: boolean
    source?: boolean
    invited_by?: boolean
    discount?: boolean
    total_time?: boolean
    total_amount?: boolean
    play_count?: boolean
    last_come_time?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qq_number?: boolean
    nick_name?: boolean
    role?: boolean
    status_expire_time?: boolean
    status?: boolean
    source?: boolean
    invited_by?: boolean
    discount?: boolean
    total_time?: boolean
    total_amount?: boolean
    play_count?: boolean
    last_come_time?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    qq_number?: boolean
    nick_name?: boolean
    role?: boolean
    status_expire_time?: boolean
    status?: boolean
    source?: boolean
    invited_by?: boolean
    discount?: boolean
    total_time?: boolean
    total_amount?: boolean
    play_count?: boolean
    last_come_time?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "qq_number" | "nick_name" | "role" | "status_expire_time" | "status" | "source" | "invited_by" | "discount" | "total_time" | "total_amount" | "play_count" | "last_come_time" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      qq_number: string
      nick_name: string
      role: string
      status_expire_time: Date
      status: number
      source: string
      invited_by: string
      discount: Prisma.Decimal
      total_time: bigint
      total_amount: Prisma.Decimal
      play_count: bigint
      last_come_time: Date | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly qq_number: FieldRef<"users", 'String'>
    readonly nick_name: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly status_expire_time: FieldRef<"users", 'DateTime'>
    readonly status: FieldRef<"users", 'Int'>
    readonly source: FieldRef<"users", 'String'>
    readonly invited_by: FieldRef<"users", 'String'>
    readonly discount: FieldRef<"users", 'Decimal'>
    readonly total_time: FieldRef<"users", 'BigInt'>
    readonly total_amount: FieldRef<"users", 'Decimal'>
    readonly play_count: FieldRef<"users", 'BigInt'>
    readonly last_come_time: FieldRef<"users", 'DateTime'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly deleted_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Model private_play_logs
   */

  export type AggregatePrivate_play_logs = {
    _count: Private_play_logsCountAggregateOutputType | null
    _avg: Private_play_logsAvgAggregateOutputType | null
    _sum: Private_play_logsSumAggregateOutputType | null
    _min: Private_play_logsMinAggregateOutputType | null
    _max: Private_play_logsMaxAggregateOutputType | null
  }

  export type Private_play_logsAvgAggregateOutputType = {
    unique_id: number | null
    price: Decimal | null
  }

  export type Private_play_logsSumAggregateOutputType = {
    unique_id: number | null
    price: Decimal | null
  }

  export type Private_play_logsMinAggregateOutputType = {
    id: string | null
    unique_id: number | null
    qq_number: string | null
    start_time: Date | null
    end_time: Date | null
    price: Decimal | null
    remark: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Private_play_logsMaxAggregateOutputType = {
    id: string | null
    unique_id: number | null
    qq_number: string | null
    start_time: Date | null
    end_time: Date | null
    price: Decimal | null
    remark: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Private_play_logsCountAggregateOutputType = {
    id: number
    unique_id: number
    qq_number: number
    start_time: number
    end_time: number
    price: number
    remark: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Private_play_logsAvgAggregateInputType = {
    unique_id?: true
    price?: true
  }

  export type Private_play_logsSumAggregateInputType = {
    unique_id?: true
    price?: true
  }

  export type Private_play_logsMinAggregateInputType = {
    id?: true
    unique_id?: true
    qq_number?: true
    start_time?: true
    end_time?: true
    price?: true
    remark?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Private_play_logsMaxAggregateInputType = {
    id?: true
    unique_id?: true
    qq_number?: true
    start_time?: true
    end_time?: true
    price?: true
    remark?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Private_play_logsCountAggregateInputType = {
    id?: true
    unique_id?: true
    qq_number?: true
    start_time?: true
    end_time?: true
    price?: true
    remark?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Private_play_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which private_play_logs to aggregate.
     */
    where?: private_play_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of private_play_logs to fetch.
     */
    orderBy?: private_play_logsOrderByWithRelationInput | private_play_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: private_play_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` private_play_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` private_play_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned private_play_logs
    **/
    _count?: true | Private_play_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Private_play_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Private_play_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Private_play_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Private_play_logsMaxAggregateInputType
  }

  export type GetPrivate_play_logsAggregateType<T extends Private_play_logsAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivate_play_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivate_play_logs[P]>
      : GetScalarType<T[P], AggregatePrivate_play_logs[P]>
  }




  export type private_play_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: private_play_logsWhereInput
    orderBy?: private_play_logsOrderByWithAggregationInput | private_play_logsOrderByWithAggregationInput[]
    by: Private_play_logsScalarFieldEnum[] | Private_play_logsScalarFieldEnum
    having?: private_play_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Private_play_logsCountAggregateInputType | true
    _avg?: Private_play_logsAvgAggregateInputType
    _sum?: Private_play_logsSumAggregateInputType
    _min?: Private_play_logsMinAggregateInputType
    _max?: Private_play_logsMaxAggregateInputType
  }

  export type Private_play_logsGroupByOutputType = {
    id: string
    unique_id: number
    qq_number: string
    start_time: Date
    end_time: Date
    price: Decimal
    remark: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: Private_play_logsCountAggregateOutputType | null
    _avg: Private_play_logsAvgAggregateOutputType | null
    _sum: Private_play_logsSumAggregateOutputType | null
    _min: Private_play_logsMinAggregateOutputType | null
    _max: Private_play_logsMaxAggregateOutputType | null
  }

  type GetPrivate_play_logsGroupByPayload<T extends private_play_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Private_play_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Private_play_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Private_play_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Private_play_logsGroupByOutputType[P]>
        }
      >
    >


  export type private_play_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unique_id?: boolean
    qq_number?: boolean
    start_time?: boolean
    end_time?: boolean
    price?: boolean
    remark?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["private_play_logs"]>

  export type private_play_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unique_id?: boolean
    qq_number?: boolean
    start_time?: boolean
    end_time?: boolean
    price?: boolean
    remark?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["private_play_logs"]>

  export type private_play_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unique_id?: boolean
    qq_number?: boolean
    start_time?: boolean
    end_time?: boolean
    price?: boolean
    remark?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["private_play_logs"]>

  export type private_play_logsSelectScalar = {
    id?: boolean
    unique_id?: boolean
    qq_number?: boolean
    start_time?: boolean
    end_time?: boolean
    price?: boolean
    remark?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type private_play_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "unique_id" | "qq_number" | "start_time" | "end_time" | "price" | "remark" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["private_play_logs"]>

  export type $private_play_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "private_play_logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      unique_id: number
      qq_number: string
      start_time: Date
      end_time: Date
      price: Prisma.Decimal
      remark: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["private_play_logs"]>
    composites: {}
  }

  type private_play_logsGetPayload<S extends boolean | null | undefined | private_play_logsDefaultArgs> = $Result.GetResult<Prisma.$private_play_logsPayload, S>

  type private_play_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<private_play_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Private_play_logsCountAggregateInputType | true
    }

  export interface private_play_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['private_play_logs'], meta: { name: 'private_play_logs' } }
    /**
     * Find zero or one Private_play_logs that matches the filter.
     * @param {private_play_logsFindUniqueArgs} args - Arguments to find a Private_play_logs
     * @example
     * // Get one Private_play_logs
     * const private_play_logs = await prisma.private_play_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends private_play_logsFindUniqueArgs>(args: SelectSubset<T, private_play_logsFindUniqueArgs<ExtArgs>>): Prisma__private_play_logsClient<$Result.GetResult<Prisma.$private_play_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Private_play_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {private_play_logsFindUniqueOrThrowArgs} args - Arguments to find a Private_play_logs
     * @example
     * // Get one Private_play_logs
     * const private_play_logs = await prisma.private_play_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends private_play_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, private_play_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__private_play_logsClient<$Result.GetResult<Prisma.$private_play_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Private_play_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {private_play_logsFindFirstArgs} args - Arguments to find a Private_play_logs
     * @example
     * // Get one Private_play_logs
     * const private_play_logs = await prisma.private_play_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends private_play_logsFindFirstArgs>(args?: SelectSubset<T, private_play_logsFindFirstArgs<ExtArgs>>): Prisma__private_play_logsClient<$Result.GetResult<Prisma.$private_play_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Private_play_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {private_play_logsFindFirstOrThrowArgs} args - Arguments to find a Private_play_logs
     * @example
     * // Get one Private_play_logs
     * const private_play_logs = await prisma.private_play_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends private_play_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, private_play_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__private_play_logsClient<$Result.GetResult<Prisma.$private_play_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Private_play_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {private_play_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Private_play_logs
     * const private_play_logs = await prisma.private_play_logs.findMany()
     * 
     * // Get first 10 Private_play_logs
     * const private_play_logs = await prisma.private_play_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const private_play_logsWithIdOnly = await prisma.private_play_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends private_play_logsFindManyArgs>(args?: SelectSubset<T, private_play_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$private_play_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Private_play_logs.
     * @param {private_play_logsCreateArgs} args - Arguments to create a Private_play_logs.
     * @example
     * // Create one Private_play_logs
     * const Private_play_logs = await prisma.private_play_logs.create({
     *   data: {
     *     // ... data to create a Private_play_logs
     *   }
     * })
     * 
     */
    create<T extends private_play_logsCreateArgs>(args: SelectSubset<T, private_play_logsCreateArgs<ExtArgs>>): Prisma__private_play_logsClient<$Result.GetResult<Prisma.$private_play_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Private_play_logs.
     * @param {private_play_logsCreateManyArgs} args - Arguments to create many Private_play_logs.
     * @example
     * // Create many Private_play_logs
     * const private_play_logs = await prisma.private_play_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends private_play_logsCreateManyArgs>(args?: SelectSubset<T, private_play_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Private_play_logs and returns the data saved in the database.
     * @param {private_play_logsCreateManyAndReturnArgs} args - Arguments to create many Private_play_logs.
     * @example
     * // Create many Private_play_logs
     * const private_play_logs = await prisma.private_play_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Private_play_logs and only return the `id`
     * const private_play_logsWithIdOnly = await prisma.private_play_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends private_play_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, private_play_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$private_play_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Private_play_logs.
     * @param {private_play_logsDeleteArgs} args - Arguments to delete one Private_play_logs.
     * @example
     * // Delete one Private_play_logs
     * const Private_play_logs = await prisma.private_play_logs.delete({
     *   where: {
     *     // ... filter to delete one Private_play_logs
     *   }
     * })
     * 
     */
    delete<T extends private_play_logsDeleteArgs>(args: SelectSubset<T, private_play_logsDeleteArgs<ExtArgs>>): Prisma__private_play_logsClient<$Result.GetResult<Prisma.$private_play_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Private_play_logs.
     * @param {private_play_logsUpdateArgs} args - Arguments to update one Private_play_logs.
     * @example
     * // Update one Private_play_logs
     * const private_play_logs = await prisma.private_play_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends private_play_logsUpdateArgs>(args: SelectSubset<T, private_play_logsUpdateArgs<ExtArgs>>): Prisma__private_play_logsClient<$Result.GetResult<Prisma.$private_play_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Private_play_logs.
     * @param {private_play_logsDeleteManyArgs} args - Arguments to filter Private_play_logs to delete.
     * @example
     * // Delete a few Private_play_logs
     * const { count } = await prisma.private_play_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends private_play_logsDeleteManyArgs>(args?: SelectSubset<T, private_play_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Private_play_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {private_play_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Private_play_logs
     * const private_play_logs = await prisma.private_play_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends private_play_logsUpdateManyArgs>(args: SelectSubset<T, private_play_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Private_play_logs and returns the data updated in the database.
     * @param {private_play_logsUpdateManyAndReturnArgs} args - Arguments to update many Private_play_logs.
     * @example
     * // Update many Private_play_logs
     * const private_play_logs = await prisma.private_play_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Private_play_logs and only return the `id`
     * const private_play_logsWithIdOnly = await prisma.private_play_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends private_play_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, private_play_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$private_play_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Private_play_logs.
     * @param {private_play_logsUpsertArgs} args - Arguments to update or create a Private_play_logs.
     * @example
     * // Update or create a Private_play_logs
     * const private_play_logs = await prisma.private_play_logs.upsert({
     *   create: {
     *     // ... data to create a Private_play_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Private_play_logs we want to update
     *   }
     * })
     */
    upsert<T extends private_play_logsUpsertArgs>(args: SelectSubset<T, private_play_logsUpsertArgs<ExtArgs>>): Prisma__private_play_logsClient<$Result.GetResult<Prisma.$private_play_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Private_play_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {private_play_logsCountArgs} args - Arguments to filter Private_play_logs to count.
     * @example
     * // Count the number of Private_play_logs
     * const count = await prisma.private_play_logs.count({
     *   where: {
     *     // ... the filter for the Private_play_logs we want to count
     *   }
     * })
    **/
    count<T extends private_play_logsCountArgs>(
      args?: Subset<T, private_play_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Private_play_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Private_play_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Private_play_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Private_play_logsAggregateArgs>(args: Subset<T, Private_play_logsAggregateArgs>): Prisma.PrismaPromise<GetPrivate_play_logsAggregateType<T>>

    /**
     * Group by Private_play_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {private_play_logsGroupByArgs} args - Group by arguments.
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
      T extends private_play_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: private_play_logsGroupByArgs['orderBy'] }
        : { orderBy?: private_play_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, private_play_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivate_play_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the private_play_logs model
   */
  readonly fields: private_play_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for private_play_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__private_play_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the private_play_logs model
   */
  interface private_play_logsFieldRefs {
    readonly id: FieldRef<"private_play_logs", 'String'>
    readonly unique_id: FieldRef<"private_play_logs", 'Int'>
    readonly qq_number: FieldRef<"private_play_logs", 'String'>
    readonly start_time: FieldRef<"private_play_logs", 'DateTime'>
    readonly end_time: FieldRef<"private_play_logs", 'DateTime'>
    readonly price: FieldRef<"private_play_logs", 'Decimal'>
    readonly remark: FieldRef<"private_play_logs", 'String'>
    readonly created_at: FieldRef<"private_play_logs", 'DateTime'>
    readonly updated_at: FieldRef<"private_play_logs", 'DateTime'>
    readonly deleted_at: FieldRef<"private_play_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * private_play_logs findUnique
   */
  export type private_play_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_play_logs
     */
    select?: private_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_play_logs
     */
    omit?: private_play_logsOmit<ExtArgs> | null
    /**
     * Filter, which private_play_logs to fetch.
     */
    where: private_play_logsWhereUniqueInput
  }

  /**
   * private_play_logs findUniqueOrThrow
   */
  export type private_play_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_play_logs
     */
    select?: private_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_play_logs
     */
    omit?: private_play_logsOmit<ExtArgs> | null
    /**
     * Filter, which private_play_logs to fetch.
     */
    where: private_play_logsWhereUniqueInput
  }

  /**
   * private_play_logs findFirst
   */
  export type private_play_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_play_logs
     */
    select?: private_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_play_logs
     */
    omit?: private_play_logsOmit<ExtArgs> | null
    /**
     * Filter, which private_play_logs to fetch.
     */
    where?: private_play_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of private_play_logs to fetch.
     */
    orderBy?: private_play_logsOrderByWithRelationInput | private_play_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for private_play_logs.
     */
    cursor?: private_play_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` private_play_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` private_play_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of private_play_logs.
     */
    distinct?: Private_play_logsScalarFieldEnum | Private_play_logsScalarFieldEnum[]
  }

  /**
   * private_play_logs findFirstOrThrow
   */
  export type private_play_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_play_logs
     */
    select?: private_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_play_logs
     */
    omit?: private_play_logsOmit<ExtArgs> | null
    /**
     * Filter, which private_play_logs to fetch.
     */
    where?: private_play_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of private_play_logs to fetch.
     */
    orderBy?: private_play_logsOrderByWithRelationInput | private_play_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for private_play_logs.
     */
    cursor?: private_play_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` private_play_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` private_play_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of private_play_logs.
     */
    distinct?: Private_play_logsScalarFieldEnum | Private_play_logsScalarFieldEnum[]
  }

  /**
   * private_play_logs findMany
   */
  export type private_play_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_play_logs
     */
    select?: private_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_play_logs
     */
    omit?: private_play_logsOmit<ExtArgs> | null
    /**
     * Filter, which private_play_logs to fetch.
     */
    where?: private_play_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of private_play_logs to fetch.
     */
    orderBy?: private_play_logsOrderByWithRelationInput | private_play_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing private_play_logs.
     */
    cursor?: private_play_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` private_play_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` private_play_logs.
     */
    skip?: number
    distinct?: Private_play_logsScalarFieldEnum | Private_play_logsScalarFieldEnum[]
  }

  /**
   * private_play_logs create
   */
  export type private_play_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_play_logs
     */
    select?: private_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_play_logs
     */
    omit?: private_play_logsOmit<ExtArgs> | null
    /**
     * The data needed to create a private_play_logs.
     */
    data: XOR<private_play_logsCreateInput, private_play_logsUncheckedCreateInput>
  }

  /**
   * private_play_logs createMany
   */
  export type private_play_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many private_play_logs.
     */
    data: private_play_logsCreateManyInput | private_play_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * private_play_logs createManyAndReturn
   */
  export type private_play_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_play_logs
     */
    select?: private_play_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the private_play_logs
     */
    omit?: private_play_logsOmit<ExtArgs> | null
    /**
     * The data used to create many private_play_logs.
     */
    data: private_play_logsCreateManyInput | private_play_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * private_play_logs update
   */
  export type private_play_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_play_logs
     */
    select?: private_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_play_logs
     */
    omit?: private_play_logsOmit<ExtArgs> | null
    /**
     * The data needed to update a private_play_logs.
     */
    data: XOR<private_play_logsUpdateInput, private_play_logsUncheckedUpdateInput>
    /**
     * Choose, which private_play_logs to update.
     */
    where: private_play_logsWhereUniqueInput
  }

  /**
   * private_play_logs updateMany
   */
  export type private_play_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update private_play_logs.
     */
    data: XOR<private_play_logsUpdateManyMutationInput, private_play_logsUncheckedUpdateManyInput>
    /**
     * Filter which private_play_logs to update
     */
    where?: private_play_logsWhereInput
    /**
     * Limit how many private_play_logs to update.
     */
    limit?: number
  }

  /**
   * private_play_logs updateManyAndReturn
   */
  export type private_play_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_play_logs
     */
    select?: private_play_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the private_play_logs
     */
    omit?: private_play_logsOmit<ExtArgs> | null
    /**
     * The data used to update private_play_logs.
     */
    data: XOR<private_play_logsUpdateManyMutationInput, private_play_logsUncheckedUpdateManyInput>
    /**
     * Filter which private_play_logs to update
     */
    where?: private_play_logsWhereInput
    /**
     * Limit how many private_play_logs to update.
     */
    limit?: number
  }

  /**
   * private_play_logs upsert
   */
  export type private_play_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_play_logs
     */
    select?: private_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_play_logs
     */
    omit?: private_play_logsOmit<ExtArgs> | null
    /**
     * The filter to search for the private_play_logs to update in case it exists.
     */
    where: private_play_logsWhereUniqueInput
    /**
     * In case the private_play_logs found by the `where` argument doesn't exist, create a new private_play_logs with this data.
     */
    create: XOR<private_play_logsCreateInput, private_play_logsUncheckedCreateInput>
    /**
     * In case the private_play_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<private_play_logsUpdateInput, private_play_logsUncheckedUpdateInput>
  }

  /**
   * private_play_logs delete
   */
  export type private_play_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_play_logs
     */
    select?: private_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_play_logs
     */
    omit?: private_play_logsOmit<ExtArgs> | null
    /**
     * Filter which private_play_logs to delete.
     */
    where: private_play_logsWhereUniqueInput
  }

  /**
   * private_play_logs deleteMany
   */
  export type private_play_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which private_play_logs to delete
     */
    where?: private_play_logsWhereInput
    /**
     * Limit how many private_play_logs to delete.
     */
    limit?: number
  }

  /**
   * private_play_logs without action
   */
  export type private_play_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the private_play_logs
     */
    select?: private_play_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the private_play_logs
     */
    omit?: private_play_logsOmit<ExtArgs> | null
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


  export const Operation_logsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    qq_number: 'qq_number',
    operation: 'operation',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Operation_logsScalarFieldEnum = (typeof Operation_logsScalarFieldEnum)[keyof typeof Operation_logsScalarFieldEnum]


  export const Payment_ordersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    qq_number: 'qq_number',
    out_trade_no: 'out_trade_no',
    channel: 'channel',
    amount: 'amount',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Payment_ordersScalarFieldEnum = (typeof Payment_ordersScalarFieldEnum)[keyof typeof Payment_ordersScalarFieldEnum]


  export const User_play_logsScalarFieldEnum: {
    id: 'id',
    qq_number: 'qq_number',
    status: 'status',
    start_time: 'start_time',
    end_time: 'end_time',
    break_at: 'break_at',
    break_duration: 'break_duration',
    uno_at: 'uno_at',
    uno_duration: 'uno_duration',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type User_play_logsScalarFieldEnum = (typeof User_play_logsScalarFieldEnum)[keyof typeof User_play_logsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    qq_number: 'qq_number',
    nick_name: 'nick_name',
    role: 'role',
    status_expire_time: 'status_expire_time',
    status: 'status',
    source: 'source',
    invited_by: 'invited_by',
    discount: 'discount',
    total_time: 'total_time',
    total_amount: 'total_amount',
    play_count: 'play_count',
    last_come_time: 'last_come_time',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Private_play_logsScalarFieldEnum: {
    id: 'id',
    unique_id: 'unique_id',
    qq_number: 'qq_number',
    start_time: 'start_time',
    end_time: 'end_time',
    price: 'price',
    remark: 'remark',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Private_play_logsScalarFieldEnum = (typeof Private_play_logsScalarFieldEnum)[keyof typeof Private_play_logsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type operation_logsWhereInput = {
    AND?: operation_logsWhereInput | operation_logsWhereInput[]
    OR?: operation_logsWhereInput[]
    NOT?: operation_logsWhereInput | operation_logsWhereInput[]
    id?: UuidFilter<"operation_logs"> | string
    user_id?: UuidFilter<"operation_logs"> | string
    qq_number?: StringFilter<"operation_logs"> | string
    operation?: StringFilter<"operation_logs"> | string
    created_at?: DateTimeFilter<"operation_logs"> | Date | string
    updated_at?: DateTimeFilter<"operation_logs"> | Date | string
    deleted_at?: DateTimeNullableFilter<"operation_logs"> | Date | string | null
  }

  export type operation_logsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    qq_number?: SortOrder
    operation?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type operation_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: operation_logsWhereInput | operation_logsWhereInput[]
    OR?: operation_logsWhereInput[]
    NOT?: operation_logsWhereInput | operation_logsWhereInput[]
    user_id?: UuidFilter<"operation_logs"> | string
    qq_number?: StringFilter<"operation_logs"> | string
    operation?: StringFilter<"operation_logs"> | string
    created_at?: DateTimeFilter<"operation_logs"> | Date | string
    updated_at?: DateTimeFilter<"operation_logs"> | Date | string
    deleted_at?: DateTimeNullableFilter<"operation_logs"> | Date | string | null
  }, "id">

  export type operation_logsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    qq_number?: SortOrder
    operation?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: operation_logsCountOrderByAggregateInput
    _max?: operation_logsMaxOrderByAggregateInput
    _min?: operation_logsMinOrderByAggregateInput
  }

  export type operation_logsScalarWhereWithAggregatesInput = {
    AND?: operation_logsScalarWhereWithAggregatesInput | operation_logsScalarWhereWithAggregatesInput[]
    OR?: operation_logsScalarWhereWithAggregatesInput[]
    NOT?: operation_logsScalarWhereWithAggregatesInput | operation_logsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"operation_logs"> | string
    user_id?: UuidWithAggregatesFilter<"operation_logs"> | string
    qq_number?: StringWithAggregatesFilter<"operation_logs"> | string
    operation?: StringWithAggregatesFilter<"operation_logs"> | string
    created_at?: DateTimeWithAggregatesFilter<"operation_logs"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"operation_logs"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"operation_logs"> | Date | string | null
  }

  export type payment_ordersWhereInput = {
    AND?: payment_ordersWhereInput | payment_ordersWhereInput[]
    OR?: payment_ordersWhereInput[]
    NOT?: payment_ordersWhereInput | payment_ordersWhereInput[]
    id?: UuidFilter<"payment_orders"> | string
    user_id?: UuidFilter<"payment_orders"> | string
    qq_number?: StringFilter<"payment_orders"> | string
    out_trade_no?: StringFilter<"payment_orders"> | string
    channel?: IntFilter<"payment_orders"> | number
    amount?: DecimalFilter<"payment_orders"> | Decimal | DecimalJsLike | number | string
    status?: IntFilter<"payment_orders"> | number
    created_at?: DateTimeFilter<"payment_orders"> | Date | string
    updated_at?: DateTimeFilter<"payment_orders"> | Date | string
    deleted_at?: DateTimeNullableFilter<"payment_orders"> | Date | string | null
  }

  export type payment_ordersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    qq_number?: SortOrder
    out_trade_no?: SortOrder
    channel?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type payment_ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    out_trade_no?: string
    AND?: payment_ordersWhereInput | payment_ordersWhereInput[]
    OR?: payment_ordersWhereInput[]
    NOT?: payment_ordersWhereInput | payment_ordersWhereInput[]
    user_id?: UuidFilter<"payment_orders"> | string
    qq_number?: StringFilter<"payment_orders"> | string
    channel?: IntFilter<"payment_orders"> | number
    amount?: DecimalFilter<"payment_orders"> | Decimal | DecimalJsLike | number | string
    status?: IntFilter<"payment_orders"> | number
    created_at?: DateTimeFilter<"payment_orders"> | Date | string
    updated_at?: DateTimeFilter<"payment_orders"> | Date | string
    deleted_at?: DateTimeNullableFilter<"payment_orders"> | Date | string | null
  }, "id" | "out_trade_no">

  export type payment_ordersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    qq_number?: SortOrder
    out_trade_no?: SortOrder
    channel?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: payment_ordersCountOrderByAggregateInput
    _avg?: payment_ordersAvgOrderByAggregateInput
    _max?: payment_ordersMaxOrderByAggregateInput
    _min?: payment_ordersMinOrderByAggregateInput
    _sum?: payment_ordersSumOrderByAggregateInput
  }

  export type payment_ordersScalarWhereWithAggregatesInput = {
    AND?: payment_ordersScalarWhereWithAggregatesInput | payment_ordersScalarWhereWithAggregatesInput[]
    OR?: payment_ordersScalarWhereWithAggregatesInput[]
    NOT?: payment_ordersScalarWhereWithAggregatesInput | payment_ordersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"payment_orders"> | string
    user_id?: UuidWithAggregatesFilter<"payment_orders"> | string
    qq_number?: StringWithAggregatesFilter<"payment_orders"> | string
    out_trade_no?: StringWithAggregatesFilter<"payment_orders"> | string
    channel?: IntWithAggregatesFilter<"payment_orders"> | number
    amount?: DecimalWithAggregatesFilter<"payment_orders"> | Decimal | DecimalJsLike | number | string
    status?: IntWithAggregatesFilter<"payment_orders"> | number
    created_at?: DateTimeWithAggregatesFilter<"payment_orders"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"payment_orders"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"payment_orders"> | Date | string | null
  }

  export type user_play_logsWhereInput = {
    AND?: user_play_logsWhereInput | user_play_logsWhereInput[]
    OR?: user_play_logsWhereInput[]
    NOT?: user_play_logsWhereInput | user_play_logsWhereInput[]
    id?: UuidFilter<"user_play_logs"> | string
    qq_number?: StringFilter<"user_play_logs"> | string
    status?: IntFilter<"user_play_logs"> | number
    start_time?: DateTimeFilter<"user_play_logs"> | Date | string
    end_time?: DateTimeNullableFilter<"user_play_logs"> | Date | string | null
    break_at?: DateTimeNullableFilter<"user_play_logs"> | Date | string | null
    break_duration?: IntFilter<"user_play_logs"> | number
    uno_at?: DateTimeNullableFilter<"user_play_logs"> | Date | string | null
    uno_duration?: IntFilter<"user_play_logs"> | number
    created_at?: DateTimeFilter<"user_play_logs"> | Date | string
    updated_at?: DateTimeFilter<"user_play_logs"> | Date | string
    deleted_at?: DateTimeNullableFilter<"user_play_logs"> | Date | string | null
  }

  export type user_play_logsOrderByWithRelationInput = {
    id?: SortOrder
    qq_number?: SortOrder
    status?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrderInput | SortOrder
    break_at?: SortOrderInput | SortOrder
    break_duration?: SortOrder
    uno_at?: SortOrderInput | SortOrder
    uno_duration?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type user_play_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: user_play_logsWhereInput | user_play_logsWhereInput[]
    OR?: user_play_logsWhereInput[]
    NOT?: user_play_logsWhereInput | user_play_logsWhereInput[]
    qq_number?: StringFilter<"user_play_logs"> | string
    status?: IntFilter<"user_play_logs"> | number
    start_time?: DateTimeFilter<"user_play_logs"> | Date | string
    end_time?: DateTimeNullableFilter<"user_play_logs"> | Date | string | null
    break_at?: DateTimeNullableFilter<"user_play_logs"> | Date | string | null
    break_duration?: IntFilter<"user_play_logs"> | number
    uno_at?: DateTimeNullableFilter<"user_play_logs"> | Date | string | null
    uno_duration?: IntFilter<"user_play_logs"> | number
    created_at?: DateTimeFilter<"user_play_logs"> | Date | string
    updated_at?: DateTimeFilter<"user_play_logs"> | Date | string
    deleted_at?: DateTimeNullableFilter<"user_play_logs"> | Date | string | null
  }, "id">

  export type user_play_logsOrderByWithAggregationInput = {
    id?: SortOrder
    qq_number?: SortOrder
    status?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrderInput | SortOrder
    break_at?: SortOrderInput | SortOrder
    break_duration?: SortOrder
    uno_at?: SortOrderInput | SortOrder
    uno_duration?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: user_play_logsCountOrderByAggregateInput
    _avg?: user_play_logsAvgOrderByAggregateInput
    _max?: user_play_logsMaxOrderByAggregateInput
    _min?: user_play_logsMinOrderByAggregateInput
    _sum?: user_play_logsSumOrderByAggregateInput
  }

  export type user_play_logsScalarWhereWithAggregatesInput = {
    AND?: user_play_logsScalarWhereWithAggregatesInput | user_play_logsScalarWhereWithAggregatesInput[]
    OR?: user_play_logsScalarWhereWithAggregatesInput[]
    NOT?: user_play_logsScalarWhereWithAggregatesInput | user_play_logsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"user_play_logs"> | string
    qq_number?: StringWithAggregatesFilter<"user_play_logs"> | string
    status?: IntWithAggregatesFilter<"user_play_logs"> | number
    start_time?: DateTimeWithAggregatesFilter<"user_play_logs"> | Date | string
    end_time?: DateTimeNullableWithAggregatesFilter<"user_play_logs"> | Date | string | null
    break_at?: DateTimeNullableWithAggregatesFilter<"user_play_logs"> | Date | string | null
    break_duration?: IntWithAggregatesFilter<"user_play_logs"> | number
    uno_at?: DateTimeNullableWithAggregatesFilter<"user_play_logs"> | Date | string | null
    uno_duration?: IntWithAggregatesFilter<"user_play_logs"> | number
    created_at?: DateTimeWithAggregatesFilter<"user_play_logs"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"user_play_logs"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"user_play_logs"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    qq_number?: StringFilter<"users"> | string
    nick_name?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    status_expire_time?: DateTimeFilter<"users"> | Date | string
    status?: IntFilter<"users"> | number
    source?: StringFilter<"users"> | string
    invited_by?: StringFilter<"users"> | string
    discount?: DecimalFilter<"users"> | Decimal | DecimalJsLike | number | string
    total_time?: BigIntFilter<"users"> | bigint | number
    total_amount?: DecimalFilter<"users"> | Decimal | DecimalJsLike | number | string
    play_count?: BigIntFilter<"users"> | bigint | number
    last_come_time?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    qq_number?: SortOrder
    nick_name?: SortOrder
    role?: SortOrder
    status_expire_time?: SortOrder
    status?: SortOrder
    source?: SortOrder
    invited_by?: SortOrder
    discount?: SortOrder
    total_time?: SortOrder
    total_amount?: SortOrder
    play_count?: SortOrder
    last_come_time?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    qq_number?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    nick_name?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    status_expire_time?: DateTimeFilter<"users"> | Date | string
    status?: IntFilter<"users"> | number
    source?: StringFilter<"users"> | string
    invited_by?: StringFilter<"users"> | string
    discount?: DecimalFilter<"users"> | Decimal | DecimalJsLike | number | string
    total_time?: BigIntFilter<"users"> | bigint | number
    total_amount?: DecimalFilter<"users"> | Decimal | DecimalJsLike | number | string
    play_count?: BigIntFilter<"users"> | bigint | number
    last_come_time?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
  }, "id" | "qq_number">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    qq_number?: SortOrder
    nick_name?: SortOrder
    role?: SortOrder
    status_expire_time?: SortOrder
    status?: SortOrder
    source?: SortOrder
    invited_by?: SortOrder
    discount?: SortOrder
    total_time?: SortOrder
    total_amount?: SortOrder
    play_count?: SortOrder
    last_come_time?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    qq_number?: StringWithAggregatesFilter<"users"> | string
    nick_name?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
    status_expire_time?: DateTimeWithAggregatesFilter<"users"> | Date | string
    status?: IntWithAggregatesFilter<"users"> | number
    source?: StringWithAggregatesFilter<"users"> | string
    invited_by?: StringWithAggregatesFilter<"users"> | string
    discount?: DecimalWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string
    total_time?: BigIntWithAggregatesFilter<"users"> | bigint | number
    total_amount?: DecimalWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string
    play_count?: BigIntWithAggregatesFilter<"users"> | bigint | number
    last_come_time?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type private_play_logsWhereInput = {
    AND?: private_play_logsWhereInput | private_play_logsWhereInput[]
    OR?: private_play_logsWhereInput[]
    NOT?: private_play_logsWhereInput | private_play_logsWhereInput[]
    id?: UuidFilter<"private_play_logs"> | string
    unique_id?: IntFilter<"private_play_logs"> | number
    qq_number?: StringFilter<"private_play_logs"> | string
    start_time?: DateTimeFilter<"private_play_logs"> | Date | string
    end_time?: DateTimeFilter<"private_play_logs"> | Date | string
    price?: DecimalFilter<"private_play_logs"> | Decimal | DecimalJsLike | number | string
    remark?: StringFilter<"private_play_logs"> | string
    created_at?: DateTimeFilter<"private_play_logs"> | Date | string
    updated_at?: DateTimeFilter<"private_play_logs"> | Date | string
    deleted_at?: DateTimeNullableFilter<"private_play_logs"> | Date | string | null
  }

  export type private_play_logsOrderByWithRelationInput = {
    id?: SortOrder
    unique_id?: SortOrder
    qq_number?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    price?: SortOrder
    remark?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type private_play_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    unique_id?: number
    AND?: private_play_logsWhereInput | private_play_logsWhereInput[]
    OR?: private_play_logsWhereInput[]
    NOT?: private_play_logsWhereInput | private_play_logsWhereInput[]
    qq_number?: StringFilter<"private_play_logs"> | string
    start_time?: DateTimeFilter<"private_play_logs"> | Date | string
    end_time?: DateTimeFilter<"private_play_logs"> | Date | string
    price?: DecimalFilter<"private_play_logs"> | Decimal | DecimalJsLike | number | string
    remark?: StringFilter<"private_play_logs"> | string
    created_at?: DateTimeFilter<"private_play_logs"> | Date | string
    updated_at?: DateTimeFilter<"private_play_logs"> | Date | string
    deleted_at?: DateTimeNullableFilter<"private_play_logs"> | Date | string | null
  }, "id" | "unique_id">

  export type private_play_logsOrderByWithAggregationInput = {
    id?: SortOrder
    unique_id?: SortOrder
    qq_number?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    price?: SortOrder
    remark?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: private_play_logsCountOrderByAggregateInput
    _avg?: private_play_logsAvgOrderByAggregateInput
    _max?: private_play_logsMaxOrderByAggregateInput
    _min?: private_play_logsMinOrderByAggregateInput
    _sum?: private_play_logsSumOrderByAggregateInput
  }

  export type private_play_logsScalarWhereWithAggregatesInput = {
    AND?: private_play_logsScalarWhereWithAggregatesInput | private_play_logsScalarWhereWithAggregatesInput[]
    OR?: private_play_logsScalarWhereWithAggregatesInput[]
    NOT?: private_play_logsScalarWhereWithAggregatesInput | private_play_logsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"private_play_logs"> | string
    unique_id?: IntWithAggregatesFilter<"private_play_logs"> | number
    qq_number?: StringWithAggregatesFilter<"private_play_logs"> | string
    start_time?: DateTimeWithAggregatesFilter<"private_play_logs"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"private_play_logs"> | Date | string
    price?: DecimalWithAggregatesFilter<"private_play_logs"> | Decimal | DecimalJsLike | number | string
    remark?: StringWithAggregatesFilter<"private_play_logs"> | string
    created_at?: DateTimeWithAggregatesFilter<"private_play_logs"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"private_play_logs"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"private_play_logs"> | Date | string | null
  }

  export type operation_logsCreateInput = {
    id?: string
    user_id: string
    qq_number: string
    operation: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type operation_logsUncheckedCreateInput = {
    id?: string
    user_id: string
    qq_number: string
    operation: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type operation_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    qq_number?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type operation_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    qq_number?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type operation_logsCreateManyInput = {
    id?: string
    user_id: string
    qq_number: string
    operation: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type operation_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    qq_number?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type operation_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    qq_number?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type payment_ordersCreateInput = {
    id?: string
    user_id: string
    qq_number: string
    out_trade_no: string
    channel: number
    amount: Decimal | DecimalJsLike | number | string
    status?: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type payment_ordersUncheckedCreateInput = {
    id?: string
    user_id: string
    qq_number: string
    out_trade_no: string
    channel: number
    amount: Decimal | DecimalJsLike | number | string
    status?: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type payment_ordersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    qq_number?: StringFieldUpdateOperationsInput | string
    out_trade_no?: StringFieldUpdateOperationsInput | string
    channel?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type payment_ordersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    qq_number?: StringFieldUpdateOperationsInput | string
    out_trade_no?: StringFieldUpdateOperationsInput | string
    channel?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type payment_ordersCreateManyInput = {
    id?: string
    user_id: string
    qq_number: string
    out_trade_no: string
    channel: number
    amount: Decimal | DecimalJsLike | number | string
    status?: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type payment_ordersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    qq_number?: StringFieldUpdateOperationsInput | string
    out_trade_no?: StringFieldUpdateOperationsInput | string
    channel?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type payment_ordersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    qq_number?: StringFieldUpdateOperationsInput | string
    out_trade_no?: StringFieldUpdateOperationsInput | string
    channel?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_play_logsCreateInput = {
    id?: string
    qq_number: string
    status?: number
    start_time?: Date | string
    end_time?: Date | string | null
    break_at?: Date | string | null
    break_duration?: number
    uno_at?: Date | string | null
    uno_duration?: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type user_play_logsUncheckedCreateInput = {
    id?: string
    qq_number: string
    status?: number
    start_time?: Date | string
    end_time?: Date | string | null
    break_at?: Date | string | null
    break_duration?: number
    uno_at?: Date | string | null
    uno_duration?: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type user_play_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qq_number?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    break_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    break_duration?: IntFieldUpdateOperationsInput | number
    uno_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uno_duration?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_play_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qq_number?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    break_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    break_duration?: IntFieldUpdateOperationsInput | number
    uno_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uno_duration?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_play_logsCreateManyInput = {
    id?: string
    qq_number: string
    status?: number
    start_time?: Date | string
    end_time?: Date | string | null
    break_at?: Date | string | null
    break_duration?: number
    uno_at?: Date | string | null
    uno_duration?: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type user_play_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qq_number?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    break_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    break_duration?: IntFieldUpdateOperationsInput | number
    uno_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uno_duration?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_play_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    qq_number?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    break_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    break_duration?: IntFieldUpdateOperationsInput | number
    uno_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uno_duration?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id?: string
    qq_number: string
    nick_name: string
    role?: string
    status_expire_time?: Date | string
    status?: number
    source?: string
    invited_by?: string
    discount?: Decimal | DecimalJsLike | number | string
    total_time: bigint | number
    total_amount?: Decimal | DecimalJsLike | number | string
    play_count?: bigint | number
    last_come_time?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type usersUncheckedCreateInput = {
    id?: string
    qq_number: string
    nick_name: string
    role?: string
    status_expire_time?: Date | string
    status?: number
    source?: string
    invited_by?: string
    discount?: Decimal | DecimalJsLike | number | string
    total_time: bigint | number
    total_amount?: Decimal | DecimalJsLike | number | string
    play_count?: bigint | number
    last_come_time?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qq_number?: StringFieldUpdateOperationsInput | string
    nick_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status_expire_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    invited_by?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_time?: BigIntFieldUpdateOperationsInput | bigint | number
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    play_count?: BigIntFieldUpdateOperationsInput | bigint | number
    last_come_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qq_number?: StringFieldUpdateOperationsInput | string
    nick_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status_expire_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    invited_by?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_time?: BigIntFieldUpdateOperationsInput | bigint | number
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    play_count?: BigIntFieldUpdateOperationsInput | bigint | number
    last_come_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateManyInput = {
    id?: string
    qq_number: string
    nick_name: string
    role?: string
    status_expire_time?: Date | string
    status?: number
    source?: string
    invited_by?: string
    discount?: Decimal | DecimalJsLike | number | string
    total_time: bigint | number
    total_amount?: Decimal | DecimalJsLike | number | string
    play_count?: bigint | number
    last_come_time?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qq_number?: StringFieldUpdateOperationsInput | string
    nick_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status_expire_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    invited_by?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_time?: BigIntFieldUpdateOperationsInput | bigint | number
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    play_count?: BigIntFieldUpdateOperationsInput | bigint | number
    last_come_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    qq_number?: StringFieldUpdateOperationsInput | string
    nick_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status_expire_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    invited_by?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_time?: BigIntFieldUpdateOperationsInput | bigint | number
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    play_count?: BigIntFieldUpdateOperationsInput | bigint | number
    last_come_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type private_play_logsCreateInput = {
    id?: string
    unique_id?: number
    qq_number: string
    start_time: Date | string
    end_time: Date | string
    price: Decimal | DecimalJsLike | number | string
    remark: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type private_play_logsUncheckedCreateInput = {
    id?: string
    unique_id?: number
    qq_number: string
    start_time: Date | string
    end_time: Date | string
    price: Decimal | DecimalJsLike | number | string
    remark: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type private_play_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qq_number?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remark?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type private_play_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unique_id?: IntFieldUpdateOperationsInput | number
    qq_number?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remark?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type private_play_logsCreateManyInput = {
    id?: string
    unique_id?: number
    qq_number: string
    start_time: Date | string
    end_time: Date | string
    price: Decimal | DecimalJsLike | number | string
    remark: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type private_play_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qq_number?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remark?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type private_play_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    unique_id?: IntFieldUpdateOperationsInput | number
    qq_number?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remark?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type operation_logsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    qq_number?: SortOrder
    operation?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type operation_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    qq_number?: SortOrder
    operation?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type operation_logsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    qq_number?: SortOrder
    operation?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type payment_ordersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    qq_number?: SortOrder
    out_trade_no?: SortOrder
    channel?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type payment_ordersAvgOrderByAggregateInput = {
    channel?: SortOrder
    amount?: SortOrder
    status?: SortOrder
  }

  export type payment_ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    qq_number?: SortOrder
    out_trade_no?: SortOrder
    channel?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type payment_ordersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    qq_number?: SortOrder
    out_trade_no?: SortOrder
    channel?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type payment_ordersSumOrderByAggregateInput = {
    channel?: SortOrder
    amount?: SortOrder
    status?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type user_play_logsCountOrderByAggregateInput = {
    id?: SortOrder
    qq_number?: SortOrder
    status?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    break_at?: SortOrder
    break_duration?: SortOrder
    uno_at?: SortOrder
    uno_duration?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type user_play_logsAvgOrderByAggregateInput = {
    status?: SortOrder
    break_duration?: SortOrder
    uno_duration?: SortOrder
  }

  export type user_play_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    qq_number?: SortOrder
    status?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    break_at?: SortOrder
    break_duration?: SortOrder
    uno_at?: SortOrder
    uno_duration?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type user_play_logsMinOrderByAggregateInput = {
    id?: SortOrder
    qq_number?: SortOrder
    status?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    break_at?: SortOrder
    break_duration?: SortOrder
    uno_at?: SortOrder
    uno_duration?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type user_play_logsSumOrderByAggregateInput = {
    status?: SortOrder
    break_duration?: SortOrder
    uno_duration?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    qq_number?: SortOrder
    nick_name?: SortOrder
    role?: SortOrder
    status_expire_time?: SortOrder
    status?: SortOrder
    source?: SortOrder
    invited_by?: SortOrder
    discount?: SortOrder
    total_time?: SortOrder
    total_amount?: SortOrder
    play_count?: SortOrder
    last_come_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    status?: SortOrder
    discount?: SortOrder
    total_time?: SortOrder
    total_amount?: SortOrder
    play_count?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    qq_number?: SortOrder
    nick_name?: SortOrder
    role?: SortOrder
    status_expire_time?: SortOrder
    status?: SortOrder
    source?: SortOrder
    invited_by?: SortOrder
    discount?: SortOrder
    total_time?: SortOrder
    total_amount?: SortOrder
    play_count?: SortOrder
    last_come_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    qq_number?: SortOrder
    nick_name?: SortOrder
    role?: SortOrder
    status_expire_time?: SortOrder
    status?: SortOrder
    source?: SortOrder
    invited_by?: SortOrder
    discount?: SortOrder
    total_time?: SortOrder
    total_amount?: SortOrder
    play_count?: SortOrder
    last_come_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    status?: SortOrder
    discount?: SortOrder
    total_time?: SortOrder
    total_amount?: SortOrder
    play_count?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type private_play_logsCountOrderByAggregateInput = {
    id?: SortOrder
    unique_id?: SortOrder
    qq_number?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    price?: SortOrder
    remark?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type private_play_logsAvgOrderByAggregateInput = {
    unique_id?: SortOrder
    price?: SortOrder
  }

  export type private_play_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    unique_id?: SortOrder
    qq_number?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    price?: SortOrder
    remark?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type private_play_logsMinOrderByAggregateInput = {
    id?: SortOrder
    unique_id?: SortOrder
    qq_number?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    price?: SortOrder
    remark?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type private_play_logsSumOrderByAggregateInput = {
    unique_id?: SortOrder
    price?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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
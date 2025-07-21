
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
 * Model nft_project_daily_amount
 * 
 */
export type nft_project_daily_amount = $Result.DefaultSelection<Prisma.$nft_project_daily_amountPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Nft_project_daily_amounts
 * const nft_project_daily_amounts = await prisma.nft_project_daily_amount.findMany()
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
   * // Fetch zero or more Nft_project_daily_amounts
   * const nft_project_daily_amounts = await prisma.nft_project_daily_amount.findMany()
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
   * `prisma.nft_project_daily_amount`: Exposes CRUD operations for the **nft_project_daily_amount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nft_project_daily_amounts
    * const nft_project_daily_amounts = await prisma.nft_project_daily_amount.findMany()
    * ```
    */
  get nft_project_daily_amount(): Prisma.nft_project_daily_amountDelegate<ExtArgs, ClientOptions>;
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
    nft_project_daily_amount: 'nft_project_daily_amount'
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
      modelProps: "nft_project_daily_amount"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      nft_project_daily_amount: {
        payload: Prisma.$nft_project_daily_amountPayload<ExtArgs>
        fields: Prisma.nft_project_daily_amountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.nft_project_daily_amountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_project_daily_amountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.nft_project_daily_amountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_project_daily_amountPayload>
          }
          findFirst: {
            args: Prisma.nft_project_daily_amountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_project_daily_amountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.nft_project_daily_amountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_project_daily_amountPayload>
          }
          findMany: {
            args: Prisma.nft_project_daily_amountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_project_daily_amountPayload>[]
          }
          create: {
            args: Prisma.nft_project_daily_amountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_project_daily_amountPayload>
          }
          createMany: {
            args: Prisma.nft_project_daily_amountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.nft_project_daily_amountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_project_daily_amountPayload>[]
          }
          delete: {
            args: Prisma.nft_project_daily_amountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_project_daily_amountPayload>
          }
          update: {
            args: Prisma.nft_project_daily_amountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_project_daily_amountPayload>
          }
          deleteMany: {
            args: Prisma.nft_project_daily_amountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.nft_project_daily_amountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.nft_project_daily_amountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_project_daily_amountPayload>[]
          }
          upsert: {
            args: Prisma.nft_project_daily_amountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_project_daily_amountPayload>
          }
          aggregate: {
            args: Prisma.Nft_project_daily_amountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNft_project_daily_amount>
          }
          groupBy: {
            args: Prisma.nft_project_daily_amountGroupByArgs<ExtArgs>
            result: $Utils.Optional<Nft_project_daily_amountGroupByOutputType>[]
          }
          count: {
            args: Prisma.nft_project_daily_amountCountArgs<ExtArgs>
            result: $Utils.Optional<Nft_project_daily_amountCountAggregateOutputType> | number
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
    nft_project_daily_amount?: nft_project_daily_amountOmit
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
   * Model nft_project_daily_amount
   */

  export type AggregateNft_project_daily_amount = {
    _count: Nft_project_daily_amountCountAggregateOutputType | null
    _avg: Nft_project_daily_amountAvgAggregateOutputType | null
    _sum: Nft_project_daily_amountSumAggregateOutputType | null
    _min: Nft_project_daily_amountMinAggregateOutputType | null
    _max: Nft_project_daily_amountMaxAggregateOutputType | null
  }

  export type Nft_project_daily_amountAvgAggregateOutputType = {
    sale_amount: Decimal | null
    version: number | null
  }

  export type Nft_project_daily_amountSumAggregateOutputType = {
    sale_amount: Decimal | null
    version: bigint | null
  }

  export type Nft_project_daily_amountMinAggregateOutputType = {
    id: string | null
    project_id: string | null
    sale_date: Date | null
    sale_amount: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    version: bigint | null
    deleted_at: Date | null
  }

  export type Nft_project_daily_amountMaxAggregateOutputType = {
    id: string | null
    project_id: string | null
    sale_date: Date | null
    sale_amount: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    version: bigint | null
    deleted_at: Date | null
  }

  export type Nft_project_daily_amountCountAggregateOutputType = {
    id: number
    project_id: number
    sale_date: number
    sale_amount: number
    created_at: number
    updated_at: number
    version: number
    deleted_at: number
    _all: number
  }


  export type Nft_project_daily_amountAvgAggregateInputType = {
    sale_amount?: true
    version?: true
  }

  export type Nft_project_daily_amountSumAggregateInputType = {
    sale_amount?: true
    version?: true
  }

  export type Nft_project_daily_amountMinAggregateInputType = {
    id?: true
    project_id?: true
    sale_date?: true
    sale_amount?: true
    created_at?: true
    updated_at?: true
    version?: true
    deleted_at?: true
  }

  export type Nft_project_daily_amountMaxAggregateInputType = {
    id?: true
    project_id?: true
    sale_date?: true
    sale_amount?: true
    created_at?: true
    updated_at?: true
    version?: true
    deleted_at?: true
  }

  export type Nft_project_daily_amountCountAggregateInputType = {
    id?: true
    project_id?: true
    sale_date?: true
    sale_amount?: true
    created_at?: true
    updated_at?: true
    version?: true
    deleted_at?: true
    _all?: true
  }

  export type Nft_project_daily_amountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nft_project_daily_amount to aggregate.
     */
    where?: nft_project_daily_amountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nft_project_daily_amounts to fetch.
     */
    orderBy?: nft_project_daily_amountOrderByWithRelationInput | nft_project_daily_amountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nft_project_daily_amountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nft_project_daily_amounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nft_project_daily_amounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nft_project_daily_amounts
    **/
    _count?: true | Nft_project_daily_amountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Nft_project_daily_amountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Nft_project_daily_amountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Nft_project_daily_amountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Nft_project_daily_amountMaxAggregateInputType
  }

  export type GetNft_project_daily_amountAggregateType<T extends Nft_project_daily_amountAggregateArgs> = {
        [P in keyof T & keyof AggregateNft_project_daily_amount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNft_project_daily_amount[P]>
      : GetScalarType<T[P], AggregateNft_project_daily_amount[P]>
  }




  export type nft_project_daily_amountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nft_project_daily_amountWhereInput
    orderBy?: nft_project_daily_amountOrderByWithAggregationInput | nft_project_daily_amountOrderByWithAggregationInput[]
    by: Nft_project_daily_amountScalarFieldEnum[] | Nft_project_daily_amountScalarFieldEnum
    having?: nft_project_daily_amountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Nft_project_daily_amountCountAggregateInputType | true
    _avg?: Nft_project_daily_amountAvgAggregateInputType
    _sum?: Nft_project_daily_amountSumAggregateInputType
    _min?: Nft_project_daily_amountMinAggregateInputType
    _max?: Nft_project_daily_amountMaxAggregateInputType
  }

  export type Nft_project_daily_amountGroupByOutputType = {
    id: string
    project_id: string
    sale_date: Date
    sale_amount: Decimal
    created_at: Date
    updated_at: Date
    version: bigint
    deleted_at: Date | null
    _count: Nft_project_daily_amountCountAggregateOutputType | null
    _avg: Nft_project_daily_amountAvgAggregateOutputType | null
    _sum: Nft_project_daily_amountSumAggregateOutputType | null
    _min: Nft_project_daily_amountMinAggregateOutputType | null
    _max: Nft_project_daily_amountMaxAggregateOutputType | null
  }

  type GetNft_project_daily_amountGroupByPayload<T extends nft_project_daily_amountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Nft_project_daily_amountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Nft_project_daily_amountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Nft_project_daily_amountGroupByOutputType[P]>
            : GetScalarType<T[P], Nft_project_daily_amountGroupByOutputType[P]>
        }
      >
    >


  export type nft_project_daily_amountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    sale_date?: boolean
    sale_amount?: boolean
    created_at?: boolean
    updated_at?: boolean
    version?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["nft_project_daily_amount"]>

  export type nft_project_daily_amountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    sale_date?: boolean
    sale_amount?: boolean
    created_at?: boolean
    updated_at?: boolean
    version?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["nft_project_daily_amount"]>

  export type nft_project_daily_amountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    sale_date?: boolean
    sale_amount?: boolean
    created_at?: boolean
    updated_at?: boolean
    version?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["nft_project_daily_amount"]>

  export type nft_project_daily_amountSelectScalar = {
    id?: boolean
    project_id?: boolean
    sale_date?: boolean
    sale_amount?: boolean
    created_at?: boolean
    updated_at?: boolean
    version?: boolean
    deleted_at?: boolean
  }

  export type nft_project_daily_amountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "project_id" | "sale_date" | "sale_amount" | "created_at" | "updated_at" | "version" | "deleted_at", ExtArgs["result"]["nft_project_daily_amount"]>

  export type $nft_project_daily_amountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "nft_project_daily_amount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      project_id: string
      sale_date: Date
      sale_amount: Prisma.Decimal
      created_at: Date
      updated_at: Date
      version: bigint
      deleted_at: Date | null
    }, ExtArgs["result"]["nft_project_daily_amount"]>
    composites: {}
  }

  type nft_project_daily_amountGetPayload<S extends boolean | null | undefined | nft_project_daily_amountDefaultArgs> = $Result.GetResult<Prisma.$nft_project_daily_amountPayload, S>

  type nft_project_daily_amountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<nft_project_daily_amountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Nft_project_daily_amountCountAggregateInputType | true
    }

  export interface nft_project_daily_amountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nft_project_daily_amount'], meta: { name: 'nft_project_daily_amount' } }
    /**
     * Find zero or one Nft_project_daily_amount that matches the filter.
     * @param {nft_project_daily_amountFindUniqueArgs} args - Arguments to find a Nft_project_daily_amount
     * @example
     * // Get one Nft_project_daily_amount
     * const nft_project_daily_amount = await prisma.nft_project_daily_amount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nft_project_daily_amountFindUniqueArgs>(args: SelectSubset<T, nft_project_daily_amountFindUniqueArgs<ExtArgs>>): Prisma__nft_project_daily_amountClient<$Result.GetResult<Prisma.$nft_project_daily_amountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nft_project_daily_amount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {nft_project_daily_amountFindUniqueOrThrowArgs} args - Arguments to find a Nft_project_daily_amount
     * @example
     * // Get one Nft_project_daily_amount
     * const nft_project_daily_amount = await prisma.nft_project_daily_amount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nft_project_daily_amountFindUniqueOrThrowArgs>(args: SelectSubset<T, nft_project_daily_amountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__nft_project_daily_amountClient<$Result.GetResult<Prisma.$nft_project_daily_amountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nft_project_daily_amount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nft_project_daily_amountFindFirstArgs} args - Arguments to find a Nft_project_daily_amount
     * @example
     * // Get one Nft_project_daily_amount
     * const nft_project_daily_amount = await prisma.nft_project_daily_amount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nft_project_daily_amountFindFirstArgs>(args?: SelectSubset<T, nft_project_daily_amountFindFirstArgs<ExtArgs>>): Prisma__nft_project_daily_amountClient<$Result.GetResult<Prisma.$nft_project_daily_amountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nft_project_daily_amount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nft_project_daily_amountFindFirstOrThrowArgs} args - Arguments to find a Nft_project_daily_amount
     * @example
     * // Get one Nft_project_daily_amount
     * const nft_project_daily_amount = await prisma.nft_project_daily_amount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nft_project_daily_amountFindFirstOrThrowArgs>(args?: SelectSubset<T, nft_project_daily_amountFindFirstOrThrowArgs<ExtArgs>>): Prisma__nft_project_daily_amountClient<$Result.GetResult<Prisma.$nft_project_daily_amountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nft_project_daily_amounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nft_project_daily_amountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nft_project_daily_amounts
     * const nft_project_daily_amounts = await prisma.nft_project_daily_amount.findMany()
     * 
     * // Get first 10 Nft_project_daily_amounts
     * const nft_project_daily_amounts = await prisma.nft_project_daily_amount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nft_project_daily_amountWithIdOnly = await prisma.nft_project_daily_amount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends nft_project_daily_amountFindManyArgs>(args?: SelectSubset<T, nft_project_daily_amountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nft_project_daily_amountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nft_project_daily_amount.
     * @param {nft_project_daily_amountCreateArgs} args - Arguments to create a Nft_project_daily_amount.
     * @example
     * // Create one Nft_project_daily_amount
     * const Nft_project_daily_amount = await prisma.nft_project_daily_amount.create({
     *   data: {
     *     // ... data to create a Nft_project_daily_amount
     *   }
     * })
     * 
     */
    create<T extends nft_project_daily_amountCreateArgs>(args: SelectSubset<T, nft_project_daily_amountCreateArgs<ExtArgs>>): Prisma__nft_project_daily_amountClient<$Result.GetResult<Prisma.$nft_project_daily_amountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nft_project_daily_amounts.
     * @param {nft_project_daily_amountCreateManyArgs} args - Arguments to create many Nft_project_daily_amounts.
     * @example
     * // Create many Nft_project_daily_amounts
     * const nft_project_daily_amount = await prisma.nft_project_daily_amount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends nft_project_daily_amountCreateManyArgs>(args?: SelectSubset<T, nft_project_daily_amountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nft_project_daily_amounts and returns the data saved in the database.
     * @param {nft_project_daily_amountCreateManyAndReturnArgs} args - Arguments to create many Nft_project_daily_amounts.
     * @example
     * // Create many Nft_project_daily_amounts
     * const nft_project_daily_amount = await prisma.nft_project_daily_amount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nft_project_daily_amounts and only return the `id`
     * const nft_project_daily_amountWithIdOnly = await prisma.nft_project_daily_amount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends nft_project_daily_amountCreateManyAndReturnArgs>(args?: SelectSubset<T, nft_project_daily_amountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nft_project_daily_amountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nft_project_daily_amount.
     * @param {nft_project_daily_amountDeleteArgs} args - Arguments to delete one Nft_project_daily_amount.
     * @example
     * // Delete one Nft_project_daily_amount
     * const Nft_project_daily_amount = await prisma.nft_project_daily_amount.delete({
     *   where: {
     *     // ... filter to delete one Nft_project_daily_amount
     *   }
     * })
     * 
     */
    delete<T extends nft_project_daily_amountDeleteArgs>(args: SelectSubset<T, nft_project_daily_amountDeleteArgs<ExtArgs>>): Prisma__nft_project_daily_amountClient<$Result.GetResult<Prisma.$nft_project_daily_amountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nft_project_daily_amount.
     * @param {nft_project_daily_amountUpdateArgs} args - Arguments to update one Nft_project_daily_amount.
     * @example
     * // Update one Nft_project_daily_amount
     * const nft_project_daily_amount = await prisma.nft_project_daily_amount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends nft_project_daily_amountUpdateArgs>(args: SelectSubset<T, nft_project_daily_amountUpdateArgs<ExtArgs>>): Prisma__nft_project_daily_amountClient<$Result.GetResult<Prisma.$nft_project_daily_amountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nft_project_daily_amounts.
     * @param {nft_project_daily_amountDeleteManyArgs} args - Arguments to filter Nft_project_daily_amounts to delete.
     * @example
     * // Delete a few Nft_project_daily_amounts
     * const { count } = await prisma.nft_project_daily_amount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends nft_project_daily_amountDeleteManyArgs>(args?: SelectSubset<T, nft_project_daily_amountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nft_project_daily_amounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nft_project_daily_amountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nft_project_daily_amounts
     * const nft_project_daily_amount = await prisma.nft_project_daily_amount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends nft_project_daily_amountUpdateManyArgs>(args: SelectSubset<T, nft_project_daily_amountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nft_project_daily_amounts and returns the data updated in the database.
     * @param {nft_project_daily_amountUpdateManyAndReturnArgs} args - Arguments to update many Nft_project_daily_amounts.
     * @example
     * // Update many Nft_project_daily_amounts
     * const nft_project_daily_amount = await prisma.nft_project_daily_amount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nft_project_daily_amounts and only return the `id`
     * const nft_project_daily_amountWithIdOnly = await prisma.nft_project_daily_amount.updateManyAndReturn({
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
    updateManyAndReturn<T extends nft_project_daily_amountUpdateManyAndReturnArgs>(args: SelectSubset<T, nft_project_daily_amountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nft_project_daily_amountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nft_project_daily_amount.
     * @param {nft_project_daily_amountUpsertArgs} args - Arguments to update or create a Nft_project_daily_amount.
     * @example
     * // Update or create a Nft_project_daily_amount
     * const nft_project_daily_amount = await prisma.nft_project_daily_amount.upsert({
     *   create: {
     *     // ... data to create a Nft_project_daily_amount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nft_project_daily_amount we want to update
     *   }
     * })
     */
    upsert<T extends nft_project_daily_amountUpsertArgs>(args: SelectSubset<T, nft_project_daily_amountUpsertArgs<ExtArgs>>): Prisma__nft_project_daily_amountClient<$Result.GetResult<Prisma.$nft_project_daily_amountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nft_project_daily_amounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nft_project_daily_amountCountArgs} args - Arguments to filter Nft_project_daily_amounts to count.
     * @example
     * // Count the number of Nft_project_daily_amounts
     * const count = await prisma.nft_project_daily_amount.count({
     *   where: {
     *     // ... the filter for the Nft_project_daily_amounts we want to count
     *   }
     * })
    **/
    count<T extends nft_project_daily_amountCountArgs>(
      args?: Subset<T, nft_project_daily_amountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Nft_project_daily_amountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nft_project_daily_amount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nft_project_daily_amountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Nft_project_daily_amountAggregateArgs>(args: Subset<T, Nft_project_daily_amountAggregateArgs>): Prisma.PrismaPromise<GetNft_project_daily_amountAggregateType<T>>

    /**
     * Group by Nft_project_daily_amount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nft_project_daily_amountGroupByArgs} args - Group by arguments.
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
      T extends nft_project_daily_amountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nft_project_daily_amountGroupByArgs['orderBy'] }
        : { orderBy?: nft_project_daily_amountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, nft_project_daily_amountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNft_project_daily_amountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the nft_project_daily_amount model
   */
  readonly fields: nft_project_daily_amountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for nft_project_daily_amount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__nft_project_daily_amountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the nft_project_daily_amount model
   */
  interface nft_project_daily_amountFieldRefs {
    readonly id: FieldRef<"nft_project_daily_amount", 'String'>
    readonly project_id: FieldRef<"nft_project_daily_amount", 'String'>
    readonly sale_date: FieldRef<"nft_project_daily_amount", 'DateTime'>
    readonly sale_amount: FieldRef<"nft_project_daily_amount", 'Decimal'>
    readonly created_at: FieldRef<"nft_project_daily_amount", 'DateTime'>
    readonly updated_at: FieldRef<"nft_project_daily_amount", 'DateTime'>
    readonly version: FieldRef<"nft_project_daily_amount", 'BigInt'>
    readonly deleted_at: FieldRef<"nft_project_daily_amount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * nft_project_daily_amount findUnique
   */
  export type nft_project_daily_amountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_project_daily_amount
     */
    select?: nft_project_daily_amountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_project_daily_amount
     */
    omit?: nft_project_daily_amountOmit<ExtArgs> | null
    /**
     * Filter, which nft_project_daily_amount to fetch.
     */
    where: nft_project_daily_amountWhereUniqueInput
  }

  /**
   * nft_project_daily_amount findUniqueOrThrow
   */
  export type nft_project_daily_amountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_project_daily_amount
     */
    select?: nft_project_daily_amountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_project_daily_amount
     */
    omit?: nft_project_daily_amountOmit<ExtArgs> | null
    /**
     * Filter, which nft_project_daily_amount to fetch.
     */
    where: nft_project_daily_amountWhereUniqueInput
  }

  /**
   * nft_project_daily_amount findFirst
   */
  export type nft_project_daily_amountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_project_daily_amount
     */
    select?: nft_project_daily_amountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_project_daily_amount
     */
    omit?: nft_project_daily_amountOmit<ExtArgs> | null
    /**
     * Filter, which nft_project_daily_amount to fetch.
     */
    where?: nft_project_daily_amountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nft_project_daily_amounts to fetch.
     */
    orderBy?: nft_project_daily_amountOrderByWithRelationInput | nft_project_daily_amountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nft_project_daily_amounts.
     */
    cursor?: nft_project_daily_amountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nft_project_daily_amounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nft_project_daily_amounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nft_project_daily_amounts.
     */
    distinct?: Nft_project_daily_amountScalarFieldEnum | Nft_project_daily_amountScalarFieldEnum[]
  }

  /**
   * nft_project_daily_amount findFirstOrThrow
   */
  export type nft_project_daily_amountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_project_daily_amount
     */
    select?: nft_project_daily_amountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_project_daily_amount
     */
    omit?: nft_project_daily_amountOmit<ExtArgs> | null
    /**
     * Filter, which nft_project_daily_amount to fetch.
     */
    where?: nft_project_daily_amountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nft_project_daily_amounts to fetch.
     */
    orderBy?: nft_project_daily_amountOrderByWithRelationInput | nft_project_daily_amountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nft_project_daily_amounts.
     */
    cursor?: nft_project_daily_amountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nft_project_daily_amounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nft_project_daily_amounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nft_project_daily_amounts.
     */
    distinct?: Nft_project_daily_amountScalarFieldEnum | Nft_project_daily_amountScalarFieldEnum[]
  }

  /**
   * nft_project_daily_amount findMany
   */
  export type nft_project_daily_amountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_project_daily_amount
     */
    select?: nft_project_daily_amountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_project_daily_amount
     */
    omit?: nft_project_daily_amountOmit<ExtArgs> | null
    /**
     * Filter, which nft_project_daily_amounts to fetch.
     */
    where?: nft_project_daily_amountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nft_project_daily_amounts to fetch.
     */
    orderBy?: nft_project_daily_amountOrderByWithRelationInput | nft_project_daily_amountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nft_project_daily_amounts.
     */
    cursor?: nft_project_daily_amountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nft_project_daily_amounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nft_project_daily_amounts.
     */
    skip?: number
    distinct?: Nft_project_daily_amountScalarFieldEnum | Nft_project_daily_amountScalarFieldEnum[]
  }

  /**
   * nft_project_daily_amount create
   */
  export type nft_project_daily_amountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_project_daily_amount
     */
    select?: nft_project_daily_amountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_project_daily_amount
     */
    omit?: nft_project_daily_amountOmit<ExtArgs> | null
    /**
     * The data needed to create a nft_project_daily_amount.
     */
    data: XOR<nft_project_daily_amountCreateInput, nft_project_daily_amountUncheckedCreateInput>
  }

  /**
   * nft_project_daily_amount createMany
   */
  export type nft_project_daily_amountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nft_project_daily_amounts.
     */
    data: nft_project_daily_amountCreateManyInput | nft_project_daily_amountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nft_project_daily_amount createManyAndReturn
   */
  export type nft_project_daily_amountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_project_daily_amount
     */
    select?: nft_project_daily_amountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nft_project_daily_amount
     */
    omit?: nft_project_daily_amountOmit<ExtArgs> | null
    /**
     * The data used to create many nft_project_daily_amounts.
     */
    data: nft_project_daily_amountCreateManyInput | nft_project_daily_amountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nft_project_daily_amount update
   */
  export type nft_project_daily_amountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_project_daily_amount
     */
    select?: nft_project_daily_amountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_project_daily_amount
     */
    omit?: nft_project_daily_amountOmit<ExtArgs> | null
    /**
     * The data needed to update a nft_project_daily_amount.
     */
    data: XOR<nft_project_daily_amountUpdateInput, nft_project_daily_amountUncheckedUpdateInput>
    /**
     * Choose, which nft_project_daily_amount to update.
     */
    where: nft_project_daily_amountWhereUniqueInput
  }

  /**
   * nft_project_daily_amount updateMany
   */
  export type nft_project_daily_amountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nft_project_daily_amounts.
     */
    data: XOR<nft_project_daily_amountUpdateManyMutationInput, nft_project_daily_amountUncheckedUpdateManyInput>
    /**
     * Filter which nft_project_daily_amounts to update
     */
    where?: nft_project_daily_amountWhereInput
    /**
     * Limit how many nft_project_daily_amounts to update.
     */
    limit?: number
  }

  /**
   * nft_project_daily_amount updateManyAndReturn
   */
  export type nft_project_daily_amountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_project_daily_amount
     */
    select?: nft_project_daily_amountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nft_project_daily_amount
     */
    omit?: nft_project_daily_amountOmit<ExtArgs> | null
    /**
     * The data used to update nft_project_daily_amounts.
     */
    data: XOR<nft_project_daily_amountUpdateManyMutationInput, nft_project_daily_amountUncheckedUpdateManyInput>
    /**
     * Filter which nft_project_daily_amounts to update
     */
    where?: nft_project_daily_amountWhereInput
    /**
     * Limit how many nft_project_daily_amounts to update.
     */
    limit?: number
  }

  /**
   * nft_project_daily_amount upsert
   */
  export type nft_project_daily_amountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_project_daily_amount
     */
    select?: nft_project_daily_amountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_project_daily_amount
     */
    omit?: nft_project_daily_amountOmit<ExtArgs> | null
    /**
     * The filter to search for the nft_project_daily_amount to update in case it exists.
     */
    where: nft_project_daily_amountWhereUniqueInput
    /**
     * In case the nft_project_daily_amount found by the `where` argument doesn't exist, create a new nft_project_daily_amount with this data.
     */
    create: XOR<nft_project_daily_amountCreateInput, nft_project_daily_amountUncheckedCreateInput>
    /**
     * In case the nft_project_daily_amount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nft_project_daily_amountUpdateInput, nft_project_daily_amountUncheckedUpdateInput>
  }

  /**
   * nft_project_daily_amount delete
   */
  export type nft_project_daily_amountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_project_daily_amount
     */
    select?: nft_project_daily_amountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_project_daily_amount
     */
    omit?: nft_project_daily_amountOmit<ExtArgs> | null
    /**
     * Filter which nft_project_daily_amount to delete.
     */
    where: nft_project_daily_amountWhereUniqueInput
  }

  /**
   * nft_project_daily_amount deleteMany
   */
  export type nft_project_daily_amountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nft_project_daily_amounts to delete
     */
    where?: nft_project_daily_amountWhereInput
    /**
     * Limit how many nft_project_daily_amounts to delete.
     */
    limit?: number
  }

  /**
   * nft_project_daily_amount without action
   */
  export type nft_project_daily_amountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_project_daily_amount
     */
    select?: nft_project_daily_amountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_project_daily_amount
     */
    omit?: nft_project_daily_amountOmit<ExtArgs> | null
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


  export const Nft_project_daily_amountScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    sale_date: 'sale_date',
    sale_amount: 'sale_amount',
    created_at: 'created_at',
    updated_at: 'updated_at',
    version: 'version',
    deleted_at: 'deleted_at'
  };

  export type Nft_project_daily_amountScalarFieldEnum = (typeof Nft_project_daily_amountScalarFieldEnum)[keyof typeof Nft_project_daily_amountScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type nft_project_daily_amountWhereInput = {
    AND?: nft_project_daily_amountWhereInput | nft_project_daily_amountWhereInput[]
    OR?: nft_project_daily_amountWhereInput[]
    NOT?: nft_project_daily_amountWhereInput | nft_project_daily_amountWhereInput[]
    id?: UuidFilter<"nft_project_daily_amount"> | string
    project_id?: UuidFilter<"nft_project_daily_amount"> | string
    sale_date?: DateTimeFilter<"nft_project_daily_amount"> | Date | string
    sale_amount?: DecimalFilter<"nft_project_daily_amount"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"nft_project_daily_amount"> | Date | string
    updated_at?: DateTimeFilter<"nft_project_daily_amount"> | Date | string
    version?: BigIntFilter<"nft_project_daily_amount"> | bigint | number
    deleted_at?: DateTimeNullableFilter<"nft_project_daily_amount"> | Date | string | null
  }

  export type nft_project_daily_amountOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrder
    sale_date?: SortOrder
    sale_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    version?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type nft_project_daily_amountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: nft_project_daily_amountWhereInput | nft_project_daily_amountWhereInput[]
    OR?: nft_project_daily_amountWhereInput[]
    NOT?: nft_project_daily_amountWhereInput | nft_project_daily_amountWhereInput[]
    project_id?: UuidFilter<"nft_project_daily_amount"> | string
    sale_date?: DateTimeFilter<"nft_project_daily_amount"> | Date | string
    sale_amount?: DecimalFilter<"nft_project_daily_amount"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"nft_project_daily_amount"> | Date | string
    updated_at?: DateTimeFilter<"nft_project_daily_amount"> | Date | string
    version?: BigIntFilter<"nft_project_daily_amount"> | bigint | number
    deleted_at?: DateTimeNullableFilter<"nft_project_daily_amount"> | Date | string | null
  }, "id">

  export type nft_project_daily_amountOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrder
    sale_date?: SortOrder
    sale_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    version?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: nft_project_daily_amountCountOrderByAggregateInput
    _avg?: nft_project_daily_amountAvgOrderByAggregateInput
    _max?: nft_project_daily_amountMaxOrderByAggregateInput
    _min?: nft_project_daily_amountMinOrderByAggregateInput
    _sum?: nft_project_daily_amountSumOrderByAggregateInput
  }

  export type nft_project_daily_amountScalarWhereWithAggregatesInput = {
    AND?: nft_project_daily_amountScalarWhereWithAggregatesInput | nft_project_daily_amountScalarWhereWithAggregatesInput[]
    OR?: nft_project_daily_amountScalarWhereWithAggregatesInput[]
    NOT?: nft_project_daily_amountScalarWhereWithAggregatesInput | nft_project_daily_amountScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"nft_project_daily_amount"> | string
    project_id?: UuidWithAggregatesFilter<"nft_project_daily_amount"> | string
    sale_date?: DateTimeWithAggregatesFilter<"nft_project_daily_amount"> | Date | string
    sale_amount?: DecimalWithAggregatesFilter<"nft_project_daily_amount"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"nft_project_daily_amount"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"nft_project_daily_amount"> | Date | string
    version?: BigIntWithAggregatesFilter<"nft_project_daily_amount"> | bigint | number
    deleted_at?: DateTimeNullableWithAggregatesFilter<"nft_project_daily_amount"> | Date | string | null
  }

  export type nft_project_daily_amountCreateInput = {
    id?: string
    project_id: string
    sale_date: Date | string
    sale_amount?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    version?: bigint | number
    deleted_at?: Date | string | null
  }

  export type nft_project_daily_amountUncheckedCreateInput = {
    id?: string
    project_id: string
    sale_date: Date | string
    sale_amount?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    version?: bigint | number
    deleted_at?: Date | string | null
  }

  export type nft_project_daily_amountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sale_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type nft_project_daily_amountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sale_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type nft_project_daily_amountCreateManyInput = {
    id?: string
    project_id: string
    sale_date: Date | string
    sale_amount?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    version?: bigint | number
    deleted_at?: Date | string | null
  }

  export type nft_project_daily_amountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sale_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type nft_project_daily_amountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sale_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: BigIntFieldUpdateOperationsInput | bigint | number
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

  export type nft_project_daily_amountCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    sale_date?: SortOrder
    sale_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    version?: SortOrder
    deleted_at?: SortOrder
  }

  export type nft_project_daily_amountAvgOrderByAggregateInput = {
    sale_amount?: SortOrder
    version?: SortOrder
  }

  export type nft_project_daily_amountMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    sale_date?: SortOrder
    sale_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    version?: SortOrder
    deleted_at?: SortOrder
  }

  export type nft_project_daily_amountMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    sale_date?: SortOrder
    sale_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    version?: SortOrder
    deleted_at?: SortOrder
  }

  export type nft_project_daily_amountSumOrderByAggregateInput = {
    sale_amount?: SortOrder
    version?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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
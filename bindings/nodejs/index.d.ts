/*
  * Copyright 2021 Datafuse Labs
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *     http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */

/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export class Client {
  constructor(dsn: string)
  info(): Promise<ConnectionInfo>
  version(): Promise<string>
  exec(sql: string): Promise<number>
  queryRow(sql: string): Promise<Row | null>
  queryIter(sql: string): Promise<RowIterator>
  streamLoad(sql: string, file: string, fileFormatOptions?: Array<[string, string]> | undefined | null, copyOptions?: Array<[string, string]> | undefined | null): Promise<QueryProgress>
}
export class ConnectionInfo { }
export class RowIterator { }
export class Row {
  values(): Array<any>
}
export class Value {
  toString(): string
}
export class QueryProgress { }

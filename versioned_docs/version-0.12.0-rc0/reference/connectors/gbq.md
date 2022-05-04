# The `gbq` Connector

The GBQ connector integrates Google BigQuery.


## Configuration

```troy
define connector gbq from gbq
with
    config = {
        "table_id": "projects/tremor/datasets/test/tables/streaming_test",
        "connect_timeout": 10,
        "request_timeout: 10
    }
```

The timeouts are in seconds.

Currently the connector is only a sink - it expects events sent to it to be objects, where the keys match the table field names, and values are the values.
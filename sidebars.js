// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  gettingStartedSidebar: [
    { 
      type: 'doc',
      id: 'getting-started/overview',
      label: 'Getting Started',
    },
    { 'Getting Started': [
      { id: 'getting-started/install', label: 'Install' },
      'getting-started/connectivity',
      'getting-started/tooling',
      'getting-started/codecs',
      'getting-started/scripting',
      'getting-started/specialize',
    ]},
  ],
  communitySidebar: [
    {
      type: 'doc',
      id: 'community/overview',
      label: 'Community',
    },
    { 'Governance': [
        'community/governance/overview',
        'community/governance/CodeofConduct',
        'community/governance/CII',
        'community/governance/Versioning',
        'community/governance/policies/security',
    ]},
    { 'Development': [
        'community/development/overview',
        'community/development/quick-start',
        'community/development/testing',
        'community/development/debugging',
        'community/development/profiling',
        'community/development/benchmarking',
    ]},
    'community/teams',
    { 'EventsAndMedia': [
      'community/events/overview',
      'community/events/TremorCon2021',
    ]},
    'community/faqs',
    'community/case-studies',
  ],

  gettingStartedSidebar: [
    {
      type: 'doc',
      id: 'getting-started/overview',
      label: 'Getting Started',
    },
    'getting-started/about',
    'getting-started/install',
    'getting-started/connectivity',
    'getting-started/tooling',
    'getting-started/codecs',
    'getting-started/scripting',
    'getting-started/specialize'
  ],
  
  connectorsSidebar: [
    {
      type: 'doc',
      id: 'connectors',
      label: 'Connectors Reference',
    },
    'connectors/overview',
    {
        'Facilities': [
	       { 'Codecs': [ 
            'connectors/codecs',
            'connectors/codecs/json',
            'connectors/codecs/yaml',
            'connectors/codecs/csv',
            'connectors/codecs/msgpack',
            'connectors/codecs/string',
            'connectors/codecs/influx',
            'connectors/codecs/binflux',
            'connectors/codecs/statsd',
            'connectors/codecs/syslog',
          ]},
	        'connectors/preprocessors',
          'connectors/postprocessors',
        ]
    }
  ],
  librarySidebar: [
    {
      type: 'doc',
      id: 'library/overview',
      label: 'Overview',
    },
    {'Standard Library': [ 
      { 'std': [ 
        'library/stdlib/std',
        'library/stdlib/std/array',
        'library/stdlib/std/base64',
        'library/stdlib/std/binary',
        'library/stdlib/std/float',
        'library/stdlib/std/integer',
        'library/stdlib/std/json',
        'library/stdlib/std/math',
        'library/stdlib/std/path',
        'library/stdlib/std/random',
        'library/stdlib/std/range',
        'library/stdlib/std/re',
        'library/stdlib/std/record',
        'library/stdlib/std/string',
        'library/stdlib/std/test',
        'library/stdlib/std/type',
        'library/stdlib/std/url',
        'library/stdlib/std/size',
      ]},
      { 'tremor': [
        'library/stdlib/tremor',
        'library/stdlib/tremor/chash',
        'library/stdlib/tremor/origin',
        'library/stdlib/tremor/system',
      ]},
      { 'cncf': [ 
        'library/stdlib/cncf',
        'library/stdlib/cncf/otel',
        'library/stdlib/cncf/otel/span_id',
        'library/stdlib/cncf/otel/trace_id',
        { 'logs': [ 
          'library/stdlib/cncf/otel/logs' ,
          'library/stdlib/cncf/otel/logs/severity',	
          'library/stdlib/cncf/otel/logs/traceflags', 
        ]},
        { 'metrics': [ 
          'library/stdlib/cncf/otel/metrics',
          'library/stdlib/cncf/otel/metrics/temporality',
        ]},
        { 'trace': [
          'library/stdlib/cncf/otel/trace',
          'library/stdlib/cncf/otel/trace/spankind',
          'library/stdlib/cncf/otel/trace/status',
        ]},
      ]},
      { 'aggr': [ 
        'library/aggr',
        'library/aggr/stats',
        'library/aggr/win',
      ]},
]},
  ],

  languageSidebar: [
   {
      type: 'doc',
      id: 'language',
      label: 'Language Reference',
   },
   {
      'Features': [ 
        'features', 
        {'Querying': [
          'queries/overview',
          'queries/operators',
          'queries/walkthrough',
          'queries/recipes',
        ]},
        {'Scripting': [
          'scripts/overview',
          'scripts/recipes',
        ]},
        {'Extractors': [
          'extractors/overview',
          'extractors/base64',
          'extractors/cidr',
          'extractors/datetime',
          'extractors/dissect',
          'extractors/glob',
          'extractors/grok',
          'extractors/influx',
          'extractors/json',
          'extractors/kv',
          'extractors/regex',
        ]},
        {'Functional Programming': [
          'functions/overview',
        ]},
      ],
      'Reference': [ 
        'language/ModuleSystem', 
        'language/Deploy', 
        'language/Query', 
        'language/Script', 
        'language/Full', 
        'language/EBNF'
      ],
   },
  ],
  recipesSidebar: [
    {
      type: 'doc',
      id: 'recipes/overview',
      label: 'Recipes',
    },
    { 'Basic': [
      'recipes/passthrough/index',
      'recipes/filter/index',
      'recipes/transform/index',
      'recipes/validate/index',
    ]},
    { 'Messaging': [
      'recipes/kafka_elastic_correlation/index',
      'recipes/redpanda_elastic_correlation/index',  
      'recipes/kafka_gd/index',
      'recipes/redpanda_gd/index',
      'recipes/amqp_rabbitmq/index',
    ]},
    { 'Observability': [
      { 'OpenTelemetry': [
        'recipes/otel_elastic_apm/index',
        'recipes/otel_passthrough/index',
        'recipes/otel_zipkin/index',
        'recipes/otel_jaeger/index',
        'recipes/otel_prometheus/index',
      ]},
      { 'ELK': [
        'recipes/otel_elastic_apm/index',
        'recipes/logstash/index',
      ]},
      // { 'Grafana': [
        'recipes/grafana/index',
      // ]},

    ]},
    { 'Design Patterns': [
      'recipes/polling_alerts/index',
      'recipes/quota_service/index',
      'recipes/configurator/index',  
    ]},
    { 'Time Series Database': [
      'recipes/influx/index',
      'recipes/postgres_timescaledb/index',
    ]},
    { 'Syslog': [
      'recipes/syslog_udp/index',
      'recipes/syslog_udp_dns/index',
    ]},
    { 'HTTP & WebSockets': [
      'recipes/servers_lt_http/index',
      'recipes/servers_lt_ws/index',
      'recipes/proxies_lt_http/index',
      'recipes/proxies_lt_ws/index',
      'recipes/bridges_lt_http_ws/index',
      'recipes/reverse_proxy_load_balancing/index',
    ]},
    { 'Guaranteed Delivery': [
      'recipes/transient_gd/index',
      'recipes/persistent_gd/index',
    ]},
    { 'Distribution': [
      'recipes/roundrobin/index',
    ]},
  ],
};

module.exports = sidebars;

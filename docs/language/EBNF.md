## EBNF Grammar

This EBNF grammar was generated from: "./tremor-runtime/tremor-script/src/grammar.lalrpop"

```ebnf


rule Query ::=
    ConfigDirectives Stmts  '<end-of-stream>' ?  
  | Stmts  '<end-of-stream>' ?  
  ;

rule ConfigDirectives ::=
    ConfigDirective ConfigDirectives 
  | ConfigDirective 
  ;

rule ConfigDirective ::=
     '#!config' WithExpr 
  ;

rule Stmts ::=
    Stmt  ';' Stmts 
  | Stmt  ';' ?  
  ;

rule ModuleStmt ::=
     'mod' Ident  'with' ModComment ModuleStmts  'end' 
  ;

rule ModuleStmts ::=
    ModuleInnerStmt  ';' ModuleStmts 
  | ModuleInnerStmt  ';' ?  
  ;

rule ModuleInnerStmt ::=
    ModuleStmt 
  |  'define' WindowKind  'window' Ident WithScriptClause 
  |  'define' OperatorKind  'operator' Ident WithClause 
  |  'define' OperatorKind  'operator' Ident 
  |  'define'  'script' Ident ScriptWithClause EmbeddedScript 
  |  'define'  'script' Ident EmbeddedScript 
  | Const 
  | FnDecl 
  | Intrinsic 
  ;

rule WindowKind ::=
     'sliding' 
  |  'tumbling' 
  ;

rule Stmt ::=
    ModuleStmt 
  |  'define' WindowKind  'window' Ident WithScriptClause 
  |  'define' OperatorKind  'operator' Ident WithClause 
  |  'define' OperatorKind  'operator' Ident 
  |  'define'  'script' Ident ScriptWithClause EmbeddedScript 
  |  'define'  'script' Ident EmbeddedScript 
  |  'create'  'stream' Ident 
  |  'create'  'operator' Ident  'from' ModularTarget WithClause 
  |  'create'  'operator' Ident  'from' ModularTarget 
  |  'create'  'operator' Ident WithClause 
  |  'create'  'operator' Ident 
  |  'create'  'script' Ident  'from' ModularTarget WithClause 
  |  'create'  'script' Ident  'from' ModularTarget 
  |  'create'  'script' Ident WithClause 
  |  'create'  'script' Ident 
  |  'select' ComplexExprImut  'from' StreamPort WindowClause WhereClause GroupByClause  'into' StreamPort HavingClause 
  ;

rule MaybePort ::=
    (  '/' Ident ) ?  
  ;

rule ModularTarget ::=
    Ident 
  | ModPath  '::' Ident 
  ;

rule StreamPort ::=
    Ident MaybePort 
  ;

rule WindowClause ::=
    ( WindowDefn ) ?  
  ;

rule Window ::=
    Ident 
  | ModPath  '::' Ident 
  ;

rule Windows ::=
    Windows_ 
  ;

rule Windows_ ::=
    Sep!(Windows_, Window, ",") 
  ;

rule WindowDefn ::=
     '[' Windows  ']' 
  ;

rule WhereClause ::=
    (  'where' ComplexExprImut ) ?  
  ;

rule HavingClause ::=
    (  'having' ComplexExprImut ) ?  
  ;

rule GroupByClause ::=
    (  'group'  'by' GroupDef ) ?  
  ;

rule GroupDef ::=
    ExprImut 
  |  'set'  '(' GroupDefs  ')' 
  |  'each'  '(' ExprImut  ')' 
  ;

rule GroupDefs ::=
    GroupDefs_ 
  ;

rule GroupDefs_ ::=
    Sep!(GroupDefs_, GroupDef, ",") 
  ;

rule EmbeddedScriptImut ::=
    (  'script' EmbeddedScriptContent ) ?  
  ;

rule EmbeddedScriptContent ::=
    ExprImut 
  ;

rule WithScriptClause ::=
     'with' WithExprs EmbeddedScriptImut  'end' 
  ;

rule WithClause ::=
    ScriptWithClause  'end' 
  ;

rule ScriptWithClause ::=
     'with' WithExprs 
  ;

rule WithExprs ::=
    WithExprs_ 
  ;

rule WithExprs_ ::=
    Sep!(WithExprs_, WithExpr, ",") 
  ;

rule WithExpr ::=
    Ident  '=' ExprImut 
  ;

rule OperatorKind ::=
    Ident  '::' Ident 
  ;

rule EmbeddedScript ::=
     'script' Exprs  'end' 
  ;

rule Script ::=
    ModComment Exprs  '<end-of-stream>' ?  
  ;

rule ModComment ::=
    ( ModComment_ ) ?  
  ;

rule ModComment_ ::=
     '<mod-comment>' 
  | ModComment_  '<mod-comment>' 
  ;

rule Exprs ::=
    MayBeConstExpr  ';' Exprs 
  | MayBeConstExpr  ';' ?  
  ;

rule MayBeConstExpr ::=
    Const 
  | FnDecl 
  | Intrinsic 
  | Module 
  | Expr 
  ;

rule Const ::=
    DocComment  'const' Ident  '=' SimpleExprImut 
  ;

rule DocComment ::=
    ( DocComment_ ) ?  
  ;

rule DocComment_ ::=
     '<doc-comment>' 
  | DocComment_  '<doc-comment>' 
  ;

rule Expr ::=
    SimpleExpr 
  ;

rule SimpleExpr ::=
    Match 
  | For 
  | Let 
  | Drop 
  | Emit 
  | ExprImut 
  ;

rule AlwaysImutExpr ::=
    Patch 
  | Merge 
  | Invoke 
  | Literal 
  | Path 
  | Record 
  | List 
  | StringLiteral 
  | BytesLiteral 
  | Recur 
  ;

rule Recur ::=
     'recur'  '('  ')' 
  |  'recur'  '(' InvokeArgs  ')' 
  ;

rule ExprImut ::=
    OrExprImut 
  ;

rule OrExprImut ::=
    BinOp!(BinOr, ExprImut, XorExprImut) 
  | XorExprImut 
  ;

rule XorExprImut ::=
    BinOp!(BinXor, XorExprImut, AndExprImut) 
  | AndExprImut 
  ;

rule AndExprImut ::=
    BinOp!(BinAnd, AndExprImut, BitOrExprImut) 
  | BitOrExprImut 
  ;

rule BitOrExprImut ::=
    BitXorExprImut 
  ;

rule BitXorExprImut ::=
    BinOp!(BinBitXor, BitXorExprImut, BitAndExprImut) 
  | BitAndExprImut 
  ;

rule BitAndExprImut ::=
    BinOp!(BinBitAnd, BitAndExprImut, EqExprImut) 
  | EqExprImut 
  ;

rule EqExprImut ::=
    BinOp!(BinEq, EqExprImut, CmpExprImut) 
  | CmpExprImut 
  ;

rule CmpExprImut ::=
    BinOp!(BinCmp, CmpExprImut, BitShiftExprImut) 
  | BitShiftExprImut 
  ;

rule BitShiftExprImut ::=
    BinOp!(BinBitShift, BitShiftExprImut, AddExprImut) 
  | AddExprImut 
  ;

rule AddExprImut ::=
    BinOp!(BinAdd, AddExprImut, MulExprImut) 
  | MulExprImut 
  ;

rule MulExprImut ::=
    BinOp!(BinMul, MulExprImut, UnaryExprImut) 
  | UnaryExprImut 
  ;

rule UnaryExprImut ::=
     '+' UnaryExprImut 
  |  '-' UnaryExprImut 
  | UnarySimpleExprImut 
  ;

rule UnarySimpleExprImut ::=
     'not' UnarySimpleExprImut 
  |  '!' UnarySimpleExprImut 
  | PresenceSimplExprImut 
  ;

rule PresenceSimplExprImut ::=
     'present' Path 
  |  'absent' Path 
  | SimpleExprImut 
  ;

rule ComplexExprImut ::=
    MatchImut 
  | ForImut 
  | ExprImut 
  ;

rule Intrinsic ::=
    DocComment  'intrinsic'  'fn' Ident  '('  ')'  'as' ModularTarget 
  | DocComment  'intrinsic'  'fn' Ident  '(' FnArgs  ')'  'as' ModularTarget 
  | DocComment  'intrinsic'  'fn' Ident  '(' FnArgs  ','  '.'  '.'  '.'  ')'  'as' ModularTarget 
  | DocComment  'intrinsic'  'fn' Ident  '('  '.'  '.'  '.'  ')'  'as' ModularTarget 
  ;

rule Module ::=
     'mod' Ident  'with' ModComment ModuleExprs  'end' 
  ;

rule ModuleExprs ::=
    ModuleExpr  ';' ModuleExprs 
  | ModuleExpr  ';' ?  
  ;

rule ModuleExpr ::=
    Const 
  | FnDecl 
  | Intrinsic 
  | Module 
  ;

rule FnDecl ::=
    DocComment  'fn' Ident  '('  '.'  '.'  '.'  ')'  'with' Exprs  'end' 
  | DocComment  'fn' Ident  '(' FnArgs  ','  '.'  '.'  '.'  ')'  'with' Exprs  'end' 
  | DocComment  'fn' Ident  '('  ')'  'with' Exprs  'end' 
  | DocComment  'fn' Ident  '(' FnArgs  ')'  'with' Exprs  'end' 
  | DocComment  'fn' Ident  '('  ')'  'of' FnCases  'end' 
  | DocComment  'fn' Ident  '(' FnArgs  ')'  'of' FnCases  'end' 
  ;

rule FnCases ::=
    FnCaseClauses FnCaseDefault 
  | FnCaseDefault 
  ;

rule FnCaseDefault ::=
     'default' Effectors 
  ;

rule FnCase ::=
     'case'  '(' ArrayPredicatePatterns  ')' WhenClause Effectors 
  ;

rule FnCaseClauses ::=
    FnCase 
  | FnCaseClauses FnCase 
  ;

rule FnArgs ::=
    Ident 
  | FnArgs  ',' Ident 
  ;

rule SimpleExprImut ::=
     '(' ComplexExprImut  ')' 
  | AlwaysImutExpr 
  ;

rule Literal ::=
    Nil 
  | Bool 
  | Int 
  | Float 
  ;

rule Nil ::=
     'nil' 
  ;

rule Bool ::=
     'bool' 
  ;

rule Int ::=
     'int' 
  ;

rule Float ::=
     'float' 
  ;

rule StringLiteral ::=
     'heredoc_start' StrLitElements  'heredoc_end' 
  |  '\\' StrLitElements  '\\' 
  |  '\\'  '\\' 
  ;

rule StrLitElements ::=
    StringPart StrLitElements 
  |  '\\\\#' StrLitElements 
  |  '#{' ExprImut  '}' StrLitElements 
  | StringPart 
  |  '\\\\#' 
  |  '#{' ExprImut  '}' 
  ;

rule StringPart ::=
     'string' 
  |  'heredoc' 
  ;

rule List ::=
     '[' ListElements  ']' 
  |  '['  ']' 
  ;

rule ListElements ::=
    ListElements_ 
  ;

rule ListElements_ ::=
    Sep!(ListElements_, ComplexExprImut, ",") 
  ;

rule Record ::=
     '{' Fields  '}' 
  |  '{'  '}' 
  ;

rule Field ::=
    StringLiteral  ':' ComplexExprImut 
  ;

rule Path ::=
    MetaPath 
  | EventPath 
  | StatePath 
  | LocalPath 
  | ConstPath 
  | AggrPath 
  | ArgsPath 
  | ExprPath 
  ;

rule ExprPathRoot ::=
     '(' ComplexExprImut  ')' 
  | Invoke 
  | Record 
  | List 
  ;

rule ExprPath ::=
    ExprPathRoot PathSegments 
  ;

rule MetaPath ::=
     '$' PathSegment PathSegments 
  |  '$' PathSegment 
  |  '$' 
  ;

rule AggrPath ::=
     'group' PathSegments 
  |  'group' 
  |  'window' PathSegments 
  |  'window' 
  ;

rule ArgsPath ::=
     'args' PathSegments 
  |  'args' 
  ;

rule LocalPath ::=
    PathSegment PathSegments 
  | PathSegment 
  ;

rule ConstPath ::=
    ModPath  '::' LocalPath 
  ;

rule StatePath ::=
     'state' PathSegments 
  |  'state' 
  ;

rule EventPath ::=
     'event' PathSegments 
  |  'event' 
  ;

rule PathSegments ::=
     '.' PathSegment PathSegments 
  |  '[' Selector  ']' PathSegments 
  |  '[' Selector  ']' 
  |  '.' PathSegment 
  ;

rule PathSegment ::=
    Ident 
  ;

rule Selector ::=
    ComplexExprImut  ':' ComplexExprImut 
  | ComplexExprImut 
  ;

rule Invoke ::=
    FunctionName  '(' InvokeArgs  ')' 
  | FunctionName  '('  ')' 
  ;

rule FunctionName ::=
    Ident 
  | ModPath  '::' Ident 
  ;

rule ModPath ::=
    ModPath  '::' Ident 
  | Ident 
  ;

rule InvokeArgs ::=
    InvokeArgs_ 
  ;

rule InvokeArgs_ ::=
    Sep!(InvokeArgs_, ComplexExprImut, ",") 
  ;

rule Drop ::=
     'drop' 
  ;

rule Emit ::=
     'emit' ComplexExprImut  '=>' StringLiteral 
  |  'emit' ComplexExprImut 
  |  'emit'  '=>' StringLiteral 
  |  'emit' 
  ;

rule Let ::=
     'let' Assignment 
  ;

rule Assignment ::=
    Path  '=' SimpleExpr 
  ;

rule Patch ::=
     'patch' ComplexExprImut  'of' PatchOperations  'end' 
  ;

rule PatchOperations ::=
    PatchOperationClause 
  | PatchOperations  ',' PatchOperationClause 
  ;

rule PatchField ::=
    StringLiteral 
  ;

rule PatchOperationClause ::=
     'insert' PatchField  '=>' ComplexExprImut 
  |  'upsert' PatchField  '=>' ComplexExprImut 
  |  'update' PatchField  '=>' ComplexExprImut 
  |  'erase' PatchField 
  |  'move' PatchField  '=>' PatchField 
  |  'copy' PatchField  '=>' PatchField 
  |  'merge' PatchField  '=>' ComplexExprImut 
  |  'merge'  '=>' ComplexExprImut 
  |  'default' PatchField  '=>' ComplexExprImut 
  |  'default'  '=>' ComplexExprImut 
  ;

rule Merge ::=
     'merge' ComplexExprImut  'of' ComplexExprImut  'end' 
  ;

rule For ::=
     'for' ComplexExprImut  'of' ForCaseClauses  'end' 
  ;

rule ForCaseClauses ::=
    ForCaseClause 
  | ForCaseClauses ForCaseClause 
  ;

rule ForCaseClause ::=
     'case'  '(' Ident  ',' Ident  ')' WhenClause Effectors 
  ;

rule ForImut ::=
     'for' ComplexExprImut  'of' ForCaseClausesImut  'end' 
  ;

rule ForCaseClausesImut ::=
    ForCaseClauseImut 
  | ForCaseClausesImut ForCaseClauseImut 
  ;

rule ForCaseClauseImut ::=
     'case'  '(' Ident  ',' Ident  ')' WhenClause EffectorsImut 
  ;

rule Match ::=
     'match' ComplexExprImut  'of' Predicates  'end' 
  ;

rule Predicates ::=
    PredicateClause 
  | Predicates PredicateClause 
  ;

rule PredicateClause ::=
     'case' CasePattern WhenClause Effectors 
  |  'default' Effectors 
  ;

rule Effectors ::=
     '=>' Block 
  ;

rule Block ::=
    Expr 
  | Block  ',' Expr 
  ;

rule MatchImut ::=
     'match' ComplexExprImut  'of' PredicatesImut  'end' 
  ;

rule PredicatesImut ::=
    PredicateClauseImut 
  | PredicatesImut PredicateClauseImut 
  ;

rule CasePattern ::=
    RecordPattern 
  | ArrayPattern 
  | TuplePattern 
  | ComplexExprImut 
  |  '_' 
  |  '~' TestExpr 
  | Ident  '=' CasePattern 
  ;

rule PredicateClauseImut ::=
     'case' CasePattern WhenClause EffectorsImut 
  |  'default' EffectorsImut 
  ;

rule EffectorsImut ::=
     '=>' BlockImut 
  ;

rule BlockImut ::=
    ComplexExprImut 
  | BlockImut  ',' ComplexExprImut 
  ;

rule WhenClause ::=
    (  'when' ComplexExprImut ) ?  
  ;

rule PredicateFieldPattern ::=
    Ident  '~=' TestExpr 
  | Ident  '=' Ident  '~=' TestExpr 
  | Ident  '~=' RecordPattern 
  | Ident  '~=' ArrayPattern 
  |  'present' Ident 
  |  'absent' Ident 
  | Ident BinCmpEq ComplexExprImut 
  ;

rule TestExpr ::=
    Ident TestLiteral 
  ;

rule RecordPattern ::=
     '%{' PatternFields  '}' 
  |  '%{'  '}' 
  ;

rule ArrayPattern ::=
     '%[' ArrayPredicatePatterns  ']' 
  |  '%['  ']' 
  ;

rule TuplePattern ::=
     '%(' TuplePredicatePatterns OpenTuple  ')' 
  |  '%('  ')' 
  |  '%('  '.'  '.'  '.'  ')' 
  ;

rule OpenTuple ::=
    (  ','  '.'  '.'  '.' ) ?  
  ;

rule TuplePredicatePatterns ::=
    TuplePredicatePatterns  ',' TuplePredicatePattern 
  | TuplePredicatePattern 
  ;

rule TuplePredicatePattern ::=
    ArrayPredicatePattern 
  ;

rule ArrayPredicatePattern ::=
     '~' TestExpr 
  |  '_' 
  | ComplexExprImut 
  | RecordPattern 
  ;

rule ArrayPredicatePatterns ::=
    ArrayPredicatePatterns  ',' ArrayPredicatePattern 
  | ArrayPredicatePattern 
  ;

rule PatternFields ::=
    PatternFields_ 
  ;

rule PatternFields_ ::=
    Sep!(PatternFields_, PredicateFieldPattern, ",") 
  ;

rule Fields ::=
    Fields_ 
  ;

rule Fields_ ::=
    Sep!(Fields_, Field, ",") 
  ;

rule Ident ::=
     '<ident>' 
  ;

rule TestLiteral ::=
     '<extractor>' 
  ;

rule BytesLiteral ::=
     '<<'  '>>' 
  |  '<<' Bytes  '>>' 
  ;

rule Bytes ::=
    BytesPart 
  | Bytes  ',' BytesPart 
  ;

rule BytesPart ::=
    SimpleExprImut 
  | SimpleExprImut  ':'  'int' 
  | SimpleExprImut  '/' Ident 
  | SimpleExprImut  ':'  'int'  '/' Ident 
  ;

macro Sep<L, T, D> ::=
    T D L 
  | T D ?  
  ;

macro BinOp<Op, Current, Next> ::=
    ( Current ) ( Op ) Next 
  ;

rule BinCmpEq ::=
    BinEq 
  | BinCmp 
  ;

rule BinOr ::=
     'or' 
  ;

rule BinXor ::=
     'xor' 
  ;

rule BinAnd ::=
     'and' 
  ;

rule BinBitXor ::=
     '^' 
  ;

rule BinBitAnd ::=
     '&' 
  ;

rule BinEq ::=
     '==' 
  |  '!=' 
  ;

rule BinCmp ::=
     '>=' 
  |  '>' 
  |  '<=' 
  |  '<' 
  ;

rule BinBitShift ::=
     '>>' 
  |  '>>>' 
  |  '<<' 
  ;

rule BinAdd ::=
     '+' 
  |  '-' 
  ;

rule BinMul ::=
     '*' 
  |  '/' 
  |  '%' 
  ;

```

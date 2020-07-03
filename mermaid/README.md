# Mermaid

When working at Datopian I want to use mermaid to do diagrams to sketch processes and systems so that I can communicate effectively with others in a text based format we can use on our markdown-based sites.

https://mermaid-js.github.io/mermaid/

## Color coding

```mermaid
graph TD

subgraph Key
  done[Done]
  nearlydone[Nearly Done]
  inprogress[In Progress]
  next[Next Up]
end

classDef done fill:#21bf73,stroke:#333,stroke-width:1px;
classDef nearlydone fill:lightgreen,stroke:#333,stroke-width:1px;
classDef inprogress fill:orange,stroke:#333,stroke-width:1px;
classDef next fill:lightblue,stroke:#333,stroke-width:1px;

class done done;
class nearlydone nearlydone;
class inprogress inprogress;
class next next;
```

```
graph TD

subgraph Key
  done[Done]
  nearlydone[Nearly Done]
  inprogress[In Progress]
  next[Next Up]
end

classDef done fill:#21bf73,stroke:#333,stroke-width:1px;
classDef nearlydone fill:lightgreen,stroke:#333,stroke-width:1px;
classDef inprogress fill:orange,stroke:#333,stroke-width:1px;
classDef next fill:lightblue,stroke:#333,stroke-width:1px;

class done done;
class nearlydone nearlydone;
class inprogress inprogress;
class next next;
```

## Curved Link Styles

```mermaid
graph TD

  linkStyle default interpolate basis

  A[Christmas] -->|Get money| B(Go shopping)
  B --> C[(Let me think)]
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[fa:fa-car Car]
  
  B --> s[Something else]
```

<mermaid />

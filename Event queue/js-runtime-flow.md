```mermaid
flowchart TD
    subgraph Call_Stack
        A[["Call Stack"]]
    end

    subgraph Web_APIs
        B[["Web APIs (setTimeout, DOM, fetch)"]]
    end

    subgraph Event_Loop
        C[["Event Loop"]]
    end

    subgraph Queues
        D["Task Queue (setTimeout callbacks)"]
        E["Microtask Queue (Promises, queueMicrotask)"]
    end

    %% Initial flow
    F["1 - console.log('before setTimeout')"] --> A
    A --> |"2a"|G["setTimeout(5s)"] --> B
    A --> |"2b"|H["setTimeout(1s)"] --> B
    A --> |"3"|I["wait(7000) Blocks for 7 seconds"] 
    
    %% After wait logs
    I --> |"4"|J["console.log('finish waiting')"]
    J --> |"5"|K["console.log('After wait call')"]
    
    %% Timer callbacks to queue
    B --> |"6a After 1s (but waits)"|D
    B --> |"6b After 5s (but waits)"|D
    
    %% Event loop checking queues
    C --> |"7 Check Microtasks"|E
    C --> |"8 Check TaskQueue"|D
    
    %% Final execution order
    D --> |"9 Execute callbacks"|A
    A --> |"10a"|L["console.log('in 1 second timer')"]
    A --> |"10b"|M["console.log('in 5 seconds timer')"]

    style Call_Stack fill:#712,stroke:#000,stroke-width:2px
    style Web_APIs fill:#97b,stroke:#000,stroke-width:2px
    style Event_Loop fill:#190,stroke:#000,stroke-width:2px
    style Queues fill:#8AF,stroke:#000,stroke-width:2px

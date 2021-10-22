function switch(n, ...)
    for _,v in ipairs {...} do
        if v[1] == n or v[1] == nil then
            return v[2]()
        end
    end
end

function case(n, f) return {n, f} end
function default(f) return {nil, f} end

local actionNumber = 2
switch(actionNumber,
    case(1, 
        function()
        print("example #1")
    end),

    case(2, 
        function()
        print("example #2")
    end),

    case(3, 
        function()
        print("example #3")
    end),

    default(
        function() 
        print("default example") 
    end)
)
add_library(hello SHARED hello.cpp)

add_executable(bin_main main.cpp) 
target_link_libraries(bin_main
                      hello
                      blah)


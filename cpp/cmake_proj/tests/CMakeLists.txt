add_subdirectory(/usr/src/gtest
                 ${PROJECT_BINARY_DIR}/gtest)

include(CTest)

add_executable(test_hello test_hello.cpp)
target_link_libraries(test_hello 
                      gtest gtest_main)

add_test(test_hello test/test_hello)
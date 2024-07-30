import React, { useState, useEffect, useCallback } from 'react'
import {
  Button,
  Box,
  Flex,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Radio,
  RadioGroup,
  HStack,
  VStack,
} from '@chakra-ui/react'

export default function ConfigArea(props) {
  const { oneRM, setOneRM, cycle, setCycle, renderTableData, unit, setUnit } =
    props

  const [rules, setRules] = useState({
    oneRM: {
      value: 0,
      rule: (val) => {
        return typeof val === 'number' && !isNaN(val)
      },
    },
    unit: {
      value: 'kg',
      rule: (val) => {
        return true
      },
    },
    cycleCount: {
      value: 1,
      rule: (val) => {
        return typeof val === 'number' && !isNaN(val)
      },
    },
    progressiveOverloadWeekCount: {
      value: 0,
      rule: (val) => {
        return typeof val === 'number' && !isNaN(val)
      },
    },
    deloadWeekCount: {
      value: 0,
      rule: (val) => {
        return typeof val === 'number' && !isNaN(val)
      },
    },
    isdeloadWeekBreak: {
      value: false,
      rule: (val) => {
        return true
      },
    },
    group: {
      value: [],
      rule: (val) => {
        return true
      },
    },
    count: {
      value: [],
      rule: (val) => {
        return true
      },
    },
    buffer: {
      value: 0,
      rule: (val) => {
        return true
      },
    },
    lightTrainingDegree: {
      value: 0,
      rule: (val) => {
        return true
      },
    },
    overloadIncreaseDegree: {
      value: [],
      rule: (val) => {
        return true
      },
    },
    deloadDegree: {
      value: [],
      rule: (val) => {
        return true
      },
    },
  })

  const verifyRuleHandler = (key) => {
    const func = rules[key]?.rule
    const value = rules[key]?.value
    console.log('value: ', value)
    return func(value)
  }

  useEffect(() => {
    renderTableData()
  }, [])

  useEffect(() => {
    renderTableData()
  }, [cycle])

  // useEffect(() => {}, [rules.cycleCount.value])

  const handler = () => {
    const input = rules?.oneRM?.value

    if (verifyRuleHandler('oneRM')) {
      setOneRM(input)
    }
  }

  const deloadWeekIndex = useCallback(() => {
    const overLoadCount = rules.progressiveOverloadWeekCount.value
    return new Array(rules.deloadWeekCount.value)
      .fill()
      ?.map((x, i) => overLoadCount + i)
  }, [rules.progressiveOverloadWeekCount.value, rules.deloadWeekCount.value])

  const getWeekLabel = (index) => {
    const isDeloadWeek = deloadWeekIndex()?.includes(index)
    const currentDeloadWeekIdx = deloadWeekIndex().findIndex((x) => x === index)
    const deloadStart = deloadWeekIndex()[0]

    if (rules.isdeloadWeekBreak.value) {
      return isDeloadWeek
        ? `W-${deloadStart + 1}.${currentDeloadWeekIdx + 1}`
        : `W-${index + 1}`
    } else {
      return `W-${index + 1}`
    }
  }

  return (
    <VStack spacing="24px" align="normal">
      <Box p="24px" display="flex" flexDirection="column" gap="20px">
        <HStack spacing="20px">
          {/* <RadioGroup onChange={setCycle} value={cycle}>
          请选择中周期阶段：
          <Stack direction="row">
            <Radio value="mxs-1">mxs-1</Radio>
            <Radio value="mxs-2">mxs-2</Radio>
          </Stack>
        </RadioGroup> */}
          <RadioGroup onChange={setUnit} value={unit}>
            请选择重量单位：
            <Stack direction="row">
              <Radio value="kg">kg</Radio>
              <Radio value="lb">lb</Radio>
            </Stack>
          </RadioGroup>
        </HStack>
        <HStack spacing="20px">
          <Box w="25%">
            <FormControl>
              <FormLabel>请输入目标动作 1RM 的重量</FormLabel>
              <NumberInput
                defaultValue={0}
                value={rules.oneRM.value}
                min={0}
                max={500}
                onChange={(valueAsString, valueAsNumber) =>
                  setRules((prev) => {
                    return {
                      ...prev,
                      oneRM: {
                        ...prev.oneRM,
                        value: valueAsNumber,
                      },
                    }
                  })
                }>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </Box>
          <Box w="25%">
            <FormControl>
              <FormLabel>请输入中周期循环次数</FormLabel>
              <NumberInput
                defaultValue={1}
                value={rules.cycleCount.value}
                min={1}
                max={10}
                onChange={(valueAsString, valueAsNumber) =>
                  setRules((prev) => {
                    return {
                      ...prev,
                      cycleCount: {
                        ...prev.cycleCount,
                        value: valueAsNumber,
                      },
                    }
                  })
                }>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </Box>
          <Box w="25%">
            <FormControl>
              <FormLabel>请输入中周期渐进超负荷周数</FormLabel>
              <NumberInput
                defaultValue={0}
                value={rules.progressiveOverloadWeekCount.value}
                min={0}
                max={500}
                onChange={(valueAsString, valueAsNumber) =>
                  setRules((prev) => {
                    return {
                      ...prev,
                      progressiveOverloadWeekCount: {
                        ...prev.progressiveOverloadWeekCount,
                        value: valueAsNumber,
                      },
                    }
                  })
                }>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </Box>

          <Box w="25%">
            <FormControl>
              <FormLabel>请输入中周期减载周数</FormLabel>
              <NumberInput
                defaultValue={0}
                value={rules.deloadWeekCount.value}
                min={0}
                max={500}
                onChange={(valueAsString, valueAsNumber) =>
                  setRules((prev) => {
                    return {
                      ...prev,
                      deloadWeekCount: {
                        ...prev.deloadWeekCount,
                        value: valueAsNumber,
                      },
                    }
                  })
                }>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </Box>
        </HStack>
        <HStack spacing="20px">
          <Box>
            <FormControl>
              <FormLabel>请输入中周期目标动作组数</FormLabel>
              {new Array(rules.cycleCount.value).fill().map((c, cIdx) => (
                <Flex justify="space-between" gap="8px" key={cIdx}>
                  {rules.progressiveOverloadWeekCount.value +
                    rules.deloadWeekCount.value >
                  0
                    ? new Array(
                        rules.progressiveOverloadWeekCount.value +
                          rules.deloadWeekCount.value,
                      )
                        .fill()
                        .map((x, i) => (
                          <VStack key={i} align="normal">
                            <span>
                              {`循环${cIdx + 1}`}-{getWeekLabel(i)}
                            </span>
                            <NumberInput
                              defaultValue={0}
                              value={rules.group.value[i]}
                              min={0}
                              max={500}
                              onChange={(valueAsString, valueAsNumber) =>
                                setRules((prev) => {
                                  return {
                                    ...prev,
                                    group: {
                                      ...prev.group,
                                      value: prev.group.value.map((g, idx) => {
                                        if (idx === i) {
                                          g = valueAsNumber
                                        }
                                        return g
                                      }),
                                    },
                                  }
                                })
                              }>
                              <NumberInputField />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                          </VStack>
                        ))
                    : '请在上方输入中周期超负荷/减载周数'}
                </Flex>
              ))}

              {/* {
              Array.from({ length: rules.progressiveOverloadWeekCount.value +
                rules.isdeloadWeekBreak }, () => new Array(n).fill(false))
            } */}
            </FormControl>
          </Box>
        </HStack>
        <HStack spacing="20px">
          <Box>
            <FormControl>
              <FormLabel>请输入中周期目标动作次数</FormLabel>
              {new Array(rules.cycleCount.value).fill().map((c, cIdx) => (
                <Flex key={cIdx} justify="space-between" gap="8px">
                  {rules.progressiveOverloadWeekCount.value +
                    rules.deloadWeekCount.value >
                  0
                    ? new Array(
                        rules.progressiveOverloadWeekCount.value +
                          rules.deloadWeekCount.value,
                      )
                        .fill()
                        .map((x, i) => (
                          <VStack key={i} align="normal">
                            <span>
                              {`循环${cIdx + 1}`}-{getWeekLabel(i)}
                            </span>

                            <NumberInput
                              defaultValue={0}
                              value={rules.count.value[i]}
                              min={0}
                              max={500}
                              onChange={(valueAsString, valueAsNumber) =>
                                setRules((prev) => {
                                  return {
                                    ...prev,
                                    count: {
                                      ...prev.count,
                                      value: prev.count.value.map((g, idx) => {
                                        if (idx === i) {
                                          g = valueAsNumber
                                        }
                                        return g
                                      }),
                                    },
                                  }
                                })
                              }>
                              <NumberInputField />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                          </VStack>
                        ))
                    : '请在上方输入中周期超负荷/减载周数'}
                </Flex>
              ))}
            </FormControl>
          </Box>
        </HStack>
        <HStack spacing="20px">
          <Box>
            <FormControl>
              <FormLabel>减载周是否分段</FormLabel>
              <RadioGroup
                onChange={(val) =>
                  setRules((prev) => {
                    return {
                      ...prev,
                      isdeloadWeekBreak: {
                        ...prev.isdeloadWeekBreak,
                        value: val === '1',
                      },
                    }
                  })
                }
                value={rules.isdeloadWeekBreak.value === true ? '1' : '0'}>
                若分段代表减载周数为 1 周，生成分段减载周 W-X.1 W-X.2 ...
                <Stack direction="row">
                  <Radio value="1">是</Radio>
                  <Radio value="0">否</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </Box>
        </HStack>
        <HStack spacing="20px">
          <FormControl>
            <FormLabel>请输入中周期渐进超负荷强度递增比率</FormLabel>
            {new Array(rules.cycleCount.value).fill().map((c, cIdx) => (
              <Flex gap="8px" key={cIdx}>
                {rules.progressiveOverloadWeekCount.value > 0
                  ? new Array(rules.progressiveOverloadWeekCount.value)
                      .fill()
                      .map((x, i) => (
                        <VStack key={i} align="normal">
                          <span>
                            {`循环${cIdx + 1}`}-{getWeekLabel(i)}
                          </span>
                          <NumberInput
                            defaultValue={0}
                            value={rules.overloadIncreaseDegree.value[i]}
                            min={0}
                            max={500}
                            onChange={(valueAsString, valueAsNumber) =>
                              setRules((prev) => {
                                return {
                                  ...prev,
                                  overloadIncreaseDegree: {
                                    ...prev.overloadIncreaseDegree,
                                    value:
                                      prev.overloadIncreaseDegree.value.map(
                                        (g, idx) => {
                                          if (idx === i) {
                                            g = valueAsNumber
                                          }
                                          return g
                                        },
                                      ),
                                  },
                                }
                              })
                            }>
                            <NumberInputField />
                            <NumberInputStepper>
                              <NumberIncrementStepper />
                              <NumberDecrementStepper />
                            </NumberInputStepper>
                          </NumberInput>
                        </VStack>
                      ))
                  : '请在上方输入中周期超负荷周数'}
              </Flex>
            ))}
          </FormControl>
          <FormControl>
            <FormLabel>请输入中周期减载递减比率</FormLabel>
            {new Array(rules.cycleCount.value).fill().map((c, cIdx) => (
              <Flex gap="8px" key={cIdx}>
                {rules.deloadWeekCount.value > 0
                  ? new Array(rules.deloadWeekCount.value)
                      .fill()
                      .map((x, i) => (
                        <VStack key={i} align="normal">
                          <span>
                            {`循环${cIdx + 1}`}-
                            {getWeekLabel(
                              i + rules.progressiveOverloadWeekCount.value,
                            )}
                          </span>
                          <NumberInput
                            defaultValue={0}
                            value={rules.deloadDegree.value[i]}
                            min={0}
                            max={500}
                            onChange={(valueAsString, valueAsNumber) =>
                              setRules((prev) => {
                                return {
                                  ...prev,
                                  deloadDegree: {
                                    ...prev.deloadDegree,
                                    value: prev.deloadDegree.value.map(
                                      (g, idx) => {
                                        if (idx === i) {
                                          g = valueAsNumber
                                        }
                                        return g
                                      },
                                    ),
                                  },
                                }
                              })
                            }>
                            <NumberInputField />
                            <NumberInputStepper>
                              <NumberIncrementStepper />
                              <NumberDecrementStepper />
                            </NumberInputStepper>
                          </NumberInput>
                        </VStack>
                      ))
                  : '请在上方输入中周期超负荷周数'}
              </Flex>
            ))}
          </FormControl>
        </HStack>
        <HStack spacing="20px">
          <Flex w="50%" gap="20px">
            <FormControl display="flex" flexDirection="column">
              <FormLabel>请输入中周期缓冲区比率</FormLabel>
              {new Array(rules.cycleCount.value).fill().map((c, cIdx) => (
                <VStack key={cIdx} align="normal">
                  <span>{`循环${cIdx + 1}`}</span>
                  <NumberInput
                    defaultValue={0}
                    value={rules.buffer.value}
                    min={0}
                    max={500}
                    onChange={(valueAsString, valueAsNumber) =>
                      setRules((prev) => {
                        return {
                          ...prev,
                          buffer: {
                            ...prev.buffer,
                            value: valueAsNumber,
                          },
                        }
                      })
                    }>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </VStack>
              ))}
            </FormControl>
            <FormControl>
              <FormLabel>请输入中周期轻训强度比率</FormLabel>
              {new Array(rules.cycleCount.value).fill().map((c, cIdx) => (
                <VStack key={cIdx} align="normal">
                  <span>{`循环${cIdx + 1}`}</span>
                  <NumberInput
                    defaultValue={0}
                    value={rules.lightTrainingDegree.value}
                    min={0}
                    max={500}
                    onChange={(valueAsString, valueAsNumber) =>
                      setRules((prev) => {
                        return {
                          ...prev,
                          lightTrainingDegree: {
                            ...prev.lightTrainingDegree,
                            value: valueAsNumber,
                          },
                        }
                      })
                    }>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </VStack>
              ))}
            </FormControl>
          </Flex>
        </HStack>
        <Button colorScheme="green" onClick={handler}>
          Go!
        </Button>
      </Box>

      {/* <FormControl isInvalid={!verifyRuleHandler('oneRM')}>
        <FormLabel>Week1 组数/次数</FormLabel>
      </FormControl> */}
    </VStack>
  )
}

import React, { useState, useEffect } from 'react'
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
      value: 0,
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
      value: true,
      rule: (val) => {
        return true
      },
    },
    group: {
      value: true,
      rule: (val) => {
        return true
      },
    },
    count: {
      value: true,
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

  return (
    <Flex direction="column" className="p-10 gap-8">
      <div className="flex flex-raw gap-20">
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
      </div>

      <div className="flex flex-raw gap-10">
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
        <FormControl>
          <FormLabel>请输入中周期循环次数</FormLabel>
          <NumberInput
            defaultValue={0}
            value={rules.cycleCount.value}
            min={0}
            max={500}
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
      </div>
      <div className="flex flex-raw gap-10">
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
            value={rules.isdeloadWeekBreak.value}>
            若分段代表减载周为 1 周，生成减载周 W-X.1 W-X.2 ...
            <Stack direction="row">
              <Radio value="1">是</Radio>
              <Radio value="0">否</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </div>
      <div className="flex flex-raw gap-10">
        <FormControl>
          <FormLabel>请输入中周期目标动作组数</FormLabel>
          {new Array(
            rules.progressiveOverloadWeekCount.value + rules.isdeloadWeekBreak,
          ).fill()}
        </FormControl>
        <FormControl>
          <FormLabel>请输入中周期目标动作次数</FormLabel>
        </FormControl>
      </div>
      <div className="flex flex-raw gap-10">
        <FormControl>
          <FormLabel>请输入中周期缓冲区比率</FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel>请输入中周期轻训强度比率</FormLabel>
        </FormControl>
      </div>
      <div className="flex flex-raw gap-10">
        <FormControl>
          <FormLabel>请输入中周期渐进超负荷强度递增比率</FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel>请输入中周期减载递减比率</FormLabel>
        </FormControl>
      </div>

      <Button colorScheme="green" onClick={handler}>
        Go!
      </Button>
      {/* <FormControl isInvalid={!verifyRuleHandler('oneRM')}>
        <FormLabel>Week1 组数/次数</FormLabel>
      </FormControl> */}
    </Flex>
  )
}

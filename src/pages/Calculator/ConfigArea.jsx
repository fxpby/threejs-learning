import React, { useState, useEffect } from 'react'
import {
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
import useConfigInitData from '@/hooks/useConfigInitData'

export default function ConfigArea() {
  const { oneRM, setOneRM, cycle, setCycle, renderTableData } =
    useConfigInitData()

  const [rules, setRules] = useState({
    oneRM: {
      value: oneRM,
      rule: (val) => {
        return typeof val === 'number'
      },
    },
  })

  const verifyRuleHandler = (key) => {
    const func = rules[key]?.rule
    const value = rules[key]?.value
    return func(value)
  }

  useEffect(() => {
    renderTableData()
  }, [cycle, oneRM])

  return (
    <Flex direction="column" className="p-10 gap-8">
      <RadioGroup onChange={setCycle} value={cycle}>
        请选择中周期阶段：
        <Stack direction="row">
          <Radio value="mxs-1">mxs-1</Radio>
          <Radio value="mxs-2">mxs-2</Radio>
        </Stack>
      </RadioGroup>
      <FormControl isInvalid={!verifyRuleHandler('oneRM')}>
        <FormLabel>请输入目标动作 1RM 的重量(kg)</FormLabel>
        <NumberInput
          defaultValue={0}
          value={oneRM}
          min={0}
          max={500}
          onChange={(valueAsString, valueAsNumber) => setOneRM(valueAsNumber)}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      {/* <FormControl isInvalid={!verifyRuleHandler('oneRM')}>
        <FormLabel>Week1 组数/次数</FormLabel>
      </FormControl> */}
    </Flex>
  )
}

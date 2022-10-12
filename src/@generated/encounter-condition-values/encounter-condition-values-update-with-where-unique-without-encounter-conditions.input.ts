import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_valuesWhereUniqueInput } from './encounter-condition-values-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_condition_valuesUpdateWithoutEncounter_conditionsInput } from './encounter-condition-values-update-without-encounter-conditions.input';

@InputType()
export class encounter_condition_valuesUpdateWithWhereUniqueWithoutEncounter_conditionsInput {

    @Field(() => encounter_condition_valuesWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_valuesWhereUniqueInput)
    where!: encounter_condition_valuesWhereUniqueInput;

    @Field(() => encounter_condition_valuesUpdateWithoutEncounter_conditionsInput, {nullable:false})
    @Type(() => encounter_condition_valuesUpdateWithoutEncounter_conditionsInput)
    data!: encounter_condition_valuesUpdateWithoutEncounter_conditionsInput;
}

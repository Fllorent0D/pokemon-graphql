import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_valuesWhereUniqueInput } from './encounter-condition-values-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_condition_valuesCreateWithoutEncounter_conditionsInput } from './encounter-condition-values-create-without-encounter-conditions.input';

@InputType()
export class encounter_condition_valuesCreateOrConnectWithoutEncounter_conditionsInput {

    @Field(() => encounter_condition_valuesWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_valuesWhereUniqueInput)
    where!: encounter_condition_valuesWhereUniqueInput;

    @Field(() => encounter_condition_valuesCreateWithoutEncounter_conditionsInput, {nullable:false})
    @Type(() => encounter_condition_valuesCreateWithoutEncounter_conditionsInput)
    create!: encounter_condition_valuesCreateWithoutEncounter_conditionsInput;
}

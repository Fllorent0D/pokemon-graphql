import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_valuesWhereUniqueInput } from './encounter-condition-values-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_condition_valuesCreateWithoutEncounter_condition_value_proseInput } from './encounter-condition-values-create-without-encounter-condition-value-prose.input';

@InputType()
export class encounter_condition_valuesCreateOrConnectWithoutEncounter_condition_value_proseInput {

    @Field(() => encounter_condition_valuesWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_valuesWhereUniqueInput)
    where!: encounter_condition_valuesWhereUniqueInput;

    @Field(() => encounter_condition_valuesCreateWithoutEncounter_condition_value_proseInput, {nullable:false})
    @Type(() => encounter_condition_valuesCreateWithoutEncounter_condition_value_proseInput)
    create!: encounter_condition_valuesCreateWithoutEncounter_condition_value_proseInput;
}

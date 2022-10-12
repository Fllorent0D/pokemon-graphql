import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_proseWhereUniqueInput } from './encounter-condition-value-prose-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_proseCreateWithoutEncounter_condition_valuesInput } from './encounter-condition-value-prose-create-without-encounter-condition-values.input';

@InputType()
export class encounter_condition_value_proseCreateOrConnectWithoutEncounter_condition_valuesInput {

    @Field(() => encounter_condition_value_proseWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_value_proseWhereUniqueInput)
    where!: encounter_condition_value_proseWhereUniqueInput;

    @Field(() => encounter_condition_value_proseCreateWithoutEncounter_condition_valuesInput, {nullable:false})
    @Type(() => encounter_condition_value_proseCreateWithoutEncounter_condition_valuesInput)
    create!: encounter_condition_value_proseCreateWithoutEncounter_condition_valuesInput;
}

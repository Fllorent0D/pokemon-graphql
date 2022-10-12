import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_valuesCreateWithoutEncounter_condition_value_proseInput } from './encounter-condition-values-create-without-encounter-condition-value-prose.input';
import { Type } from 'class-transformer';
import { encounter_condition_valuesCreateOrConnectWithoutEncounter_condition_value_proseInput } from './encounter-condition-values-create-or-connect-without-encounter-condition-value-prose.input';
import { encounter_condition_valuesWhereUniqueInput } from './encounter-condition-values-where-unique.input';

@InputType()
export class encounter_condition_valuesCreateNestedOneWithoutEncounter_condition_value_proseInput {

    @Field(() => encounter_condition_valuesCreateWithoutEncounter_condition_value_proseInput, {nullable:true})
    @Type(() => encounter_condition_valuesCreateWithoutEncounter_condition_value_proseInput)
    create?: encounter_condition_valuesCreateWithoutEncounter_condition_value_proseInput;

    @Field(() => encounter_condition_valuesCreateOrConnectWithoutEncounter_condition_value_proseInput, {nullable:true})
    @Type(() => encounter_condition_valuesCreateOrConnectWithoutEncounter_condition_value_proseInput)
    connectOrCreate?: encounter_condition_valuesCreateOrConnectWithoutEncounter_condition_value_proseInput;

    @Field(() => encounter_condition_valuesWhereUniqueInput, {nullable:true})
    @Type(() => encounter_condition_valuesWhereUniqueInput)
    connect?: encounter_condition_valuesWhereUniqueInput;
}

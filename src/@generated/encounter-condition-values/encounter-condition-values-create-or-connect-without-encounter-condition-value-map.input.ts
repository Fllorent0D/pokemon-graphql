import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_valuesWhereUniqueInput } from './encounter-condition-values-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_condition_valuesCreateWithoutEncounter_condition_value_mapInput } from './encounter-condition-values-create-without-encounter-condition-value-map.input';

@InputType()
export class encounter_condition_valuesCreateOrConnectWithoutEncounter_condition_value_mapInput {

    @Field(() => encounter_condition_valuesWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_valuesWhereUniqueInput)
    where!: encounter_condition_valuesWhereUniqueInput;

    @Field(() => encounter_condition_valuesCreateWithoutEncounter_condition_value_mapInput, {nullable:false})
    @Type(() => encounter_condition_valuesCreateWithoutEncounter_condition_value_mapInput)
    create!: encounter_condition_valuesCreateWithoutEncounter_condition_value_mapInput;
}

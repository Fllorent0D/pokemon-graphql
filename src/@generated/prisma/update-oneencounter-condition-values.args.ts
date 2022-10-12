import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_valuesUpdateInput } from '../encounter-condition-values/encounter-condition-values-update.input';
import { Type } from 'class-transformer';
import { encounter_condition_valuesWhereUniqueInput } from '../encounter-condition-values/encounter-condition-values-where-unique.input';

@ArgsType()
export class UpdateOneencounterConditionValuesArgs {

    @Field(() => encounter_condition_valuesUpdateInput, {nullable:false})
    @Type(() => encounter_condition_valuesUpdateInput)
    data!: encounter_condition_valuesUpdateInput;

    @Field(() => encounter_condition_valuesWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_valuesWhereUniqueInput)
    where!: encounter_condition_valuesWhereUniqueInput;
}

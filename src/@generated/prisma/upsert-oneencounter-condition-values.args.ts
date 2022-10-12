import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_valuesWhereUniqueInput } from '../encounter-condition-values/encounter-condition-values-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_condition_valuesCreateInput } from '../encounter-condition-values/encounter-condition-values-create.input';
import { encounter_condition_valuesUpdateInput } from '../encounter-condition-values/encounter-condition-values-update.input';

@ArgsType()
export class UpsertOneencounterConditionValuesArgs {

    @Field(() => encounter_condition_valuesWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_valuesWhereUniqueInput)
    where!: encounter_condition_valuesWhereUniqueInput;

    @Field(() => encounter_condition_valuesCreateInput, {nullable:false})
    @Type(() => encounter_condition_valuesCreateInput)
    create!: encounter_condition_valuesCreateInput;

    @Field(() => encounter_condition_valuesUpdateInput, {nullable:false})
    @Type(() => encounter_condition_valuesUpdateInput)
    update!: encounter_condition_valuesUpdateInput;
}

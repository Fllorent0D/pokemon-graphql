import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_valuesWhereUniqueInput } from '../encounter-condition-values/encounter-condition-values-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneencounterConditionValuesArgs {

    @Field(() => encounter_condition_valuesWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_valuesWhereUniqueInput)
    where!: encounter_condition_valuesWhereUniqueInput;
}

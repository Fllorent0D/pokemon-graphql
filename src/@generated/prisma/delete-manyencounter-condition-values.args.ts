import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_valuesWhereInput } from '../encounter-condition-values/encounter-condition-values-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyencounterConditionValuesArgs {

    @Field(() => encounter_condition_valuesWhereInput, {nullable:true})
    @Type(() => encounter_condition_valuesWhereInput)
    where?: encounter_condition_valuesWhereInput;
}

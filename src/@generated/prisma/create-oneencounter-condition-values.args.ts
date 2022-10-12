import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_valuesCreateInput } from '../encounter-condition-values/encounter-condition-values-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneencounterConditionValuesArgs {

    @Field(() => encounter_condition_valuesCreateInput, {nullable:false})
    @Type(() => encounter_condition_valuesCreateInput)
    data!: encounter_condition_valuesCreateInput;
}

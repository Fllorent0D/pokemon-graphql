import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_valuesUpdateManyMutationInput } from '../encounter-condition-values/encounter-condition-values-update-many-mutation.input';
import { Type } from 'class-transformer';
import { encounter_condition_valuesWhereInput } from '../encounter-condition-values/encounter-condition-values-where.input';

@ArgsType()
export class UpdateManyencounterConditionValuesArgs {

    @Field(() => encounter_condition_valuesUpdateManyMutationInput, {nullable:false})
    @Type(() => encounter_condition_valuesUpdateManyMutationInput)
    data!: encounter_condition_valuesUpdateManyMutationInput;

    @Field(() => encounter_condition_valuesWhereInput, {nullable:true})
    @Type(() => encounter_condition_valuesWhereInput)
    where?: encounter_condition_valuesWhereInput;
}

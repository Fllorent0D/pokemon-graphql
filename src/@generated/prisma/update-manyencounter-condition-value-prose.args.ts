import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_value_proseUpdateManyMutationInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_proseWhereInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-where.input';

@ArgsType()
export class UpdateManyencounterConditionValueProseArgs {

    @Field(() => encounter_condition_value_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => encounter_condition_value_proseUpdateManyMutationInput)
    data!: encounter_condition_value_proseUpdateManyMutationInput;

    @Field(() => encounter_condition_value_proseWhereInput, {nullable:true})
    @Type(() => encounter_condition_value_proseWhereInput)
    where?: encounter_condition_value_proseWhereInput;
}

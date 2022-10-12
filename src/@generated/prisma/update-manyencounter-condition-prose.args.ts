import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_proseUpdateManyMutationInput } from '../encounter-condition-prose/encounter-condition-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { encounter_condition_proseWhereInput } from '../encounter-condition-prose/encounter-condition-prose-where.input';

@ArgsType()
export class UpdateManyencounterConditionProseArgs {

    @Field(() => encounter_condition_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => encounter_condition_proseUpdateManyMutationInput)
    data!: encounter_condition_proseUpdateManyMutationInput;

    @Field(() => encounter_condition_proseWhereInput, {nullable:true})
    @Type(() => encounter_condition_proseWhereInput)
    where?: encounter_condition_proseWhereInput;
}

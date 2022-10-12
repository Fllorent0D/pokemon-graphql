import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_proseWhereUniqueInput } from '../encounter-condition-prose/encounter-condition-prose-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_condition_proseCreateInput } from '../encounter-condition-prose/encounter-condition-prose-create.input';
import { encounter_condition_proseUpdateInput } from '../encounter-condition-prose/encounter-condition-prose-update.input';

@ArgsType()
export class UpsertOneencounterConditionProseArgs {

    @Field(() => encounter_condition_proseWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_proseWhereUniqueInput)
    where!: encounter_condition_proseWhereUniqueInput;

    @Field(() => encounter_condition_proseCreateInput, {nullable:false})
    @Type(() => encounter_condition_proseCreateInput)
    create!: encounter_condition_proseCreateInput;

    @Field(() => encounter_condition_proseUpdateInput, {nullable:false})
    @Type(() => encounter_condition_proseUpdateInput)
    update!: encounter_condition_proseUpdateInput;
}

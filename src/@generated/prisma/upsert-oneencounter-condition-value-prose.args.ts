import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_value_proseWhereUniqueInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_proseCreateInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-create.input';
import { encounter_condition_value_proseUpdateInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-update.input';

@ArgsType()
export class UpsertOneencounterConditionValueProseArgs {

    @Field(() => encounter_condition_value_proseWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_value_proseWhereUniqueInput)
    where!: encounter_condition_value_proseWhereUniqueInput;

    @Field(() => encounter_condition_value_proseCreateInput, {nullable:false})
    @Type(() => encounter_condition_value_proseCreateInput)
    create!: encounter_condition_value_proseCreateInput;

    @Field(() => encounter_condition_value_proseUpdateInput, {nullable:false})
    @Type(() => encounter_condition_value_proseUpdateInput)
    update!: encounter_condition_value_proseUpdateInput;
}

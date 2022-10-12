import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_value_proseUpdateInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-update.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_proseWhereUniqueInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-where-unique.input';

@ArgsType()
export class UpdateOneencounterConditionValueProseArgs {

    @Field(() => encounter_condition_value_proseUpdateInput, {nullable:false})
    @Type(() => encounter_condition_value_proseUpdateInput)
    data!: encounter_condition_value_proseUpdateInput;

    @Field(() => encounter_condition_value_proseWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_value_proseWhereUniqueInput)
    where!: encounter_condition_value_proseWhereUniqueInput;
}

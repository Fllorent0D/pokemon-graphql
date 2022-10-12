import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_proseUpdateInput } from '../encounter-condition-prose/encounter-condition-prose-update.input';
import { Type } from 'class-transformer';
import { encounter_condition_proseWhereUniqueInput } from '../encounter-condition-prose/encounter-condition-prose-where-unique.input';

@ArgsType()
export class UpdateOneencounterConditionProseArgs {

    @Field(() => encounter_condition_proseUpdateInput, {nullable:false})
    @Type(() => encounter_condition_proseUpdateInput)
    data!: encounter_condition_proseUpdateInput;

    @Field(() => encounter_condition_proseWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_proseWhereUniqueInput)
    where!: encounter_condition_proseWhereUniqueInput;
}

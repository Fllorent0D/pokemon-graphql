import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_value_proseWhereUniqueInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueencounterConditionValueProseArgs {

    @Field(() => encounter_condition_value_proseWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_value_proseWhereUniqueInput)
    where!: encounter_condition_value_proseWhereUniqueInput;
}

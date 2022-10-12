import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_proseWhereUniqueInput } from '../encounter-condition-prose/encounter-condition-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueencounterConditionProseArgs {

    @Field(() => encounter_condition_proseWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_proseWhereUniqueInput)
    where!: encounter_condition_proseWhereUniqueInput;
}

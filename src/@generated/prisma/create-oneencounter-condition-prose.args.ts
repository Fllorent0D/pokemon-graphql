import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_proseCreateInput } from '../encounter-condition-prose/encounter-condition-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneencounterConditionProseArgs {

    @Field(() => encounter_condition_proseCreateInput, {nullable:false})
    @Type(() => encounter_condition_proseCreateInput)
    data!: encounter_condition_proseCreateInput;
}

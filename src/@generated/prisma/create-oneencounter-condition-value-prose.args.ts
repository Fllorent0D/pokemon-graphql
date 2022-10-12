import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_value_proseCreateInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneencounterConditionValueProseArgs {

    @Field(() => encounter_condition_value_proseCreateInput, {nullable:false})
    @Type(() => encounter_condition_value_proseCreateInput)
    data!: encounter_condition_value_proseCreateInput;
}

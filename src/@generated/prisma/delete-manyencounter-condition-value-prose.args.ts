import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_value_proseWhereInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyencounterConditionValueProseArgs {

    @Field(() => encounter_condition_value_proseWhereInput, {nullable:true})
    @Type(() => encounter_condition_value_proseWhereInput)
    where?: encounter_condition_value_proseWhereInput;
}

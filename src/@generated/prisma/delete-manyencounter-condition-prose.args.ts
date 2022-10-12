import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_proseWhereInput } from '../encounter-condition-prose/encounter-condition-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyencounterConditionProseArgs {

    @Field(() => encounter_condition_proseWhereInput, {nullable:true})
    @Type(() => encounter_condition_proseWhereInput)
    where?: encounter_condition_proseWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_conditionsWhereInput } from '../encounter-conditions/encounter-conditions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyencounterConditionsArgs {

    @Field(() => encounter_conditionsWhereInput, {nullable:true})
    @Type(() => encounter_conditionsWhereInput)
    where?: encounter_conditionsWhereInput;
}

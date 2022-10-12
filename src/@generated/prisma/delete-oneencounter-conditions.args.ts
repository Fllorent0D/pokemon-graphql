import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_conditionsWhereUniqueInput } from '../encounter-conditions/encounter-conditions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneencounterConditionsArgs {

    @Field(() => encounter_conditionsWhereUniqueInput, {nullable:false})
    @Type(() => encounter_conditionsWhereUniqueInput)
    where!: encounter_conditionsWhereUniqueInput;
}

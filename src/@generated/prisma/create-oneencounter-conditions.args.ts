import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_conditionsCreateInput } from '../encounter-conditions/encounter-conditions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneencounterConditionsArgs {

    @Field(() => encounter_conditionsCreateInput, {nullable:false})
    @Type(() => encounter_conditionsCreateInput)
    data!: encounter_conditionsCreateInput;
}

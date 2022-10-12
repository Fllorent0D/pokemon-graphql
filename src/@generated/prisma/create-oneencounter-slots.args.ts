import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_slotsCreateInput } from '../encounter-slots/encounter-slots-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneencounterSlotsArgs {

    @Field(() => encounter_slotsCreateInput, {nullable:false})
    @Type(() => encounter_slotsCreateInput)
    data!: encounter_slotsCreateInput;
}

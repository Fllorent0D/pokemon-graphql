import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_slotsWhereUniqueInput } from '../encounter-slots/encounter-slots-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneencounterSlotsArgs {

    @Field(() => encounter_slotsWhereUniqueInput, {nullable:false})
    @Type(() => encounter_slotsWhereUniqueInput)
    where!: encounter_slotsWhereUniqueInput;
}

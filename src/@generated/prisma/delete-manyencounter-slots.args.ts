import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_slotsWhereInput } from '../encounter-slots/encounter-slots-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyencounterSlotsArgs {

    @Field(() => encounter_slotsWhereInput, {nullable:true})
    @Type(() => encounter_slotsWhereInput)
    where?: encounter_slotsWhereInput;
}

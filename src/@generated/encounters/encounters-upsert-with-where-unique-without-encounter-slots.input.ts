import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { encountersUpdateWithoutEncounter_slotsInput } from './encounters-update-without-encounter-slots.input';
import { encountersCreateWithoutEncounter_slotsInput } from './encounters-create-without-encounter-slots.input';

@InputType()
export class encountersUpsertWithWhereUniqueWithoutEncounter_slotsInput {

    @Field(() => encountersWhereUniqueInput, {nullable:false})
    @Type(() => encountersWhereUniqueInput)
    where!: encountersWhereUniqueInput;

    @Field(() => encountersUpdateWithoutEncounter_slotsInput, {nullable:false})
    @Type(() => encountersUpdateWithoutEncounter_slotsInput)
    update!: encountersUpdateWithoutEncounter_slotsInput;

    @Field(() => encountersCreateWithoutEncounter_slotsInput, {nullable:false})
    @Type(() => encountersCreateWithoutEncounter_slotsInput)
    create!: encountersCreateWithoutEncounter_slotsInput;
}

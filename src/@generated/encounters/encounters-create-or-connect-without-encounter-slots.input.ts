import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { encountersCreateWithoutEncounter_slotsInput } from './encounters-create-without-encounter-slots.input';

@InputType()
export class encountersCreateOrConnectWithoutEncounter_slotsInput {

    @Field(() => encountersWhereUniqueInput, {nullable:false})
    @Type(() => encountersWhereUniqueInput)
    where!: encountersWhereUniqueInput;

    @Field(() => encountersCreateWithoutEncounter_slotsInput, {nullable:false})
    @Type(() => encountersCreateWithoutEncounter_slotsInput)
    create!: encountersCreateWithoutEncounter_slotsInput;
}

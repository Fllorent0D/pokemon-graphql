import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Encounter_slotsCount {

    @Field(() => Int, {nullable:false})
    encounters!: number;
}

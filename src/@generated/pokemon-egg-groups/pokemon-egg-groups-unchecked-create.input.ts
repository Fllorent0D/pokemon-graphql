import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class pokemon_egg_groupsUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    species_id!: number;

    @Field(() => Int, {nullable:false})
    egg_group_id!: number;
}

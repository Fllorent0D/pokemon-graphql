import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class pokemon_egg_groupsUncheckedCreateWithoutPokemon_speciesInput {

    @Field(() => Int, {nullable:false})
    egg_group_id!: number;
}

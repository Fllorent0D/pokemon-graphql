import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutPokemon_egg_groupsInput } from './pokemon-species-create-without-pokemon-egg-groups.input';

@InputType()
export class pokemon_speciesCreateOrConnectWithoutPokemon_egg_groupsInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesCreateWithoutPokemon_egg_groupsInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutPokemon_egg_groupsInput)
    create!: pokemon_speciesCreateWithoutPokemon_egg_groupsInput;
}

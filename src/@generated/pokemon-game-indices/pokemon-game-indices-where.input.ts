import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { GenerationsRelationFilter } from '../prisma/generations-relation-filter.input';
import { PokemonRelationFilter } from '../prisma/pokemon-relation-filter.input';

@InputType()
export class pokemon_game_indicesWhereInput {

    @Field(() => [pokemon_game_indicesWhereInput], {nullable:true})
    AND?: Array<pokemon_game_indicesWhereInput>;

    @Field(() => [pokemon_game_indicesWhereInput], {nullable:true})
    OR?: Array<pokemon_game_indicesWhereInput>;

    @Field(() => [pokemon_game_indicesWhereInput], {nullable:true})
    NOT?: Array<pokemon_game_indicesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;

    @Field(() => GenerationsRelationFilter, {nullable:true})
    generations?: GenerationsRelationFilter;

    @Field(() => PokemonRelationFilter, {nullable:true})
    pokemon?: PokemonRelationFilter;
}

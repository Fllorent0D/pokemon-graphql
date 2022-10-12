import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from '../pokemon-species/pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateInput } from '../pokemon-species/pokemon-species-create.input';
import { pokemon_speciesUpdateInput } from '../pokemon-species/pokemon-species-update.input';

@ArgsType()
export class UpsertOnepokemonSpeciesArgs {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesCreateInput, {nullable:false})
    @Type(() => pokemon_speciesCreateInput)
    create!: pokemon_speciesCreateInput;

    @Field(() => pokemon_speciesUpdateInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateInput)
    update!: pokemon_speciesUpdateInput;
}

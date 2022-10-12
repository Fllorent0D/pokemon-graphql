import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_speciesUpdateInput } from '../pokemon-species/pokemon-species-update.input';
import { Type } from 'class-transformer';
import { pokemon_speciesWhereUniqueInput } from '../pokemon-species/pokemon-species-where-unique.input';

@ArgsType()
export class UpdateOnepokemonSpeciesArgs {

    @Field(() => pokemon_speciesUpdateInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateInput)
    data!: pokemon_speciesUpdateInput;

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;
}

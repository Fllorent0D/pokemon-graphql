import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from '../pokemon-species/pokemon-species-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnepokemonSpeciesArgs {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_speciesWhereInput } from '../pokemon-species/pokemon-species-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonSpeciesArgs {

    @Field(() => pokemon_speciesWhereInput, {nullable:true})
    @Type(() => pokemon_speciesWhereInput)
    where?: pokemon_speciesWhereInput;
}

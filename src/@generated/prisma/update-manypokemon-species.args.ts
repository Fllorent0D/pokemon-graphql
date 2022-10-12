import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_speciesUpdateManyMutationInput } from '../pokemon-species/pokemon-species-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_speciesWhereInput } from '../pokemon-species/pokemon-species-where.input';

@ArgsType()
export class UpdateManypokemonSpeciesArgs {

    @Field(() => pokemon_speciesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateManyMutationInput)
    data!: pokemon_speciesUpdateManyMutationInput;

    @Field(() => pokemon_speciesWhereInput, {nullable:true})
    @Type(() => pokemon_speciesWhereInput)
    where?: pokemon_speciesWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_evolutionUpdateManyMutationInput } from '../pokemon-evolution/pokemon-evolution-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionWhereInput } from '../pokemon-evolution/pokemon-evolution-where.input';

@ArgsType()
export class UpdateManypokemonEvolutionArgs {

    @Field(() => pokemon_evolutionUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_evolutionUpdateManyMutationInput)
    data!: pokemon_evolutionUpdateManyMutationInput;

    @Field(() => pokemon_evolutionWhereInput, {nullable:true})
    @Type(() => pokemon_evolutionWhereInput)
    where?: pokemon_evolutionWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemonUpdateManyMutationInput } from './pokemon-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemonWhereInput } from './pokemon-where.input';

@ArgsType()
export class UpdateManypokemonArgs {

    @Field(() => pokemonUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemonUpdateManyMutationInput)
    data!: pokemonUpdateManyMutationInput;

    @Field(() => pokemonWhereInput, {nullable:true})
    @Type(() => pokemonWhereInput)
    where?: pokemonWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_typesUpdateManyMutationInput } from '../pokemon-types/pokemon-types-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_typesWhereInput } from '../pokemon-types/pokemon-types-where.input';

@ArgsType()
export class UpdateManypokemonTypesArgs {

    @Field(() => pokemon_typesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_typesUpdateManyMutationInput)
    data!: pokemon_typesUpdateManyMutationInput;

    @Field(() => pokemon_typesWhereInput, {nullable:true})
    @Type(() => pokemon_typesWhereInput)
    where?: pokemon_typesWhereInput;
}

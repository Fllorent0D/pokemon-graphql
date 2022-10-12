import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_colorsUpdateManyMutationInput } from '../pokemon-colors/pokemon-colors-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_colorsWhereInput } from '../pokemon-colors/pokemon-colors-where.input';

@ArgsType()
export class UpdateManypokemonColorsArgs {

    @Field(() => pokemon_colorsUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_colorsUpdateManyMutationInput)
    data!: pokemon_colorsUpdateManyMutationInput;

    @Field(() => pokemon_colorsWhereInput, {nullable:true})
    @Type(() => pokemon_colorsWhereInput)
    where?: pokemon_colorsWhereInput;
}

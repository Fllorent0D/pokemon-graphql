import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_color_namesUpdateManyMutationInput } from '../pokemon-color-names/pokemon-color-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_color_namesWhereInput } from '../pokemon-color-names/pokemon-color-names-where.input';

@ArgsType()
export class UpdateManypokemonColorNamesArgs {

    @Field(() => pokemon_color_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_color_namesUpdateManyMutationInput)
    data!: pokemon_color_namesUpdateManyMutationInput;

    @Field(() => pokemon_color_namesWhereInput, {nullable:true})
    @Type(() => pokemon_color_namesWhereInput)
    where?: pokemon_color_namesWhereInput;
}

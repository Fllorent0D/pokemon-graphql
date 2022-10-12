import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_shapesUpdateManyMutationInput } from '../pokemon-shapes/pokemon-shapes-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_shapesWhereInput } from '../pokemon-shapes/pokemon-shapes-where.input';

@ArgsType()
export class UpdateManypokemonShapesArgs {

    @Field(() => pokemon_shapesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_shapesUpdateManyMutationInput)
    data!: pokemon_shapesUpdateManyMutationInput;

    @Field(() => pokemon_shapesWhereInput, {nullable:true})
    @Type(() => pokemon_shapesWhereInput)
    where?: pokemon_shapesWhereInput;
}

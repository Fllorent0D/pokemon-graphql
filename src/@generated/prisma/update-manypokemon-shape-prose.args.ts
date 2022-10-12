import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_shape_proseUpdateManyMutationInput } from '../pokemon-shape-prose/pokemon-shape-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_shape_proseWhereInput } from '../pokemon-shape-prose/pokemon-shape-prose-where.input';

@ArgsType()
export class UpdateManypokemonShapeProseArgs {

    @Field(() => pokemon_shape_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_shape_proseUpdateManyMutationInput)
    data!: pokemon_shape_proseUpdateManyMutationInput;

    @Field(() => pokemon_shape_proseWhereInput, {nullable:true})
    @Type(() => pokemon_shape_proseWhereInput)
    where?: pokemon_shape_proseWhereInput;
}

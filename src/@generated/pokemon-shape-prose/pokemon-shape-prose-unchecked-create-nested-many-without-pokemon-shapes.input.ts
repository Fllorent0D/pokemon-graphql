import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_shape_proseCreateWithoutPokemon_shapesInput } from './pokemon-shape-prose-create-without-pokemon-shapes.input';
import { Type } from 'class-transformer';
import { pokemon_shape_proseCreateOrConnectWithoutPokemon_shapesInput } from './pokemon-shape-prose-create-or-connect-without-pokemon-shapes.input';
import { pokemon_shape_proseWhereUniqueInput } from './pokemon-shape-prose-where-unique.input';

@InputType()
export class pokemon_shape_proseUncheckedCreateNestedManyWithoutPokemon_shapesInput {

    @Field(() => [pokemon_shape_proseCreateWithoutPokemon_shapesInput], {nullable:true})
    @Type(() => pokemon_shape_proseCreateWithoutPokemon_shapesInput)
    create?: Array<pokemon_shape_proseCreateWithoutPokemon_shapesInput>;

    @Field(() => [pokemon_shape_proseCreateOrConnectWithoutPokemon_shapesInput], {nullable:true})
    @Type(() => pokemon_shape_proseCreateOrConnectWithoutPokemon_shapesInput)
    connectOrCreate?: Array<pokemon_shape_proseCreateOrConnectWithoutPokemon_shapesInput>;

    @Field(() => [pokemon_shape_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_shape_proseWhereUniqueInput)
    connect?: Array<pokemon_shape_proseWhereUniqueInput>;
}

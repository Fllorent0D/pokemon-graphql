import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_shape_proseCreateWithoutPokemon_shapesInput } from './pokemon-shape-prose-create-without-pokemon-shapes.input';
import { Type } from 'class-transformer';
import { pokemon_shape_proseCreateOrConnectWithoutPokemon_shapesInput } from './pokemon-shape-prose-create-or-connect-without-pokemon-shapes.input';
import { pokemon_shape_proseUpsertWithWhereUniqueWithoutPokemon_shapesInput } from './pokemon-shape-prose-upsert-with-where-unique-without-pokemon-shapes.input';
import { pokemon_shape_proseWhereUniqueInput } from './pokemon-shape-prose-where-unique.input';
import { pokemon_shape_proseUpdateWithWhereUniqueWithoutPokemon_shapesInput } from './pokemon-shape-prose-update-with-where-unique-without-pokemon-shapes.input';
import { pokemon_shape_proseUpdateManyWithWhereWithoutPokemon_shapesInput } from './pokemon-shape-prose-update-many-with-where-without-pokemon-shapes.input';
import { pokemon_shape_proseScalarWhereInput } from './pokemon-shape-prose-scalar-where.input';

@InputType()
export class pokemon_shape_proseUncheckedUpdateManyWithoutPokemon_shapesNestedInput {

    @Field(() => [pokemon_shape_proseCreateWithoutPokemon_shapesInput], {nullable:true})
    @Type(() => pokemon_shape_proseCreateWithoutPokemon_shapesInput)
    create?: Array<pokemon_shape_proseCreateWithoutPokemon_shapesInput>;

    @Field(() => [pokemon_shape_proseCreateOrConnectWithoutPokemon_shapesInput], {nullable:true})
    @Type(() => pokemon_shape_proseCreateOrConnectWithoutPokemon_shapesInput)
    connectOrCreate?: Array<pokemon_shape_proseCreateOrConnectWithoutPokemon_shapesInput>;

    @Field(() => [pokemon_shape_proseUpsertWithWhereUniqueWithoutPokemon_shapesInput], {nullable:true})
    @Type(() => pokemon_shape_proseUpsertWithWhereUniqueWithoutPokemon_shapesInput)
    upsert?: Array<pokemon_shape_proseUpsertWithWhereUniqueWithoutPokemon_shapesInput>;

    @Field(() => [pokemon_shape_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_shape_proseWhereUniqueInput)
    set?: Array<pokemon_shape_proseWhereUniqueInput>;

    @Field(() => [pokemon_shape_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_shape_proseWhereUniqueInput)
    disconnect?: Array<pokemon_shape_proseWhereUniqueInput>;

    @Field(() => [pokemon_shape_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_shape_proseWhereUniqueInput)
    delete?: Array<pokemon_shape_proseWhereUniqueInput>;

    @Field(() => [pokemon_shape_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_shape_proseWhereUniqueInput)
    connect?: Array<pokemon_shape_proseWhereUniqueInput>;

    @Field(() => [pokemon_shape_proseUpdateWithWhereUniqueWithoutPokemon_shapesInput], {nullable:true})
    @Type(() => pokemon_shape_proseUpdateWithWhereUniqueWithoutPokemon_shapesInput)
    update?: Array<pokemon_shape_proseUpdateWithWhereUniqueWithoutPokemon_shapesInput>;

    @Field(() => [pokemon_shape_proseUpdateManyWithWhereWithoutPokemon_shapesInput], {nullable:true})
    @Type(() => pokemon_shape_proseUpdateManyWithWhereWithoutPokemon_shapesInput)
    updateMany?: Array<pokemon_shape_proseUpdateManyWithWhereWithoutPokemon_shapesInput>;

    @Field(() => [pokemon_shape_proseScalarWhereInput], {nullable:true})
    @Type(() => pokemon_shape_proseScalarWhereInput)
    deleteMany?: Array<pokemon_shape_proseScalarWhereInput>;
}

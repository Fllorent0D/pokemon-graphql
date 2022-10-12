import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_color_namesCreateWithoutPokemon_colorsInput } from './pokemon-color-names-create-without-pokemon-colors.input';
import { Type } from 'class-transformer';
import { pokemon_color_namesCreateOrConnectWithoutPokemon_colorsInput } from './pokemon-color-names-create-or-connect-without-pokemon-colors.input';
import { pokemon_color_namesUpsertWithWhereUniqueWithoutPokemon_colorsInput } from './pokemon-color-names-upsert-with-where-unique-without-pokemon-colors.input';
import { pokemon_color_namesWhereUniqueInput } from './pokemon-color-names-where-unique.input';
import { pokemon_color_namesUpdateWithWhereUniqueWithoutPokemon_colorsInput } from './pokemon-color-names-update-with-where-unique-without-pokemon-colors.input';
import { pokemon_color_namesUpdateManyWithWhereWithoutPokemon_colorsInput } from './pokemon-color-names-update-many-with-where-without-pokemon-colors.input';
import { pokemon_color_namesScalarWhereInput } from './pokemon-color-names-scalar-where.input';

@InputType()
export class pokemon_color_namesUpdateManyWithoutPokemon_colorsNestedInput {

    @Field(() => [pokemon_color_namesCreateWithoutPokemon_colorsInput], {nullable:true})
    @Type(() => pokemon_color_namesCreateWithoutPokemon_colorsInput)
    create?: Array<pokemon_color_namesCreateWithoutPokemon_colorsInput>;

    @Field(() => [pokemon_color_namesCreateOrConnectWithoutPokemon_colorsInput], {nullable:true})
    @Type(() => pokemon_color_namesCreateOrConnectWithoutPokemon_colorsInput)
    connectOrCreate?: Array<pokemon_color_namesCreateOrConnectWithoutPokemon_colorsInput>;

    @Field(() => [pokemon_color_namesUpsertWithWhereUniqueWithoutPokemon_colorsInput], {nullable:true})
    @Type(() => pokemon_color_namesUpsertWithWhereUniqueWithoutPokemon_colorsInput)
    upsert?: Array<pokemon_color_namesUpsertWithWhereUniqueWithoutPokemon_colorsInput>;

    @Field(() => [pokemon_color_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_color_namesWhereUniqueInput)
    set?: Array<pokemon_color_namesWhereUniqueInput>;

    @Field(() => [pokemon_color_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_color_namesWhereUniqueInput)
    disconnect?: Array<pokemon_color_namesWhereUniqueInput>;

    @Field(() => [pokemon_color_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_color_namesWhereUniqueInput)
    delete?: Array<pokemon_color_namesWhereUniqueInput>;

    @Field(() => [pokemon_color_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_color_namesWhereUniqueInput)
    connect?: Array<pokemon_color_namesWhereUniqueInput>;

    @Field(() => [pokemon_color_namesUpdateWithWhereUniqueWithoutPokemon_colorsInput], {nullable:true})
    @Type(() => pokemon_color_namesUpdateWithWhereUniqueWithoutPokemon_colorsInput)
    update?: Array<pokemon_color_namesUpdateWithWhereUniqueWithoutPokemon_colorsInput>;

    @Field(() => [pokemon_color_namesUpdateManyWithWhereWithoutPokemon_colorsInput], {nullable:true})
    @Type(() => pokemon_color_namesUpdateManyWithWhereWithoutPokemon_colorsInput)
    updateMany?: Array<pokemon_color_namesUpdateManyWithWhereWithoutPokemon_colorsInput>;

    @Field(() => [pokemon_color_namesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_color_namesScalarWhereInput)
    deleteMany?: Array<pokemon_color_namesScalarWhereInput>;
}

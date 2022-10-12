import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_formsCreateWithoutPokemonInput } from './pokemon-forms-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { pokemon_formsCreateOrConnectWithoutPokemonInput } from './pokemon-forms-create-or-connect-without-pokemon.input';
import { pokemon_formsUpsertWithWhereUniqueWithoutPokemonInput } from './pokemon-forms-upsert-with-where-unique-without-pokemon.input';
import { pokemon_formsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { pokemon_formsUpdateWithWhereUniqueWithoutPokemonInput } from './pokemon-forms-update-with-where-unique-without-pokemon.input';
import { pokemon_formsUpdateManyWithWhereWithoutPokemonInput } from './pokemon-forms-update-many-with-where-without-pokemon.input';
import { pokemon_formsScalarWhereInput } from './pokemon-forms-scalar-where.input';

@InputType()
export class pokemon_formsUpdateManyWithoutPokemonNestedInput {

    @Field(() => [pokemon_formsCreateWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_formsCreateWithoutPokemonInput)
    create?: Array<pokemon_formsCreateWithoutPokemonInput>;

    @Field(() => [pokemon_formsCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_formsCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<pokemon_formsCreateOrConnectWithoutPokemonInput>;

    @Field(() => [pokemon_formsUpsertWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_formsUpsertWithWhereUniqueWithoutPokemonInput)
    upsert?: Array<pokemon_formsUpsertWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [pokemon_formsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_formsWhereUniqueInput)
    set?: Array<pokemon_formsWhereUniqueInput>;

    @Field(() => [pokemon_formsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_formsWhereUniqueInput)
    disconnect?: Array<pokemon_formsWhereUniqueInput>;

    @Field(() => [pokemon_formsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_formsWhereUniqueInput)
    delete?: Array<pokemon_formsWhereUniqueInput>;

    @Field(() => [pokemon_formsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_formsWhereUniqueInput)
    connect?: Array<pokemon_formsWhereUniqueInput>;

    @Field(() => [pokemon_formsUpdateWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_formsUpdateWithWhereUniqueWithoutPokemonInput)
    update?: Array<pokemon_formsUpdateWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [pokemon_formsUpdateManyWithWhereWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_formsUpdateManyWithWhereWithoutPokemonInput)
    updateMany?: Array<pokemon_formsUpdateManyWithWhereWithoutPokemonInput>;

    @Field(() => [pokemon_formsScalarWhereInput], {nullable:true})
    @Type(() => pokemon_formsScalarWhereInput)
    deleteMany?: Array<pokemon_formsScalarWhereInput>;
}

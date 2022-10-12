import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_dex_numbersCreateWithoutPokemon_speciesInput } from './pokemon-dex-numbers-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_dex_numbersCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-dex-numbers-create-or-connect-without-pokemon-species.input';
import { pokemon_dex_numbersUpsertWithWhereUniqueWithoutPokemon_speciesInput } from './pokemon-dex-numbers-upsert-with-where-unique-without-pokemon-species.input';
import { pokemon_dex_numbersWhereUniqueInput } from './pokemon-dex-numbers-where-unique.input';
import { pokemon_dex_numbersUpdateWithWhereUniqueWithoutPokemon_speciesInput } from './pokemon-dex-numbers-update-with-where-unique-without-pokemon-species.input';
import { pokemon_dex_numbersUpdateManyWithWhereWithoutPokemon_speciesInput } from './pokemon-dex-numbers-update-many-with-where-without-pokemon-species.input';
import { pokemon_dex_numbersScalarWhereInput } from './pokemon-dex-numbers-scalar-where.input';

@InputType()
export class pokemon_dex_numbersUncheckedUpdateManyWithoutPokemon_speciesNestedInput {

    @Field(() => [pokemon_dex_numbersCreateWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_dex_numbersCreateWithoutPokemon_speciesInput)
    create?: Array<pokemon_dex_numbersCreateWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_dex_numbersCreateOrConnectWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_dex_numbersCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: Array<pokemon_dex_numbersCreateOrConnectWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_dex_numbersUpsertWithWhereUniqueWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_dex_numbersUpsertWithWhereUniqueWithoutPokemon_speciesInput)
    upsert?: Array<pokemon_dex_numbersUpsertWithWhereUniqueWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_dex_numbersWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_dex_numbersWhereUniqueInput)
    set?: Array<pokemon_dex_numbersWhereUniqueInput>;

    @Field(() => [pokemon_dex_numbersWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_dex_numbersWhereUniqueInput)
    disconnect?: Array<pokemon_dex_numbersWhereUniqueInput>;

    @Field(() => [pokemon_dex_numbersWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_dex_numbersWhereUniqueInput)
    delete?: Array<pokemon_dex_numbersWhereUniqueInput>;

    @Field(() => [pokemon_dex_numbersWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_dex_numbersWhereUniqueInput)
    connect?: Array<pokemon_dex_numbersWhereUniqueInput>;

    @Field(() => [pokemon_dex_numbersUpdateWithWhereUniqueWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_dex_numbersUpdateWithWhereUniqueWithoutPokemon_speciesInput)
    update?: Array<pokemon_dex_numbersUpdateWithWhereUniqueWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_dex_numbersUpdateManyWithWhereWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_dex_numbersUpdateManyWithWhereWithoutPokemon_speciesInput)
    updateMany?: Array<pokemon_dex_numbersUpdateManyWithWhereWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_dex_numbersScalarWhereInput], {nullable:true})
    @Type(() => pokemon_dex_numbersScalarWhereInput)
    deleteMany?: Array<pokemon_dex_numbersScalarWhereInput>;
}

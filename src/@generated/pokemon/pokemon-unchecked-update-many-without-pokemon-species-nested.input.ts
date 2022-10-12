import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonCreateWithoutPokemon_speciesInput } from './pokemon-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemonCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-create-or-connect-without-pokemon-species.input';
import { pokemonUpsertWithWhereUniqueWithoutPokemon_speciesInput } from './pokemon-upsert-with-where-unique-without-pokemon-species.input';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { pokemonUpdateWithWhereUniqueWithoutPokemon_speciesInput } from './pokemon-update-with-where-unique-without-pokemon-species.input';
import { pokemonUpdateManyWithWhereWithoutPokemon_speciesInput } from './pokemon-update-many-with-where-without-pokemon-species.input';
import { pokemonScalarWhereInput } from './pokemon-scalar-where.input';

@InputType()
export class pokemonUncheckedUpdateManyWithoutPokemon_speciesNestedInput {

    @Field(() => [pokemonCreateWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemonCreateWithoutPokemon_speciesInput)
    create?: Array<pokemonCreateWithoutPokemon_speciesInput>;

    @Field(() => [pokemonCreateOrConnectWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemonCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: Array<pokemonCreateOrConnectWithoutPokemon_speciesInput>;

    @Field(() => [pokemonUpsertWithWhereUniqueWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemonUpsertWithWhereUniqueWithoutPokemon_speciesInput)
    upsert?: Array<pokemonUpsertWithWhereUniqueWithoutPokemon_speciesInput>;

    @Field(() => [pokemonWhereUniqueInput], {nullable:true})
    @Type(() => pokemonWhereUniqueInput)
    set?: Array<pokemonWhereUniqueInput>;

    @Field(() => [pokemonWhereUniqueInput], {nullable:true})
    @Type(() => pokemonWhereUniqueInput)
    disconnect?: Array<pokemonWhereUniqueInput>;

    @Field(() => [pokemonWhereUniqueInput], {nullable:true})
    @Type(() => pokemonWhereUniqueInput)
    delete?: Array<pokemonWhereUniqueInput>;

    @Field(() => [pokemonWhereUniqueInput], {nullable:true})
    @Type(() => pokemonWhereUniqueInput)
    connect?: Array<pokemonWhereUniqueInput>;

    @Field(() => [pokemonUpdateWithWhereUniqueWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemonUpdateWithWhereUniqueWithoutPokemon_speciesInput)
    update?: Array<pokemonUpdateWithWhereUniqueWithoutPokemon_speciesInput>;

    @Field(() => [pokemonUpdateManyWithWhereWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemonUpdateManyWithWhereWithoutPokemon_speciesInput)
    updateMany?: Array<pokemonUpdateManyWithWhereWithoutPokemon_speciesInput>;

    @Field(() => [pokemonScalarWhereInput], {nullable:true})
    @Type(() => pokemonScalarWhereInput)
    deleteMany?: Array<pokemonScalarWhereInput>;
}

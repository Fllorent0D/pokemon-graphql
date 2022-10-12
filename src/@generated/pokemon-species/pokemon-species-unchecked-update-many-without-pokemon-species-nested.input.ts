import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutPokemon_speciesInput } from './pokemon-species-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-species-create-or-connect-without-pokemon-species.input';
import { pokemon_speciesUpsertWithWhereUniqueWithoutPokemon_speciesInput } from './pokemon-species-upsert-with-where-unique-without-pokemon-species.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { pokemon_speciesUpdateWithWhereUniqueWithoutPokemon_speciesInput } from './pokemon-species-update-with-where-unique-without-pokemon-species.input';
import { pokemon_speciesUpdateManyWithWhereWithoutPokemon_speciesInput } from './pokemon-species-update-many-with-where-without-pokemon-species.input';
import { pokemon_speciesScalarWhereInput } from './pokemon-species-scalar-where.input';

@InputType()
export class pokemon_speciesUncheckedUpdateManyWithoutPokemon_speciesNestedInput {

    @Field(() => [pokemon_speciesCreateWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutPokemon_speciesInput)
    create?: Array<pokemon_speciesCreateWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_speciesCreateOrConnectWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: Array<pokemon_speciesCreateOrConnectWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_speciesUpsertWithWhereUniqueWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_speciesUpsertWithWhereUniqueWithoutPokemon_speciesInput)
    upsert?: Array<pokemon_speciesUpsertWithWhereUniqueWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    set?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    disconnect?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    delete?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesUpdateWithWhereUniqueWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_speciesUpdateWithWhereUniqueWithoutPokemon_speciesInput)
    update?: Array<pokemon_speciesUpdateWithWhereUniqueWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_speciesUpdateManyWithWhereWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_speciesUpdateManyWithWhereWithoutPokemon_speciesInput)
    updateMany?: Array<pokemon_speciesUpdateManyWithWhereWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_speciesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_speciesScalarWhereInput)
    deleteMany?: Array<pokemon_speciesScalarWhereInput>;
}

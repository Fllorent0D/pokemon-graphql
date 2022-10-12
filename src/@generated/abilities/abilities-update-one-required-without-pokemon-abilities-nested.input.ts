import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesCreateWithoutPokemon_abilitiesInput } from './abilities-create-without-pokemon-abilities.input';
import { Type } from 'class-transformer';
import { abilitiesCreateOrConnectWithoutPokemon_abilitiesInput } from './abilities-create-or-connect-without-pokemon-abilities.input';
import { abilitiesUpsertWithoutPokemon_abilitiesInput } from './abilities-upsert-without-pokemon-abilities.input';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { abilitiesUpdateWithoutPokemon_abilitiesInput } from './abilities-update-without-pokemon-abilities.input';

@InputType()
export class abilitiesUpdateOneRequiredWithoutPokemon_abilitiesNestedInput {

    @Field(() => abilitiesCreateWithoutPokemon_abilitiesInput, {nullable:true})
    @Type(() => abilitiesCreateWithoutPokemon_abilitiesInput)
    create?: abilitiesCreateWithoutPokemon_abilitiesInput;

    @Field(() => abilitiesCreateOrConnectWithoutPokemon_abilitiesInput, {nullable:true})
    @Type(() => abilitiesCreateOrConnectWithoutPokemon_abilitiesInput)
    connectOrCreate?: abilitiesCreateOrConnectWithoutPokemon_abilitiesInput;

    @Field(() => abilitiesUpsertWithoutPokemon_abilitiesInput, {nullable:true})
    @Type(() => abilitiesUpsertWithoutPokemon_abilitiesInput)
    upsert?: abilitiesUpsertWithoutPokemon_abilitiesInput;

    @Field(() => abilitiesWhereUniqueInput, {nullable:true})
    @Type(() => abilitiesWhereUniqueInput)
    connect?: abilitiesWhereUniqueInput;

    @Field(() => abilitiesUpdateWithoutPokemon_abilitiesInput, {nullable:true})
    @Type(() => abilitiesUpdateWithoutPokemon_abilitiesInput)
    update?: abilitiesUpdateWithoutPokemon_abilitiesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesCreateWithoutPokemon_abilitiesInput } from './abilities-create-without-pokemon-abilities.input';
import { Type } from 'class-transformer';
import { abilitiesCreateOrConnectWithoutPokemon_abilitiesInput } from './abilities-create-or-connect-without-pokemon-abilities.input';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';

@InputType()
export class abilitiesCreateNestedOneWithoutPokemon_abilitiesInput {

    @Field(() => abilitiesCreateWithoutPokemon_abilitiesInput, {nullable:true})
    @Type(() => abilitiesCreateWithoutPokemon_abilitiesInput)
    create?: abilitiesCreateWithoutPokemon_abilitiesInput;

    @Field(() => abilitiesCreateOrConnectWithoutPokemon_abilitiesInput, {nullable:true})
    @Type(() => abilitiesCreateOrConnectWithoutPokemon_abilitiesInput)
    connectOrCreate?: abilitiesCreateOrConnectWithoutPokemon_abilitiesInput;

    @Field(() => abilitiesWhereUniqueInput, {nullable:true})
    @Type(() => abilitiesWhereUniqueInput)
    connect?: abilitiesWhereUniqueInput;
}

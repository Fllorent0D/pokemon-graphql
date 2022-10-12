import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonCreateWithoutPokemon_formsInput } from './pokemon-create-without-pokemon-forms.input';
import { Type } from 'class-transformer';
import { pokemonCreateOrConnectWithoutPokemon_formsInput } from './pokemon-create-or-connect-without-pokemon-forms.input';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';

@InputType()
export class pokemonCreateNestedOneWithoutPokemon_formsInput {

    @Field(() => pokemonCreateWithoutPokemon_formsInput, {nullable:true})
    @Type(() => pokemonCreateWithoutPokemon_formsInput)
    create?: pokemonCreateWithoutPokemon_formsInput;

    @Field(() => pokemonCreateOrConnectWithoutPokemon_formsInput, {nullable:true})
    @Type(() => pokemonCreateOrConnectWithoutPokemon_formsInput)
    connectOrCreate?: pokemonCreateOrConnectWithoutPokemon_formsInput;

    @Field(() => pokemonWhereUniqueInput, {nullable:true})
    @Type(() => pokemonWhereUniqueInput)
    connect?: pokemonWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonCreateWithoutPokemon_formsInput } from './pokemon-create-without-pokemon-forms.input';
import { Type } from 'class-transformer';
import { pokemonCreateOrConnectWithoutPokemon_formsInput } from './pokemon-create-or-connect-without-pokemon-forms.input';
import { pokemonUpsertWithoutPokemon_formsInput } from './pokemon-upsert-without-pokemon-forms.input';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { pokemonUpdateWithoutPokemon_formsInput } from './pokemon-update-without-pokemon-forms.input';

@InputType()
export class pokemonUpdateOneRequiredWithoutPokemon_formsNestedInput {

    @Field(() => pokemonCreateWithoutPokemon_formsInput, {nullable:true})
    @Type(() => pokemonCreateWithoutPokemon_formsInput)
    create?: pokemonCreateWithoutPokemon_formsInput;

    @Field(() => pokemonCreateOrConnectWithoutPokemon_formsInput, {nullable:true})
    @Type(() => pokemonCreateOrConnectWithoutPokemon_formsInput)
    connectOrCreate?: pokemonCreateOrConnectWithoutPokemon_formsInput;

    @Field(() => pokemonUpsertWithoutPokemon_formsInput, {nullable:true})
    @Type(() => pokemonUpsertWithoutPokemon_formsInput)
    upsert?: pokemonUpsertWithoutPokemon_formsInput;

    @Field(() => pokemonWhereUniqueInput, {nullable:true})
    @Type(() => pokemonWhereUniqueInput)
    connect?: pokemonWhereUniqueInput;

    @Field(() => pokemonUpdateWithoutPokemon_formsInput, {nullable:true})
    @Type(() => pokemonUpdateWithoutPokemon_formsInput)
    update?: pokemonUpdateWithoutPokemon_formsInput;
}
